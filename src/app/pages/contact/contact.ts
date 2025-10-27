import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ContactCard } from '../../components/elements/contact-card/contact-card';

@Component({
  selector: 'app-contact',
  imports: [ContactCard],
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

  contactChannels = [
    {
      type: 'Github',
      name: 'whit33y',
      link: 'https://github.com/whit33y',
    },
    {
      type: 'Linkedin',
      name: 'Jakub Bryska',
      link: 'https://www.linkedin.com/in/jakub-bryska-b905b0279',
    },
    {
      type: 'Mail',
      name: 'jakubbryska2@gmail.com',
      link: 'mailto:jakubbryska2@gmail.com',
    },
  ];
}
