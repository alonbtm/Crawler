# Crawler Project Setup Guide

##### Home Assignment for rank.com

This project consists of two main parts: a backend developed using Laravel and a frontend developed using Angular. This guide will walk you through the setup and usage of both parts.

## Prerequisites
- PHP and Composer installed for Laravel
- Node.js and npm installed for Angular
- MongoDB installed

## Backend (Laravel) Setup
#### 1. Clone the Repository:


```sh
    git clone https://github.com/alonbtm/Crawler.git
```

#### 2. Navigate to the Backend Directory:
```sh
    cd backend

```

#### 3. Install Dependencies:
```sh
    composer install
```

#### 4. Copy the .env.example file:
Copy the .env.example file to .env to create a configuration file.

#### 5. Setup MongoDB:
Ensure MongoDB is running. In the .env file, modify the following settings to match your MongoDB configuration:
```sh
    DB_CONNECTION=mongodb
    DB_HOST=127.0.0.1
    DB_PORT=27017
    DB_DATABASE=your_database_name
    DB_USERNAME=your_database_user
    DB_PASSWORD=your_database_password
```
#### 6. Generate an Application Key:
```sh
    php artisan key:generate
```
#### 7. Sart the Laravel Server:
```sh
    php artisan serve
```

##### Now, the Laravel backend should be running on http://localhost:8000.


## Frontend (Angular) Setup

open new terminal window

#### 1. Navigate to the Frontend Directory:
```sh
    cd frontend
```
#### 2. Install Dependencies:
```sh
    npm install
```

#### 3. start the Angular Server:
```sh
    ng serve
```

##### Now, the Angular frontend should be running on http://localhost:4200.


## Extentions

-Install the MongoDB PHP Extension:
```sh
    pecl install mongodb
```




