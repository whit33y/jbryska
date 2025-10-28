import { NgOptimizedImage } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ExperienceCard } from '../../components/elements/experience-card/experience-card';
import { MetaService } from '../../services/meta-service';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage, ExperienceCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private metaService = inject(MetaService);

  ngOnInit() {
    this.metaService.updateMeta(
      'Portfolio - Jakub Bryska',
      'Front-end developer z pasją do Angulara i nowoczesnych technologii. Zobacz moje projekty i doświadczenie.'
    );
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
    'Pracuję jako Angular Developer od ponad półtora roku. W tym czasie tworzyłem liczne aplikacje komercyjne dla sektora FMCG (B2B, dystrybucja spożywcza) oraz branży fryzjerskiej. Projekty te były ściśle związane z zarządzaniem treściami marketingowymi, usprawnianiem pracy przedstawicieli handlowych oraz sprzedażą B2B. Czerpię ogromną satysfakcję z programowania – stale doskonalę swoje umiejętności, śledzę nowości technologiczne i poszerzam horyzonty. Posiadam również trzyletnie doświadczenie jako technik i młodszy specjalista ds. IT. Z ciekawością poszukuję nowych możliwości rozwoju i zdobywania doświadczenia. Poza życiem zawodowym jestem pasjonatem sportów wytrzymałościowych, w szczególności triathlonu.';

  icons = ['HTML', 'CSS', 'JS', 'ANGULAR', 'TYPESCRIPT', 'TAILWIND', 'GIT'];
}
