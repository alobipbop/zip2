# Zip2 - Kairoly Planning API Documentation

## Overview

Zip2 is a **personal goal planning and tracking system** designed to help users develop themselves through systematic planning, goal-setting, task management, and progress tracking. The application features a full-stack monorepo architecture with React frontend and Express backend.

**Repository**: `alobipbop/zip2`  
**Description**: dành cho zip 2 (Vietnamese: for zip 2)  
**Language Composition**: TypeScript 99.7%, Other 0.3%

---

## 📋 Table of Contents

- [System Architecture](#system-architecture)
- [Base URL & Configuration](#base-url--configuration)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Authentication](#authentication)
- [Error Handling](#error-handling)
- [Development](#development)

---

## System Architecture

### Tech Stack

**Frontend:**
- React 19.0.0
- Vite 6.2.0 (Build tool)
- Tailwind CSS 4.1.14
- React Router DOM 7.13.1
- React Hook Form 7.71.2
- Recharts 3.8.0 (Charts)
- jsPDF 4.2.0 (PDF Export)

**Backend:**
- Express 4.21.2
- Node.js (LTS v18+)
- PostgreSQL 8.20.0
- Google GenAI 1.29.0

**Development:**
- TypeScript ~5.8.2
- TSX 4.21.0 (TypeScript executor)

### Project Structure

```
zip2/
├── src/                              # 🎨 FRONTEND (React + Vite)
│   ├── components/                   # Reusable UI components
│   ├── contexts/                     # Global state management
│   ├── pages/                        # Application pages
│   ├── App.tsx                       # Main app component & routing
│   ├── main.tsx                      # React entry point
│   └── index.css                     # Global styles (Tailwind)
│
├── server/                           # ⚙️ BACKEND (Express + PostgreSQL)
│   ├── routes/                       # API route definitions
│   │   ├── auth.routes.ts            # Authentication endpoints
│   │   ├── types.routes.ts           # Type management endpoints
│   │   ├── goals.routes.ts           # Goal endpoints
│   │   ├── tasks.routes.ts           # Task endpoints
│   │   └── trackings.routes.ts       # Tracking endpoints
│   │
│   ├── controllers/                  # Business logic & request handlers
│   ├── services/                     # Business logic & utilities
│   ├── db/                           # Database initialization
│   │   ├── init.ts                   # Schema creation
│   │   └── connection.ts             # PostgreSQL connection pool
│   ├── entities/                     # Data models
│   ├── middleware/                   # Express middleware
│   ├── types/                        # TypeScript type definitions
│   └── utils/                        # Utility functions
│
├── server.ts                         # Main Express server entry point
├── package.json                      # Dependencies & npm scripts
├── tsconfig.json                     # TypeScript configuration
├── vite.config.ts                    # Vite build configuration
└── index.html                        # HTML entry point
```

---

## Base URL & Configuration

### Server Setup

**Default Port**: `3000`

**Environment Variables** (`.env`):
```bash
DATABASE_URL=postgresql://username:password@localhost:5432/kairoly
PORT=3000
NODE_ENV=development
```

**Base API URL**: 
```
http://localhost:3000/api
```

### CORS Configuration

- Currently enabled for all origins
- **Production Recommendation**: Restrict to specific domains

### Starting the Server

```bash
# Development mode (with hot reload)
npm run dev

# Production mode
npm run build
npm start
```

---

## API Endpoints

All API endpoints are prefixed with `/api/`

### 1. Authentication Routes (`/api/auth`)

**File**: `server/routes/auth.routes.ts`

#### Health Check
```http
GET /api/auth/health
```

**Description**: Check database connection status  
**Response**: 
```json
{
  "status": "ok",
  "message": "Database connection successful"
}
```

---

#### User Login
```http
POST /api/auth/login
```

**Description**: Authenticate user and create session  
**Request Body**:
```json
{
  "email": "user@example.com",
  "password": "user_password"
}
```

**Response** (200):
```json
{
  "id": 1,
  "email": "user@example.com",
  "name": "John Doe",
  "avatar": "https://example.com/avatar.jpg",
  "age": 25,
  "gender": "male",
  "last_login": "2026-03-18T10:30:00Z",
  "created_at": "2026-01-15T08:00:00Z"
}
```

---

#### Update User Profile
```http
PUT /api/auth/:id
```

**Description**: Update user profile information  
**Parameters**:
- `id` (path): User ID

**Request Body**:
```json
{
  "name": "Jane Doe",
  "age": 26,
  "gender": "female",
  "avatar": "https://example.com/new-avatar.jpg"
}
```

**Response** (200):
```json
{
  "id": 1,
  "email": "user@example.com",
  "name": "Jane Doe",
  "age": 26,
  "gender": "female",
  "avatar": "https://example.com/new-avatar.jpg",
  "updated_at": "2026-03-18T10:35:00Z"
}
```

---

### 2. Types Routes (`/api/types`)

**File**: `server/routes/types.routes.ts`

Types are categories for tasks with custom colors and weights for priority/importance management.

#### Get All Types
```http
GET /api/types
```

**Description**: Retrieve all task types for the user  
**Query Parameters**:
- `userId` (optional): Filter by user ID

**Response** (200):
```json
[
  {
    "id": 1,
    "user_id": 1,
    "name": "Work",
    "color": "#ff6b6b",
    "weight": 10,
    "created_at": "2026-02-01T08:00:00Z"
  },
  {
    "id": 2,
    "user_id": 1,
    "name": "Health",
    "color": "#51cf66",
    "weight": 8,
    "created_at": "2026-02-05T09:30:00Z"
  }
]
```

---

#### Create Type
```http
POST /api/types
```

**Description**: Create a new task type  
**Request Body**:
```json
{
  "user_id": 1,
  "name": "Personal Development",
  "color": "#4ecdc4",
  "weight": 9
}
```

**Response** (201):
```json
{
  "id": 3,
  "user_id": 1,
  "name": "Personal Development",
  "color": "#4ecdc4",
  "weight": 9,
  "created_at": "2026-03-18T10:00:00Z"
}
```

---

#### Update Type
```http
PUT /api/types/:id
```

**Description**: Update a task type  
**Parameters**:
- `id` (path): Type ID

**Request Body**:
```json
{
  "name": "Work & Career",
  "color": "#ff8787",
  "weight": 11
}
```

**Response** (200):
```json
{
  "id": 1,
  "user_id": 1,
  "name": "Work & Career",
  "color": "#ff8787",
  "weight": 11,
  "updated_at": "2026-03-18T10:15:00Z"
}
```

---

#### Delete Type
```http
DELETE /api/types/:id
```

**Description**: Delete a task type  
**Parameters**:
- `id` (path): Type ID

**Response** (200):
```json
{
  "message": "Type deleted successfully",
  "id": 1
}
```

---

### 3. Goals Routes (`/api/goals`)

**File**: `server/routes/goals.routes.ts`

Goals are high-level objectives that users want to achieve.

#### Get All Goals
```http
GET /api/goals
```

**Description**: Retrieve all goals for the user  
**Query Parameters**:
- `userId` (optional): Filter by user ID
- `status` (optional): Filter by status (active, completed, archived)

**Response** (200):
```json
[
  {
    "id": 1,
    "user_id": 1,
    "title": "Learn TypeScript",
    "description": "Master TypeScript for web development",
    "status": "active",
    "start_date": "2026-01-01T00:00:00Z",
    "end_date": "2026-06-30T23:59:59Z",
    "created_at": "2026-01-10T08:00:00Z"
  }
]
```

---

#### Get Single Goal
```http
GET /api/goals/:id
```

**Description**: Retrieve a specific goal with all its tasks  
**Parameters**:
- `id` (path): Goal ID

**Response** (200):
```json
{
  "id": 1,
  "user_id": 1,
  "title": "Learn TypeScript",
  "description": "Master TypeScript for web development",
  "status": "active",
  "start_date": "2026-01-01T00:00:00Z",
  "end_date": "2026-06-30T23:59:59Z",
  "created_at": "2026-01-10T08:00:00Z",
  "tasks": []
}
```

---

#### Create Goal
```http
POST /api/goals
```

**Description**: Create a new goal  
**Request Body**:
```json
{
  "user_id": 1,
  "title": "Complete Project X",
  "description": "Finish the project management application",
  "start_date": "2026-03-20T00:00:00Z",
  "end_date": "2026-05-20T23:59:59Z"
}
```

**Response** (201):
```json
{
  "id": 2,
  "user_id": 1,
  "title": "Complete Project X",
  "description": "Finish the project management application",
  "status": "active",
  "start_date": "2026-03-20T00:00:00Z",
  "end_date": "2026-05-20T23:59:59Z",
  "created_at": "2026-03-18T10:00:00Z"
}
```

---

#### Update Goal
```http
PUT /api/goals/:id
```

**Description**: Update goal information  
**Parameters**:
- `id` (path): Goal ID

**Request Body**:
```json
{
  "title": "Complete Project X - Phase 2",
  "description": "Updated description",
  "status": "completed",
  "end_date": "2026-04-20T23:59:59Z"
}
```

**Response** (200):
```json
{
  "id": 2,
  "user_id": 1,
  "title": "Complete Project X - Phase 2",
  "description": "Updated description",
  "status": "completed",
  "start_date": "2026-03-20T00:00:00Z",
  "end_date": "2026-04-20T23:59:59Z",
  "updated_at": "2026-03-18T10:30:00Z"
}
```

---

#### Delete Goal
```http
DELETE /api/goals/:id
```

**Description**: Delete a goal (cascades to delete related tasks)  
**Parameters**:
- `id` (path): Goal ID

**Response** (200):
```json
{
  "message": "Goal deleted successfully",
  "id": 2
}
```

---

### 4. Tasks Routes (`/api/goals/:goalId/tasks`, `/api/tasks`)

**File**: `server/routes/tasks.routes.ts`

Tasks are specific, actionable items that contribute to achieving a goal.

#### Get Tasks for Goal
```http
GET /api/goals/:goalId/tasks
```

**Description**: Retrieve all tasks for a specific goal  
**Parameters**:
- `goalId` (path): Goal ID

**Response** (200):
```json
[
  {
    "id": 1,
    "goal_id": 1,
    "type_id": 1,
    "title": "Set up project repository",
    "description": "Initialize git repo and setup CI/CD",
    "status": 1,
    "unit": "tasks",
    "target_value": 1,
    "target_total": 1,
    "created_at": "2026-02-01T08:00:00Z"
  }
]
```

---

#### Create Task
```http
POST /api/goals/:goalId/tasks
```

**Description**: Create a new task for a goal  
**Parameters**:
- `goalId` (path): Goal ID

**Request Body**:
```json
{
  "title": "Complete API documentation",
  "description": "Write comprehensive API docs",
  "type_id": 1,
  "unit": "pages",
  "target_value": 10,
  "target_total": 50
}
```

**Response** (201):
```json
{
  "id": 2,
  "goal_id": 1,
  "type_id": 1,
  "title": "Complete API documentation",
  "description": "Write comprehensive API docs",
  "status": 1,
  "unit": "pages",
  "target_value": 10,
  "target_total": 50,
  "created_at": "2026-03-18T10:00:00Z"
}
```

---

#### Update Task
```http
PUT /api/tasks/:id
```

**Description**: Update task information  
**Parameters**:
- `id` (path): Task ID

**Request Body**:
```json
{
  "title": "Complete API documentation - Final",
  "status": 2,
  "target_value": 50,
  "target_total": 50
}
```

**Response** (200):
```json
{
  "id": 2,
  "goal_id": 1,
  "type_id": 1,
  "title": "Complete API documentation - Final",
  "status": 2,
  "unit": "pages",
  "target_value": 50,
  "target_total": 50,
  "updated_at": "2026-03-18T11:00:00Z"
}
```

---

#### Delete Task
```http
DELETE /api/tasks/:id
```

**Description**: Delete a task  
**Parameters**:
- `id` (path): Task ID

**Response** (200):
```json
{
  "message": "Task deleted successfully",
  "id": 2
}
```

---

### 5. Trackings Routes (`/api/tasks/:taskId/trackings`)

**File**: `server/routes/trackings.routes.ts`

Trackings record progress/history of task completion over time.

#### Get Trackings for Task
```http
GET /api/tasks/:taskId/trackings
```

**Description**: Retrieve all tracking records for a task  
**Parameters**:
- `taskId` (path): Task ID

**Query Parameters**:
- `startDate` (optional): Filter from date
- `endDate` (optional): Filter to date

**Response** (200):
```json
[
  {
    "id": 1,
    "task_id": 2,
    "value": 5,
    "track_date": "2026-03-17T09:00:00Z",
    "track_note": "Completed first section",
    "created_at": "2026-03-17T09:15:00Z"
  },
  {
    "id": 2,
    "task_id": 2,
    "value": 10,
    "track_date": "2026-03-18T10:00:00Z",
    "track_note": "Completed second section",
    "created_at": "2026-03-18T10:15:00Z"
  }
]
```

---

#### Create Tracking Record
```http
POST /api/tasks/:taskId/trackings
```

**Description**: Add a new tracking/progress record  
**Parameters**:
- `taskId` (path): Task ID

**Request Body**:
```json
{
  "value": 15,
  "track_date": "2026-03-18T14:00:00Z",
  "track_note": "Completed third section"
}
```

**Response** (201):
```json
{
  "id": 3,
  "task_id": 2,
  "value": 15,
  "track_date": "2026-03-18T14:00:00Z",
  "track_note": "Completed third section",
  "created_at": "2026-03-18T14:05:00Z"
}
```

---

#### Delete Tracking Record
```http
DELETE /api/tasks/:taskId/trackings/:id
```

**Description**: Delete a tracking record  
**Parameters**:
- `taskId` (path): Task ID
- `id` (path): Tracking ID

**Response** (200):
```json
{
  "message": "Tracking record deleted successfully",
  "id": 3
}
```

---

## Database Schema

The system auto-initializes the following PostgreSQL tables on startup:

### users
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  avatar TEXT,
  age INTEGER,
  gender VARCHAR(50),
  last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**Fields**:
- `id`: Unique user identifier
- `email`: User email (unique)
- `name`: Full name
- `avatar`: Profile picture URL
- `age`: User age
- `gender`: User gender
- `last_login`: Last login timestamp
- `created_at`: Account creation timestamp

---

### types
```sql
CREATE TABLE types (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  color VARCHAR(50) DEFAULT '#ffdac1',
  weight NUMERIC DEFAULT 10,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**Fields**:
- `id`: Unique type identifier
- `user_id`: Owner user ID (foreign key)
- `name`: Type name (e.g., "Work", "Health")
- `color`: Hex color code for UI display
- `weight`: Priority/importance weight
- `created_at`: Creation timestamp

---

### goals
```sql
CREATE TABLE goals (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(200) NOT NULL,
  description TEXT,
  status VARCHAR(50) DEFAULT 'active',
  start_date TIMESTAMP,
  end_date TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**Fields**:
- `id`: Unique goal identifier
- `user_id`: Owner user ID (foreign key)
- `title`: Goal title
- `description`: Detailed description
- `status`: Goal status (active, completed, archived)
- `start_date`: Goal start date
- `end_date`: Goal target end date
- `created_at`: Creation timestamp

---

### tasks
```sql
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  goal_id INTEGER REFERENCES goals(id) ON DELETE CASCADE,
  type_id INTEGER REFERENCES types(id) ON DELETE SET NULL,
  title VARCHAR(200) NOT NULL,
  description TEXT,
  status INTEGER DEFAULT 1,
  unit VARCHAR(50),
  target_value NUMERIC,
  target_total NUMERIC,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**Fields**:
- `id`: Unique task identifier
- `goal_id`: Parent goal ID (foreign key)
- `type_id`: Task type ID (foreign key)
- `title`: Task title
- `description`: Task details
- `status`: Task status (1=not started, 2=in progress, 3=completed)
- `unit`: Measurement unit (e.g., "pages", "hours")
- `target_value`: Current progress value
- `target_total`: Total target value
- `created_at`: Creation timestamp

---

### trackings
```sql
CREATE TABLE trackings (
  id SERIAL PRIMARY KEY,
  task_id INTEGER REFERENCES tasks(id) ON DELETE CASCADE,
  value NUMERIC NOT NULL,
  track_date TIMESTAMP NOT NULL,
  track_note TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**Fields**:
- `id`: Unique tracking identifier
- `task_id`: Associated task ID (foreign key)
- `value`: Progress value recorded
- `track_date`: Date of tracking
- `track_note`: Optional notes
- `created_at`: Record creation timestamp

---

## Authentication

### Current Implementation

- **Method**: Session-based (POST `/api/auth/login`)
- **Session Storage**: Server-side
- **Password Security**: Not explicitly documented (should use bcrypt in production)

### Best Practices

1. **For Production**:
   - Implement JWT tokens or OAuth 2.0
   - Use HTTPS for all requests
   - Store passwords with bcrypt hashing
   - Implement rate limiting on login endpoint
   - Add refresh token mechanism

2. **Headers**:
   ```http
   Content-Type: application/json
   ```

3. **Session Management**:
   - Maintain `last_login` timestamp
   - Implement logout endpoint
   - Session timeout after inactivity

---

## Error Handling

### Error Response Format

All errors follow this standard format:

```json
{
  "status": "error",
  "message": "Error description",
  "code": "ERROR_CODE",
  "timestamp": "2026-03-18T10:30:00Z"
}
```

### Common HTTP Status Codes

| Code | Meaning | Example |
|------|---------|---------|
| 200 | OK | Successful GET/PUT |
| 201 | Created | Successful POST |
| 400 | Bad Request | Invalid data format |
| 401 | Unauthorized | Not authenticated |
| 403 | Forbidden | No permission |
| 404 | Not Found | Resource doesn't exist |
| 500 | Server Error | Database or server issue |

### Middleware

**Error Handler**: `server/middleware/errorHandler.js`
- Centralized error handling
- Logs errors for debugging
- Returns consistent error responses
- Must be registered last in middleware chain

---

## Development

### NPM Scripts

```bash
# Development mode (with hot reload & TypeScript compilation)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Preview production build locally
npm run preview

# Type checking
npm run lint

# Clean build artifacts
npm run clean
```

### Development Workflow

1. **Frontend Development**:
   - Files in `src/` automatically reload via Vite HMR
   - Edit components, pages, and contexts
   - Changes reflected instantly in browser

2. **Backend Development**:
   - Edit files in `server/`
   - Server automatically restarts via tsx watch
   - Test with Postman or curl

3. **Database Changes**:
   - Modify SQL in `server/db/init.ts`
   - Restart server to apply changes
   - Uses `CREATE TABLE IF NOT EXISTS` for safety

### Testing API Endpoints

**Using curl**:
```bash
# Get all goals
curl -X GET http://localhost:3000/api/goals

# Create a new type
curl -X POST http://localhost:3000/api/types \
  -H "Content-Type: application/json" \
  -d '{
    "user_id": 1,
    "name": "Fitness",
    "color": "#ff6b6b",
    "weight": 7
  }'

# Update a goal
curl -X PUT http://localhost:3000/api/goals/1 \
  -H "Content-Type: application/json" \
  -d '{"status": "completed"}'
```

**Using Postman**:
1. Create collection: "Zip2 API"
2. Set base URL: `http://localhost:3000/api`
3. Create requests for each endpoint
4. Use environment variables for dynamic data

---

## Features

### Core Functionality

✅ **User Management**
- User authentication
- Profile management
- Last login tracking

✅ **Goal Setting**
- Create and manage goals
- Track goal status
- Set timeframes

✅ **Task Management**
- Create tasks under goals
- Link tasks to types (categories)
- Set target values and units

✅ **Progress Tracking**
- Record daily/periodic progress
- Track multiple values per task
- Add notes to tracking records

✅ **Type Management**
- Custom task categories
- Color-coding for organization
- Weight/priority configuration

✅ **Data Export**
- PDF export (jsPDF)
- Charts and visualization (Recharts)

### Planned/Integration Features

- Google GenAI integration for smart recommendations
- Advanced analytics and reporting
- Mobile app support
- Real-time notifications

---

## Deployment

### Environment Requirements

- **Node.js**: v18 LTS or higher
- **PostgreSQL**: v12 or higher
- **npm**: 8.0 or higher

### Production Setup

1. **Environment Configuration**:
   ```bash
   NODE_ENV=production
   DATABASE_URL=postgresql://user:pass@prod-db:5432/kairoly
   PORT=3000
   ```

2. **Build Application**:
   ```bash
   npm run build
   ```

3. **Start Server**:
   ```bash
   npm start
   ```

4. **Configure Reverse Proxy** (nginx example):
   ```nginx
   server {
     listen 80;
     server_name api.example.com;
     
     location / {
       proxy_pass http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
     }
   }
   ```

---

## Support & Resources

- **Repository**: https://github.com/alobipbop/zip2
- **Issues**: Report bugs on GitHub Issues
- **Troubleshooting**:
  - Database connection: Verify PostgreSQL is running
  - Port conflicts: Change PORT env variable
  - Module not found: Run `npm install` again

---

## License

Personal/Learning Project - Customizable for your needs

---

**Last Updated**: March 18, 2026  
**API Version**: 1.0.0