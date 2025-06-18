import { Component } from '@angular/core';
import { LinkComponent } from "../components/link/link.component";
import { StatusComponent } from "../components/status/status.component";

@Component({
  selector: 'app-about-me',
  imports: [LinkComponent, StatusComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
