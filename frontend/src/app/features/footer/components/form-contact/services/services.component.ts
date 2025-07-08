import { Component, Injectable } from "@angular/core";
import { environment } from "../../../../../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ServicesComponent {
  private apiPath = environment.apiPath;

  constructor(private http: HttpClient) {}

  sendData(
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
