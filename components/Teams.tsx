
'use client'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Swords, Crown, Star, Award, Target, Zap } from 'lucide-react';

export function Teams() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="teams" className="py-24 sm:py-32 bg-cream relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">The Rivalry</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-dark tracking-tight">
            Team A <span className="text-accent">vs</span> Team B
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto rounded-full" />
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            The ultimate cricket showdown – Experience meets Energy. Seniors vs Juniors. 
            A rivalry that has defined 28 years of TCC Cup history.
          </p>
        </motion.div>

        {/* VS Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Team A */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary to-primary-light rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden">
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-32 h-32 border border-white/20 rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-24 h-24 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-6 border-2 border-accent/30"
                >
                  <Crown className="text-accent" size={40} />
                </motion.div>

                <h3 className="text-3xl font-black text-white mb-2">TEAM A</h3>
                <div className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6">
                  THE SENIORS
                </div>

                <div className="space-y-4 text-left">
                  {[
                    { icon: Shield, text: 'Years of experience' },
                    { icon: Star, text: 'Battle-tested veterans' },
                    { icon: Award, text: 'Strategic gameplay' },
                    { icon: Target, text: 'Precision & wisdom' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3 text-white/80">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <item.icon size={16} className="text-accent" />
                      </div>
                      <span className="text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-white/40 text-xs uppercase tracking-widest">Legacy Team</p>
                  <p className="text-accent font-bold text-lg mt-1">The Experienced Warriors</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* VS Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5, type: 'spring' }}
            className="flex justify-center items-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="w-40 h-40 rounded-full border-2 border-dashed border-accent/30 absolute inset-0 m-auto"
                style={{ width: '160px', height: '160px', top: '-20px', left: '-20px' }}
              />
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center shadow-2xl shadow-accent/30 relative z-10">
                <div className="text-center">
                  <Swords className="text-dark mx-auto mb-1" size={32} />
                  <span className="text-dark font-black text-2xl">VS</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Team B */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden">
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-32 h-32 border border-white/20 rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                <motion.div
                  animate={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-24 h-24 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-6 border-2 border-blue-400/30"
                >
                  <Zap className="text-blue-400" size={40} />
                </motion.div>

                <h3 className="text-3xl font-black text-white mb-2">TEAM B</h3>
                <div className="inline-block px-4 py-1 rounded-full bg-blue-400/20 text-blue-400 text-sm font-semibold mb-6">
                  THE JUNIORS
                </div>

                <div className="space-y-4 text-left">
                  {[
                    { icon: Zap2, text: 'Youthful energy' },
                    { icon: Star, text: 'Rising stars' },
                    { icon: Target, text: 'Fearless approach' },
                    { icon: Award, text: 'Hungry for glory' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3 text-white/80">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <item.icon size={16} className="text-blue-400" />
                      </div>
                      <span className="text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-white/40 text-xs uppercase tracking-widest">Future Stars</p>
                  <p className="text-blue-400 font-bold text-lg mt-1">The Rising Challengers</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Match Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-black/5 border border-gray-100"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-2">🏏</div>
              <h4 className="font-bold text-dark text-lg">Annual Match</h4>
              <p className="text-gray-500 text-sm mt-1">Played every year during Holi festival</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🎨</div>
              <h4 className="font-bold text-dark text-lg">Holi Special</h4>
              <p className="text-gray-500 text-sm mt-1">Where colors meet cricket</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🏆</div>
              <h4 className="font-bold text-dark text-lg">Village Pride</h4>
              <p className="text-gray-500 text-sm mt-1">The entire village comes together</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Quick component since Zap is already imported through lucide
function Zap2(props: React.SVGProps<SVGSVGElement> & { size?: number }) {
  const { size = 24, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
