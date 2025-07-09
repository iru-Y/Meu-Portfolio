import { Component, EventEmitter, Input, Output } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { FormContactService } from "./services/form-contact.service";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-form-contact",
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: "./form-contact.component.html",
  styleUrls: ["./form-contact.component.css"], // ✅ corrigido: styleUrls (com s)
})
export class FormContactComponent {
  @Input() text: string = "";
  @Output("sent") onSubmit = new EventEmitter();
  contactForm!: FormGroup;

  constructor(private services: FormContactService) {
    this.contactForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl("", [
        (control) => {
          const v = control.value as string;
          if (!v) return null;
          const valid = /^\(\d{2}\)\s9\d{4}-\d{4}$/.test(v);
          return valid ? null : { pattern: true }; 
        },
      ]),

      subject: new FormControl("", [Validators.required]),
      message: new FormControl("", [Validators.maxLength(1000)]),
    });
  }

  sent() {
    if (this.contactForm.valid) {
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
          console.log("Enviado com sucesso:", response);
        },
        error: (err) => {
          console.error("Erro ao enviar:", err);
        },
      });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
