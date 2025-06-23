import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-asterisk',
  templateUrl: './asterisk.component.html',
  styleUrls: ['./asterisk.component.css'],
  imports: [NgStyle]
})
export class AsteriskComponent {
  @Input() top?: string;
  @Input() right?: string;
  @Input() bottom?: string;
  @Input() left?: string;
}
