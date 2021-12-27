import { HttpClient } from '@angular/common/http';
import {Task} from './task';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [];

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Task[]>(`${environment.api}/tasks`)
  }

  getById(id: string){
    return this.http.get<Task>(`${environment.api}/tasks/${id}`)
  }

  save(task: Task){
    const taskBody = {
      nome: task.nome,
      email: task.email,
      dataNasc: task.dataNasc,
      tel: task.tel,
      endereco: task.endereco,
    }
   if(task._id){
      return this.http.put<Task>(`${environment.api}/tasks/${task._id}`,taskBody)
   }else{
    return this.http.post<Task>(`${environment.api}/tasks`,taskBody)

   }
  }
}
