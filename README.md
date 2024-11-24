# ToDoListify - Task Manager Application

**ToDoListify** is a MERN stack-based task management application designed to help users organize their tasks efficiently. This project focuses on implementing robust functionality while maintaining a clean and responsive user interface.

---

## 📋 Objective

The goal of this project is to create a fully functional task management application. The project showcases expertise in modern web development, combining a powerful backend with a feature-rich frontend.

---

## 🚀 Features

### Frontend:
1. **User Authentication**
   - Secure login and registration system.
2. **Task Dashboard**
   - Categorize tasks as **To Do**, **In Progress**, and **Completed**.
3. **Task Management**
   - Create, edit, delete, and update task statuses.
4. **Task Filters**
   - Filter tasks by date, category, or status.
5. **Task Timeline**
   - Visualize tasks and their deadlines in a timeline view.
6. **Overdue Task Alerts**
   - Highlight overdue tasks for easy identification.
7. **Responsive Design**
   - Fully responsive for both mobile and desktop devices.

### Backend:
1. **User Management**
   - Secure user registration, login, and profile management.
2. **Task Management**
   - Comprehensive CRUD operations for tasks.
3. **Filtering Support**
   - API endpoints to filter tasks based on specific criteria.
4. **Authentication**
   - JSON Web Tokens (JWT) for secure user sessions.

---

## 🛠️ Tech Stack

### Frontend:
- **Framework:** React.js (using Vite for fast build and development)
- **State Management:** Redux
- **Styling:** Tailwind CSS

### Backend:
- **Framework:** Node.js with Express.js
- **Authentication:** JWT
- **Database ORM:** Mongoose
- **Database:** MongoDB

---

## 🗂️ Database Schema

### Users Collection:
- `username` (String) – User's name.
- `email` (String) – User's email address.
- `password` (String) – Hashed password.

### Tasks Collection:
- `title` (String) – Task title.
- `description` (String) – Task details.
- `status` (String) – Task status (**To Do**, **In Progress**, **Completed**).
- `due_date` (Date) – Deadline for the task.
- `user_id` (ObjectId) – Reference to the user.

---

## 📂 API Endpoints

### User Management:
- `POST /api/register` – Register a new user.
- `POST /api/login` – User login and JWT generation.
- `GET /api/profile` – Fetch user details.

### Task Management:
- `POST /api/tasks` – Create a new task.
- `GET /api/tasks` – Fetch all tasks for a user.
- `PUT /api/tasks/:id` – Update a task by ID.
- `DELETE /api/tasks/:id` – Delete a task by ID.

### Task Filtering:
- `GET /api/tasks?status={status}` – Filter tasks by status.
- `GET /api/tasks?due_date={date}` – Filter tasks by due date.

---

## 📌 Key Notes

- **Functionality First:** The primary focus is on implementing the required features effectively.
- **Design:** Tailwind CSS ensures a modern and customizable UI.
- **Responsive Design:** Tailwind utilities make it easy to adapt to all screen sizes.

---

## 🛠️ Installation

### Prerequisites:
- Node.js
- MongoDB
- npm

### Steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/muhaammedsuhaib/ToDoListify.git
