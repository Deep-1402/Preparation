```
# MERN Project Complete Backend Analysis & Documentation

## Objective
Analyze this MERN stack project comprehensively and create detailed backend documentation with all features extracted.(Markdown File)

## Tasks to Complete:

### 1. PROJECT OVERVIEW ANALYSIS
- Scan the entire project structure
- Identify the tech stack and dependencies (package.json)
- Determine the project's main purpose and domain
- List all environment variables required (.env)
- Document database models and schemas

### 2. BACKEND DEEP ANALYSIS

#### A. Controllers Analysis
For EACH controller file, extract and document:
- Controller name and purpose
- All functions/methods inside
- HTTP methods used (GET, POST, PUT, DELETE, PATCH, etc.)
- Route endpoints associated
- Request parameters (params, query, body)
- Response format and status codes
- Error handling mechanisms
- Middleware used
- Authentication/Authorization requirements
- Database operations performed
- Business logic implemented

#### B. Routes Analysis
- List all API endpoints
- Group by feature/module
- Document request/response formats
- Note protected vs public routes

#### C. Models/Schemas Analysis
- All MongoDB models
- Schema fields and data types
- Validations and constraints
- Relationships between models
- Indexes and unique fields
- Virtual fields and methods

#### D. Middleware Analysis
- Authentication middleware
- Authorization middleware
- Validation middleware
- Error handling middleware
- Custom middleware functions

#### E. Services/Utils Analysis
- Helper functions
- Business logic services
- Third-party integrations
- Email/SMS services
- File upload handlers
- Payment integrations

### 3. FEATURES EXTRACTION
Create a comprehensive list of ALL features:
- User Management (signup, login, profile, etc.)
- CRUD operations for each entity
- Search and filtering capabilities
- Pagination
- File uploads
- Email notifications
- Payment processing
- Admin functionalities
- Reporting features
- Any unique features

### 4. GENERATE COMPLETE BACKEND.md FILE

The markdown file should include:

```markdown
# [Project Name] - Backend Documentation

## Table of Contents
1. Project Overview
2. Tech Stack
3. Project Structure
4. Environment Variables
5. Database Schema
6. API Endpoints
7. Controllers Documentation
8. Middleware
9. Services & Utils
10. Features List
11. Authentication & Authorization
12. Error Handling
13. Setup Instructions
14. API Usage Examples

## 1. Project Overview
[Detailed description of what the project does]

## 2. Tech Stack
- Node.js version
- Express.js version
- MongoDB/Mongoose
- Other major dependencies

## 3. Project Structure
```
backend/
├── controllers/
├── models/
├── routes/
├── middleware/
├── utils/
├── config/
└── server.js
```

## 4. Environment Variables
| Variable | Description | Required |
|----------|-------------|----------|
| PORT | Server port | Yes |
| MONGODB_URI | Database connection | Yes |
[Continue for all env vars]

## 5. Database Schema
### Model: User
```javascript
{
  field: type,
  // full schema
}
```

## 6. API Endpoints Summary
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | /api/auth/register | User registration | No |
[Continue for all endpoints]

## 7. Controllers Documentation

### UserController

#### Function: registerUser
- **Purpose**: Register new user
- **Route**: POST /api/auth/register
- **Request Body**:
```json
{
  "email": "string",
  "password": "string",
  "name": "string"
}
```
- **Response**:
```json
{
  "success": true,
  "user": {},
  "token": "jwt_token"
}
```
- **Validations**: Email format, password strength
- **Error Handling**: Duplicate email, validation errors

[Continue for EVERY controller function]

## 8. Middleware
[Document each middleware with purpose and usage]

## 9. Services & Utils
[Document helper functions and services]

## 10. Complete Features List
1. **User Authentication & Authorization**
   - User registration
   - User login
   - Password reset
   - Email verification
   
2. **[Feature Category]**
   - Sub-feature 1
   - Sub-feature 2

[Continue for all features]

## 11. Authentication & Authorization
[Explain JWT implementation, protected routes, roles]

## 12. Error Handling
[Document error handling strategy]

## 13. Setup Instructions
[Installation and running steps]

## 14. API Usage Examples
[Provide curl or Postman examples]
```

### 5. PROJECT SUMMARY OUTPUT
Provide a 2-3 paragraph executive summary covering:
- What the project does
- Main features
- Target users
- Technology used
- Scale and complexity

### 6. DETAILED DESCRIPTION
Provide a comprehensive 500+ word description including:
- Project purpose and problem it solves
- Complete feature breakdown
- Technical architecture
- Key functionalities
- Unique selling points
- Potential use cases

## Output Format:
1. First, provide the PROJECT SUMMARY
2. Then, provide the DETAILED DESCRIPTION
3. Finally, provide the complete BACKEND.md file content
4. Include a FEATURES CHECKLIST at the end

## Important Notes:
- DO NOT skip any controller function
- DO NOT miss any route
- DO NOT omit any feature, no matter how small
- Include code snippets where relevant
- Be specific with data types and formats
- Document all error cases
- Include validation rules
- Note all third-party services used

START ANALYSIS NOW.
```