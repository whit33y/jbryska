import { Component, Input } from '@angular/core';
import { MailIconComponent } from '../icons/mail-icon';
import { GithubIconComponent } from '../icons/github-icon';
import { LinkedinIconComponent } from '../icons/linkedin-icon';

@Component({
  selector: 'app-contact-card',
  imports: [MailIconComponent, GithubIconComponent, LinkedinIconComponent],
  template: `
    <div class="channel">
      <div class="channel-icon">
        @if (type === 'Github') {
          <app-github-icon [size]="60" color="var(--color-text-primary)" />
        }
        @if (type === 'Linkedin') {
          <app-linkedin-icon [size]="60" color="var(--color-text-primary)" />
        }
        @if (type === 'Mail') {
          <app-mail-icon [size]="60" color="var(--color-text-primary)" />
        }
      </div>
      <p class="channel-name">{{ type }}</p>
      <p>{{ name }}</p>
      <a [href]="link" target="_blank" rel="noopener noreferrer">Przejdź do {{ type }}</a>
    </div>
  `,
  styleUrl: './contact-card.scss',
})
export class ContactCard {
  @Input() type = 'Github';
  @Input() name = 'Jakub Bryska';
  @Input() link = 'https://github.com/whit33y';
}
