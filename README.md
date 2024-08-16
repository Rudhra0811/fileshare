# Cool File Sharing App

## Overview

This is a simple file sharing application built with React for the frontend and Express.js for the backend. It allows users to upload, download, and manage files through a user-friendly interface.

## Features

- Drag and drop file upload
- File list with type icons
- File search functionality
- Download and delete files
- Real-time feedback with Snackbar notifications

## Tech Stack

- Frontend: React, Material-UI, Axios
- Backend: Express.js, Multer
- Database: File system (for simplicity)

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

## Installation

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the backend server:
   ```
   npm run dev
   ```

The server will start on `http://localhost:5000`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the frontend development server:
   ```
   npm run dev
   ```

The application will be available at `http://localhost:5173`.

## Usage

1. Open your browser and go to `http://localhost:5173`.
2. Use the drag and drop area or click to select files for upload.
3. View the list of uploaded files, search for specific files, or use the download and delete options.

## API Endpoints

- `POST /upload`: Upload file(s)
- `GET /files`: Get list of all files
- `GET /download/:id`: Download a specific file
- `DELETE /files/:id`: Delete a specific file

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
