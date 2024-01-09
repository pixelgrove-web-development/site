import { Component } from '@angular/core';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  template: `<nav class="navbar">
      <img class="brand" src="assets/logo.svg" />
      <ul class="nav-links">
        <li class="nav-link" routerLink="home">Home</li>
        <li class="nav-link" routerLink="samples">Work Samples</li>
        <li class="nav-link" routerLink="services">Services</li>
      </ul>
      <button class="btn solid" routerLink="contact-us">Contact Us</button>
    </nav>
    <nav class="navbar-mobile">
      <img class="brand" src="assets/logo.svg" />
      <fa-icon
        class="menu-toggle"
        [icon]="faBars"
        (click)="showMobileMenu = true"
      ></fa-icon>
      <div class="mobile-menu" *ngIf="showMobileMenu">
        <div class="close-bar">
          <fa-icon [icon]="faClose" (click)="showMobileMenu = false"></fa-icon>
        </div>
        <ul class="nav-links">
          <li
            class="nav-link"
            routerLink="home"
            (click)="showMobileMenu = false"
          >
            Home
          </li>
          <li
            class="nav-link"
            routerLink="samples"
            (click)="showMobileMenu = false"
          >
            Work Samples
          </li>
          <li
            class="nav-link"
            routerLink="services"
            (click)="showMobileMenu = false"
          >
            Services
          </li>
        </ul>
        <button class="btn solid" routerLink="contact-us">Contact Us</button>
      </div>
    </nav>`,
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  faBars = faBars;
  faClose = faClose;

  showMobileMenu = false;
}
