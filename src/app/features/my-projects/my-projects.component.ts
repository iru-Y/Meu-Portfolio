import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { LinkComponent } from '../../components/link/link.component';
import { LiveDemoCardComponent } from './components/live-demo-card/live-demo-card.component';
import { TitleComponent } from '../../components/title/title.component';

@Component({
  selector: 'app-my-projects',
  imports: [TitleComponent, LiveDemoCardComponent, LinkComponent, NgOptimizedImage],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.css'
})
export class MyProjectsComponent {

}
