import { Component } from '@angular/core';
import { TitleComponent } from "../components/title/title.component";
import { NgOptimizedImage } from '@angular/common';
import { ContactCardComponent } from "../components/contact-card/contact-card.component";
import { LinkComponent } from "../components/link/link.component";

@Component({
  selector: 'app-contact',
  imports: [TitleComponent, NgOptimizedImage, ContactCardComponent, LinkComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
