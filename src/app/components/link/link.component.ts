import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  imports: [],
  templateUrl: './link.component.html',
  styleUrl: './link.component.css'
})
export class LinkComponent {
  @Input() icon: string = "";
  @Input() path: string = "";
  @Input() altText:string= "";
  @Input() text:string= "";
}
