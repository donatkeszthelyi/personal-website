import { Button } from '../components/common/Button';
import { BackgroundGray } from '../components/common/BackgroundGray';
import { Typewriter } from '../components/Typewriter/Typewriter';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useMediaQuery } from '@mui/material';

function Home() {
  const isSmallScreen = useMediaQuery('(max-width:1100px)');

  return (
    <div className="overflow-hidden items-center justify-center w-full">
      <BackgroundGray />
      {isSmallScreen ? (
        <div>
          <div className="flex overflow-hidden -z-10 h-screen w-full items-center justify-center mt-[-6rem] px-4">
            <Typewriter />
          </div>
          <div className="flex overflow-hidden w-full items-center justify-center m-auto mt-[-16rem] text-6xl text-white">
            <Button
              variant="ghost"
              className="text-white active:text-main-green hover:text-main-green"
            >
              <a href="https://github.com/donatkeszthelyi" target="_blank">
                <FaGithub />
              </a>
            </Button>
            <Button
              variant="ghost"
              className="text-white active:text-main-green hover:text-main-green"
            >
              <a
                href="https://www.linkedin.com/in/don%C3%A1t-keszthelyi/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex overflow-hidden -z-10 h-screen w-full items-center justify-center mt-[-6rem]">
            <Typewriter />
          </div>
          <div className="flex overflow-hidden w-full items-center justify-center m-auto mt-[-16rem] text-6xl text-white">
            <Button
              variant="ghost"
              className="text-white active:text-main-green hover:text-main-green"
            >
              <a href="https://github.com/donatkeszthelyi" target="_blank">
                <FaGithub />
              </a>
            </Button>
            <Button
              variant="ghost"
              className="text-white active:text-main-green hover:text-main-green"
            >
              <a
                href="https://www.linkedin.com/in/don%C3%A1t-keszthelyi/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
