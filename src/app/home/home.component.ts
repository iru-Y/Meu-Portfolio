import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { StatusComponent } from "../components/status/status.component";
import { WorksComponent } from "../works/works.component";
import { SkillsComponent } from "../skills/skills.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, AboutMeComponent, WorksComponent, SkillsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
