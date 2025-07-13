# Meu Portfolio - Yuri Matthewus

Um portfolio pessoal desenvolvido com Angular (frontend) e Spring Boot (backend), apresentando projetos, habilidades e informações de contato.

## 🚀 Sobre o Projeto

Este é um portfolio pessoal completo que demonstra habilidades em desenvolvimento fullstack e mobile. O projeto inclui:

- **Frontend**: Aplicação Angular moderna com design responsivo
- **Backend**: API REST com Spring Boot para envio de emails de contato
- **Docker**: Configuração completa para containerização
- **Projetos**: Apresentação de projetos freelancer e pessoais

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Angular 19** - Framework principal
- **TypeScript** - Linguagem de programação
- **CSS3** - Estilização
- **HTML5** - Estrutura

### Backend
- **Spring Boot 3.5.3** - Framework Java
- **Java 17** - Linguagem de programação
- **Lombok** - Redução de boilerplate
- **Spring Mail** - Envio de emails

### DevOps
- **Docker** - Containerização
- **Docker Compose** - Orquestração de containers

## 📁 Estrutura do Projeto

```
Meu-Portfolio/
├── frontend/                 # Aplicação Angular
│   ├── src/
│   │   ├── app/
│   │   │   ├── features/
│   │   │   │   ├── about-me/     # Seção sobre mim
│   │   │   │   ├── footer/       # Rodapé com formulário de contato
│   │   │   │   ├── header/       # Cabeçalho com navegação
│   │   │   │   ├── home/         # Página principal
│   │   │   │   ├── my-projects/  # Seção de projetos
│   │   │   │   └── skills/       # Seção de habilidades
│   │   │   └── shared/           # Componentes compartilhados
│   │   └── environments/         # Configurações de ambiente
│   ├── docker-compose.yml
│   └── Dockerfile
├── backend/                  # API Spring Boot
│   └── portfolio-backend/
│       ├── src/main/java/
│       │   └── com/yurisousa/portfolio/
│       │       ├── controllers/  # Controladores REST
│       │       ├── dto/          # Data Transfer Objects
│       │       └── services/     # Serviços de negócio
│       ├── docker-compose.yml
│       └── Dockerfile
└── README.md
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- Java 17
- Docker e Docker Compose
- Angular CLI (`npm install -g @angular/cli`)

### Executando com Docker (Recomendado)

1. **Clone o repositório**
   ```bash
   git clone https://github.com/iru-Y/Meu-Portfolio
   cd Meu-Portfolio
   ```

2. **Execute o backend**
   ```bash
   cd backend/portfolio-backend
   docker-compose up --build
   ```

3. **Execute o frontend**
   ```bash
   cd frontend
   docker-compose up --build
   ```

4. **Acesse a aplicação**
   - Frontend: http://localhost:4200
   - Backend API: http://localhost:8080

### Executando Localmente

#### Backend
```bash
cd backend/portfolio-backend
./mvnw spring-boot:run
```

#### Frontend
```bash
cd frontend
npm install
ng serve
```

## 📋 Funcionalidades

### Frontend
- **Página Inicial**: Apresentação pessoal e profissional
- **Sobre Mim**: Informações detalhadas e estatísticas
- **Habilidades**: Demonstração de competências técnicas
- **Projetos**: Portfólio de projetos realizados
- **Contato**: Formulário de contato integrado com backend

### Backend
- **API REST**: Endpoint para envio de emails de contato
- **CORS**: Configurado para aceitar requisições do frontend
- **Logging**: Sistema de logs para monitoramento

## 🔧 Configuração

### Variáveis de Ambiente

#### Backend
Crie um arquivo `application-dev.yml` em `backend/portfolio-backend/src/main/resources/`:

```yaml
spring:
  mail:
    host: {MAIL_HOST}
    port: {MAIL_PORT}
    username: {MAIL_USERNAME}
    password: {MAIL_PASSWORD}
    properties:
      mail:
        smtp:
          auth: true
          starttls:
            enable: true
```

#### Frontend
Configure as variáveis de ambiente em `frontend/src/environments/`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api'
};
```

## 📱 Responsividade

O projeto é totalmente responsivo e funciona em:
- Desktop
- Tablet
- Mobile

## 🎨 Design

- Design moderno e minimalista
- Animações suaves
- Paleta de cores consistente
- Tipografia clara e legível

## 📊 Projetos Apresentados

- **Zoe Express**: Projeto freelancer
- **DraftMaster**: Projeto freelancer  
- **Agnus Dei**: Projeto freelancer
- **Easy OS**: Projeto pessoal
- **Hire Us**: Projeto pessoal

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Yuri Matthewus**
- LinkedIn: [yurisousadev](https://www.linkedin.com/in/yurisousadev/)
- GitHub: [iru-Y](https://github.com/iru-Y)

## 📞 Contato

Para entrar em contato, use o formulário no portfolio ou envie um email diretamente.

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório! 