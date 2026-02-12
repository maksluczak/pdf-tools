# PDF Tools & Compressor 

**A specialized toolkit for PDF generation and memory-efficient compression.** Built with a **React** frontend and a **Spring Boot** microservice to handle heavy file operations outside the browser's main thread.

**Live Demo:** ➡️ [https://pdf-tools-maksluczak.vercel.app/](https://pdf-tools-maksluczak.vercel.app/)

---

## Project Overview

PDF Tools is a full-stack utility designed to solve two common document problems: 

1.  **Dynamic PDF Generation:** Creating documents with real-time preview, custom font support, and adjustable layouts.
2.  **High-Performance Compression:** Offloading file processing to a dedicated Java backend to ensure the UI remains snappy even when handling large files.

---

## Tech Stack

### Frontend (The Editor)
* **React + Vite** – Fast, modern development environment.
* **Tailwind CSS** – Minimalist "Slate & Amber" UI design.
* **Lucide React** – Clean and consistent iconography.
* **jsPDF** – Client-side PDF generation for instant results.

### Backend (The Compressor)
* **Java & Spring Boot** – Robust microservice for file processing.
* **Maven** – Dependency and build management.
* **Stateless Processing** – Uses Java I/O Streams to handle ZIP compression in RAM, ensuring no user data is ever stored on the server's disk (privacy by design).

### Infrastructure & DevOps
* **Docker** – Multi-stage builds for a lightweight, production-ready container (~150MB).
* **Vercel** – Hosting the frontend application.
* **Render** – Hosting the Spring Boot microservice.

---

## Key Features

### Live PDF Editor
* **Real-time Preview:** See changes instantly as you type or adjust document settings.
* **Typography Control:** Custom font sizes and headers with full support for UTF-8 characters.
* **Layout Management:** Toggle between Portrait and Landscape modes with a single click.

### Stateless ZIP Compressor
* **In-Memory Processing:** Files are received as byte streams, zipped in RAM, and returned instantly to the user.
* **Privacy-First:** Since the service is stateless, files "exist" only during the request duration—no persistent storage involved.
* **Drag & Drop UI:** Built with `react-dropzone` for a seamless and modern user experience.
