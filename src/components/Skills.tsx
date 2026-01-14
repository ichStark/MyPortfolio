import { Code2, Layers, Database, Cloud, Cpu, Terminal } from 'lucide-react'
import { skills } from '../data/portfolio'

const Skills = () => {
  const icons: Record<string, JSX.Element> = {
    'Programming Languages': <Code2 className="w-6 h-6" />,
    'Frontend': <Layers className="w-6 h-6" />,
    'Backend & Tools': <Terminal className="w-6 h-6" />,
    'AI & ML': <Cpu className="w-6 h-6" />,
    'Databases': <Database className="w-6 h-6" />,
    'Cloud': <Cloud className="w-6 h-6" />,
    'Concepts': <Code2 className="w-6 h-6" />,
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My technical expertise spans across multiple domains of software engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div
              key={category}
              className="glass glass-hover rounded-2xl p-6 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                  {icons[category]}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {category}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm font-medium bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-600 transition-all duration-300 hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

