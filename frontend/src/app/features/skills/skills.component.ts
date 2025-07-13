import { Component } from "@angular/core";
import { TitleComponent } from "../../shared/components/title/title.component";
import { LinkComponent } from "../../shared/components/link/link.component";
import { NgClass, NgOptimizedImage } from "@angular/common";

@Component({
  selector: "app-skills",
  standalone: true,
  templateUrl: "./skills.component.html",
  styleUrl: "./skills.component.css",
  imports: [TitleComponent, LinkComponent, NgClass, NgOptimizedImage],
})
export class SkillsComponent {
  currentIndex = 0;
  hoveringArrow = false;
  skills = [
    {
      projects:
        "Com Flutter, desenvolvi aplicações como o DraftMaster e o BarCode Hiper, utilizando bibliotecas como http, localstorage, Provider, json_serializable, secure_storage, shared_preferences, url_launcher e SQLite. Adoto boas práticas como Clean Architecture, MVVM, orientação a objetos, princípios SOLID e injeção de dependências para garantir escalabilidade e manutenibilidade.",
      topIconPath: "/icons/flutter.png",
    },
    {
      projects:
        "Com Angular, desenvolvi meu portfólio pessoal e a versão web do BarCode Hiper. Utilizei Angular Router, SSR (Server-Side Rendering), NgClass e componentização para criar aplicações modulares e performáticas. Também implementei design responsivo, integração com câmera para leitura de código de barras e técnicas de SEO para melhor posicionamento em buscadores.",
      topIconPath: "/icons/angular.png",
    },
    {
      projects:
        "Java é a stack que mais domino. Desenvolvi sistemas como Zoé Express e AgnusDei, além de projetos pessoais como um listador de CEPs com base em arquivos CSV dos Correios, um backend para um clone do Nubank, e o EasyOS, uma aplicação para emissão de PDFs e gerenciamento de usuários. Também fui responsável por toda a lógica backend do BarCode Hiper e implementei integrações como envio de e-mails via API no meu portfólio.",
      topIconPath: "/icons/java.png",
    },
    {
      projects:
        "Com Docker, utilizei Dockerfile e Docker Compose para rodar e testar localmente aplicações como BarCode Hiper e Zoé Express, além de realizar deploy em ambientes de produção. Configurei contêineres para front (Angular) e backend (Java/Spring Boot), gerenciei comunicação entre eles e otimizei imagens com multi-stage builds. Utilizei ferramentas como Docker Hub para versionamento e secrets para segurança, seguindo boas práticas de CI/CD e escalabilidade.",
      topIconPath: "/icons/docker.png",
    },
    {
      projects:
        "Com Linux, utilizo o terminal no dia a dia para gerenciar aplicações e automatizar tarefas com scripts Bash. Configurei servidores Ubuntu para rodar o backend do BarCode Hiper e Zoé Express, gerenciando processos com systemd, logs com journalctl e permissões. Criei scripts para build, teste e deploy automatizados, além de configurar pipelines CI/CD em ambientes Linux, aplicando boas práticas de segurança e manutenção.",
      topIconPath: "/icons/linux.png",
    },
  ];

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.skills.length) % this.skills.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.skills.length;
  }

  onArrowHover(value: boolean) {
    this.hoveringArrow = value;
  }
}
