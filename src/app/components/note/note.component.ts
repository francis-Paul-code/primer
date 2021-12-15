import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Notes } from 'src/app/pages/notes';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent implements OnInit {
  @Input() title!: string;
  @Input() body!: string;
  @Input() date!: string;
  @Input() subTitle!: string;
  @Input() id!: string;
  
  viewWidth: any;
  mobile: boolean = false;
  desktop: boolean = false;
  tablet: boolean = false;
  constructor() {}
  ngOnInit(): void {
    this.viewWidth = window.innerWidth;
    if (this.viewWidth <= 450) {
      this.mobile = true;
      this.desktop = false;
      this.tablet = false;
    }
    if (this.viewWidth >= 891) {
      this.desktop = true;
      this.mobile = false;
      this.tablet = false;
    }
    if (this.viewWidth > 451 && this.viewWidth <= 890) {
      this.tablet = true;
      this.mobile = false;
      this.desktop = false;
    }
  }
}
