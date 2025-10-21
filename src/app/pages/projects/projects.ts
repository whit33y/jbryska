import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projectArray = [
    {
      name: 'Maintenance',
      description:
        'Moja pierwsza pełnoprawna aplikacja webowa typu full-stack do zarządzania i śledzenia zadań serwisowych — od wymiany oleju w samochodzie po regularne prace domowe.',
      link: 'https://github.com/whit33y/maintenance-frontend',
      technologies: ['Angular', 'Typescript', 'Node.js', 'Express', 'Tailwind', 'MySQL'],
      screenshots: ['ss/maintenance2.png', 'ss/maintenance1.png'],
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
      screenshots: ['ss/angularecom1.png', 'ss/angularecom2.png'],
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
      screenshots: ['ss/ithelper1.png', 'ss/ithelper2.png'],
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
      screenshots: ['ss/prbook1.png', 'ss/prbook2.png'],
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
      screenshots: ['ss/angular-weather1.png', 'ss/angular-weather2.png'],
      livePreview: '',
      githubLink: 'https://github.com/whit33y/angular-weatherapp',
      status: 'Gotowy',
    },
  ];
}
