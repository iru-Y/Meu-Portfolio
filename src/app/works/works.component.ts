import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from "../components/title/title.component";

@Component({
  selector: 'app-works',
  imports: [NgOptimizedImage, TitleComponent],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent {

}
