import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollService } from '../../../shared/services/scroll.service';

@Component({
  selector: 'app-menu-hamburguer',
  imports: [NgOptimizedImage],
  templateUrl: './menu-hamburguer.component.html',
  styleUrl: './menu-hamburguer.component.css',
})
export class MenuHamburguerComponent {
  isOpen: boolean = false;

  constructor(private scroll: ScrollService) {}
  
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  onLinkClick(id: string) {
    this.scroll.scrollTo(id);
  }
}
