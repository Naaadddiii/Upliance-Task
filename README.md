# Dashboard Application

## Overview

This is a simple **Dashboard Application** built with **React & TypeScript**, featuring multiple interactive components such as:

- A **Counter** with smooth animations.
- A **Rich Text Editor** that saves content in `localStorage`.
- A **Name and ID Form** that generates a unique ID and stores user input.
- A **Contact Details Form** that captures email, phone, and address information.

The application uses **Material UI** for styling the forms and **Tailwind CSS** for overall layout design.

---

## Features

### 🔹 Counter Component

- Increases or decreases the count with animation.
- Background color and height change dynamically based on the count.
- Uses `useState` and `useSpring` from `react-spring` for smooth effects.

### 🔹 Rich Text Editor

- Built using `react-quill`.
- Supports **bold, italic, underline, lists, and headers**.
- Automatically saves content to `localStorage` to retain text between sessions.

### 🔹 Name and ID Form

- Allows users to enter their **name**.
- Generates a unique **ID** if one is not provided.
- Stores data in `localStorage` for persistence.

### 🔹 Contact Details Form

- Captures user’s **email, phone number, and address**.
- Saves input data in `localStorage`.
- Updates existing stored data without overriding other fields.

---

## Installation

### 📌 Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (>=14.x)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 🔧 Steps to Run the Project

```sh
# Clone the repository
git clone https://github.com/Naaadddiii/Upliance-Task.git

# Navigate to the project folder
cd task-app

# Install dependencies
npm install   # or yarn install

# Start the development server
npm run dev   # or yarn dev
```

The application will be available at `http://localhost:5173/`

---

## Tech Stack 🛠️

- **React & TypeScript** - Component-based UI development
- **Tailwind CSS** - Styling & Layout
- **Material UI** - Form Components
- **React Quill** - Rich Text Editing
- **React Spring** - Animations
- **LocalStorage** - Persistent data storage

---
