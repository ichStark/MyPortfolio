import { Heart } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          
          <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
            Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> using React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

