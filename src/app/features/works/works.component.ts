import { Component } from '@angular/core';
import { BestServicesCardComponent } from './components/best-services-card/best-services-card.component';
import { TitleComponent } from '../../shared/components/title/title.component';

@Component({
  selector: 'app-works',
  imports: [TitleComponent, BestServicesCardComponent],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent {
bestServices = [
  [
    { widthCard: '30vw', title: 'Flutter', subTitle: 'Lorem Ipsum is simply dummy text of the printing  remaining essentially unchanged.', altText: 'flutter', imgPath: '/icons/flutter.png' },
    { widthCard: '40vw', title: 'Flutter', subTitle: 'Lorem Ipsum is simply dummy text of the printing  remaining essentially unchanged.', altText: 'flutter', imgPath: '/icons/flutter.png' }
  ],
  [
    { widthCard: '22.66vw', title: 'Flutter', subTitle: 'Lorem Ipsum is simply dummy text of the printing  remaining essentially unchanged.', altText: 'flutter', imgPath: '/icons/flutter.png' },
    { widthCard: '22.66vw', title: 'Flutter', subTitle: 'Lorem Ipsum is simply dummy text of the printing  remaining essentially unchanged.', altText: 'flutter', imgPath: '/icons/flutter.png' },
    { widthCard: '22.66vw', title: 'Flutter', subTitle: 'Lorem Ipsum is simply dummy text of the printing  remaining essentially unchanged.', altText: 'flutter', imgPath: '/icons/flutter.png' }
  ],
  [
    { widthCard: '35vw', title: 'Flutter', subTitle: 'Lorem Ipsum is simply dummy text of the printing  remaining essentially unchanged.', altText: 'flutter', imgPath: '/icons/flutter.png' },
    { widthCard: '35vw', title: 'Flutter', subTitle: 'Lorem Ipsum is simply dummy text of the printing  remaining essentially unchanged.', altText: 'flutter', imgPath: '/icons/flutter.png' }
  ]
];

}
