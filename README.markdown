# React Login Page

React Login Page is a visually stunning web application featuring a login and signup system with a cosmic-themed user interface. Built with React, Tailwind CSS, and custom animations, it provides an engaging user experience. The backend, powered by Node.js and Express, handles user authentication and stores data in a JSON file.

## Features

- **Cosmic UI**: Animated gradient background with stars, orbs, and an aurora effect.
- **Authentication System**: Login and signup forms with client-side validation and server-side processing.
- **Responsive Layout**: Optimized for various devices using Tailwind CSS.
- **Interactive Effects**: Cursor trail and animated buttons for a dynamic experience.
- **Data Storage**: User data persisted in a `users.json` file.

## Technologies Used

- **Frontend**:
  - React 18 (via CDN)
  - Tailwind CSS (via CDN)
  - Babel (for JSX support via CDN)
  - Custom CSS animations
- **Backend**:
  - Node.js
  - Express.js
  - CORS
  - File-based storage (`users.json`)
- **Other**:
  - Google Fonts (Inter)
  - JavaScript for cursor trail and animations

## Prerequisites

Ensure the following are installed before running the project:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (included with Node.js)
- A modern web browser (e.g., Chrome, Firefox)

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/react-login-page.git
   cd react-login-page
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Create `users.json`**:
   - Create a `users.json` file in the root directory. Start with an empty array:
     ```json
     []
     ```

4. **Run the Server**:
   ```bash
   npm start
   ```
   The server will be available at `http://localhost:3000`.

5. **Access the Application**:
   - Open `http://localhost:3000` in your browser to access the login/signup page.
   - After logging in, you’ll be redirected to the home page.

## Project Structure

```
react-login-page/
├── build/                # Static files (index.html, home.html)
├── users.json            # User data storage
├── server.js             # Express server
├── package.json          # Node.js dependencies and scripts
└── README.md             # Project documentation
```
![image](https://github.com/user-attachments/assets/99f3fe49-095a-4e69-8402-a1c1bffae746)
![image](https://github.com/user-attachments/assets/eea46b2a-d481-4052-b740-9ca958d7bf82)


## Usage

1. **Signup**:
   - Visit the signup form at `http://localhost:3000`.
   - Enter details (username, email, password, age, country, phone, favorite color).
   - Submit to create an account, then switch to the login form.

2. **Login**:
   - Enter your email and password.
   - On successful login, you’ll be redirected to `home.html`, which displays a welcome message.

3. **Logout**:
   - Click the "Logout" button on the home page to return to the login/signup page.

## Example User

For testing, create a user via the signup form or add one to `users.json`. Example:

```json
[
  {
    "username": "TestUser",
    "email": "test@example.com",
    "password": "test123",
    "age": "25",
    "country": "USA",
    "phone": "1234567890",
    "favoriteColor": "Blue",
    "createdAt": "2025-05-03T14:15:52.059Z"
  }
]
```

## Development

- **Frontend**:
  - Modify `index.html` for login/signup (React components in `<script type="text/babel">`).
  - Update `home.html` for the welcome page.
  - Styles use Tailwind CSS and custom CSS in `<style>` tags.

- **Backend**:
  - Edit `server.js` for API endpoints (`/api/login`, `/api/signup`).
  - User data is managed in `users.json`.

- **Local Development**:
  - Run `npm start` to serve the app.
  - Changes to HTML files are reflected automatically.

## Deployment

To deploy the application:

1. **Prepare Files**:
   - Ensure `build/` contains updated `index.html` and `home.html`.
   - No build step is required since React is loaded via CDN.

2. **Deploy Backend**:
   - Host `server.js`, `package.json`, and `users.json` on a Node.js platform (e.g., Render, Heroku, Vercel).
   - Update API URLs in `index.html` (replace `http://localhost:3000/api/` with your deployed API URL).

3. **Deploy Frontend**:
   - Serve the `build/` directory on a static host (e.g., Netlify, Vercel, GitHub Pages).
   - Ensure the backend API is accessible (CORS is enabled).

## Notes

- **Security**: Passwords are stored in plain text in `users.json`. For production, implement password hashing (e.g., bcrypt) and use a database (e.g., MongoDB).
- **CDN Dependencies**: React, Tailwind CSS, and Babel are loaded via CDNs. For production, consider bundling with Webpack or Vite.
- **CORS**: The server allows all origins. Restrict to specific domains in production.
- **Cloudflare Script**: Both HTML files include a Cloudflare challenge script, which may be hosting-specific. Remove or configure as needed.

## Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a branch (`git checkout -b feature/your-feature`).
3. Make changes and commit (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](#) file for details.

## Contact

For questions or feedback, contact nithishkathiravan123@gmail.com or open an issue on GitHub.
