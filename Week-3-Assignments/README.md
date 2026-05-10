# Week 3 - Backend Development with Node.js & MongoDB

## 📋 Overview
Full-stack backend API development for a **Product Management System** using Express.js and MongoDB.

## 🛠️ Tech Stack
- **Node.js** + **Express.js**
- **MongoDB** + **Mongoose**
- **JWT Authentication**
- **bcryptjs** for security
- **Cookie-parser** + **dotenv**

## 📁 Project Structure
Week-3-Assignments/
├── server.js                 # Main server
├── API/
│   └── productAPI.js         # Product routes & controllers
├── Model/
│   └── product_model.js      # Mongoose schema
├── middleware/
│   └── Tokenforproduct.js    # JWT middleware
├── .env                      # Environment variables
└── req.http                  # API testing (REST Client)

## ✨ Features Implemented

### Authentication & Authorization
- Login with JWT token
- Protected routes using middleware
- HTTP-only cookies

### CRUD Operations
- **Create** Product
- **Read** All / Single Product
- **Update** Product
- **Delete** Product

### Data Validation
- Mongoose schema validation
- Price range constraints
- Required fields

## 🚀 Setup & Run

```bash
# Install dependencies
npm install

# Start MongoDB (local)
mongod

# Run server
npm start
# or with nodemon
npx nodemon server.js

