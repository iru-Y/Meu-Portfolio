import { Component } from '@angular/core';
import { BestServicesCardComponent } from './components/best-services-card/best-services-card.component';
import { TitleComponent } from '../../components/title/title.component';

@Component({
  selector: 'app-works',
  imports: [TitleComponent, BestServicesCardComponent],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent {

}
