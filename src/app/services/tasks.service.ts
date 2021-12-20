import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tasks } from '../pages/tasks';

const options = {
  headers: new HttpHeaders({
    'Content-Type': 'Application/Json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private apiUrl = 'http://localhost:8080/primer/tasks/';
  constructor(private http: HttpClient) {}
  getTask(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  updateTask(task:Tasks, id:string): Observable<any> {
    return this.http.patch<any>(this.apiUrl+"/"+id,task, options )
  }
  deleteTask(id: string): Observable<any> {
    return this.http.delete<any>(this.apiUrl+"/"+id)
  }
  addTask(item:any):Observable<any> {
    return this.http.post<any>(this.apiUrl,item,options)
  }
}
