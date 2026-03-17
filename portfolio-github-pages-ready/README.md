# Sohil Nagpal - Portfolio Website

A modern, responsive portfolio website showcasing my software engineering projects, technical skills, and professional experience.

![Portfolio Preview](https://img.shields.io/badge/Built%20with-React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🌐 Live Demo

Visit the live site: [https://sohilnagpal04.github.io/portfolio](https://sohilnagpal04.github.io/portfolio)

## ✨ Features

- **Modern Design**: Clean, professional dark theme with blue accents
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Subtle transitions and scroll effects
- **Project Showcase**: Detailed project cards with technologies and descriptions
- **Professional Experience**: Timeline-style experience section
- **Contact Form**: Get in touch functionality (UI ready)
- **Resume Download**: Direct download of resume PDF

## 🛠️ Built With

### Frontend
- **React 19** - UI library
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **Lucide React** - Icons
- **React Router** - Navigation

### Technologies Featured
- Embedded Systems & IoT
- Robotics (ROS)
- Backend Development (C#, Python)
- Full-stack Development (MERN)

## 📂 Project Structure

```
portfolio/
├── frontend/              # React frontend application
│   ├── public/           # Static files
│   │   └── assets/       # Resume PDF and other assets
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   └── hooks/        # Custom React hooks
│   └── package.json
├── backend/              # FastAPI backend (for future features)
├── .github/
│   └── workflows/        # GitHub Actions for deployment
└── DEPLOYMENT_GUIDE.md   # Detailed deployment instructions
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Yarn package manager

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/sohilnagpal04/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
cd frontend
yarn install
```

3. Start the development server:
```bash
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Deployment

### Deploy to GitHub Pages

1. Update the `homepage` in `frontend/package.json`:
```json
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
```

2. Build and deploy:
```bash
cd frontend
yarn deploy
```

For detailed deployment instructions, see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

### Automated Deployment

This repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the `main` branch.

## 🎨 Sections

1. **Hero** - Introduction and call-to-action buttons
2. **About** - Professional summary and expertise areas
3. **Projects** - Featured projects with technologies and descriptions
4. **Skills** - Technical skills organized by category
5. **Experience** - Professional work history
6. **Education** - Academic background and achievements
7. **Contact** - Contact information and message form

## 🔧 Customization

To customize this portfolio for your own use:

1. Update personal information in component files:
   - `src/components/Hero.jsx`
   - `src/components/About.jsx`
   - `src/components/Projects.jsx`
   - `src/components/Experience.jsx`
   - `src/components/Education.jsx`
   - `src/components/Contact.jsx`

2. Replace the resume PDF:
   - Add your resume to `public/assets/`
   - Update the path in `Hero.jsx` and `Contact.jsx`

3. Update colors in `src/index.css` if desired

4. Add your own project images (if any)

## 📝 License

This project is open source and available for personal use.

## 📧 Contact

- **Email**: sohil.nagpal@outlook.com
- **LinkedIn**: [linkedin.com/in/sohilnagpal](https://linkedin.com/in/sohilnagpal)
- **GitHub**: [github.com/sohilnagpal04](https://github.com/sohilnagpal04)

## 🙏 Acknowledgments

- Built with [Create React App](https://create-react-app.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)

---

**Note**: This portfolio showcases frontend-only functionality. The backend API is in development for the contact form feature.

Made with ❤️ and React
