# Seismehub Project

## Overview
This project consists of both backend and frontend components. The backend is implemented using Go and Pocketbase, which has an embedded SQLite database. The frontend is a web-based application.

## Pre-requisites

### Backend
- Go programming language
- Pocketbase executable
# Frontend
- Nodejs
- NPM

## Getting Started

### Clone the Repository
First, clone the repository to your local machine:

````
git clone https://github.com/yourusername/seismehub.git
````

### Setting Up the Frontend
Navigate to the frontend directory and install the required packages.

````
npm install
````

### Setting Up the Backend

- Download and install Go from the official website. [ASP.NET Core](https://github.com/aspnet/Home)
- Install dependencies (if any).
- Download Pocketbase and add the executable to your PATH environment variable.
- Run the main program.

There's no need to install any databases as Pocketbase uses an internal SQLite database.

### Running Migrations
Run the following command to migrate the database.

````
pocketbase migrate
````

### Build the Backend Project
Run the following command to build the backend.

````
go build
````

### Run the Backend
To run the backend server, execute:

````
./seismehub-be serve
````

You will see output similar to the following, indicating that the server has started:

````
Server started at http://127.0.0.1:8090
├─ REST API: http://127.0.0.1:8090/api/
└─ Admin UI: http://127.0.0.1:8090/_/
````

## Contributions
Please feel free to submit enhancement or features you think are important or even better join the Seismehub conversation and/or contact Abdelmalek Elmellouki to get a the urgent tasks to start on.