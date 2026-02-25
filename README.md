<div align="center">
  <img src="https://jetend.vercel.app/assets/logo-BbKN1f03.png" alt="Jetend Logo" width="150" />
  <h1>Jetend 🚀</h1>
  <p><em>A utility-first Node.js toolkit for building Express.js backends faster.</em></p>
  <p><strong><a href="https://jetend.vercel.app">Official Website & Documentation</a></strong></p>
  
  [![npm version](https://img.shields.io/npm/v/jetend.svg?style=flat-square)](https://www.npmjs.com/package/jetend)
  [![npm downloads](https://img.shields.io/npm/dm/jetend.svg?style=flat-square)](https://www.npmjs.com/package/jetend)
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
</div>

Jetend simplifies backend development with **one-liner utilities** for routing, database operations (SQL + MongoDB), authentication, validation, responses, and email sending. Think of it as a **toolbox for Express developers** who want to move fast without reinventing the wheel.

---

## ✨ Features

- ⚡ Minimal routing (`get`, `post`, `patch`, `del`)
- 🌱 Start a server with one line (`start(port)`)
- 🗄️ Database utilities for **SQL** and **MongoDB**
- 🔐 Authentication helpers (bcrypt + JWT)
- ✅ Request validation with simple rules
- 📦 Consistent success/error responses
- 📧 Built-in email sending (Gmail SMTP ready)
- 🔌 Works seamlessly with **Express.js**

---

## 📦 Installation

```bash
npm install jetend
```

## 🚀 Quick Start

```js
import { get, post, start } from "jetend";

// Basic routing
get("/hello", ({ res }) => {
  res.json({ message: "Hello from Jetend 🚀" });
});

post("/data", ({ req, res }) => {
  res.status(201).json(req.body);
});

// Start the server
start(3000);
// 🚀 Jetend server running at http://localhost:3000
```

Run your server with Express, and Jetend plugs right in.

---

## 📚 Usage Guide

### 1. Starting the Server

You can quickly spin up a local server using the `start(port)` method. Simply pass the desired port number to start listening for incoming requests.

```javascript
import { start } from "jetend";

const PORT = 3000;
start(PORT); // 🚀 Jetend server running at http://localhost:3000
```

##

### 2. Routing

```js
import { get, post, patch, del } from "jetend";

get("/users", ({ res }) => res.json(users));
post("/users", ({ req, res }) => res.status(201).json(req.body));
patch("/users/:id", ({ req, res }) => res.json({ updated: req.params.id }));
del("/users/:id", ({ req, res }) => res.json({ deleted: req.params.id }));
```

##

### 3. Database

#### SQL

```js
import db from "jetend";

await db.sql.connect({
  host: "localhost",
  user: "root",
  database: "test",
  password: "1234",
});

const users = await db.sql.query("SELECT * FROM users");
```

#### MongoDB

```js
await db.mongo.connect("mongodb://127.0.0.1:27017/test");

const User = db.mongo.model("User", { name: String, email: String });

// CRUD
await db.mongo.create(User, { name: "Alice" });
await db.mongo.read(User, { name: "Alice" });
await db.mongo.update(User, { _id }, { email: "new@mail.com" });
await db.mongo.delete(User, { _id });
```

##

### 4. Authentication

```js
import {
  hashPassword,
  comparePassword,
  generateJWT,
  requireAuth,
} from "jetend";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

// Signup
const passwordHash = await hashPassword("mypassword");
await db.mongo.create(User, { username, password: passwordHash });

// Login
const ok = await comparePassword(password, user.password);
if (!ok) return error(res, "Invalid credentials", 401);

const token = generateJWT({ id: user._id }, JWT_SECRET, { expiresIn: "2h" });
res.json({ token });

// Protected Route
get("/me", requireAuth(JWT_SECRET), ({ req, res }) => {
  res.json({ user: req.user });
});
```

##

### 5. Validation

```js
import { validate } from "jetend";

validate(req.body, {
  name: "string|required|min:3|max:10",
  email: "email|required",
  password: "string|min:8",
});
```

##

### 6. Responses

```js
import { success, error } from "jetend";

return success(res, "User created", user, 201);
return error(res, "User not found", 404);
```

##

### 7. Email Sending

```js
import { sendEmail } from "jetend";

await sendEmail(
  process.env.EMAIL, // sender
  process.env.APP_PASSWORD, // app password
  "receiver@mail.com",
  "Welcome to Jetend 🚀",
  "<h1>Hello World</h1>",
);
```
