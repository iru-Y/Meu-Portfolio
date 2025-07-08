import { Component } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';
import { HeaderComponent } from '../header/header.component';
import { MyProjectsComponent } from '../my-projects/my-projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutMeComponent,
    SkillsComponent,
    MyProjectsComponent,
    FooterComponent,
    HttpClientModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
