# Nuxt.js Dashboard Project

## Overview
This project is a comprehensive dashboard application built using **Nuxt.js**, **TypeScript**, **GraphQL**, and **Sass**. It features user management capabilities, including registration, login, and CRUD operations. The dashboard also integrates modern tools for a seamless user experience.

## Table of Contents
- [Objective](#objective)
- [Features](#features)
- [Technical Requirements](#technical-requirements)
- [Installation](#installation)

## Objective
The main goal of this project is to create a functional dashboard with the following pages and features:
1. **User Registration**
2. **User Login**
3. **Users Page**: Display a paginated list of all users.
4. **Single User Page**: Detailed information of a specific user.
5. **Create User Page**: A form to add new users.

## Features
### 1. Register Page
- Users can register with essential details such as name, email, and password.
- The `addUser` mutation is used to create a new user with an Admin role.

### 2. Login Page
- Users can log in using their email and password.
- Session management is handled securely, storing user session data for authentication.

### 3. Users Page
- Displays a table of all users fetched from the GraphQL API.
- Includes pagination for navigating through user data.
- Shows basic information such as name and email in the table.

### 4. Single User Page
- Detailed page showing information about a selected user.
- Fetches user details based on the user ID using GraphQL.

### 5. Create User Page
- A form is provided to create a new user with appropriate field validation.
- The user is added using a GraphQL mutation.

## Technical Requirements
- **Nuxt.js**: Framework for building the application.
- **TypeScript**: All code is implemented in TypeScript for type safety and scalability.
- **GraphQL**: Used for data fetching and performing mutations with the provided API.
- **Sass**: Utilized for better management of CSS styles.
- **UI Library**: Incorporate a UI library (e.g., Element Plus) for enhanced user interface components.
- **State Management**: Pinia  will handle the global state if necessary.
- **Validation**: Implement form validation using `vee-validate`.
- **Loading States**: Display loading indicators while data is being fetched.
- **Error Handling**: Provide user feedback and handle errors gracefully for failed operations.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/hanysaadeldeen/Nuxt.js-Dashboard.git
