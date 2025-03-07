import { Button } from '../components/common/Button';
import useMediaQuery from '@mui/material/useMediaQuery';

function About() {
  const isSmallScreen = useMediaQuery('(max-width:1100px)');

  return (
    <div className="overflow-hidden bg-main-gray">
      {isSmallScreen ? (
        <div className="overflow-hidden -z-10 w-[80vw] m-auto mt-24 items-center justify-center grid grid-rows-2">
          <section className="overflow-hidden space-grotesk text-white text-justify">
            <h1 className="text-5xl text-main-green text-center mb-4">
              About Me
            </h1>
            <text>
              My name is <b className="text-main-green">Donát Keszthelyi</b>,
              and I am an aspiring web developer with a primary focus on
              front-end development while working to strengthen my backend
              skills to become a capable full-stack developer. My background is
              in cognitive psychology, with experience in cognitive neuroscience
              research and neuroimaging. I initially learned web development
              while working on a study in a research lab, which led me to
              develop a strong interest in coding and web technologies. In
              addition to web development, I have experience in data science
              using Python and R, as well as experiment programming in Python. I
              am continuously learning and improving my skills to build
              functional, efficient, and user-friendly applications. I am always
              open to new opportunities and collaborations to grow as a
              developer and contribute to meaningful projects. If you have any
              questions, or you would like to get to know me better, send me an
              e-mail!
            </text>
          </section>
          <section className="justify-center flex relative pb-[420px] pt-[20px]">
            <div className="absolute triangle bg-main-green w-[200px] h-[400px] ml-[204px] mt-[120px]"></div>
            <div className="absolute triangle-mirrored bg-main-green w-[200px] h-[400px] ml-[-197px] mt-[120px]"></div>

            <div className="absolute trapezoid bg-transparent w-[250px] h-[850px] mt-[-90px]">
              <Button variant="ghost" className="hover:!cursor-default group">
                <img
                  src={`${import.meta.env.BASE_URL}me-bw.png`}
                  alt="me"
                  className="relative top-[14.5rem] scale-220 group-hover:hidden"
                />
                <img
                  src={`${import.meta.env.BASE_URL}me-color.png`}
                  alt="me"
                  className="relative top-[14.5rem] scale-220"
                />
              </Button>
            </div>
          </section>
        </div>
      ) : (
        <div className="overflow-hidden -z-10 h-screen w-full items-center justify-center grid grid-cols-2">
          <section className="overflow-hidden space-grotesk text-white text-justify pl-[10vw]">
            <h1 className="text-5xl text-main-green">About Me</h1>
            <text>
              My name is <b className="text-main-green">Donát Keszthelyi</b>,
              and I am an aspiring web developer with a primary focus on
              front-end development while working to strengthen my backend
              skills to become a capable full-stack developer. My background is
              in cognitive psychology, with experience in cognitive neuroscience
              research and neuroimaging. I initially learned web development
              while working on a study in a research lab, which led me to
              develop a strong interest in coding and web technologies. In
              addition to web development, I have experience in data science
              using Python and R, as well as experiment programming in Python. I
              am continuously learning and improving my skills to build
              functional, efficient, and user-friendly applications. I am always
              open to new opportunities and collaborations to grow as a
              developer and contribute to meaningful projects. If you have any
              questions, or you would like to get to know me better, send me an
              e-mail!
            </text>
          </section>
          <section className="pl-[4vw] overflow-hidden">
            <div
              className="absolute triangle bg-main-green w-[200px] h-[400px] top-[88rem] ml-[320px] scale-150"
              overflow-hidden
            ></div>
            <div className="absolute triangle-mirrored bg-main-green w-[200px] h-[400px] top-[88rem] ml-[21px] scale-150 overflow-hidden"></div>

            <div className="absolute trapezoid bg-transparent w-[250px] h-[850px] top-[75.29rem] ml-[144px] scale-150 overflow-hidden">
              <Button variant="ghost" className="hover:!cursor-default group">
                <img
                  src={`${import.meta.env.BASE_URL}me-bw.png`}
                  alt="me"
                  className="relative top-[14.5rem] scale-220 overflow-hidden group-hover:hidden"
                />
                <img
                  src={`${import.meta.env.BASE_URL}me-color.png`}
                  alt="me"
                  className="relative top-[14.5rem] scale-220 overflow-hidden"
                />
              </Button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default About;
