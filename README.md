# Laravel + React Project Documentation

This is a full-stack project using Laravel as the backend and React as the frontend.  
The frontend and backend are separated into `frontend/` and `backend/` directories, respectively.

---

## 🔧 System Requirements

To run this project on a local Windows machine, you will need the following software installed:

| Tool              | Purpose                          | Download Link                      |
|-------------------|----------------------------------|------------------------------------|
| Git               | Clone project and version control| https://git-scm.com/               |
| Composer          | Laravel dependency manager       | https://getcomposer.org/           |
| Node.js (v18+)    | React frontend / build tools     | https://nodejs.org/                |
| VSCode            | Code editor                      | https://code.visualstudio.com/     |
| XAMPP / Laragon   | PHP 8.1+ & MySQL environment     | https://www.apachefriends.org/ or https://laragon.org/ |

> ⚠️ Laravel 10 requires **PHP 8.1+**. If your XAMPP has an older PHP version, consider switching to **Laragon** for easier setup.

---

## 📁 Project Structure
```
WU_PROJECT/
├── backend/  # Laravel backend
├── frontend/ # React frontend
├── .gitignore# Root-level Git ignore settings
└── README.md # Project documentation
```
---

## 🚀 Installation Guide
```bash
### 1️⃣ Clone the Repository

-- vs code termianl
git clone https://github.com/WizLin2000/laravel-react-project.git
cd laravel-react-app
```
```bash
### 2️⃣ Setup Laravel Backend
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate        # Optional: only if you use database
php artisan serve 
```
```bash
### 3️⃣ Setup React Frontend
cd ../frontend
npm install
npm run dev
```   
--------------------------------------------------------------------------
⚙️ Environment Variables

this is in laravel .env(in /backend)
make sure .env file contain valid database credentials.

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_db_name
DB_USERNAME=root
DB_PASSWORD=
```
---------------------------------------------------------------------------
-How to create the database

🔸if using Laragon
Laragon will automatically create the database when php artisan migrate is run, as long as:

    You're using root as DB user

    No password is required

You can also create manually via:

    Laragon Menu → Database → HeidiSQL or phpMyAdmin
-----------------------------------------------------------------------------
🔁 Running Both Frontend & Backend
```env
-Terminal 1 – Laravel

cd backend
php artisan serve
```
```env
-Terminal 2 – React
cd frontend
npm run dev
```

✅ With this setup, you will have your Laravel API running at localhost:8000 and your React frontend at localhost:5173. Make sure to configure CORS and API URLs properly.