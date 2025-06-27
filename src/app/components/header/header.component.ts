import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { LinkComponent } from '../link/link.component';

@Component({
  selector: 'app-header',
  imports: [LinkComponent, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
