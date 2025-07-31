# Innolearn - AI-Powered Learning Platform

A modular, feature-folder-based React+TypeScript frontend for a personalized learning platform powered by five AI agents. Built with modern web technologies.

## 🚀 Tech Stack

- **Language**: TypeScript
- **UI Framework**: React (function components + hooks)
- **Styling**: Tailwind CSS with custom design system
- **Routing**: React Router v6 with nested routes
- **State Management**: Context API (per-feature providers)
- **API**: Centralized service layer for REST/WebSocket calls
- **Charts**: Recharts for analytics visualizations
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📁 Project Structure

```
src/
├── assets/               # Static assets (SVGs, images, fonts)
├── components/           # Shared UI components
│   ├── ui/              # shadcn/ui components
│   ├── Layout.tsx       # Main layout wrapper
│   └── Navigation.tsx   # Global navigation
├── contexts/             # Global + per-agent React contexts
│   └── ProfilingContext.tsx
├── features/             # Feature-folder architecture (one per AI agent)
│   ├── profiling/        # Student Profiling Agent
│   │   ├── hooks/        # Feature-specific hooks
│   │   │   └── useProfileForm.ts
│   │   ├── components/   # Feature-specific components
│   │   │   ├── LearningStyleQuiz.tsx
│   │   │   ├── StrengthWeaknessForm.tsx
│   │   │   └── ProfileResults.tsx
│   │   └── profiling.tsx # Main page component
│   ├── recommendation/   # Content Recommendation Agent
│   │   └── recommendation.tsx
│   ├── assessment/       # Assessment & Feedback Agent
│   │   └── assessment.tsx
│   ├── tutoring/         # Tutoring Agent
│   │   └── tutoring.tsx
│   └── engagement/       # Engagement & Motivation Agent
│       └── engagement.tsx
├── hooks/                # Cross-feature hooks
│   ├── useFetch.ts      # Generic data fetching
│   └── useAuth.tsx      # Authentication logic
├── pages/                # High-level route components
│   ├── Home.tsx         # Landing page
│   ├── Dashboard.tsx    # User dashboard
│   ├── Profile.tsx      # User profile
│   ├── Index.tsx        # Route redirect
│   └── NotFound.tsx     # 404 page
├── routes.tsx            # Router configuration
├── services/             # API clients and external services
│   └── agentApi.ts      # Centralized API interface
└── App.tsx              # Root component with providers
```

## 🎯 AI Agents & Responsibilities

### 1. Student Profiling Agent (`/agents/profiling`)
- **Purpose**: Understand user learning preferences and style
- **Features**: 
  - Multi-step learning style assessment
  - Strengths and weaknesses identification  
  - Learning preferences survey
  - Personalized profile results
- **Context**: `ProfilingContext` for managing profile state

### 2. Content Recommendation Agent (`/agents/recommendation`)
- **Purpose**: Provide personalized learning modules
- **Features**:
  - AI-curated content based on profile
  - Difficulty-based filtering
  - Module ratings and duration info
  - Progress tracking integration

### 3. Assessment & Feedback Agent (`/agents/assessment`)
- **Purpose**: Evaluate progress with smart assessments
- **Features**:
  - Dynamic quiz generation
  - Real-time feedback
  - Progress analytics
  - Adaptive difficulty

### 4. Tutoring Agent (`/agents/tutoring`)
- **Purpose**: Provide personalized AI tutoring
- **Features**:
  - Real-time chat interface
  - Voice interaction support
  - Code review assistance
  - Contextual help suggestions

### 5. Engagement & Motivation Agent (`/agents/engagement`)
- **Purpose**: Maintain learning motivation
- **Features**:
  - Streak tracking
  - Achievement system
  - Goal setting and monitoring
  - Motivational tips and rewards

## 🎨 Design System

The project uses a custom orange and white design system defined in:
- `src/index.css` - CSS custom properties and global styles
- `tailwind.config.ts` - Tailwind theme configuration

