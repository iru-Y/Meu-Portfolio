import { Component, Output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { LinkComponent } from '../../shared/components/link/link.component';
import { RouterModule } from '@angular/router';
import { MenuHamburguerComponent } from "./menu-hamburguer/menu-hamburguer.component";
import { ScrollService } from '../../shared/services/scroll.service';

@Component({
  selector: 'app-header',
  imports: [LinkComponent, NgOptimizedImage, RouterModule, MenuHamburguerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

   isMobile = window.innerWidth <= 800;

  constructor(private scroll: ScrollService){}

  onLinkClick(id: string){
    this.scroll.scrollTo(id);
  }

}
