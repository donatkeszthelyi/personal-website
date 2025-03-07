import { useMediaQuery } from '@mui/material';
import { BackgroundGray } from '../components/common/BackgroundGray';
import { Button } from '../components/common/Button';

function Projects() {
  const isSmallScreen = useMediaQuery('(max-width:1100px)');

  return (
    <div className="overflow-hidden">
      <BackgroundGray />
      {isSmallScreen ? (
        <div className="overflow-hidden -z-10 w-[80vw] mt-10 m-auto flex flex-col">
          <section className="overflow-hidden space-grotesk text-white text-justify mx-auto pb-2">
            <h1 className="text-5xl text-main-green">My Projects</h1>
          </section>
          <section className="space-grotesk overflow-hidden text-center mt-10">
            <h2 className="text-3xl text-main-green font-extrabold mb-4">
              React Music Player
            </h2>
            <Button variant="ghost" className="group !p-0">
              <a
                href="https://donatkeszthelyi.github.io/react-music-player/"
                target="_blank"
              >
                <div className="w-[280px] h-[158px] rounded-md overflow-hidden m-auto">
                  <img
                    src="/react-music-player-screenshot.png"
                    alt="React Music Player"
                    className="blur-sm grayscale group-hover:filter-none"
                  />
                </div>
              </a>
            </Button>
            <h2 className="text-2xl text-white mt-20">
              More to come<span className="text-main-green">...</span>
            </h2>
          </section>
        </div>
      ) : (
        <div className="overflow-hidden -z-10 h-screen w-full items-center justify-center grid grid-cols-2">
          <section className="overflow-hidden space-grotesk text-white text-justify pl-[10vw] pb-10">
            <h1 className="text-5xl text-main-green">My Projects</h1>
          </section>
          <section className="space-grotesk overflow-hidden text-center -ml-40 p-10 ">
            <Button variant="ghost" className="group">
              <a
                href="https://donatkeszthelyi.github.io/react-music-player/"
                target="_blank"
              >
                <h2 className="text-3xl text-main-green font-extrabold">
                  React Music Player
                </h2>
                <div className="w-[38.5vw] h-[20vw] rounded-md overflow-hidden">
                  <img
                    src="/react-music-player-screenshot.png"
                    alt="React Music Player"
                    className="blur-sm grayscale group-hover:filter-none"
                  />
                </div>
              </a>
            </Button>
            <h2 className="text-2xl text-white mt-20">
              More to come<span className="text-main-green">...</span>
            </h2>
          </section>
        </div>
      )}
    </div>
  );
}

export default Projects;
