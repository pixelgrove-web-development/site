import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-btn',
  template: `<button
    class="filter-btn"
    [routerLink]="['', 'samples']"
    [queryParams]="{ filter: text.toLocaleLowerCase() }"
  >
    {{ text }}
  </button>`,
  styleUrls: ['./filter-btn.component.scss'],
})
export class FilterBtnComponent {
  @Input() text = '';
}
