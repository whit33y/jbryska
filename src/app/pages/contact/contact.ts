import { Component } from '@angular/core';
import { GithubIconComponent } from '../../components/elements/icons/github-icon';
import { LinkedinIconComponent } from '../../components/elements/icons/linkedin-icon';
import { MailIconComponent } from '../../components/elements/icons/mail-icon';

@Component({
  selector: 'app-contact',
  imports: [GithubIconComponent, LinkedinIconComponent, MailIconComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {}
