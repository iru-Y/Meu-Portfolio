import { Component } from '@angular/core';
import { BestServicesCardComponent } from '../best-services-card/best-services-card.component';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-works',
  imports: [TitleComponent, BestServicesCardComponent],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent {

}
