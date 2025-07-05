import { Component } from '@angular/core';
import { LinkComponent } from '../../shared/components/link/link.component';
import { StatusComponent } from './components/status/status.component';
import { TitleComponent } from '../../shared/components/title/title.component';

@Component({
  selector: 'app-about-me',
  imports: [LinkComponent, StatusComponent, TitleComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
})
export class AboutMeComponent {
  isMobile = window.innerWidth <= 800;
  large = this.isMobile ? '170px' : '250px';
  small = this.isMobile ? '140px' : '200px';
  statusListOne = [
    { total: '12K', result: 'All Project Completed', width: this.large },
    { total: '12K', result: 'All Project Completed', width: this.small },
  ];

  statusListTwo = [
    { total: '12K', result: 'All Project Completed', width: this.small },
    { total: '12K', result: 'All Project Completed', width: this.large },
  ];
}
