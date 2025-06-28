import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  imports: [NgOptimizedImage],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.css'
})
export class ContactCardComponent {
  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() contactAsset: string = '';
  @Input() href: string = '';
}
