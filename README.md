# Users API - Documentação

## 📋 Visão Geral

API RESTful para gerenciamento de usuários com autenticação baseada em tokens. A aplicação segue uma arquitetura em camadas (Controllers, Services, Repositories) e está preparada para deploy na Vercel.

> **Acesse a aplicação online:**
>
> <p>
>   <a href="https://users-api-danilo.vercel.app/api/v1.0/users" target="_blank" style="font-size:1.2em;font-weight:bold;">🚀 https://users-api-danilo.vercel.app/api/v1.0/users</a>
> </p>

---

## 🏗️ Arquitetura

A API segue o padrão de arquitetura em camadas:

```
┌─────────────────┐
│   Controllers   │ ← Recebe requisições HTTP
└────────┬────────┘
         │
┌────────▼────────┐
│    Services     │ ← Lógica de negócio
└────────┬────────┘
         │
┌────────▼────────┐
│  Repositories   │ ← Acesso aos dados
└─────────────────┘
```

### Camadas

- **Controllers**: Recebem requisições HTTP, extraem parâmetros e retornam respostas
- **Services**: Contêm a lógica de negócio e validações
- **Repositories**: Gerenciam o acesso aos dados (in-memory database)
- **Middlewares**: Interceptam requisições para validação de autenticação
- **Utils**: Funções auxiliares para padronização de respostas HTTP

---

## 🚀 Tecnologias

- **Node.js** com ES Modules
- **Express** 5.2.1
- **CORS** habilitado
- **dotenv** para variáveis de ambiente
- **Nodemon** para desenvolvimento

---

## Como rodar o projeto localmente

1. Clone o repositório:

```bash
git clone https://github.com/daniloaugusto9101/users-api.git
cd users-app
```

2. Instale as dependências (na raiz do projeto):

```bash
npm install
```

3. Rode o projeto (na raiz do projeto):

```bash
npm run dev
```

Servidor inicia em: `http://localhost:3333/api/v1.0/`

---

## 🔐 Autenticação

A API utiliza autenticação baseada em **Bearer Token**.

### Sistema de Tokens

- Tokens são gerados no login usando Base64: `userId-timestamp`
- Tokens são armazenados em memória (`Map`) no servidor
- Tokens devem ser enviados no header `Authorization: Bearer {token}`
- Tokens são invalidados no logout

---

## 📡 Endpoints

### Autenticação

#### `POST /api/v1.0/auth/login`

Realiza login e retorna token de autenticação.

**Request Body:**

```json
{
  "email": "admin@spsgroup.com.br",
  "password": "1234"
}
```

**Response 200:**

```json
{
  "message": "Login realizado com sucesso",
  "user": {
    "id": 1,
    "name": "admin",
    "email": "admin@spsgroup.com.br",
    "type": "admin"
  },
  "token": "MS0xNzM4OTc2NTQzMjEw"
}
```

---

#### `POST /api/v1.0/auth/logout`

Invalida o token de autenticação.

**Headers:**

```
Authorization: Bearer {token}
```

**Response 200:**

```json
{
  "message": "Logout realizado com sucesso"
}
```

**Response 400:**

```json
{
  "message": "Token não fornecido"
}
```

**Response 401:**

```json
{
  "message": "Token inválido ou expirado"
}
```

---

### Usuários

**⚠️ Todas as rotas de usuários requerem autenticação via token.**

---

#### `GET /api/v1.0/users`

Lista todos os usuários.

**Headers:**

```
Authorization: Bearer {token}
```

**Response 200:**

```json
[
  {
    "id": 1,
    "name": "Danilo2",
    "email": "asd2@asd.com",
    "type": "admin",
    "password": "123456"
  },
  {
    "id": 2,
    "name": "Danilo",
    "email": "asd@asd.com",
    "type": "admin",
    "password": "123456"
  }
]
```

**Response 404:**

```json
{
  "message": "Não ha usuário para exibir"
}
```

