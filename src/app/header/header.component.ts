import { Component } from '@angular/core';
import { LinkComponent } from "../components/link/link.component";

@Component({
  selector: 'app-header',
  imports: [LinkComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
