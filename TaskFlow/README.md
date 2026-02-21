# TaskFlow

TaskFlow is a microservices-based application for task management and team collaboration.

## Setup Instructions

1. Clone the repository.
2. Navigate to each service directory and run `npm install` to install dependencies.
3. Set up MongoDB databases for user and task data.
4. Configure environment variables as per `.env.example` files.
5. Use Docker and Kubernetes for deployment.

## Services
- Frontend: React SPA
- Authentication Service: Node.js, Express
- Task Service: Node.js, Express
- Assignment Service: Node.js, Express
- Reminder Service: Node.js, Express
- Dashboard Service: Node.js, Express

## Deployment
Use Docker and Kubernetes for container orchestration. Jenkins for CI/CD.