import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { NotesService } from '../../services/notes.service'
import {Notes} from '../notes'
import { Tasks } from '../tasks';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  notes: Notes[] = [];
  tasks: Tasks[] = [];
  urgent: Tasks[] = [];
  constructor(private notesService: NotesService, private tasksService: TasksService) { }
  getData() {
     this.notesService.getNote().subscribe((note) => { this.notes = note.notes })
    this.tasksService.getTask().subscribe((tasks) => {
      this.tasks = tasks.tasks;
      tasks.tasks.map((item: any) => {
        if (item.priority === 'urgent') {
          this.urgent.push(item);
        }
      })
    })
  }
  ngOnInit(): void {
  this.getData()
}

}
