# 📝 Task API - Node.js + TypeScript + Prisma + PostgreSQL

Uma API RESTful para gerenciamento de tarefas com suporte a categorias, construída com Node.js, Express, TypeScript e Prisma ORM, utilizando PostgreSQL como banco de dados. A aplicação segue os princípios de **orientação a objetos**, **injeção de dependência**, uso de **interfaces**, **DTOs** e uma arquitetura escalável baseada em **rotas modulares** com **router pai**.

---

## 🚀 Tecnologias Utilizadas

* **Node.js** – Ambiente de execução JavaScript no servidor
* **Express** – Framework web rápido e minimalista
* **TypeScript** – Superset do JavaScript com tipagem forte
* **PostgreSQL** – Banco de dados relacional
* **Prisma ORM** – ORM moderno para trabalhar com banco de dados
* **Dotenv** – Gerenciamento de variáveis de ambiente

---

## 📁 Estrutura de Pastas

```
task-api/
├── src/
│   ├── controller/
│   │   ├── task.controller.ts
│   │   └── category.controller.ts
│   ├── dto/
│   │   ├── task.dto.ts
│   │   └── category.dto.ts
│   ├── interfaces/
│   │   ├── ITaskService.ts
│   │   └── ICategoryService.ts
│   ├── prisma/
│   │   └── client.ts
│   ├── routes/
│   │   ├── task.routes.ts
│   │   ├── category.routes.ts
│   │   └── index.routes.ts  <-- Router Pai
│   ├── service/
│   │   ├── task.service.ts
│   │   └── category.service.ts
│   └── index.ts  <-- Ponto de entrada
├── prisma/
│   └── schema.prisma
├── .env
├── package.json
├── tsconfig.json
```

---

## ⚙️ Instalação e Execução

### Pré-requisitos

* Node.js
* PostgreSQL

### Passos

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/task-api.git
cd task-api

# Instale as dependências
npm install

# Configure o arquivo .env com sua conexão PostgreSQL
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"

# Gere os arquivos do Prisma
npx prisma generate

# Rode as migrações
npx prisma migrate dev --name init

# Inicie a aplicação
npm run dev
```

---

## 🧠 Conceitos Utilizados

### ✅ TypeScript

Tipagem forte e segura para garantir consistência entre os dados que entram e saem da aplicação.

### ✅ DTOs (Data Transfer Objects)

Responsáveis por encapsular e validar os dados de entrada e saída das entidades (`TaskDTO`, `CategoryDTO`).

### ✅ Interfaces

Definem contratos para os serviços (`ITaskService`, `ICategoryService`) permitindo que diferentes implementações sejam utilizadas de forma intercambiável.

### ✅ Injeção de Dependência

Os serviços são injetados nos controladores via construtor, reduzindo acoplamento e facilitando testes e manutenção.

### ✅ Orientação a Objetos

Organização da lógica de negócio e rotas por meio de classes, cada uma com uma única responsabilidade.

### ✅ Router Pai

Centraliza o uso de todas as rotas (`tasks`, `categories`) em um único arquivo (`index.routes.ts`), melhorando a escalabilidade e organização.

---

## 🔄 Endpoints

### 📌 Tasks

| Método | Rota             | Descrição         |
| ------ | ---------------- | ----------------- |
| GET    | `/api/tasks`     | Listar tarefas    |
| GET    | `/api/tasks/:id` | Buscar por ID     |
| POST   | `/api/tasks`     | Criar nova tarefa |
| PUT    | `/api/tasks/:id` | Atualizar tarefa  |
| DELETE | `/api/tasks/:id` | Deletar tarefa    |

### 📌 Categories

| Método | Rota              | Descrição            |
| ------ | ----------------- | -------------------- |
| GET    | `/api/categories` | Listar categorias    |
| POST   | `/api/categories` | Criar nova categoria |

---

## 🔧 Exemplo de JSON para Criar Tarefa

```json
{
  "nome": "Finalizar relatório",
  "data": "2025-06-10",
  "categoriaId": 1
}
```

---

## ✅ Boas Práticas Adotadas

* Separação de responsabilidades entre controller, service, rotas e DTOs.
* Organização modular para facilitar manutenção e testes.
* Tipagem forte com TypeScript.
* Arquitetura escalável com router pai.
* Prisma como ORM moderno, seguro e produtivo.

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT.
