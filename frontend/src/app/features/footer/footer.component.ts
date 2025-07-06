import { Component } from '@angular/core';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { LinkComponent } from '../../shared/components/link/link.component';
import { TitleComponent } from '../../shared/components/title/title.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { LinkBtnComponent } from "./components/link-btn/link-btn.component";
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [TitleComponent, ContactCardComponent, LinkComponent, FormContactComponent, LinkBtnComponent, NgOptimizedImage],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})

export class FooterComponent {
  path: string = '/icons/'

  footerLinks =[
    {
      imgSrc: `${this.path}instagram.svg`,
      text: 'INSTAGRAM'
    },
    {
      imgSrc: `${this.path}instagram.svg`,
      text: 'INSTAGRAM'
    },
    {
      imgSrc: `${this.path}instagram.svg`,
      text: 'INSTAGRAM'
    },
    {
      imgSrc: `${this.path}instagram.svg`,
      text: 'INSTAGRAM'
    }
  ]

}
