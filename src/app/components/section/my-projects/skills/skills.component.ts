import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '../../../title/title.component';
import { LinkComponent } from '../../../link/link.component';
import { SkillCardComponent } from '../../../skill-card/skill-card.component';

@Component({
  selector: 'app-skills',
  imports: [NgOptimizedImage, SkillCardComponent, TitleComponent, LinkComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

}
