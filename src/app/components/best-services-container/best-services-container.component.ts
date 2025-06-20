import { Component, Input } from '@angular/core';
import { LinkComponent } from "../link/link.component";

@Component({
  selector: 'app-best-services-container',
  imports: [LinkComponent],
  templateUrl: './best-services-container.component.html',
  styleUrl: './best-services-container.component.css'
})
export class BestServicesContainerComponent {
  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() aHref: string = '';
}
