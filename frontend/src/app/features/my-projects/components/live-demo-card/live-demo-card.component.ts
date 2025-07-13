import { NgClass, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LinkBtnComponent } from "../../../footer/components/link-btn/link-btn.component";
import { LinkComponent } from "../../../../shared/components/link/link.component";

@Component({
  selector: 'app-live-demo-card',
  imports: [NgOptimizedImage, NgOptimizedImage, NgClass, LinkComponent],
  templateUrl: './live-demo-card.component.html',
  styleUrl: './live-demo-card.component.css',
})
export class LiveDemoCardComponent {
  @Input() isFirstCard = true;
  @Input() cardWidth: string = '';
  @Input() cardHeight: string = '';
  @Input() imgPath: string = '';
  isHovered = false;

  onHover(hovered: boolean) {
    this.isHovered = hovered;
  }
}
