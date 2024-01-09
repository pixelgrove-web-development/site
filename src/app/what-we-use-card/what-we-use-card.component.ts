import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-what-we-use-card',
  template: `<div class="what-we-use-card">
    <fa-icon *ngIf="icon" [icon]="icon"></fa-icon>
    <div class="content">
      <h3 class="bold">{{ heading }}</h3>
      <button
        class="btn outline"
        routerLink="/samples"
        [queryParams]="{ filter: heading.toLocaleLowerCase() }"
      >
        View More
      </button>
    </div>
  </div>`,
  styleUrls: ['./what-we-use-card.component.scss'],
})
export class WhatWeUseCardComponent {
  @Input() icon: IconProp | null = null;
  @Input() heading = '';

  constructor(private router: Router) {}

  navigateToSamples() {
    this.router.navigate(['/samples'], {
      queryParams: { filter: this.heading.toLocaleLowerCase() },
    });
  }
}
