import { Component, Input } from '@angular/core';
import { Project } from '../../../services/project.interface';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-projects-card',
  imports: [NgOptimizedImage],
  template: ` @if (project) {
    <div class="project-element">
      <div class="project-element-description">
        <div class="project-element-header-links">
          <h3>
            {{
              project.status === 'Gotowy' ? project.name + ' ' + '🏁' : project.name + ' ' + '👨‍💻'
            }}
          </h3>
          <a [href]="project.githubLink" target="_blank">Github</a>
          @if (project.livePreview) {
            <a [href]="project.livePreview" target="_blank">Live</a>
          }
        </div>
        <p>{{ project.description }}</p>
      </div>
      <div class="project-element-images">
        <img
          [ngSrc]="project.screenshots[0]"
          [alt]="'Pierwszy zrzut ekranu projektu ' + project.name"
          class="screenshot"
          width="416"
          height="260"
          sizes="(max-width: 768px) 100vw, 33vw"
          [priority]="index === 0 ? true : false"
        />
        <img
          [ngSrc]="project.screenshots[1]"
          [alt]="'Drugi zrzut ekranu projektu' + project.name"
          class="screenshot"
          width="416"
          height="260"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div class="project-technology">
        @for (technology of project.technologies; track $index) {
          <div class="technology">{{ technology }}</div>
        }
      </div>
    </div>
  }`,
  styleUrl: './projects-card.scss',
})
export class ProjectsCard {
  @Input() project: Project | undefined;
  @Input() index = 0;
}
