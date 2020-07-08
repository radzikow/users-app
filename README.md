# Users App

## Technologies

Project is created with:
* Angular 8
* Laravel 7

## Description

Users App is a simple CRUD application created in Laravel (backend) and Angular (frontend) frameworks. App uses JWT (Laravel Passport) for authorization.

## Installation

Before running application on your computer, make sure you have installed: Node.js, npm and composer.

0. Clone the repository.
1. Open terminal/bash and go to "backend".
2. Create .env file and copy content from .env.example file.
3. Fill the names of the following variables in .env file:
  - DB_CONNECTION
  - DB_HOST
  - DB_PORT
  - DB_DATABASE
  - DB_USERNAME
  - DB_PASSWORD
4. Run your XAMPP/MAMP server and create your db table (same name as DB_DATABASE).
5. Run the following commands:
```bash
composer update
npm install
php artisan key:generate
php artisan passport:keys
php artisan passport:client --personal (and press Enter)
php artisan migrate
php artisan db:seed
php artisan serve
```
6. Open new terminal/bash and go to "frontend".
7. Run the following commands:
```bash
npm install
npm run start (or ng serve)
```
8. Go to http://localhost:4200/

Now you can register a new user and login with typed in credentials.

## API routes

 Get all users:

`GET api/users/all`

Generate 100 new random users:

`GET api/users/generate`

Get user by id:

`GET api/users/{id}`

Registr a new user (step 1/2 of registration):

`POST api/users/register`

Register lecturer (step 2/2 of registration):

`POST api/users/register-lecturer`

Register administrative (step 2/2 of registration):

`POST api/users/register-administrative`

Login user:

`POST api/users/login`