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
    {projects: 'Lorem Ipsum is simply dummy text of the printing remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing remaining essentially unchanged', topIconPath: '/icons/flutter.png' },
    {projects: 'AnLorem Ipsum is simply dummy text of the printing remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing remaining essentially unchangedgular', topIconPath: '/icons/angular.png' },
    {projects: 'JALorem Ipsum is simply dummy text of the printing remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing remaining essentially unchangedVA', topIconPath: '/icons/java.png' }
  ];

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.skills.length) % this.skills.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.skills.length;
  }
}
