import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <app-nav-bar />
    <router-outlet></router-outlet>
    <app-footer />`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pixelgrove';
}
