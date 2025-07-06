import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-btn',
  imports: [NgOptimizedImage],
  templateUrl: './link-btn.component.html',
  styleUrl: './link-btn.component.css'
})
export class LinkBtnComponent {
  @Input() text:string ='';
  @Input() aHref:string ='';
  @Input() imgSrc:string ='';

}
