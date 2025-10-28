import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  private meta = inject(Meta);
  private title = inject(Title);

  updateMeta(title?: string, description?: string) {
    if (title) {
      this.title.setTitle(title);
      this.meta.updateTag({
        property: 'og:title',
        content: title,
      });
    }
    if (description) {
      this.meta.updateTag({
        name: 'description',
        content: description,
      });
      this.meta.updateTag({
        property: 'og:description',
        content: description,
      });
    }
  }
}

export interface MetaTagConfig {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}
