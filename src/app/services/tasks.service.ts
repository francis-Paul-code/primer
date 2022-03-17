import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tasks } from '../pages/tasks';
import { environment } from '../../environments/environment';

const options = {
  headers: new HttpHeaders({
    'Content-Type': 'Application/Json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) { }

  getTask(): Observable<any> {
    return this.http.get<any>(environment.apiURL+ '/tasks');
  }

  updateTask(task:Tasks, id:string): Observable<any> {
    return this.http.patch<any>(
      environment.apiURL + '/tasks' + '/' + id,
      task,
      options
    );
  }
  deleteTask(id: string): Observable<any> {
    return this.http.delete<any>(environment.apiURL + '/tasks' + '/' + id);
  }
  addTask(item:any):Observable<any> {
    return this.http.post<any>(environment.apiURL + '/tasks', item, options);
  }
}
