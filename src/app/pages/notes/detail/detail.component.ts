import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterEvent,
  RouterLink,
} from '@angular/router';
import { Notes } from '../../notes';
import { NotesService } from '../../../services/notes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class NoteDetailComponent implements OnInit {
  note: Notes = {
    id: '',
    title: '',
    body: '',
    date: '',
  };
  status: boolean = false;
  proceed!: boolean;
  editStatus: boolean = false;
  button = 'Update';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private notesService: NotesService
  ) { }

  getNote() {
    this.activatedRoute.paramMap.subscribe((params: any) => {
      if (!params.has('id')) {
        return;
      }
      const id = params.get('id');
      this.notesService.getSingle(id).subscribe((note) => {
        this.note = note.note;
      });
    });
  }
  ngOnInit(): void {
    this.getNote();
  }

  Update() {
    this.editStatus = !this.editStatus;
    if (this.editStatus === true) {
      this.button = 'Cancel';
    } else {
      this.button = 'Update';
    }
  }
  async NewData() {
    try {
      this.activatedRoute.paramMap.subscribe((params: any) => {
      if (!params.has('id')) {
        return;
      }
      const id = params.get('id');
      const Note: Notes = {
        id: id,
        body: (<HTMLInputElement>document.getElementById('bodyInput')).value,
        title: (<HTMLInputElement>document.getElementById('titleInput')).value,
        date: (<HTMLInputElement>document.getElementById('dateInput')).value,
      };
      this.notesService.updateNote(id, Note).subscribe();
    });
    }
    finally {
       this.Update();
    this.getNote();
    }

  }



  // deleting a Note
  async proc() {
    this.proceed = true;
    this.handleDelete()
  }
  canc() {
    this.proceed = false;
    this.status = !this.status;
  }
  async auth() {
    this.status = true;
  }

  handleDelete(){

   try {
       this.activatedRoute.paramMap.subscribe((params: any) => {
      if (!params.has('id')) {
        return;
      }
      const id = params.get('id');
      this.notesService.deletenote(id).subscribe();
    })
    } finally {
      this.router.navigate(['/notes']);
    };
  }
}
