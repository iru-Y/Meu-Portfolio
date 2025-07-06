import { NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ScrollService } from '../../../shared/services/scroll.service';

@Component({
  selector: 'app-menu-hamburguer',
  imports: [NgOptimizedImage],
  templateUrl: './menu-hamburguer.component.html',
  styleUrl: './menu-hamburguer.component.css',
})
export class MenuHamburguerComponent {
  @ViewChild('menuRef') menuRef!: ElementRef;
  isOpen: boolean = false;
  constructor(private scroll: ScrollService) {}

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  onLinkClick(id: string) {
    this.scroll.scrollTo(id);
    this.isOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const clickedInside = this.menuRef?.nativeElement.contains(event.target);
    const clickedToggle = (event.target as HTMLElement).classList.contains(
      'hamburger'
    );

    if (!clickedInside && !clickedToggle && this.isOpen) {
      this.isOpen = false;
    }
  }
}
