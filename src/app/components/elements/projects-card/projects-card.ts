import { Component, Input } from '@angular/core';
import { Project } from '../../../services/project.interface';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-projects-card',
  imports: [NgOptimizedImage],
  templateUrl: './projects-card.html',
  styleUrl: './projects-card.scss',
})
export class ProjectsCard {
  @Input() project: Project | undefined;
  @Input() index = 0;
}
