import { Component } from '@angular/core';
import { LinkComponent } from "../components/link/link.component";
import { NgOptimizedImage } from '@angular/common';
import { AsteriskComponent } from "../components/asterisk/asterisk.component";

@Component({
  selector: 'app-header',
  imports: [LinkComponent, NgOptimizedImage, AsteriskComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
