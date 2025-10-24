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
}
