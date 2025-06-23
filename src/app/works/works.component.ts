import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from "../components/title/title.component";
import { BestServicesCardComponent } from "../components/best-services-card/best-services-card.component";

@Component({
  selector: 'app-works',
  imports: [TitleComponent, BestServicesCardComponent],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent {

}
