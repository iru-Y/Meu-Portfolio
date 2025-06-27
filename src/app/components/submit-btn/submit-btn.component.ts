import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-submit-btn',
  imports: [],
  templateUrl: './submit-btn.component.html',
  styleUrl: './submit-btn.component.css'
})
export class SubmitBtnComponent {
  @Input() text:string = '';
  @Output("submit") onSubmit =new EventEmitter(); 


  submit() {
    this.onSubmit.emit();
  }
}
