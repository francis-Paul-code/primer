import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Notes } from '../pages/notes';
import { environment } from '../../environments/environment';

const options = {
  headers: new HttpHeaders({
    'Content-Type': 'Application/Json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor(private http: HttpClient) {}
  getNote(): Observable<any> {
    return this.http.get(environment.apiURL + "/notes/");
  }

  getSingle(id: string): Observable<any> {
    return this.http.get(environment.apiURL + '/notes/' + '/' + id);
  }

  updateNote(id: string, note: Notes): Observable<Notes> {
    return this.http.patch<Notes>(
      environment.apiURL + '/notes/' + '/' + id,
      note,
      options
    );

  }
  deletenote(id: string): Observable<Notes>{
    return this.http.delete<Notes>(environment.apiURL + '/notes/' + '/' + id);
  }
  addNote(item:any): Observable<any> {
    return this.http.post<any>(environment.apiURL + '/notes/', item, options);
  }
}
