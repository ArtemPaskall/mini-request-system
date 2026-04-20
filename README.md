# Mini Request System Project

This is a test assignment built using React

## Demo

Check out the live demo of the project (deployed on Vercel) [HERE](https://mini-request-system-five.vercel.app).

## 🛠 Tech Stack

- React.js
- Redux, Redux Toolkit
- TypeScript
- react-hook-form

## 🚀 How to Run the Project Locally

Follow these steps to download, install, and run the project on your machine:

```bash
# 1. Clone the GitHub repository to your local machine
git clone https://github.com/ArtemPaskall/mini-request-system.git

# 2. Navigate into the project directory
cd YOUR-REPOSITORY-NAME

# 3. Install all required dependencies from package.json
npm install

# 4. Start the development server
npm run dev
```

## Project Description

This project was developed as a test assignment using the technologies listed above.

It demonstrates a simple request management system with two separate modes: **User** and **Manager**, each providing different functionality and UI layout.

### 🚀 Project Overview

The application consists of a board with three main columns representing request statuses:

- **New**
- **In Progress**
- **Done**

Each request moves through these stages depending on user or manager actions.

---

### 🔄 Modes

The system has two modes that can be switched via a toggle in the header:

### 👤 User Mode

In User mode, the main functionality is focused on creating new requests.

**Features:**

- Create new requests via a modal form
- Form is built with **React Hook Form**
- Basic validation included:
  - Minimum length
  - Maximum length
- After submission, a new request is automatically added to the **"New"** column
- Ability to sort requests by date in each column
- Search requests by title

---

### 🧑‍💼 Manager Mode

Manager mode is focused on managing existing requests.

**Features:**

- Change request status using **drag and drop** between columns
- Delete requests
- Sort requests by date in each column
- Search requests by title

---

### 🧾 Request Workflow

1. User creates a request via modal form
2. After submitting, the request appears in the **New** column
3. Manager can move it across:
   - New → In Progress → Done
4. Manager can also delete requests if needed

---

### 🔍 Additional Features

- Two independent UI layouts for each mode
- Drag & drop interaction for status management
- Sorting by creation date
- Search functionality by request title
- Form validation using React Hook Form

---

### 📌 Notes

This project was built as a test task to demonstrate:

- Component-based architecture
- State management
- UI/UX separation by roles
- Drag & drop interactions
- Form handling and validation

---
