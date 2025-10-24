import { Component, Input } from '@angular/core';
import { MailIconComponent } from '../icons/mail-icon';
import { GithubIconComponent } from '../icons/github-icon';
import { LinkedinIconComponent } from '../icons/linkedin-icon';

@Component({
  selector: 'app-contact-card',
  imports: [MailIconComponent, GithubIconComponent, LinkedinIconComponent],
  templateUrl: './contact-card.html',
  styleUrl: './contact-card.scss',
})
export class ContactCard {
  @Input() type = 'Github';
  @Input() name = 'Jakub Bryska';
  @Input() link = 'https://github.com/whit33y';
}
