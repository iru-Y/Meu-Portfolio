import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-best-services-card',
  imports: [NgOptimizedImage],
  templateUrl: './best-services-card.component.html',
  styleUrl: './best-services-card.component.css'
})
export class BestServicesCardComponent {
  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() aHref: string = '';
  @Input() widthCard: string = '';
  @Input() altText: string = '';
  @Input() imgPath: string = '';

}
