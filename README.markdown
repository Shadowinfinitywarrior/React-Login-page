# Starlit Canvas

Starlit Canvas is a visually captivating web application featuring a login and signup system with a cosmic-themed user interface. The frontend is built with React, Tailwind CSS, and custom animations, while the backend uses Node.js with Express to handle user authentication and data storage in a JSON file.

## Features

- **Dynamic UI**: A gradient background with animated stars, orbs, and an aurora effect.
- **Authentication**: Login and signup forms with client-side validation and server-side processing.
- **Responsive Design**: Optimized for various screen sizes using Tailwind CSS.
- **Interactive Elements**: Cursor trail effect and animated buttons for enhanced user experience.
- **Data Persistence**: User data stored in a `users.json` file on the server.

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

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A modern web browser (e.g., Chrome, Firefox)

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/starlit-canvas.git
   cd starlit-canvas
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Create `users.json`**:
   - Ensure a `users.json` file exists in the root directory. You can start with an empty array:
     ```json
     []
     ```

4. **Run the Server**:
   ```bash
   npm start
   ```
   The server will run at `http://localhost:3000`.

5. **Access the Application**:
   - Open `http://localhost:3000` in your browser to view the login/signup page.
   - After logging in, you will be redirected to the home page.

## Project Structure

```
starlit-canvas/
├── build/                # Static files (index.html, home.html)
├── users.json            # User data storage
├── server.js             # Express server
├── package.json          # Node.js dependencies and scripts
└── README.md             # Project documentation
```

## Usage

1. **Signup**:
   - Navigate to the signup form (`http://localhost:3000`).
   - Enter details (username, email, password, age, country, phone, favorite color).
   - Submit to create an account. You'll be redirected to the login form.

2. **Login**:
   - Enter your email and password.
   - Upon successful login, you'll be redirected to `home.html`, displaying a welcome message.

3. **Logout**:
   - Click the "Logout" button on the home page to return to the login/signup page.

## Example User

For testing, you can use the following credentials (based on `users.json`):

- **Email**: `nithishkathiravan123@gmail.com`
- **Password**: `12345`

## Development

- **Frontend**:
  - Edit `index.html` for the login/signup page (React components in `<script type="text/babel">`).
  - Edit `home.html` for the welcome page.
  - Styles are in the `<style>` tags of each HTML file, using Tailwind CSS and custom CSS.

- **Backend**:
  - Modify `server.js` for API endpoints (`/api/login`, `/api/signup`).
  - User data is stored in `users.json`.

- **Running Locally**:
  - Ensure the server is running (`npm start`).
  - Changes to HTML files are served automatically by Express.

## Deployment

To deploy the application:

1. **Build**:
   - The `build/` directory contains `index.html` and `home.html`. Ensure these are up-to-date.
   - No additional build step is needed since React is loaded via CDN.

2. **Host the Backend**:
   - Deploy `server.js`, `package.json`, and `users.json` to a Node.js-compatible platform (e.g., Render, Heroku, Vercel).
   - Update the API URLs in `index.html` (e.g., replace `http://localhost:3000/api/` with your deployed API URL).

3. **Host the Frontend**:
   - Serve the `build/` directory using a static file host (e.g., Netlify, Vercel, GitHub Pages).
   - Ensure the backend API is accessible from the frontend (CORS is enabled).

## Notes

- **Security**: The current setup stores passwords in plain text in `users.json`. For production, use proper password hashing (e.g., bcrypt) and a database (e.g., MongoDB).
- **CDN Usage**: The project uses CDNs for React, Tailwind CSS, and Babel. For production, consider bundling dependencies with a tool like Webpack or Vite.
- **CORS**: The server enables CORS for all origins. Restrict it in production to specific domains.
- **Cloudflare Script**: Both HTML files include a Cloudflare challenge script, which may be specific to your hosting setup. Remove or configure it as needed.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](#) file for details.

## Contact

For questions or feedback, reach out to [your-email@example.com](mailto:your-email@example.com) or open an issue on GitHub.