import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  constructor( private notesService: NotesService) { }

  ngOnInit(): void {
  }
  addNote() {
    const note = {
      title: (<HTMLInputElement>document.getElementById('titleInput')).value,
      date: (<HTMLInputElement>document.getElementById('date')).value,
      body: (<HTMLInputElement>document.getElementById('bodyInput')).value,
    };
    this.notesService.addNote(note).subscribe()
    this.ngOnInit()
  }
}
