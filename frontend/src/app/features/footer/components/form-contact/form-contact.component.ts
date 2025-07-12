import { Component, EventEmitter, Input, Output } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { FormContactService } from "./services/form-contact.service";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-form-contact",
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: "./form-contact.component.html",
  styleUrls: ["./form-contact.component.css"],
})
export class FormContactComponent {
  @Input() text: string = "";
  @Output("sent") onSubmit = new EventEmitter();
  contactForm!: FormGroup;

  isLoading: boolean = false;

  constructor(private services: FormContactService) {
    this.contactForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl("", [
        (control) => {
          const v = control.value as string;
          if (!v) return null;
          const valid = /^9\d{10}$/.test(v);
          return valid ? null : { pattern: true };
        },
      ]),

      subject: new FormControl("", [Validators.required]),
      message: new FormControl("", [Validators.maxLength(1000)]),
    });
  }

  sent() {
    if (this.contactForm.valid) {
      this.isLoading = true;
      console.log("STATUS:", this.contactForm.status);
      console.log("ERROS:", this.contactForm.errors, {
        name: this.contactForm.get("name")?.errors,
        email: this.contactForm.get("email")?.errors,
        phone: this.contactForm.get("phone")?.errors,
        subject: this.contactForm.get("subject")?.errors,
        message: this.contactForm.get("message")?.errors,
      });
      const formData = this.contactForm.value;
      console.log("Enviando dados:", formData);

      this.services.sendData(formData).subscribe({
        next: (response) => {
          this.isLoading = false;
          this.onSubmit.emit();
          this.contactForm.reset();
          this.contactForm.markAsPristine();
          this.contactForm.markAsUntouched();
          console.log("Enviado com sucesso:", response);
        },
        error: (err) => {
          this.isLoading = false;
          console.error("Erro ao enviar:", err);
        },
      });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
