
# Culinary Application

The Culinary Application is a modern web platform that allows users to explore, search, save, create, and edit culinary recipes. This project is implemented using Laravel, React, and other modern technologies.

## Features

- **Browse Recipes**: Discover new recipes from around the world.
- **Search Recipes**: Find exactly what you're craving with advanced search filters.
- **Save Recipes**: Keep your favorite recipes in one place.
- **Create Recipes**: Add your own recipes and share them with others.
- **Edit Recipes**: Update and personalize your recipes at any time.
- **Delete Recipes**: Manage your collection by removing recipes you no longer need.

## Technologies

- **Backend**: Laravel
- **Frontend**: React with Inertia.js
- **Styling**: Tailwind CSS
- **Database**: MySQL
- **Additional Tools**: Laravel Sail, PHPStorm

## Running the Project Locally

To run the project locally, follow these steps:

### Without Docker

1. Clone the repository to your device.
   ```
   git clone <repository-url>
   ```
2. Install Composer dependencies.
   ```
   composer install
   ```
3. Copy `.env.example` to `.env` and set your database and other configurations.
4. Run the migrations to set up the database schema.
   ```
   php artisan migrate
   ```
5. Start the development server.
   ```
   php artisan serve
   ```
6. In a separate terminal, start the frontend environment.
   ```
   npm install && npm run dev
   ```

### With Docker (Laravel Sail)

1. Ensure Docker is installed and running on your system. Download Docker from [the official website](https://www.docker.com/get-started).
2. Clone the repository if you haven't already.
   ```
   git clone <repository-url>
   ```
3. Copy `.env.example` to `.env`.
   ```
   cp .env.example .env
   ```
4. Start the Sail development environment.
   ```
   ./vendor/bin/sail up
   ```
5. Run the migrations to set up the database schema.
   ```
   ./vendor/bin/sail artisan migrate
   ```
6. Your application should now be accessible at `http://localhost`.

## Contribution

We are open to any suggestions and collaboration. If you want to contribute to the development of the project, feel free to create pull requests.

