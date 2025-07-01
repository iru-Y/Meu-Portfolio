import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { LinkComponent } from '../../shared/components/link/link.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [LinkComponent, NgOptimizedImage, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
