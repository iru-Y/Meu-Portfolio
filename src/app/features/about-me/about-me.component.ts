import { Component } from '@angular/core';
import { LinkComponent } from '../../shared/components/link/link.component';
import { StatusComponent } from './components/status/status.component';
import { TitleComponent } from '../../shared/components/title/title.component';

@Component({
  selector: 'app-about-me',
  imports: [LinkComponent, StatusComponent, TitleComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
statusListOne = [
  { total: '12K', result: 'All Project Completed', width: '250px', height: '120px' },
  { total: '12K', result: 'All Project Completed', width: '170px', height: '120px' }
];

statusListTwo = [
  { total: '12K', result: 'All Project Completed', width: '170px', height: '120px' },
  { total: '12K', result: 'All Project Completed', width: '250px', height: '120px' }
];


}
