<p align="center"><a href="#" target="_blank">IO App</p>



## About Application
# Dev Stack
- Laravel 7.x and Vue JS.

# Instructions
1. Run the following commands;

 composer install
 
 cp .env-example .env

2. Create the Database and and configure the .env;
 username (DB_USERNAME) 
 password (DB_PASSWORD)
 
3. Run the following php artisan commands;

 php artisan key:generate
 
 php artisan migrate
 
4. To serve the App run the follwoing command;
 php artisan serve
 
 Navigate to http://localhost:8000 in your browser to register, login and access the App dashboard.
 
