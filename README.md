React User CRUD Application

This project is a React-based CRUD (Create, Read, Update, Delete) web application that manages user data using an API. The application is built with scalability and extensibility in mind, allowing new fields to be added with minimal code changes.

--------------------------------------------------

FEATURES

- Create new users
- View all users
- Update user details
- Delete users with confirmation
- Input validation and required field enforcement
- Configuration-driven form architecture
- Clean and user-friendly UI
- Success feedback messages for user actions

--------------------------------------------------

TECH STACK

- React (Vite)
- JavaScript (ES6+)
- Material UI
- Axios
- JSON Server (Mock API)
- Vercel / Render (Deployment)

--------------------------------------------------

SETUP INSTRUCTIONS

1. Clone Repository

git clone https://github.com/umamadhuri27/user-crud.git
cd user-crud

--------------------------------------------------

2. Install Dependencies

npm install

--------------------------------------------------

3. Run Mock API Server

npm run server

Mock API will run at:
http://localhost:3001/users

--------------------------------------------------

4. Run React Application

npm run dev

Application will run at:
http://localhost:5173

--------------------------------------------------

CRUD FUNCTIONALITY

Create
Users can be created using the dynamic form.

Read
All users are displayed in a structured list.

Update
Users can edit existing user information.

Delete
Users can be deleted with confirmation prompt.

--------------------------------------------------

FORM VALIDATION

The application supports:

- Required field validation
- Email format validation
- Phone number validation

Validation logic is centralized and reusable.

--------------------------------------------------

EXTENSIBILITY APPROACH

The form is built using a configuration-driven schema.

File Location:
src/config/userFormConfig.js

Example Field Structure:

name: "firstName"
label: "First Name"
type: "text"
required: true

--------------------------------------------------

HOW TO ADD NEW FIELD

1. Open file:
src/config/userFormConfig.js

2. Add new object:

name: "address"
label: "Address"
type: "text"
required: false

The UI and validation will automatically support the new field without major code changes.

--------------------------------------------------

API INTEGRATION

Since no backend API was provided, JSON Server was used to simulate REST API endpoints.

Supported Endpoints:

GET    /users
POST   /users
PUT    /users/:id
DELETE /users/:id

--------------------------------------------------

MOCK API SETUP

The project uses db.json file as database.

Example:

users: []

--------------------------------------------------

DESIGN DECISIONS

- Used configuration-driven form to improve extensibility
- Separated validation logic for maintainability
- Created service layer for API calls
- Used custom hooks for user data management
- Added delete confirmation for better user experience
- Implemented success feedback messages

--------------------------------------------------

DEPLOYMENT

Frontend Deployment
Hosted using Vercel.

Backend Mock API
Hosted using Render.

--------------------------------------------------

LIVE DEMO

Frontend:

Backend API:
https://user-crud-api-ec1b.onrender.com/users

--------------------------------------------------

Author

Developed as part of a technical assignment demonstrating React architecture, API integration, and extensible UI design.