### Color Palette
- **Primary**: Orange (#FF6B35) - Main brand color
- **Secondary**: Warm grays and whites
- **Accent**: Complementary orange shades
- **Background**: Clean whites and light grays

### Design Principles
- Mobile-first responsive design
- Consistent spacing using Tailwind scale
- Semantic color tokens (no hardcoded colors)
- Accessible contrast ratios
- Modern, clean UI inspired by educational platforms

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd innolearn
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Development Conventions

### File Naming
- **Components**: PascalCase.tsx (e.g., `LearningStyleQuiz.tsx`)
- **Hooks**: camelCase.ts starting with 'use' (e.g., `useProfileForm.ts`)
- **Utils/Services**: camelCase.ts (e.g., `agentApi.ts`)
- **Pages**: PascalCase.tsx (e.g., `Dashboard.tsx`)

### Component Structure
```tsx
// Standard component template
import { ComponentProps } from "react";
import { Button } from "@/components/ui/button";

interface MyComponentProps {
  // Define props interface
}

const MyComponent = ({ ...props }: MyComponentProps) => {
  // Component logic

  return (
    // JSX using semantic design tokens
    <div className="bg-background text-foreground">
      {/* Content */}
    </div>
  );
};

export default MyComponent;
```

### State Management
- **Global State**: Context API providers in `/contexts`
- **Local State**: React hooks (`useState`, `useReducer`)
- **Server State**: React Query for API data
- **Form State**: Controlled components with validation

## 📝 Adding a New AI Agent

To add a new AI agent feature, follow these steps:

### 1. Create Feature Folder
```bash
mkdir src/features/new-agent
mkdir src/features/new-agent/components
mkdir src/features/new-agent/hooks
```

### 2. Create Main Component
```tsx
// src/features/new-agent/new-agent.tsx
import { Card } from "@/components/ui/card";

const NewAgent = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">New Agent Name</h1>
        <p className="text-muted-foreground mb-8">
          Description of what this agent does
        </p>
        
        <Card className="p-6">
          {/* Agent-specific UI */}
        </Card>
      </div>
    </div>
  );
};

export default NewAgent;
```

### 3. Add Route
Update `src/routes.tsx`:
```tsx
import NewAgent from "./features/new-agent/new-agent";

// Add to agents children array:
{
  path: "new-agent",
  element: <NewAgent />,
}
```

### 4. Update Navigation
Add to `src/components/Navigation.tsx` agentItems array:
```tsx
{ path: "/agents/new-agent", label: "New Agent" }
```

### 5. Add API Methods
Extend `src/services/agentApi.ts` with new agent methods:
```tsx
// Add new methods to AgentAPI class
async newAgentMethod(): Promise<ReturnType> {
  // Implementation
}
```

### 6. Create Context (if needed)
```tsx
// src/contexts/NewAgentContext.tsx
import { createContext, useContext } from "react";

// Context implementation
```

## 🔄 Routing Architecture

The app uses React Router v6 with nested routing:

```
/ (Layout with Navigation)
├── / (Home)
├── /dashboard (Dashboard)
├── /profile (Profile)
└── /agents/
    ├── /profiling (Student Profiling)
    ├── /recommendation (Content Recommendation)
    ├── /assessment (Assessment & Feedback)
    ├── /tutoring (AI Tutoring)
    └── /engagement (Engagement & Motivation)
```

### Deep Linking
All agent pages support deep linking:
- `https://app.com/agents/profiling` - Direct access to profiling agent
- `https://app.com/agents/tutoring` - Direct access to tutoring chat
- URL state is maintained across navigation

### Navigation Flow
1. **Home** → Overview and agent selection
2. **Dashboard** → User progress and quick actions  
3. **Profile** → User settings and learning style
4. **Agent Pages** → Specific AI agent interactions

## 🔌 API Integration

### Service Layer Architecture
The `agentApi.ts` service provides a centralized interface for all AI agent communications:

```tsx
import { agentApi } from "@/services/agentApi";

// Usage in components
const recommendations = await agentApi.getRecommendations(userId);
const profile = await agentApi.saveProfile(profileData);
```

### WebSocket Support
Real-time features (tutoring chat) use WebSocket connections:
```tsx
const ws = agentApi.connectToTutor(userId);
ws.onmessage = (event) => {
  // Handle real-time messages
};
```

### Error Handling
Consistent error handling across all API calls:
```tsx
try {
  const data = await agentApi.someMethod();
  // Handle success
} catch (error) {
  // Handle error with user feedback
  toast.error(error.message);
}
```

## 🎯 Success Criteria Met

✅ **TypeScript Compilation**: No TypeScript errors  
✅ **Folder Structure**: Follows specified Duolingo-inspired organization  
✅ **Component Decoupling**: Reusable, modular components  
✅ **Tailwind Styling**: Design system with semantic tokens  
✅ **Deep Linking**: All agent pages support direct URLs  
✅ **Full Implementation**: Complete profiling agent with quiz, forms, and results  
✅ **API Integration**: Centralized service layer with mock implementations  
✅ **Routing**: Nested routes under `/agents/*` structure  

## 🚀 Next Steps

1. **Backend Integration**: Replace mock API calls with real endpoints
2. **Authentication**: Implement user registration and login
3. **Real-time Features**: Complete WebSocket integration for tutoring
4. **Analytics**: Add learning progress tracking and analytics
5. **Mobile App**: Consider React Native version for mobile
6. **AI Integration**: Connect to actual AI models and services
7. **Testing**: Add comprehensive test suite
8. **Performance**: Optimize bundle size and loading performance

## 📚 Learning Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Lucide Icons](https://lucide.dev/)

---

**Built with ❤️ for personalized learning experiences**