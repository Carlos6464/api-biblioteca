# API de Biblioteca

Uma API RESTful para gerenciamento de uma biblioteca, permitindo o cadastro de livros, autores e o empréstimo de livros para usuários.

---

## 📜 Descrição

Este projeto é uma API desenvolvida para simular as operações de uma biblioteca. Com ela, é possível gerenciar o acervo de livros, cadastrar autores e controlar os empréstimos realizados pelos usuários. A API foi construída com foco em ser escalável, de fácil manutenção e com código limpo.

---

## ✨ Funcionalidades

* **Gerenciamento de Livros:** CRUD (Criar, Ler, Atualizar, Deletar) de livros.
* **Gerenciamento de Autores:** CRUD de autores.
* **Sistema de Empréstimos:** Funcionalidades para emprestar e devolver livros.
* **Validação de Dados:** Garante a integridade dos dados que chegam na API.
* **Documentação de Endpoints:** Endpoints documentados para facilitar o uso.

---

## 🚀 Tecnologias Utilizadas

* **Node.js:** Ambiente de execução do JavaScript no servidor.
* **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
* **Express:** Framework para construção de APIs em Node.js.
* **Prisma:** ORM para facilitar a comunicação com o banco de dados.
* **PostgreSQL (ou outro banco):** Banco de dados relacional.
* **JWT (JSON Web Token):** Para autenticação e autorização de rotas.
* **(Adicione outras tecnologias que você usou, como Docker, Jest, etc.)**

---

## ⚙️ Instalação

Siga os passos abaixo para configurar e rodar o projeto em seu ambiente local.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/Carlos6464/api-biblioteca.git](https://github.com/Carlos6464/api-biblioteca.git)
    cd api-biblioteca
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    * Crie um arquivo `.env` na raiz do projeto, baseado no arquivo `.env.example`.
    * Preencha as variáveis, principalmente a `DATABASE_URL` com a string de conexão do seu banco de dados.
    ```
    DATABASE_URL="postgresql://user:password@localhost:5432/database_name"
    ```

4.  **Rode as migrações do Prisma:**
    ```bash
    npx prisma migrate dev
    ```

---

## ▶️ Como Usar

Para iniciar o servidor da aplicação em modo de desenvolvimento, execute o comando:

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3333`.

---

## ↔️ Endpoints da API

Aqui estão os principais endpoints disponíveis na API:

### Livros

* `POST /books` - Cria um novo livro.
* `GET /books` - Lista todos os livros.
* `GET /books/:id` - Obtém um livro específico.
* `PUT /books/:id` - Atualiza um livro.
* `DELETE /books/:id` - Deleta um livro.

**(Documente os outros endpoints da mesma forma, como os de Autores e Empréstimos, adicionando exemplos de requisição e resposta em JSON se possível)**

---

## 🤝 Como Contribuir

Contribuições são bem-vindas! Se você tem alguma ideia para melhorar o projeto, siga os passos:

1.  Faça um "Fork" do projeto.
2.  Crie uma nova "branch" (`git checkout -b feature/sua-feature`).
3.  Faça o "commit" das suas alterações (`git commit -m 'Adiciona nova feature'`).
4.  Faça o "push" para a "branch" (`git push origin feature/sua-feature`).
5.  Abra um "Pull Request".

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
