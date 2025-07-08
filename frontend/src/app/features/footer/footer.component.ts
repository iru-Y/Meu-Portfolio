import { Component } from "@angular/core";
import { LinkComponent } from "../../shared/components/link/link.component";
import { TitleComponent } from "../../shared/components/title/title.component";
import { FormContactComponent } from "./components/form-contact/form-contact.component";
import { LinkBtnComponent } from "./components/link-btn/link-btn.component";
import { NgOptimizedImage } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { ContactCardComponent } from "./components/contact-card/contact-card.component";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [
    TitleComponent,
    ContactCardComponent,
    LinkComponent,
    FormContactComponent,
    LinkBtnComponent,
    NgOptimizedImage,
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.css",
})
export class FooterComponent {
  path: string = "/icons/";

  footerLinks = [
    {
      imgSrc: `${this.path}instagram.svg`,
      text: "INSTAGRAM",
    },
    {
      imgSrc: `${this.path}instagram.svg`,
      text: "INSTAGRAM",
    },
    {
      imgSrc: `${this.path}instagram.svg`,
      text: "INSTAGRAM",
    },
    {
      imgSrc: `${this.path}instagram.svg`,
      text: "INSTAGRAM",
    },
  ];
}
