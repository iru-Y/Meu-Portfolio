import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  imports: [NgOptimizedImage],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.css'
})
export class SkillCardComponent {
  @Input() cardWidth: string = '';
  @Input() title: string = '';
  @Input() projects: string = '';
  @Input() topIconPath: string = '';
  @Input() left: string = '';
}
