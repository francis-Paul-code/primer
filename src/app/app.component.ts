import { Component, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'primer';
  navState = true;
  viewWidth: any;
  mobile: boolean = false;
  desktop: boolean = false;
  tablet: boolean = false;

  ngOnInit(event: any): void {
    this.viewWidth = window.innerWidth;
    if (this.viewWidth <= 420) {
      this.navState = false;
      this.mobile = true;
      this.desktop= false;
      this.tablet= false;
    }
    if (this.viewWidth >= 891) {
      this.navState = true;
      this.desktop = true;
      this.mobile = false;
      this.tablet= false;
    }
    if (this.viewWidth > 421 && this.viewWidth <= 890) {
      this.navState = false;
      this.tablet = true;
      this.mobile = false;
      this.desktop = false;
    }

  }
  toggleNav() {
    this.navState = !this.navState;
  }
}
