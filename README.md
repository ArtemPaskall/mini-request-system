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

This project is built using the technologies listed above.

It has 2 modes: **USER** and **MANAGER**, which can be switched using a toggle in the header.  
Each mode has its own functionality and layout.

Each layout consists of 3 columns with different request statuses: **New**, **In Progress**, and **Done**.

The user has the ability to create new requests.  
By clicking the button, a modal window with a form appears.

The form includes basic validation using React Hook Form (minimum and maximum values).

After submission, the request is added to the **New** column.

The user can also edit the title of an existing request if it is still in the **New** status.

The manager can change the request status using drag and drop by moving items between columns.  
They can also delete requests.

Both modes allow sorting requests by date inside each column, as well as searching requests by title.
