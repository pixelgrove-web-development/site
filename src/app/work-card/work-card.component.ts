import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work-card',
  template: `<div class="work-card">
    <img [src]="imagePath" />
    <div class="text-content">
      <span class="heading">{{ name }}</span>
      <button class="btn light"><a [href]="url">View Live Demo</a></button>
    </div>
  </div>`,
  styleUrls: ['./work-card.component.scss'],
})
export class WorkCardComponent {
  @Input() url = '';
  @Input() imagePath = '';
  @Input() name = '';
}
