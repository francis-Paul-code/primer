import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tasks } from '../../pages/tasks';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() title!: string;
  @Input() body!: string;
  @Input() date!: string;
  @Input() id!: string;
  @Input() priority!: string;
  @Output() updated = new EventEmitter();
  editStatus = false;
  color!: string;
  selected!: string;

  colorBadge() {
    if (this.priority === 'none') {
      this.color = '#6C757D';
    }
    if (this.priority === 'urgent') {
      this.color = '#DD4145';
    }
    if (this.priority === 'high') {
      this.color = '#563D7C';
    }
    if (this.priority === 'medium') {
      this.color = '#027AFB';
    }
    if (this.priority === 'low') {
      this.color = '#51A846';
    }
  }
  checked(event: any) {
    console.log(event.checked);
  }

  onToggle() {
    this.editStatus = !this.editStatus;
  }

  constructor(private tasksService: TasksService) {}
  ngOnInit(): void {
    this.selected = this.priority;
    this.colorBadge();
  }

  async GetValues() {
    try {
      const id = this.id;
      const task: Tasks = {
        id: this.id,
        title: (<HTMLInputElement>document.getElementById('title')).value,
        date: (<HTMLInputElement>document.getElementById('date')).value,
        body: (<HTMLInputElement>document.getElementById('body')).value,
        priority: this.selected,
      };

      this.tasksService.updateTask(task, id).subscribe()
    } finally {
      this.editStatus = !this.editStatus;
      this.updated.emit()
    }
  }
}
