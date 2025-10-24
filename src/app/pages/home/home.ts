import { NgOptimizedImage } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private meta = inject(Meta);
  private title = inject(Title);

  ngOnInit() {
    this.title.setTitle('Portfolio - Jakub Bryska');
    this.meta.updateTag({
      name: 'description',
      content: 'Front-end developer z pasją do Angulara i nowoczesnych technologii.',
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Portfolio - Jakub Bryska',
    });
    this.meta.updateTag({
      property: 'og:description',
      content: 'Zobacz moje projekty, doświadczenie i skontaktuj się ze mną.',
    });
  }

  experienceList = [
    {
      name: 'Daw-Systems',
      position: 'Angular Developer',
      date: '05.2024-Obecnie',
    },
    {
      name: 'Altom',
      position: 'Młodszy spec. ds. IT',
      date: '06.2021-05.2024',
    },
  ];

  description =
    'Pracuje jako Angular Developer od ponad 1.5roku. W tym czasie napisałem wiele aplikacji komercyjnych dla sektora FMCG (B2B,dystrybucja spożywcza). Aplikacje były ściśle związane z zarządzaniem treściami marketingowymi, usprawnianiem pracy PH oraz sprzedażą B2B. Czerpię ogromną satysfakcję z programowania i ciągle doskonale swoje umiejętności, śledzę nowości oraz poszerzam swoje horyzonty. Mam również 3 letnie doświadczenie jako technik/młodszy specjalista ds. IT. Z ciekawością szukam nowych możliwości do rozwoju i zdobycia doświadczenia. Poza życiem zawodowym jestem zakochany w sporcie wydolnościowym a w szczególności triathlonie.';

  icons = ['HTML', 'CSS', 'JS', 'ANGULAR', 'TYPESCRIPT', 'TAILWIND', 'GIT'];
}