---

#### `GET /api/v1.0/users/id/:id`

Busca usuário por ID.

**Headers:**

```
Authorization: Bearer {token}
```

**Parâmetros:**

- `id` (number): ID do usuário

**Response 200:**

```json
[
  {
    "id": 1,
    "name": "Danilo2",
    "email": "asd2@asd.com",
    "type": "admin",
    "password": "123456"
  }
]
```

**Response 400:**

```json
{
  "error": "ID inválido"
}
```

**Response 404:**

```json
{
  "message": "Não ha usuário para exibir"
}
```

---

#### `POST /api/v1.0/users`

Cria um novo usuário.

**Headers:**

```
Authorization: Bearer {token}
```

**Request Body:**

```json
{
  "name": "João Silva",
  "email": "joao@example.com",
  "type": "user",
  "password": "senha123"
}
```

**Response 200:**

```json
{
  "id": 10,
  "name": "João Silva",
  "email": "joao@example.com",
  "type": "user",
  "password": "senha123"
}
```

**Observação:** O ID é gerado automaticamente de forma incremental.

---

#### `PUT /api/v1.0/users/:id`

Atualiza um usuário existente.

**Headers:**

```
Authorization: Bearer {token}
```

**Parâmetros:**

- `id` (number): ID do usuário

**Request Body:**

```json
{
  "name": "João Silva Atualizado",
  "email": "joao.novo@example.com",
  "type": "admin"
}
```

**Response 200:**

```json
{
  "id": 10,
  "name": "João Silva Atualizado",
  "email": "joao.novo@example.com",
  "type": "admin",
  "password": "senha123"
}
```

**Response 400:**

```json
{
  "error": "ID inválido"
}
```

**Response 404:**

```json
{
  "message": "Não ha usuário para exibir"
}
```

---

#### `DELETE /api/v1.0/users/id/:id`

Remove um usuário por ID.

**Headers:**

```
Authorization: Bearer {token}
```

**Parâmetros:**

- `id` (number): ID do usuário

**Response 200:**

```json
true
```

**Response 400:**

```json
{
  "error": "ID inválido"
}
```

**Response 404:**

```json
{
  "message": "Não ha usuário para exibir"
}
```

---

## 🔒 Middleware de Autenticação

O middleware `authMiddleware` protege as rotas de usuários:

1. Extrai o token do header `Authorization`
2. Remove o prefixo `Bearer `
3. Valida se o token existe nas sessões ativas
4. Retorna 401 se o token for inválido ou não fornecido
5. Permite acesso se o token for válido

---

## 🛠️ Estrutura de Arquivos

```
users-api/
├── package.json           # Dependências e scripts
├── vercel.json           # Configuração de deploy Vercel
└── src/
    ├── app.js            # Configuração do Express
    ├── server.js         # Inicialização do servidor
    ├── controllers/
    │   ├── auth-controller.js     # Login/Logout
    │   └── users-controller.js    # CRUD de usuários
    ├── middlewares/
    │   └── auth-middleware.js     # Validação de token
    ├── repositories/
    │   ├── auth-repository.js     # Dados de autenticação
    │   └── users-repository.js    # Dados de usuários
    ├── routes/
    │   └── routesV1.js           # Definição de rotas
    ├── services/
    │   ├── auth-service.js       # Lógica de autenticação
    │   └── users-service.js      # Lógica de usuários
    └── utils/
        └── http-helper.js        # Helpers de resposta HTTP
```

---

## 🚧 Melhorias Futuras

- [ ] Implementar banco de dados real (PostgreSQL, MongoDB)
- [ ] Usar JWT para autenticação
- [ ] Criptografar senhas com bcrypt
- [ ] Implementar testes unitários e de integração
- [ ] Implementar paginação nos endpoints de listagem
- [ ] Adicionar logs estruturados
- [ ] Implementar refresh tokens
- [ ] Adicionar documentação com Swagger/OpenAPI
