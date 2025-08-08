# Todo App

A modern, feature-rich todo application built with React and TypeScript, offering a clean interface for task management with advanced filtering, local storage persistence, and responsive design for productivity on any device.

## ✅ [Live Demo](https://ivsasha.github.io/todo-app/)

## 📋 Project Description

This todo application provides a comprehensive task management solution with an intuitive user interface and robust functionality. Users can efficiently create, organize, and track their daily tasks with features like filtering, marking completion status, and persistent data storage. The app demonstrates modern React patterns, TypeScript implementation, and responsive design principles.

## 🛠 Technologies Used

- **React** - Component-based user interface library
- **TypeScript** - Type-safe JavaScript for enhanced development experience
- **SCSS** - Advanced CSS preprocessor for sophisticated styling
- **Local Storage** - Client-side data persistence for task management
- **React Hooks** - Modern React state management (useState, useEffect, useReducer)
- **GitHub Pages** - Reliable deployment and hosting
- **ESLint** - Code quality assurance and consistent formatting

## 🚀 Getting Started

Follow these instructions to get the project running locally on your machine.

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ivsasha/todo-app.git
   cd todo-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the project locally:**
   ```bash
   npm start
   # or
   yarn start
   ```

The application will be available at `http://localhost:3000`.

### Build for Production

```bash
npm run build
# or
yarn build
```

### Deploy to GitHub Pages

```bash
npm run deploy
# or
yarn deploy
```

## ✨ Key Features

- **Task Management** - Create, edit, and delete tasks with intuitive interface
- **Completion Tracking** - Mark tasks as complete/incomplete with visual feedback
- **Advanced Filtering** - Filter tasks by status (All, Active, Completed)
- **Persistent Storage** - Tasks automatically saved to browser's local storage
- **Responsive Design** - Seamless experience across desktop, tablet, and mobile devices
- **Real-time Updates** - Instant UI updates with optimistic rendering
- **Task Counter** - Display of active tasks remaining
- **Bulk Actions** - Mark all tasks as complete or clear completed tasks
- **Clean UI/UX** - Modern, minimalist design focused on productivity
- **TypeScript Integration** - Type safety and enhanced development experience

## 🎯 Core Functionality

### Task Operations
- **Add New Tasks** - Quick task creation with Enter key support
- **Edit Tasks** - In-line editing of existing task descriptions
- **Delete Tasks** - Remove unwanted tasks with confirmation
- **Toggle Completion** - Mark tasks as done/undone with visual indicators
- **Clear Completed** - Batch removal of all completed tasks

### Filtering System
- **All Tasks** - View complete task list regardless of status
- **Active Tasks** - Show only incomplete tasks for focused work
- **Completed Tasks** - Review finished tasks and accomplishments

### Data Persistence
- **Local Storage** - Automatic saving of all tasks and application state
- **State Recovery** - Restore tasks and filters on application reload
- **Data Integrity** - Robust error handling for storage operations

## 📱 User Interface

- **Header Section** - App title and new task input field
- **Task List** - Dynamic display of tasks with status indicators
- **Filter Tabs** - Easy switching between task views (All/Active/Completed)
- **Footer Controls** - Task counter and bulk action buttons
- **Responsive Layout** - Optimized for various screen sizes
- **Loading States** - Smooth transitions and user feedback

## 📁 Project Structure

```
todo-app/
├── src/
│   ├── components/
│   │   ├── TodoApp.tsx
│   │   ├── TodoItem.tsx
│   │   ├── TodoList.tsx
│   │   ├── TodoFilter.tsx
│   │   └── TodoInput.tsx
│   ├── types/
│   │   └── todo.types.ts
│   ├── hooks/
│   │   └── useTodos.ts
│   ├── utils/
│   │   └── localStorage.ts
│   ├── styles/
│   │   ├── main.scss
│   │   ├── components/
│   │   └── variables/
│   ├── App.tsx
│   └── index.tsx
├── public/
├── package.json
└── README.md
```

## 🔧 Technical Implementation

### State Management
- **React Hooks** - useState and useReducer for local component state
- **Custom Hooks** - Reusable logic for todo operations and local storage
- **TypeScript Interfaces** - Type definitions for todo items and application state

### Local Storage Integration
- **Automatic Persistence** - Save tasks on every state change
- **Data Validation** - Ensure data integrity when loading from storage
- **Fallback Handling** - Graceful handling of storage errors and corrupted data

### Performance Optimizations
- **React.memo** - Prevent unnecessary re-renders of todo items
- **useCallback** - Memoize event handlers and functions
- **Efficient Updates** - Optimized state updates for large task lists

## 🎨 Styling & Design

- **Modern CSS** - Flexbox and Grid layouts for responsive design
- **SCSS Features** - Variables, mixins, and nested styles for maintainable code
- **Consistent Theme** - Cohesive color scheme and typography throughout
- **Interactive Elements** - Hover states, transitions, and micro-animations
- **Accessibility** - ARIA labels and keyboard navigation support
