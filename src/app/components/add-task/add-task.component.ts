import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Tasks } from '../../pages/tasks';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  title!: string;
  note!:string
  date!:string
  priority = "none"
  constructor( private taskService: TasksService) { }
  ngOnInit(): void {
  }
  addTask() {
    const task:any = {
      title: (<HTMLInputElement>document.getElementById('titleInput')).value,
      date: (<HTMLInputElement>document.getElementById('date')).value,
      body: (<HTMLInputElement>document.getElementById('bodyInput')).value,
      priority:this.priority,
    };

    this.taskService.addTask(task).subscribe()

    this.title = '';
    this.note = '';
    this.date = '';
    this.priority = 'none';
  }
}
