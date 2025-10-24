import { Component, inject, OnInit } from '@angular/core';
import { GithubIconComponent } from '../../components/elements/icons/github-icon';
import { LinkedinIconComponent } from '../../components/elements/icons/linkedin-icon';
import { MailIconComponent } from '../../components/elements/icons/mail-icon';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  imports: [GithubIconComponent, LinkedinIconComponent, MailIconComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit {
  private meta = inject(Meta);
  private title = inject(Title);

  ngOnInit() {
    this.title.setTitle('Kontakt - Jakub Bryska');
    this.meta.updateTag({
      name: 'description',
      content: 'Skontaktuj się ze mną przez jeden z wybranych przez Ciebie kanałów.',
    });
  }
}
