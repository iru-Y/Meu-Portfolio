import { NgClass, NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LinkBtnComponent } from "../../../footer/components/link-btn/link-btn.component";
import { LinkComponent } from "../../../../shared/components/link/link.component";

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
  isHovered = false;
 @Output() onClick = new EventEmitter<void>;


  onHover(hovered: boolean) {
    this.isHovered = hovered;
  }
}
