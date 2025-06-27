import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SubmitBtnComponent } from "../submit-btn/submit-btn.component";

@Component({
  selector: 'app-form-contact',
  imports: [ReactiveFormsModule, SubmitBtnComponent],
  templateUrl: './form-contact.component.html',
  styleUrl: './form-contact.component.css',
})
export class FormContactComponent {
  contactForm!: FormGroup;

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.pattern('^\\(\\d{2}\\)\\s9\\d{4}-\\d{4}$'),
      ]),
    });
  }
}
