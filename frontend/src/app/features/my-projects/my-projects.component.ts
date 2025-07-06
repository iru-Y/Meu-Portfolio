import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { LinkComponent } from '../../shared/components/link/link.component';
import { LiveDemoCardComponent } from './components/live-demo-card/live-demo-card.component';
import { TitleComponent } from '../../shared/components/title/title.component';

@Component({
  selector: 'app-my-projects',
  imports: [
    TitleComponent,
    LiveDemoCardComponent,
    LinkComponent,
    NgOptimizedImage,
  ],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.css',
})
export class MyProjectsComponent {
  screenWidth = window.innerWidth;

  ngOnInit() {
    window.addEventListener('resize', () => {
      this.screenWidth = window.innerWidth;
    });
  }

  get isMobile(): boolean {
    return this.screenWidth <= 1080;
  }

  cardsSection = [
    { img: 'https://placehold.co/100x200/EEE/31343C' },
    { img: 'https://placehold.co/200x200/EEE/31343C' },
    { img: 'https://placehold.co/300x200/EEE/31343C' },
    { img: 'https://placehold.co/400x200/EEE/31343C' },
    { img: 'https://placehold.co/500x200/EEE/31343C' },
  ];
}
