import { Component } from '@angular/core';
import { LinkComponent } from "../components/link/link.component";
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [LinkComponent, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
