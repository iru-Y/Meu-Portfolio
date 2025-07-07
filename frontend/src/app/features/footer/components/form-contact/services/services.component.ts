import { Component } from "@angular/core";
import { environment } from "../../../../../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Component({
  selector: "app-services",
  imports: [],
  templateUrl: "./services.component.html",
  styleUrl: "./services.component.css",
})
export class ServicesComponent {
  private apiPath = environment.apiPath;

  constructor(private http: HttpClient) {}

  sendDate(
    name: string,
    phone: string,
    email: string,
    subject: string,
    message: string
  ): Observable<FormContactInterface> {
    const data = { name, phone, email, subject, message };
    return this.http.post<FormContactInterface>(this.apiPath, data);
  }
}
