import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LinkedinIconComponent } from '../../elements/icons/linkedin-icon';
import { GithubIconComponent } from '../../elements/icons/github-icon';
import { TwitterIconComponent } from '../../elements/icons/twitter-icon';
import { MailIconComponent } from '../../elements/icons/mail-icon';

@Component({
  selector: 'app-footer',
  imports: [
    CommonModule,
    LinkedinIconComponent,
    GithubIconComponent,
    TwitterIconComponent,
    MailIconComponent,
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  transformStyle = 'scale(1) translate(0, 0)';

  onMouseMove(event: MouseEvent) {
    const footer = (event.currentTarget as HTMLElement).querySelector('.container') as HTMLElement;
    const rect = footer.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);

    this.transformStyle = `scale(1.05) translate(${x * 0.05}px, ${y * 0.05}px)`;
  }

  onMouseLeave() {
    this.transformStyle = 'scale(1) translate(0, 0)';
  }

  footerLinks = [
    {
      name: 'github',
      link: 'https://github.com/whit33y',
      ariaLabel: 'Profil Github',
    },
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/jakub-bryska',
      ariaLabel: 'Profil Linkedin',
    },
    {
      name: 'mail',
      link: 'mailto:jakubbryska2@gmail.com',
      ariaLabel: 'Profil mailowy',
    },
    {
      name: 'x',
      link: 'https://x.com/kubussbr',
      ariaLabel: 'Profil X (Twitter)',
    },
  ];
}
