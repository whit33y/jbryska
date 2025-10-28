import { Component, inject, OnInit } from '@angular/core';
import { ContactCard } from '../../components/elements/contact-card/contact-card';
import { MetaService } from '../../services/meta-service';

@Component({
  selector: 'app-contact',
  imports: [ContactCard],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit {
  private metaService = inject(MetaService);

  ngOnInit() {
    this.metaService.updateMeta(
      'Kontakt - Jakub Bryska',
      'Skontaktuj się ze mną przez jeden z wybranych przez Ciebie kanałów: Email, Linkedin, Github.'
    );
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
