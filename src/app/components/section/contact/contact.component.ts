import { Component } from '@angular/core';
import { ContactCardComponent } from '../../contact-card/contact-card.component';
import { LinkComponent } from '../../link/link.component';
import { TitleComponent } from '../../title/title.component';
import { FormContactComponent } from "../../form-contact/form-contact.component";

@Component({
  selector: 'app-contact',
  imports: [TitleComponent, ContactCardComponent, LinkComponent, FormContactComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {

}
