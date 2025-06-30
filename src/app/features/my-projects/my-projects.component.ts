import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { LinkComponent } from '../../shared/components/link/link.component';
import { LiveDemoCardComponent } from './components/live-demo-card/live-demo-card.component';
import { TitleComponent } from '../../shared/components/title/title.component';

@Component({
  selector: 'app-my-projects',
  imports: [TitleComponent, LiveDemoCardComponent, LinkComponent, NgOptimizedImage],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.css'
})
export class MyProjectsComponent {

  cardsSection1 = [
  { width: '23vw', height: '30vh', img: 'https://placehold.co/200x200/EEE/31343C' },
  { width: '23vw', height: '30vh', img: 'https://placehold.co/200x200/EEE/31343C' },
  { width: '23vw', height: '30vh', img: 'https://placehold.co/200x200/EEE/31343C' }
];

cardsSection2 = [
  { width: '35vw', height: '40vh', img: 'https://placehold.co/200x200/EEE/31343C' },
  { width: '35vw', height: '40vh', img: 'https://placehold.co/200x200/EEE/31343C' }
];

}
