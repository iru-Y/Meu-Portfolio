import { NgClass, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [NgOptimizedImage, NgClass],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css',
})
export class TitleComponent {
  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() detach: string = '';
  @Input() description: string = '';
  @Input() widthDescription: string = '';
  @Input() widthTitle: string = '';
  @Input() alignCenter: boolean = false;
}
