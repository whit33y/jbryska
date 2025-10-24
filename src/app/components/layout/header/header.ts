import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../../services/theme-service';
import { SunIconComponent } from '../../elements/icons/sun-icon';
import { MoonIconComponent } from '../../elements/icons/moon-icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, MoonIconComponent, SunIconComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private elementRef = inject(ElementRef);
  private themeService = inject(ThemeService);
  menuOpen = false;
  theme = this.themeService.theme;

  changeTheme() {
    this.themeService.toggleTheme();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside && this.menuOpen) {
      this.closeMenu();
    }
  }
}
