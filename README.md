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

### 📌 Project Description

This project is built using the technologies listed above.

It includes two main modes: **USER** and **MANAGER**, which can be switched via a toggle in the header.  
Each mode provides its own functionality and layout.

---

## 🧩 Structure

Each layout consists of **three columns** with different request statuses:

- 🆕 **New**
- ⚙️ **In Progress**
- ✅ **Done**

---

### 👤 User Features

- Ability to create new requests
- Opens a **modal window with a form** on button click
- Form includes basic validation using **React Hook Form** (min/max constraints)
- After submission, the request is added to the **New** column
- Can edit the **title** of a request while it is still in the **New** status

---

### 🧑‍💼 Manager Features

- Can change request status using **drag & drop** between columns
- Can **delete** requests

---

### 🔍 Shared Features

Both modes support:

- 📅 Sorting requests by date within each column
- 🔎 Searching requests by title
