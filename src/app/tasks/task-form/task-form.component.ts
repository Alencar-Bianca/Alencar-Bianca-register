import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task';
import { TaskService } from '../shared/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task: Task = new Task();
  title: string = ' ';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private taskService: TaskService

  ) { }

  ngOnInit(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id){
      this.taskService.getById(id).subscribe(task =>{
        this.task = task;
        this.title = 'Alterar Informações';
      })!;

    }
  }
  onSubmit(){
    this.taskService.save(this.task).subscribe(task =>{
      this.router.navigate(['']);
    });

  }

}
