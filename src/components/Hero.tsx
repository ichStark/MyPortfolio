import { Github, Linkedin, Mail, Download, MapPin } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-right">
            <div className="inline-block mb-4 px-4 py-2 glass rounded-full">
              <p className="text-sm font-medium text-primary-600 dark:text-primary-400 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {personalInfo.location}
              </p>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="text-gradient">
                Gautam Prasad Upadhyay
              </span>
            </h1>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              {personalInfo.title}
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              {personalInfo.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <a
                href={personalInfo.resumeUrl}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 glass glass-hover font-semibold rounded-lg transition-all duration-300 shadow-lg hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass glass-hover rounded-full transition-all duration-300 hover:scale-110 glow-border"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass glass-hover rounded-full transition-all duration-300 hover:scale-110 glow-border"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 glass glass-hover rounded-full transition-all duration-300 hover:scale-110 glow-border"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-slide-left">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full glass p-2 animate-glow">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-400 to-blue-600 p-1">
                  <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-6xl sm:text-7xl lg:text-8xl font-bold text-gradient">
                    GPU
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 glass rounded-full px-4 py-2 animate-slide-down">
                <p className="text-sm font-semibold">Amazon ML 2025</p>
              </div>
              <div className="absolute -bottom-4 -left-4 glass rounded-full px-4 py-2 animate-slide-up">
                <p className="text-sm font-semibold">Google AI/ML</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

