import { Component } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';
import { HeaderComponent } from '../header/header.component';
import { MyProjectsComponent } from '../my-projects/my-projects.component';
import { WorksComponent } from '../works/works.component';
import { SkillsComponent } from '../skills/skills.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-home',
  imports: [HeaderComponent, AboutMeComponent, WorksComponent, SkillsComponent, MyProjectsComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
