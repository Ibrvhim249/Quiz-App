# Quiz App

An interactive and responsive quiz application built with HTML, CSS, JavaScript, and Firebase, designed to test users' knowledge across various categories such as Sports, Film & TV, Science, and History.

## Features
- **Dynamic Quizzes**: Multiple-choice questions across various categories with real-time scoring.
- **Feedback**: Displays correct answers and explanations after each question.
- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.

## Tech Stack
### Frontend:
- **HTML**, **CSS**, **JavaScript**
- **Tailwind CSS** for styling
- **Vite** for modern frontend tooling

### Backend:
- **Firebase** for quiz data management

### Additional Tools:
- **ESLint** and **Prettier** for code quality and formatting
- **PostCSS** for CSS transformations

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ALX-quiz-app.git
   cd ALX-quiz-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser at `http://localhost:5173` (or as indicated in the terminal).

## Project Structure
```plaintext
ALX-quiz-app/
├── index.html             # Main entry point
├── src/                   # Source code
│   ├── components/        # Reusable UI components
│   ├── pages/             # Page-level components
│   ├── styles/            # Global and component-specific styles
│   └── utils/             # Helper functions and utilities
├── public/                # Static assets
├── tailwind.config.js     # Tailwind CSS configuration
├── package.json           # Project dependencies and scripts
├── README.md              # Project documentation
└── vite.config.js         # Vite configuration
```

## Usage

1. Navigate to the [homepage](https://quiz-app249.vercel.app).
2. Select a quiz category.
3. Answer the questions and submit.
4. View your score and feedback.

## Development

### Adding New Quizzes
- Update the Firebase database with a new set of questions.

### Testing
Run tests using the provided testing framework:
```bash
npm run test
```

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`feature/new-feature`).
3. Commit your changes (`git commit -m 'Add a new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments
- ALX Software Engineering Program for the project inspiration.
- Firebase for backend services.
- Tailwind CSS for rapid UI development.
