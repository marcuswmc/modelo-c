# Modelo C 2.0

A comprehensive web platform for the Modelo C 2.0 guide - a tool designed to strengthen social and environmental impact businesses that transform the world without compromising economic viability.

## 🌟 Overview

Modelo C 2.0 is more than a tool - it's a pathway to strengthen social and environmental impact businesses that transform the world without giving up economic viability. In version 2.0, it evolves without losing its essence: integrating social and environmental impact coherently with commercial and financial logic.

The letter "C" continues to represent what makes Modelo C a differential: **Complete**, **Collaborative**, **Connected to Complexity**, and **Comprehensible**. A model for businesses that want to grow with purpose and generate relevant changes.

## 🚀 Features

- **Multi-language Support**: Available in Portuguese (PT), English (EN), and Spanish (ES)
- **Responsive Design**: Optimized for desktop and mobile devices
- **Interactive Form**: Lead generation with MongoDB integration
- **PDF Downloads**: Access to Modelo C 2.0 guide and printable frame
- **Modern UI/UX**: Built with Tailwind CSS and Framer Motion animations
- **Internationalization**: Powered by next-intl for seamless language switching

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.3 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Internationalization**: next-intl
- **Database**: MongoDB with Mongoose
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Radix UI primitives
- **Analytics**: Vercel Analytics

## 📁 Project Structure

```
modelo-c/
├── src/
│   ├── app/
│   │   ├── [locale]/          # Internationalized routes
│   │   │   ├── layout.tsx     # Root layout with i18n
│   │   │   ├── page.tsx       # Home page
│   │   │   └── globals.css    # Global styles
│   │   └── api/
│   │       └── download/      # API route for form submissions
│   ├── components/            # React components
│   │   ├── ui/               # Reusable UI components
│   │   ├── hero.tsx          # Hero section
│   │   ├── formSection.tsx   # Download form section
│   │   └── ...               # Other page sections
│   ├── i18n/                 # Internationalization config
│   ├── lib/                  # Utility functions
│   ├── models/               # MongoDB schemas
│   └── logos/                # Static assets
├── messages/                 # Translation files
│   ├── pt.json              # Portuguese translations
│   ├── en.json              # English translations
│   └── es.json              # Spanish translations
└── public/                   # Static files
    ├── images/              # Hero images for each locale
    └── *.pdf                # Downloadable PDFs
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- MongoDB database

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd modelo-c
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌐 Internationalization

The application supports three languages:
- **Portuguese (PT)** - Default language
- **English (EN)** - Available at `/en`
- **Spanish (ES)** - Available at `/es`

### Adding New Translations

1. Add new keys to the translation files in `messages/`
2. Use the `useTranslations` hook in components:
   ```tsx
   const t = useTranslations('section-name')
   ```

## 📊 Database Schema

The application uses MongoDB to store form submissions:

```typescript
interface IDownload {
  name: string;        // Required
  email: string;       // Required  
  company?: string;    // Optional
  createdAt: Date;     // Auto-generated
  updatedAt: Date;     // Auto-generated
}
```

## 🎨 Customization

### Styling
- Uses Tailwind CSS for styling
- Custom color variables defined in `globals.css`
- Responsive design with mobile-first approach

### Components
- Modular component architecture
- Reusable UI components in `src/components/ui/`
- Page-specific components for each section

## 📦 Build & Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## 🔧 Configuration Files

- `next.config.ts` - Next.js configuration with next-intl plugin
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `components.json` - UI components configuration

## 📄 Available Downloads

- **Modelo C 2.0 Guide**: Complete guide in PDF format
- **Printable Frame**: Frame for printing and physical use
- Available in all supported languages

## 📄 License

This project is under the MIT license. See the `LICENSE` file for more details.
---

Developed with ❤️ for C Model 2.0