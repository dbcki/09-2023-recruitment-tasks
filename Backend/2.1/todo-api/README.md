# Flask API Todo App

Simple Flask API for managing todo items.

## Installation

1. Clone the repository.

2. Create a virtual environment (optional but recommended).

3. Install the required dependencies from the "requirements.txt" file.

5. Start the Flask application.

6. Modify the "config.py" by adding your own secret key (optional but recommended).

## Usage

1. Access the API at `http://127.0.0.1:5000`.

2. Use tools like [Postman](https://www.postman.com/) to interact with the API.

## API Endpoints

- `GET /todos`: Get a list of all todo items.
- `GET /todos/<int:id>`: Get a specific todo item by ID.
- `POST /todos`: Create new todo items. (Accepts a JSON list of todo items)
- `PATCH /todos/<int:id>`: Update a specific todo item by ID.
- `DELETE /todos/<int:id>`: Delete a specific todo item by ID.

**Note**: The POST endpoint expects a JSON list in the following format:
   
```json
   [
     {
       "title": "Task 1",
       "completed": false
     },
     {
       "title": "Task 2",
       "completed": true
     }
   ]
```