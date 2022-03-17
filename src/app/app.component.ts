import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'primer';
  navState = true;
  viewWidth: any;
  mobile: boolean = false;
  desktop: boolean = false;
  tablet: boolean = false;
  routes = true;

  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url === '/register') {
          this.routes = false
        }
      }
    });
    this.handler();
  }
  handler() {
    this.viewWidth = window.innerWidth;
    if (this.viewWidth <= 420) {
      this.navState = false;
      this.mobile = true;
      this.desktop = false;
      this.tablet = false;
    }
    if (this.viewWidth >= 891) {
      this.navState = true;
      this.desktop = true;
      this.mobile = false;
      this.tablet = false;
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
