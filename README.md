# Project Overview

This project is a **full-stack web application** consisting of two main components:
- **Frontend**: Built with Typescript and React, it provides a user-friendly interface for interacting with the backend.
- **Backend**: A Python-powered API server that handles database operations.

The following instructions will guide you through setting up and running the project.

---

## Prerequisites

Ensure you have the following installed on your system:
- **Node.js** (v16 or higher) and npm
- **Python** (v3.10 or higher)
- **pip** (Python package manager)

---

## How to Run the Project

### 1. Setup and Run the Frontend

Navigate to the `frontend` directory and install the required dependencies:

```bash
cd frontend && npm install
```

Run the development server for the frontend:

```bash
npm run dev
```

This command starts the frontend development server, allowing you to access the application in your browser (at `http://localhost:5173`). Run backend before starting the front end to get information from database.

---

### 2. Setup and Run the Backend

Navigate to the `backend` directory:

```bash
cd backend
```

Create a Python virtual environment for package management:

```bash
python3.10 -m venv backend_venv
```

Activate the virtual environment:

- On **Linux/macOS**:
  ```bash
  source backend_venv/bin/activate
  ```

- On **Windows** (Command Prompt):
  ```bash
  backend_venv\Scripts\activate
  ```

Install the required Python dependencies:

```bash
pip install -r requirement.txt
```

---

## Running the Entire Application

1. Start the **frontend** using `npm run dev` (as explained above).
2. Start the **backend** by running the appropriate script (e.g., `python app.py` or whatever the entry point is, if specified).

Once both are running, you can access the full application in your browser.
