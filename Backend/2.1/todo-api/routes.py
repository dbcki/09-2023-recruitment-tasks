from flask import request, jsonify
from app import app, db
from models import Task

@app.route('/tasks', methods=['GET'])
def get_tasks():
    tasks = Task.query.all()
    task_list = [{"id": task.id, "title": task.title, "completed": task.completed} for task in tasks]
    return jsonify(task_list)

@app.route('/tasks/<int:task_id>', methods=['GET'])
def get_task(task_id):
    task = Task.query.get(task_id)

    if task:
        return jsonify({"id": task.id, "title": task.title, "completed": task.completed})
    else:
        return jsonify({"error": "Task not found"}), 404

@app.route('/tasks', methods=['POST'])
def create_tasks():
    data = request.get_json()

    if not isinstance(data, list):
        return jsonify({"error": "Input data must be a list of tasks"}), 400

    for task_data in data:
        title = task_data.get('title')
        completed = task_data.get('completed')

        if title is None or not isinstance(title, str) or len(title.strip()) == 0:
            return jsonify({"error": "Title is required and must be a non-empty string"}), 400

        if completed is None or not isinstance(completed, bool):
            return jsonify({"error": "Completed is required and must be a boolean value"}), 400

        new_task = Task(title=title, completed=completed)
        db.session.add(new_task)

    db.session.commit()

    return jsonify({"message": "Tasks created successfully"}), 201

@app.route('/tasks/<int:task_id>', methods=['PATCH'])
def update_task(task_id):
    task = Task.query.get(task_id)

    if task:
        data = request.get_json()
        title = data.get('title')
        completed = data.get('completed')

        if title:
            task.title = title
        if completed is not None:
            task.completed = completed

        db.session.commit()
        return jsonify({"message": "Task updated successfully"})
    else:
        return jsonify({"error": "Task not found"}), 404

@app.route('/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    task = Task.query.get(task_id)

    if task:
        db.session.delete(task)
        db.session.commit()
        return jsonify({"message": "Task deleted successfully"})
    else:
        return jsonify({"error": "Task not found"}), 404