import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Tasks } from '../tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  Task: Tasks[] = []
  constructor(private tasksService: TasksService) {}
 getAll() {
     this.tasksService.getTask().subscribe((task) => {
       this.Task = task.tasks;
     });
  }
  ngOnInit(): void {
    this.getAll()
  }
  refresh() {
    this.getAll()
  }
}
