import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { LinkComponent } from '../../shared/components/link/link.component';
import { TitleComponent } from '../../shared/components/title/title.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';


@Component({
  selector: 'app-skills',
  imports: [NgOptimizedImage, SkillCardComponent, TitleComponent, LinkComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

}
