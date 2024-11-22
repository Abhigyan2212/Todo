# Todo List Application

This project is a simple **Todo List Application** built using **Node.js**, **Express.js**, and **MongoDB**. The application allows users to add, view, and delete tasks, each with a title and description. All tasks are stored in **MongoDB**.

## Features

- **Add Todo**: Users can add tasks with a title and description.
- **Delete Todo**: Users can remove tasks from the list.
- **Persistent Storage**: Data is stored in MongoDB, allowing the tasks to persist.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (MongoDB Compass for database management)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/todo-list.git
cd todo-list
2. Install Dependencies
Make sure you have Node.js installed. Then, run the following command to install all necessary dependencies: npm install
3. Configure MongoDB
Install MongoDB on your system if it isn't installed already. You can either set up a local MongoDB instance or use MongoDB Atlas for a cloud database.

For a local MongoDB instance, use the following URL in your app.js: mongodb://localhost:27017/todo-app
If you’re using MongoDB Atlas, replace it with the appropriate connection string provided by Atlas.

4. Start the Application
After installing dependencies and setting up MongoDB, start the server: node app.js
This will start the server, and you should be able to access the Todo List app at http://localhost:3000.

5. Using the Application
Add a Task: Fill in the form with a title and description, then click the "Add Todo" button to submit the task.
Delete a Task: Click the "Delete" button next to a task to remove it from the list.

Frontend (Todo List Display)
This screenshot shows the frontend of the Todo List application, displaying the tasks with their titles and descriptions.
![Frontend Page](images/frontend-screenshot.png)

MongoDB Compass (Backend)
This screenshot shows the MongoDB Compass view, where the Todo tasks are stored in the todos collection within the todo-app database.
![Mongo Page](images/mongo-compass-screenshot.png)

Conclusion
This Todo List application provides a basic structure for managing tasks using a simple backend with Node.js and a MongoDB database. It offers the functionality to add, view, and delete tasks, and can easily be extended with more features such as editing tasks or adding due dates.

Feel free to fork this repository and modify it for your own projects!



