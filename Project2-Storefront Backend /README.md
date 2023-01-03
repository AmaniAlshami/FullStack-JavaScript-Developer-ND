# Storefront Backend Project

## Introduction
Storefront Backend Project is a project has been build by using Node.js to allow user show products and create orders.

## Getting Started

This project depends on Nodejs and Node Package Manager (NPM) ensure you already intall it from https://nodejs.com/en/download. NPM Relies on the package.json file located in the frontend directory of this repository. To install NPM run `
npm install` on terminal.

```
npm run start
```

## Required Technologies

This application use of the following libraries:
- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing

## Steps to before run the project

### 1. DB Creation and Migrations

This project use Postgres for the database , first Create database and fill `.env` and `database.json` with database settings : name, host, user and password. 

Then run the migration 
```
db-migrate up
```

### 2. Environment Variables

You have to set the environment variables in `.env` follow up `env_example`

## API Reference

check `REQUIREMENTS.md` document

### Tests

Run 
```
npm run test
```