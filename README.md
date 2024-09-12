# Project Overview

> NexaCMS is designed to offer developers and content managers a robust and flexible platform for managing content with ease. By leveraging the power of Laravel and React, it provides modern, dynamic content management features, all within a monolithic architecture that ensures simplicity without compromising performance.

#### This repo is functionality complete — PRs and issues welcome! Feel free to contact me in discord: pea_gah

## Features

- Modular and customizable content management
- User authentication
- Fully responsive and mobile-friendly UI
- Docker support for quick setup and deployment
- Easy-to-extend components with React and Laravel

## Screenshots

<details>
  <summary>Login</summary>

![Login](https://github.com/user-attachments/assets/cccfa952-a821-4569-adc3-9c33441c764a)

</details>

<details>
  <summary>Signup</summary>

![Signup](https://github.com/user-attachments/assets/7ce2d0e7-66fa-435f-a14a-670daa7ccfb4)

</details>

<details>
  <summary>Home - Dark and Light</summary>

![Home - Dark](https://github.com/user-attachments/assets/cda36e1c-942f-43e6-96be-0446b60d4a09)
![Home - Light](https://github.com/user-attachments/assets/f5673879-a3fc-4249-bf19-173372f27422)

</details>

<details>
  <summary>Profile - General | Security| Advanced</summary>

![Profile - General](https://github.com/user-attachments/assets/32666249-6a3c-4a63-ace1-178921c534ea)
![Profile - Security](https://github.com/user-attachments/assets/da83ec1f-fc58-4920-adfb-f88f6364e4e4)
![Profile - Advanced](https://github.com/user-attachments/assets/c1f0a036-5074-4863-b736-664ab4c6c69d)

</details>

<details>
  <summary>Table - Create | Delete</summary>

![Tables](https://github.com/user-attachments/assets/d0c03a41-6943-4526-bf83-c1aca7782459)
![Table - Create](https://github.com/user-attachments/assets/0e09fc5d-96b2-424a-9be3-4a381cd98b3f)
![Table Delete](https://github.com/user-attachments/assets/1de3fc10-767b-40d3-b060-27485a24468c)

</details>

## Installation - Laravel Sail

#### Please check the official laravel installation guide for server requirements before you start. [Official Documentation - Sail](https://laravel.com/docs/master/sail)

Clone the repository:

```bash
git clone https://github.com/Peagah-Vieira/NexaCMS.git
```

Switch to the project directory:

```bash
cd Laravel-CMS-Web-Application
```

Install dependencies via Composer:

```bash
composer install
```

Copy the example environment file and adjust configurations:

```bash
cp .env.example .env
```

Run the Docker containers:

```bash
sail up -d
```

Install dependencies via NPM:

```bash
sail npm install
```

Generate a new application key:

```bash
sail artisan key:generate
```

Run migrations and seed the database (**Ensure database connection settings are configured in .env**):

```bash
sail artisan migrate --seed
```

Start the development server:

```bash
sail npm run dev
```

You can now access the server at http://localhost:8000
## Environment variables

- `.env` - Environment variables can be set in this file

***Note*** : You can quickly set the database information and other variables in this file and have the application fully working.

## Contributing

- Fork the repository.

- Create a new feature branch (git checkout -b feature/new-feature).

- Commit your changes (git commit -m 'Add new feature').

- Push to the branch (git push origin feature/new-feature).

- Open a pull request.


## FAQ

#### 1. Can I use this CMS for commercial projects?

Yes, NexaCMS is open-source and can be used for both personal and commercial projects under the MIT License.

#### 2. How can I report bugs or request features?

You can open an issue on the GitHub repository.
