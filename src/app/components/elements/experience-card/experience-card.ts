import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  imports: [],
  template: ` <div class="experience">
    <div class="experience-left">
      <div class="circle">
        <div class="square"></div>
      </div>
      <div>
        <p class="exp-name">{{ companyName }}</p>
        <p>{{ position }}</p>
      </div>
    </div>
    <div class="experience-right">
      <p>{{ date }}</p>
    </div>
  </div>`,
  styleUrl: './experience-card.scss',
})
export class ExperienceCard {
  @Input() companyName = 'Daw';
  @Input() position = 'Angular Developer';
  @Input() date = 'Obecnie-01.09.19';
}
