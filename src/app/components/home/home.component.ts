import { Component } from '@angular/core';
import { AboutMeComponent } from '../section/about-me/about-me.component';
import { ContactComponent } from '../section/contact/contact.component';
import { HeaderComponent } from '../header/header.component';
import { MyProjectsComponent } from '../section/my-projects/my-projects.component';
import { SkillsComponent } from '../section/my-projects/skills/skills.component';
import { WorksComponent } from '../section/works/works.component';


@Component({
  selector: 'app-home',
  imports: [HeaderComponent, AboutMeComponent, WorksComponent, SkillsComponent, MyProjectsComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
