# 3D Portfolio Website

Welcome to my 3D Portfolio website. This portfolio showcases my skills, projects, and experience in front-end development, with an interactive 3D interface for a unique user experience.

## Features

- **3D Interactive Design**: Explore my portfolio with a unique 3D interface built with Three.js
- **Responsive**: Fully responsive for seamless viewing on all devices
- **Project Showcase**: View a collection of my projects, including details and live demo links
- **About Me**: Learn more about my skills, experience, and journey as a developer
- **Contact Form**: Integrated contact form for direct communication

## Technologies Used

- **ReactJS**: Frontend framework for building the interactive components
- **Three.js**: JavaScript library for 3D graphics, used to create the 3D interface
- **Tailwind CSS**: Utility-first CSS framework for styling the website
- **Framer Motion**: Animation library for smooth transitions and interactions
- **EmailJS**: Email service integration for the contact form

## Installation

### Prerequisites

Before you begin, make sure you have the following installed:

- Node.js (LTS version)
- npm or yarn

### Steps to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/3d-portfolio.git
   cd 3d-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and visit http://localhost:5173 to view the portfolio

## Project Structure

```
3D_Portfolio-main/
├── public/
│   └── Projects/          # Project images
├── src/
│   ├── assets/            # Icons and images
│   ├── components/        # React components
│   │   ├── canvas/        # 3D canvas components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Project.jsx
│   │   └── ...
│   ├── constants/         # Project data and constants
│   ├── hoc/              # Higher-order components
│   ├── utils/            # Utility functions
│   └── main.jsx          # Entry point
├── index.html            # HTML template
└── package.json          # Dependencies and scripts
```

## Customization

### Updating Projects

To add or update projects, edit the `projects` array in `src/constants/index.js`:

```javascript
const projects = [
  {
    name: "Project Name",
    description: "Project description",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "TypeScript", color: "pink-blue-text-gradient" }
    ],
    image: "/path/to/image.png",
    source_code_link: "https://your-project-url.com"
  }
];
```

### Contact Form Configuration

To configure the contact form, add your EmailJS credentials to a `.env` file:

```env
VITE_EMAILJS_SERVICEID=your_service_id
VITE_EMAILJS_TEMPLATEID=your_template_id
VITE_EMAILJS_USERID=your_user_id
```

## Deployment

This project can be deployed to various platforms such as Vercel, Netlify, or GitHub Pages. For Vercel:

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect the Vite configuration and deploy

## Contact

- **Email**: engmohamedsabry925@gmail.com
- **Phone**: 01201289813

## License

This project is open source and available for personal and commercial use.