import { Component } from '@angular/core';
import { TitleComponent } from '../../shared/components/title/title.component';
import { LinkComponent } from '../../shared/components/link/link.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  imports:[TitleComponent, LinkComponent]
})
export class SkillsComponent {
  currentIndex = 0;

  skills = [
    { title: 'Flutter', projects: 'Descrição Flutter', topIconPath: '/icons/flutter.png' },
    { title: 'Angular', projects: 'Descrição Angular', topIconPath: '/icons/angular.png' },
    { title: 'React', projects: 'Descrição React', topIconPath: '/icons/react.png' }
  ];

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.skills.length) % this.skills.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.skills.length;
  }
}
