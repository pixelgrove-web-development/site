import { Component } from '@angular/core';
import {
  faAngular,
  faBootstrap,
  faCss3,
  faHtml5,
  faReact,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  template: ` <div class="content-grid hero-section">
      <div class="img"></div>
      <div class="heading heading-text">
        <span>
          <h1>Pixelgrove</h1>
          <h1 class="thin">Web Development</h1>
          <h3>Crafting Pixel-Perfect Frontend Solutions.</h3>
        </span>
        <button class="btn outline">Explore Our Portfolio</button>
      </div>
    </div>
    <div class="what-we-use">
      <h2>WHAT WE USE</h2>
      <div class="cards">
        <app-what-we-use-card heading="HTML" [icon]="faHtml5" />
        <app-what-we-use-card heading="CSS" [icon]="faCss" />
        <app-what-we-use-card heading="REACT" [icon]="faReact" />
        <app-what-we-use-card heading="ANGULAR" [icon]="faAngular" />
        <app-what-we-use-card heading="BOOTSTRAP" [icon]="faBootstrap" />
        <div class="show-more" routerLink="samples"><h3>SEE MORE</h3></div>
      </div>
    </div>
    <div class="what-we-do content-grid">
      <div class="what-we-do-content">
        <h2>WHAT WE DO</h2>
        <p>
          At PixelGrove Web Development, we specialize in crafting exceptional
          frontend solutions tailored to elevate your online presence. Our
          expertise lies in implementing innovative web solutions, ensuring each
          project reflects precision and responsiveness while engaging your
          audience effectively.
        </p>
        <button class="btn light" routerLink="services">Learn More</button>
      </div>
      <div class="what-we-do-img"></div>
    </div>`,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  faHtml5 = faHtml5;
  faReact = faReact;
  faAngular = faAngular;
  faBootstrap = faBootstrap;
  faCss = faCss3;
}
