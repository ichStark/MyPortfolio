import { Trophy, Calendar, ExternalLink } from 'lucide-react'
import { awards } from '../data/portfolio'

const Awards = () => {
  return (
    <section id="awards" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            Awards & <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="glass glass-hover rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Trophy Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto shadow-lg">
                <Trophy className="w-8 h-8 text-white" />
              </div>

              {/* Position Badge */}
              <div className="inline-block mb-4 px-4 py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                  {award.position}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                {award.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {award.description}
              </p>

              {/* Date */}
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{award.date}</span>
              </div>

              {/* Link */}
              <a
                href={award.link}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
              >
                Learn More
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Awards

