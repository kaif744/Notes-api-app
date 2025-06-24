# 📝 Notes API App

A full-stack Notes application where users can create, read, update, and delete notes. Built using:

- **Node.js + Express** (Backend)
- **MongoDB + Mongoose** (Database)
- **HTML + JavaScript (Fetch API)** (Frontend)

---

## 🔗 GitHub Repository

👉 [https://github.com/kaif744/Notes-api-app](https://github.com/kaif744/Notes-api-app)

---

## 📌 1. APIs and Their Functionality

| Method | Endpoint           | Description             |
|--------|--------------------|-------------------------|
| GET    | `/api/notes`       | Get all notes           |
| GET    | `/api/notes/:id`   | Get a note by ID        |
| POST   | `/api/notes`       | Create a new note       |
| PUT    | `/api/notes/:id`   | Update a note by ID     |
| DELETE | `/api/notes/:id`   | Delete a note by ID     |

> All endpoints return JSON and use standard HTTP status codes.

---

## 🗃️ 2. Database Used

- **MongoDB Atlas** is used as the cloud-hosted database.
- Mongoose ODM handles database operations.
- The `Note` schema includes:
  - `title` (String, required)
  - `content` (String, required)

Connection is done using environment variables stored in `.env`:

```env
PORT=5000
MONGO_URI=mongodb+srv://<your-db-uri>
```

#⚙️ 3. How to Run the Server
git clone https://github.com/kaif744/Notes-api-app.git
cd Notes-api-app
npm install

Create a .env file:
env
PORT=5000
MONGO_URI=mongodb+srv://<your-db-uri>

Start the server:
npm run dev

Visit: http://localhost:5000

#📬 5. How to Interact with the API
Postman

Create Note
Request->
-Method: POST
-URL: http://localhost:5000/api/notes
-Body (JSON):
```json
{
  "title": "My First Note",
  "content": "This is a test note."
}
```
 Response->

 ```json
 {
  "_id": "665ecaf81d5f230e98aa24a2",
  "title": "Meeting Notes",
  "content": "Discuss project deadlines.",
  "createdAt": "2025-06-24T10:35:00.123Z",
  "updatedAt": "2025-06-24T10:35:00.123Z",
  "__v": 0
}
```
