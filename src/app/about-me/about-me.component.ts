import { Component } from '@angular/core';
import { LinkComponent } from "../components/link/link.component";
import { StatusComponent } from "../components/status/status.component";
import { TitleComponent } from "../components/title/title.component";

@Component({
  selector: 'app-about-me',
  imports: [LinkComponent, StatusComponent, TitleComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
