import { Sparkles, GraduationCap, Award, BookOpen } from 'lucide-react'
import { about, education } from '../data/portfolio'

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Description Card */}
          <div className="glass glass-hover rounded-2xl p-8 animate-slide-right">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              <h3 className="text-2xl font-bold font-display">Professional Summary</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {about.description}
            </p>
            <div className="space-y-3">
              {about.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Card */}
          <div className="glass glass-hover rounded-2xl p-8 animate-slide-left">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              <h3 className="text-2xl font-bold font-display">Education</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {education.institution}
                </h4>
                <p className="text-primary-600 dark:text-primary-400 font-medium mt-1">
                  {education.degree}
                </p>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <BookOpen className="w-4 h-4" />
                <span>{education.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Award className="w-4 h-4" />
                <span>CGPA: {education.cgpa}</span>
              </div>
              <div className="mt-4 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Expected Graduation:</span> {education.expectedGraduation}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up">
          {[
            { label: 'Projects', value: '15+' },
            { label: 'Certifications', value: '9+' },
            { label: 'Hackathon Wins', value: '3' },
            { label: 'Publications', value: '1' },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass glass-hover rounded-2xl p-6 text-center transition-all duration-300"
            >
              <p className="text-4xl font-bold text-gradient mb-2">{stat.value}</p>
              <p className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

