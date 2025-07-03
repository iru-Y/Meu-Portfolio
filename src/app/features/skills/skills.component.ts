import { Component } from '@angular/core';
import { TitleComponent } from '../../shared/components/title/title.component';
import { LinkComponent } from '../../shared/components/link/link.component';
import { NgClass, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  imports:[TitleComponent, LinkComponent, NgClass, NgOptimizedImage]
})
export class SkillsComponent {
  currentIndex = 0;
  hoveringArrow = false;
  skills = [
    {projects: 'Lorem Ipsum is simply dummy text of the printing remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing remaining essentially unchanged', topIconPath: '/icons/flutter.png' },
    {projects: 'AnLorem Ipsum is simply dummy text of the printing remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing remaining essentially unchangedgular', topIconPath: '/icons/angular.png' },
    {projects: 'JALorem Ipsum is simply dummy text of the printing remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing remaining essentially unchangedVA', topIconPath: '/icons/java.png' },
    {projects: 'JALorem Ipsum is simply dummy text of the printing remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing remaining essentially unchangedVA', topIconPath: '/icons/docker.png' },
    {projects: 'JALorem Ipsum is simply dummy text of the printing remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing remaining essentially unchangedVA', topIconPath: '/icons/linux.png' }
  ];

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.skills.length) % this.skills.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.skills.length;
  }

  onArrowHover(value: boolean) {
    this.hoveringArrow = value;
  }
}
