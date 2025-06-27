import { Component } from '@angular/core';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { LinkComponent } from '../../components/link/link.component';
import { TitleComponent } from '../../components/title/title.component';
import { FormContactComponent } from "./components/form-contact/form-contact.component";

@Component({
  selector: 'app-contact',
  imports: [TitleComponent, ContactCardComponent, LinkComponent, FormContactComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {

}
