import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service'
import {Notes} from '../notes'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  notes: Notes[] = [];
  constructor(private notesService: NotesService) { }
  ngOnInit(): void {
    this.notesService.getNote().subscribe((note) => { this.notes = note})
  }

}
