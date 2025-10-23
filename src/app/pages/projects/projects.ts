import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Project } from '../../services/project.interface';

@Component({
  selector: 'app-projects',
  imports: [NgOptimizedImage],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projectArray: Project[] = [
    {
      name: 'Maintenance',
      description:
        'Moja pierwsza pełnoprawna aplikacja webowa typu full-stack do zarządzania i śledzenia zadań serwisowych — od wymiany oleju w samochodzie po regularne prace domowe.',
      link: 'https://github.com/whit33y/maintenance-frontend',
      technologies: ['Angular', 'Typescript', 'Node.js', 'Express', 'Tailwind', 'MySQL'],
      screenshots: ['ss/maintenance2.webp', 'ss/maintenance1.webp'],
      livePreview: 'https://maintenance-frontend-black.vercel.app/',
      githubLink: 'https://github.com/whit33y/maintenance-frontend',
      status: 'W toku',
    },
    {
      name: 'AngularEcom',
      description:
        'AngularEcom to prosta i responsywna aplikacja e-commerce stworzona w Angularze. Użytkownik może przeglądać produkty z widokami szczegółowymi, dodawać je do koszyka i bezpiecznie finalizować zamówienia przez Stripe. Administrator ma możliwość zarządzania użytkownikami, produktami i kategoriami poprzez panel administracyjny.',
      link: 'https://github.com/whit33y/AngularEcom',
      technologies: ['Angular', 'Typescript', 'Tailwind', 'Supabase'],
      screenshots: ['ss/angularecom1.webp', 'ss/angularecom2.webp'],
      livePreview: '',
      githubLink: 'https://github.com/whit33y/AngularEcom',
      status: 'Gotowy',
    },
    {
      name: 'ITHelper',
      description:
        'ITHelper to responsywna aplikacja webowa stworzona w celu uproszczenia zarządzania zgłoszeniami pomiędzy użytkownikami a administratorami.',
      link: 'https://github.com/whit33y/ITHelper',
      technologies: ['Angular', 'Typescript', 'Tailwind', 'Appwrite'],
      screenshots: ['ss/ithelper1.webp', 'ss/ithelper2.webp'],
      livePreview: 'https://it-helper-hkiw.vercel.app/login',
      githubLink: 'https://github.com/whit33y/ITHelper',
      status: 'Gotowy',
    },
    {
      name: 'PRBook',
      description:
        'PRBook to aplikacja webowa służąca do śledzenia wyników i rekordów w sportach wytrzymałościowych oraz na siłowni.',
      link: 'https://github.com/whit33y/PRBook',
      technologies: ['Angular', 'Typescript', 'Storybook', 'Appwrite'],
      screenshots: ['ss/prbook1.webp', 'ss/prbook2.webp'],
      livePreview: '',
      githubLink: 'https://github.com/whit33y/PRBook',
      status: 'Gotowy',
    },
    {
      name: 'Angular-weatherapp',
      description:
        'AngularWeatherApp to prosta aplikacja pogodowa, w której można sprawdzić prognozę na 3, 7 lub 10 dni dla wybranego miasta.',
      link: 'https://github.com/whit33y/angular-weatherapp',
      technologies: ['Angular', 'Typescript', 'Tailwind'],
      screenshots: ['ss/angular-weather1.webp', 'ss/angular-weather2.webp'],
      livePreview: '',
      githubLink: 'https://github.com/whit33y/angular-weatherapp',
      status: 'Gotowy',
    },
  ];
}
