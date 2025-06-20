import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from "../components/title/title.component";
import { BestServicesContainerComponent } from "../components/best-services-container/best-services-container.component";

@Component({
  selector: 'app-works',
  imports: [TitleComponent, BestServicesContainerComponent],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent {

}
