import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
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
}
