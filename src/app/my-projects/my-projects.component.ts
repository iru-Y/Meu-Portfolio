import { Component } from '@angular/core';
import { TitleComponent } from "../components/title/title.component";
import { LiveDemoCardComponent } from "../components/live-demo-card/live-demo-card.component";
import { LinkComponent } from "../components/link/link.component";

@Component({
  selector: 'app-my-projects',
  imports: [TitleComponent, LiveDemoCardComponent, LinkComponent],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.css'
})
export class MyProjectsComponent {

}
