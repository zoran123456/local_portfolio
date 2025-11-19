# Zoran Bošjak - Professional Portfolio

A modern, responsive personal portfolio website built for a Senior Full-stack Developer and Solution Architect. This project showcases professional experience, technical skills, and contact information using a clean, professional aesthetic.

## 🚀 Tech Stack

- **Framework**: React 18 (Functional Components, Hooks)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite

## 🛠️ Local Development Setup

Follow these steps to get the application running on your local machine.

### Prerequisites

- **Node.js**: Version 18 or higher recommended.
- **npm** (Node Package Manager) or **yarn**.

### Installation

1.  **Clone the repository** (or download the source code):
    ```bash
    git clone <repository-url>
    cd zoran-portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

### Running the Application

To start the local development server with hot-reloading:

```bash
npm run dev
```

This will start the application at `http://localhost:3000` (or the next available port) and automatically open it in your default browser.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory. You can preview the production build locally using:

```bash
npm run preview
```

## 📁 Project Structure

- `index.html`: The entry point for the application.
- `index.tsx`: The React entry point that mounts the App component.
- `App.tsx`: The main application layout component.
- `components/`: Contains all UI sections (Navbar, Hero, About, Skills, Experience, Contact).
- `types.ts`: TypeScript interface definitions.
- `vite.config.ts`: Configuration for the Vite build tool.
- `package.json`: Project metadata and dependencies.

## 🎨 Customization

- **Colors & Fonts**: Defined in the Tailwind config within `index.html` (or can be moved to `tailwind.config.js` for a purely local setup).
- **Content**: Update the data arrays in `components/Skills.tsx` and `components/Experience.tsx` to reflect different profiles.

## 📄 License

This project is available for personal and commercial use.
