import { Component } from '@angular/core';
import { LinkComponent } from "../components/link/link.component";
import { StatusComponent } from "../components/status/status.component";

@Component({
  selector: 'app-body',
  imports: [LinkComponent, StatusComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
