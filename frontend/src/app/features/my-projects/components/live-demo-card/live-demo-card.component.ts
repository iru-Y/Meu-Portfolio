import { NgClass, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-live-demo-card',
  imports: [NgOptimizedImage, NgOptimizedImage, NgClass],
  templateUrl: './live-demo-card.component.html',
  styleUrl: './live-demo-card.component.css',
})
export class LiveDemoCardComponent {
  @Input() isFirstCard = true;
  @Input() cardWidth: string = '';
  @Input() cardHeight: string = '';
  @Input() imgPath: string = '';
}
