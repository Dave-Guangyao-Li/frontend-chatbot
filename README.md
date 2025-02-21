# ChatBot Website

A responsive React TypeScript application featuring a chatbot interface, navigation elements, and dynamic content handling.

## Features

- Responsive design for both desktop and mobile
- Navigation bar with logo and search functionality
- Side menu with Apps and Documents sections
- Real-time search with text highlighting
- Chatbot interface with:
  - Timer display
  - Reset and close functionality
  - Message history
  - Mobile-responsive design

## Tech Stack

- React 18
- TypeScript
- Material-UI (MUI)
- Styled Components

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/chatbot-website.git
cd chatbot-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

## Project Structure

```
src/
  ├── components/
  │   ├── layout/
  │   │   ├── Navbar.tsx
  │   │   └── Sidemenu.tsx
  │   └── chatbot/
  │       ├── ChatButton.tsx
  │       └── ChatWindow.tsx
  ├── pages/
  │   ├── AppsPage.tsx
  │   └── DocumentsPage.tsx
  ├── App.tsx
  └── index.tsx
```

## Design Decisions

1. **Component Structure**: The application is organized into reusable components for better maintainability and scalability.

2. **Styling Solution**: 
   - Material-UI for consistent design language
   - Styled-components for custom styling
   - Responsive design using MUI's breakpoints

3. **State Management**: 
   - React useState for local component state
   - Props for component communication
   - No global state management as the app is relatively small

4. **TypeScript**: Used for better type safety and development experience

5. **Mobile Responsiveness**:
   - Chatbot expands to full screen on mobile
   - Adjustable side menu width
   - Responsive search bar

## Future Improvements

1. Add authentication system
2. Implement real chatbot functionality
3. Add more interactive features
4. Implement proper error handling
5. Add unit tests
6. Add dark mode support

## License

MIT
