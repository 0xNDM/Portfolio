import React from 'react';
import pythonIcon from '@/assets/Icons/python.svg';
import numpyIcon from '@/assets/Icons/numpy.svg';
import seleniumIcon from '@/assets/Icons/selenium.svg';
import pandasIcon from '@/assets/Icons/Pandas.svg';
import sqlIcon from '@/assets/Icons/SQL.svg';
import spreadsheetsIcon from '@/assets/Icons/spreadsheets.svg';
import powerBiIcon from '@/assets/Icons/power-bi.svg';
import tableauIcon from '@/assets/Icons/tableau.svg';
import rIcon from '@/assets/Icons/r.png';

const stacks = [
  { name: 'Python', src: pythonIcon },
  { name: 'Pandas', src: pandasIcon, whiteBg: true },
  { name: 'NumPy', src: numpyIcon, whiteBg: true },
  { name: 'Selenium', src: seleniumIcon, whiteBg: true },
  { name: 'SQL', src: sqlIcon },
  { name: 'Spreadsheets', src: spreadsheetsIcon },
  { name: 'Power BI', src: powerBiIcon },
  { name: 'Tableau', src: tableauIcon },
  { name: 'R', src: rIcon },
];

const TechStack: React.FC = () => {
  return (
    <section id="tech-stack" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">My Tech Stack</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Tools and technologies I use to build reliable, high-quality applications.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 md:gap-6 justify-items-center">
          {stacks.map((s) => (
            <div key={s.name} className="flex flex-col items-center w-28 text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:scale-105 transition-transform duration-200">
              <div className="w-12 h-12 mb-2 flex items-center justify-center">
                {s.src ? (
                  s.whiteBg ? (
                    <div className="bg-white rounded-md p-1">
                      <img src={s.src} alt={s.name} className="w-12 h-12" />
                    </div>
                  ) : (
                    <img src={s.src} alt={s.name} className="w-12 h-12" />
                  )
                ) : (
                  <div className="w-12 h-12 rounded-md bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm">
                    {s.badge}
                  </div>
                )}
              </div>
              <span className="font-medium">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
