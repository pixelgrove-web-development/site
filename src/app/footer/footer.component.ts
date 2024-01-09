import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<div class="footer">
    <img class="logo" src="../assets/logo.svg" />
    <div class="links">
      <ul>
        <li class="nav-link" routerLink="home">Home</li>
        <li class="nav-link" routerLink="samples">Work Samples</li>
        <li class="nav-link" routerLink="services">Services</li>
      </ul>
      <button class="btn solid" routerLink="contact-us">Contact Us</button>
    </div>
  </div>`,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {}
