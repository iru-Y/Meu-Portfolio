import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../../../../environments/environment.development";
import { FormContactInterface } from "../interfaces/form.contact.interface";

@Injectable({
  providedIn: "root",
})
export class FormContactService {
  private apiPath = environment.apiPath;

  constructor(private http: HttpClient) {}

  sendData(data: {
    name: string;
    phone: string;
    email: string;
    subject: string;
    message: string;
  }): Observable<FormContactInterface> {
    return this.http.post<FormContactInterface>(this.apiPath, data);
  }
}
