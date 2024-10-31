# Blog Application

A full-stack blogging platform built with React and Node.js that allows users to create, read, update, and delete blog posts.

## Features

- 🔐 User Authentication (Login/Signup)
- 📝 Create and Edit Blog Posts
- 🖼️ Image Support for Blog Posts
- 📱 Responsive Design
- 🎨 Custom Styling
- 📊 User Dashboard
- 🔍 View All Blogs
- ⚡ Real-time Updates

## Tech Stack

### Frontend
- React.js
- React Router for navigation
- Axios for API calls
- CSS for styling

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository

   git clone https://github.com/Ashish-jukaria/Blogger.git
   cd BlogApp
2. Install Backend Dependencies
   cd Backend
   npm install

3. Install Frontend Dependencies
   cd Frontend/BlogApp
   npm install

4. Set up environment variables
   Create a `.env` file in the Backend directory:
   MONGO_CONNECTION=your_mongodb_connection_string
   SECRET_KEY=your_jwt_secret_key

5. Start the Backend Server
   cd Backend
   npm start
6. Start the Frontend Development Server
   cd Frontend/BlogApp
   npm run dev


## Project Structure

   BlogApp/
├── Backend/
│ ├── index.js
│ ├── auth.js
│ └── db.js
├── Frontend/
│ └── BlogApp/
│ ├── src/
│ │ ├── Components/
│ │ │ ├── Blog.jsx
│ │ │ ├── BlogEdit.jsx
│ │ │ └── Dashboard.jsx
│ │ └── Styling/
│ └── package.json
└── README.md



## API Endpoints

### Authentication
- `POST /signup` - Register new user
- `POST /signin` - Login user

### Blogs
- `GET /getallBlogs` - Get all blogs
- `GET /getuserblog` - Get user's blogs
- `POST /createblog` - Create new blog
- `PUT /updateblog/:id` - Update blog
- `DELETE /deleteblog/:id` - Delete blog

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Ashish Jukaria - [GitHub](https://github.com/Ashish-jukaria)

Project Link: [https://github.com/Ashish-jukaria/Blogger](https://github.com/Ashish-jukaria/Blogger)
