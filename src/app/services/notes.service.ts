import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Notes } from '../pages/notes';

const options = {
  headers: new HttpHeaders({
    'Content-Type': 'Application/Json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private apiUrl = 'http://localhost:8080/primer/notes/';

  constructor(private http: HttpClient) {}
  getNote(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getSingle(id: string): Observable<any> {
    return this.http.get(this.apiUrl+"/"+id)
  }

  updateNote(id: string, note: Notes): Observable<Notes> {
    return this.http.patch<Notes>(this.apiUrl + "/" + id, note, options)

  }
  deletenote(id: string): Observable<Notes>{
    return this.http.delete<Notes>(this.apiUrl + "/" + id)
  }
}
