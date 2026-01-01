import { BookOpen, Calendar, ExternalLink } from 'lucide-react'
import { publications } from '../data/portfolio'

const Publications = () => {
  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            Research & <span className="text-gradient">Publications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="glass glass-hover rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                </div>

                <div className="flex-1">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    {pub.title}
                  </h3>

                  {/* Publisher */}
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {pub.publisher}
                  </p>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{pub.date}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {pub.description}
                  </p>

                  {/* Link */}
                  <a
                    href={pub.link}
                    className="inline-flex items-center gap-2 px-4 py-2 glass glass-hover rounded-lg font-medium transition-all duration-300 hover:scale-105"
                  >
                    Read Publication
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publications

