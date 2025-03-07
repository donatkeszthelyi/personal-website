import { useMediaQuery } from '@mui/material';
import { SkillsIcons } from '../components/SkillsIcons/SkillsIcons';

function Skills() {
  const isSmallScreen = useMediaQuery('(max-width:1100px)');

  return (
    <div className="overflow-hidden bg-main-gray pb-[100px]">
      {isSmallScreen ? (
        <div className="overflow-hidden -z-10 w-[80vw] m-auto mt-24 grid grid-rows-2">
          <section className="overflow-hidden space-grotesk text-white text-justify ">
            <h1 className="text-5xl text-main-green text-center mb-4">
              My Skills
            </h1>
            <text>
              <b className="text-main-green">Frontend Development:</b>{' '}
              Proficient in JavaScript/TypeScript, with experience in React for
              user interface development and Next.js for server-side rendering
              and static site generation. Skilled in HTML, CSS, with a
              preference for Tailwind CSS and Sass for styling.
              <br />
              <b className="text-main-green">Backend Development:</b> Currently
              refining knowledge in Node.js to enhance full-stack development
              capabilities.
              <br />
              <b className="text-main-green">
                Data Analysis & Scientific Computing:
              </b>{' '}
              Experienced in Python for data analysis and experimental
              programming, utilizing NumPy, Pandas, and Seaborn. Familiar with
              PsychoPy for experimental psychology applications. Some experience
              with R for data analysis.
            </text>
          </section>
          <section className="skills-container-mobile">
            <SkillsIcons />
          </section>
        </div>
      ) : (
        <div className="overflow-hidden -z-10 h-screen w-full items-center justify-center grid grid-cols-2">
          <section className="overflow-hidden pl-[10vw] mt-[-22rem]">
            <SkillsIcons />
          </section>
          <section className="overflow-hidden space-grotesk text-white pl-[6vw] pr-[8vw] text-justify ">
            <h1 className="text-5xl text-main-green">My Skills</h1>
            <text>
              <b className="text-main-green">Frontend Development:</b>{' '}
              Proficient in JavaScript/TypeScript, with experience in React for
              user interface development and Next.js for server-side rendering
              and static site generation. Skilled in HTML, CSS, with a
              preference for Tailwind CSS and Sass for styling.
              <br />
              <b className="text-main-green">Backend Development:</b> Currently
              refining knowledge in Node.js to enhance full-stack development
              capabilities.
              <br />
              <b className="text-main-green">
                Data Analysis & Scientific Computing:
              </b>{' '}
              Experienced in Python for data analysis and experimental
              programming, utilizing NumPy, Pandas, and Seaborn. Familiar with
              PsychoPy for experimental psychology applications. Some experience
              with R for data analysis.
            </text>
          </section>
        </div>
      )}
    </div>
  );
}

export default Skills;
