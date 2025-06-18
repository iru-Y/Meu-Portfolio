import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { AboutMeComponent } from "../about-me/about-me.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, AboutMeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
