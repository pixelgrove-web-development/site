import { Component } from '@angular/core';

@Component({
  selector: 'app-samples',
  template: `<div class="samples-container">
    <div class="content-grid">
      <div class="samples-img"></div>
      <div class="text heading-text">
        <h1>Work</h1>
        <h1 class="thin">Samples</h1>
      </div>
    </div>
    <div class="view-work">
      <h2>VIEW SOME OF OUR WORK</h2>
      <!-- <h3>Looking for a particular technology?</h3>

      <app-filter-btn text="Angular" />
      <app-filter-btn text="React" />
      <app-filter-btn text="Vue" />
      <app-filter-btn text="Bootstrap" />
      <app-filter-btn text="Tailwind" /> -->

      <div class="cards-container">
        <app-work-card
          *ngFor="let site of sampleSites"
          [url]="site.url"
          [name]="site.name"
          [imagePath]="site.imagePath"
        />
      </div>
    </div>
  </div>`,
  styleUrls: ['./samples.component.scss'],
})
export class SamplesComponent {
  sampleSites = [
    {
      url: 'www.pixelgrove-web-development.com/',
      name: 'Comment section demo',
      imagePath: 'assets/comment-sections-preview.jpg',
    },
    {
      url: 'www.pixelgrove-web-development.com/',
      name: 'Skilled e-learning site demo',
      imagePath: 'assets/elearning-preview.jpg',
    },
    {
      url: 'www.pixelgrove-web-development.com/',
      name: 'E-commerce product demo',
      imagePath: 'assets/esneaker-preview.jpg',
    },
    {
      url: 'www.pixelgrove-web-development.com/',
      name: 'Four card feature demo',
      imagePath: 'assets/four-card-preview.jpg',
    },
    {
      url: 'www.pixelgrove-web-development.com/',
      name: 'Github user search demo',
      imagePath: 'assets/github-user-search-preview.jpg',
    },
    {
      url: 'www.pixelgrove-web-development.com/',
      name: 'Loopstudios demo',
      imagePath: 'assets/loopstudios-preview.jpg',
    },
    {
      url: 'www.pixelgrove-web-development.com/',
      name: 'URL shortener demo',
      imagePath: 'assets/url-shortener-preview.jpg',
    },
    {
      url: 'www.pixelgrove-web-development.com/audiophile',
      name: 'Audiophile demo',
      imagePath: 'assets/audiophile-preview.jpg',
    },
  ];
}
