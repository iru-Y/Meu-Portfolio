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
    { title: 'Flutter', projects: 'Flutter', topIconPath: '/icons/flutter.png' },
    { title: 'Angular', projects: 'Angular', topIconPath: '/icons/angular.png' },
    { title: 'Java', projects: 'JAVA', topIconPath: '/icons/java.png' }
  ];

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.skills.length) % this.skills.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.skills.length;
  }
}
