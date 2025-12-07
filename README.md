# 🐾 PawMart - Community Driven Pet Marketplace

![Netlify Status](https://img.shields.io/badge/Deployed%20on-Netlify-brightgreen?style=flat-square)
![React](https://img.shields.io/badge/React-19-blue?style=flat-square)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1-orange?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-lightgrey?style=flat-square)

PawMart is a community-driven platform where pet owners, breeders, and shops can list pets for adoption or sell pet-related products such as food, toys, and accessories. Buyers and adopters can browse listings, contact sellers, and order directly from the platform.

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Technologies Used](#️-technologies-used)
- [🚀 Live Demo](#-live-demo)
- [📁 Project Structure](#-project-structure)
- [⚙️ Installation Guide](#️-installation-guide)
- [🔑 Environment Variables](#-environment-variables)
- [🌟 Special Sections](#-special-sections)
- [📝 License](#-license)

---

## ✨ Features

✔️ Firebase Authentication (Email + Google Login)  
✔️ Add and manage pet listings  
✔️ Browse pets & supplies by category  
✔️ Place orders and track your listings  
✔️ Fully responsive UI with TailwindCSS  
✔️ Smooth UI animations with Framer Motion  
✔️ Toast notifications for user actions  
✔️ Dark/Light mode toggle  
✔️ Deployed on **Netlify**

---

## 🛠️ Technologies Used

| Package / Library           | Purpose                   |
| --------------------------- | ------------------------- |
| **React 19**                | Core UI library           |
| **React Router**            | Client-side routing       |
| **TailwindCSS**             | Styling framework         |
| **DaisyUI**                 | UI components             |
| **Firebase**                | Authentication & database |
| **React Toastify**          | Toast notifications       |
| **Swiper**                  | Content sliders           |
| **Framer Motion**           | UI animations             |
| **React Icons**             | Icon library              |
| **jspdf & jspdf-autotable** | PDF generation for orders |
| **Netlify**                 | Deployment platform       |

---

## 🚀 Live Demo

🔗 **Netlify Deployment:** _(https://pawshare.netlify.app/)_

---

## 📁 Project Structure

```bash
src/
│── assets/              # Images & static files
│── components/          # Reusable UI components
│── firebase/            # Firebase config
│── layouts/             # Page layouts
│── pages/               # All route pages
│── hooks/               # Custom hooks (if any)
│── main.jsx             # React DOM bootstrap
tailwind.config.js
package.json
```

## ⚙️ Installation Guide

### 📌 Prerequisites

- Node.js (v18+ recommended)

- npm or yarn package manager

---

## 🧾 Setup Instructions

```bash
# Clone the repository
git clone https://github.com/Antor-Chowdhury/PawMart-Client
cd PawMart

# Install dependencies
npm install

# Run the project locally
npm run dev
```

## 🔑 Environment Variables

Create a .env.local file at the root and add your Firebase credentials:

```env
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_sender_id
VITE_appId=your_app_id
```

## 🚧 Future Enhancements

- 🛍️ Wishlist & Cart system

- 🌙 Improved Dark Mode with custom themes

- 🛠 Admin panel for managing listings and users
