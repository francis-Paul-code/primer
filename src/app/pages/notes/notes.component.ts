import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { Notes } from '../notes';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  notes: Notes[] = [];
  constructor(private notesService: NotesService) {}
  ngOnInit(): void {
    this.notesService.getNote().subscribe((note) => {
      this.notes = note.notes;
    });
  }

}
