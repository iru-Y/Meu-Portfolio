import { Component, EventEmitter, Input, Output } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ServicesComponent } from "./services/services.component";

@Component({
  selector: "app-form-contact",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./form-contact.component.html",
  styleUrls: ["./form-contact.component.css"], // ✅ corrigido: styleUrls (com s)
})
export class FormContactComponent {
  @Input() text: string = "";
  @Output("submit") onSubmit = new EventEmitter();
  contactForm!: FormGroup;

  constructor(private services: ServicesComponent) {
    this.contactForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl("", [
        Validators.pattern("^\\(\\d{2}\\)\\s9\\d{4}-\\d{4}$"),
      ]),
      subject: new FormControl("", [Validators.required]),
      message: new FormControl("", [Validators.maxLength(1000)]),
    });
  }

  submit(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log("Enviando dados:", formData);

      this.services.sendData(formData).subscribe({
        next: (response) => {
          console.log("Enviado com sucesso:", response);
        },
        error: (err) => {
          console.error("Erro ao enviar:", err);
        }
      });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
