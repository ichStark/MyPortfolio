import { Github, Linkedin, Mail, Download, MapPin } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-row items-center justify-between gap-4 sm:gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="flex-1 text-left animate-slide-right">
            <div className="inline-block mb-3 sm:mb-4 px-2 sm:px-4 py-1 sm:py-2 glass rounded-full">
              <p className="text-xs sm:text-sm font-medium text-primary-600 dark:text-primary-400 flex items-center gap-1 sm:gap-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="whitespace-nowrap">{personalInfo.location}</span>
              </p>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold font-display mb-4 sm:mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="text-gradient">
                Gautam Prasad Upadhyay
              </span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-4 sm:mb-6">
              {personalInfo.title}
            </h2>
            
            <p className="text-sm sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-2xl">
              {personalInfo.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-2 sm:gap-4 justify-start mb-4 sm:mb-8">
              <a
                href={personalInfo.resumeUrl}
                className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 bg-primary-600 hover:bg-primary-700 text-white text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Download Resume</span>
                <span className="sm:hidden">Resume</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 glass glass-hover text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 shadow-lg hover:scale-105"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Get in Touch</span>
                <span className="sm:hidden">Contact</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-2 sm:gap-4 justify-start">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 glass glass-hover rounded-full transition-all duration-300 hover:scale-110 glow-border"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 glass glass-hover rounded-full transition-all duration-300 hover:scale-110 glow-border"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 sm:p-3 glass glass-hover rounded-full transition-all duration-300 hover:scale-110 glow-border"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-slide-left">
            <div className="relative">
              <div className="w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full glass p-2 animate-glow">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-400 to-blue-600 p-1">
                  <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gradient">
                    GPU
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 glass rounded-full px-2 py-1 sm:px-4 sm:py-2 animate-slide-down">
                <p className="text-xs sm:text-sm font-semibold whitespace-nowrap">Amazon ML 2025</p>
              </div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 glass rounded-full px-2 py-1 sm:px-4 sm:py-2 animate-slide-up">
                <p className="text-xs sm:text-sm font-semibold whitespace-nowrap">Google AI/ML</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

