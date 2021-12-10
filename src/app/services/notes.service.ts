import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Notes } from '../pages/notes';
@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private apiUrl = 'http://localhost:5000/notes';
  constructor(private http: HttpClient) {}
  getNote(): Observable<Notes[]> {
    return this.http.get<Notes[]>(this.apiUrl);
  }
}
