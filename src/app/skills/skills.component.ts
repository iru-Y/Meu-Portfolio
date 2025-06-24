import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { SkillCardComponent } from "../components/skill-card/skill-card.component";
import { TitleComponent } from "../components/title/title.component";
import { LinkComponent } from "../components/link/link.component";

@Component({
  selector: 'app-skills',
  imports: [NgOptimizedImage, SkillCardComponent, TitleComponent, LinkComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

}
