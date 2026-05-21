# Simple Calculator API

A lightweight Node.js calculator API built for learning CI/CD pipelines and Docker containerization.

## Features

- ✅ Add, subtract, multiply, divide operations
- ✅ Health check endpoint
- ✅ Input validation
- ✅ Docker containerization
- ✅ GitHub Actions CI/CD pipeline
- ✅ Unit tests with Jest

## Prerequisites

- Node.js 18+ (for local development)
- Docker (for containerization)
- Git

## Installation

```bash
npm install
```

## Running Locally

```bash
npm start
```

The API will be available at `http://localhost:3000`

## Running Tests

```bash
npm test
```

## API Endpoints

### Health Check
```bash
GET /health
```

### Add
```bash
POST /add
Content-Type: application/json

{
  "a": 5,
  "b": 3
}
```
Response: `{ "result": 8 }`

### Subtract
```bash
POST /subtract
Content-Type: application/json

{
  "a": 10,
  "b": 4
}
```
Response: `{ "result": 6 }`

### Multiply
```bash
POST /multiply
Content-Type: application/json

{
  "a": 6,
  "b": 7
}
```
Response: `{ "result": 42 }`

### Divide
```bash
POST /divide
Content-Type: application/json

{
  "a": 20,
  "b": 4
}
```
Response: `{ "result": 5 }`

### Power
```bash
POST /power
Content-Type: application/json

{
  "a": 2,
  "b": 3
}
```
Response: `{ "result": 8 }`

## Docker

### Build Image
```bash
docker build -t calculator:latest .
```

### Run Container
```bash
docker run -p 3000:3000 calculator:latest
```

## CI/CD Pipeline

This project uses GitHub Actions for:
- Running automated tests on push and pull requests
- Building Docker images
- Caching for faster builds

The workflow is defined in `.github/workflows/ci.yml`

## Project Structure

```
.
├── app.js                 # Main Express application
├── app.test.js           # Jest unit tests
├── Dockerfile            # Docker configuration
├── .dockerignore          # Files to exclude from Docker image
├── .gitignore            # Git ignore rules
├── package.json          # Node.js dependencies
├── README.md             # This file
└── .github/
    └── workflows/
        └── ci.yml        # GitHub Actions CI/CD pipeline
```

## License

MIT

---
**Status:** Ready for CI/CD learning! 🚀
