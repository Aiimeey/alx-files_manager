# Files Manager API

A simple RESTful API for managing users and files using Redis for caching and MongoDB for data storage. This application provides endpoints for user authentication and statistics retrieval.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)

## Features

- User registration with email and password (hashed).
- User authentication using Basic Auth and token management.
- Redis caching for session management.
- MongoDB for data storage.
- Simple status and statistics endpoints.

## Technologies

- Node.js
- Express
- MongoDB
- Redis
- SHA1 for password hashing
- UUID for token generation

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (>= 14.x)
- MongoDB (running instance)
- Redis (running instance)
