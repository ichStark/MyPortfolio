import { Award, ExternalLink, Calendar } from 'lucide-react'
import { certifications } from '../data/portfolio'

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            Certifications & <span className="text-gradient">Credentials</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass glass-hover rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] animate-slide-up group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                {cert.issuer}
              </p>

              {/* Date */}
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{cert.date}</span>
              </div>

              {/* Link */}
              <a
                href={cert.link}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
              >
                View Certificate
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications

