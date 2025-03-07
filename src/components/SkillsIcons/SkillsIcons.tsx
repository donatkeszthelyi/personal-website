import './SkillsIcons.css';
import { Button } from '../common/Button';
import { useMediaQuery } from '@mui/material';

export const SkillsIcons = () => {
  const isSmallScreen = useMediaQuery('(max-width:1100px)');

  return (
    <div>
      {isSmallScreen ? (
        <div className="icons-container-mobile">
          <div className="absolute items-center justify-center">
            <Button variant="ghost" className="hover:!cursor-default group">
              <div className="hexagon relative m-auto" />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                className="absolute m-auto top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] grayscale group-hover:filter-none"
              />
            </Button>
          </div>
          <div className="absolute items-center justify-center left-[120px]">
            <Button variant="ghost" className="hover:!cursor-default group">
              <div className="hexagon relative m-auto" />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                className="absolute m-auto top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] grayscale group-hover:filter-none"
              />
            </Button>
          </div>
          <div className="absolute items-center justify-center left-[240px]">
            <Button variant="ghost" className="hover:!cursor-default group">
              <div className="hexagon relative m-auto" />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                className="absolute m-auto top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] grayscale group-hover:filter-none"
              />
            </Button>
          </div>
          <div className="absolute items-center justify-center left-[360px]">
            <Button variant="ghost" className="hover:!cursor-default group">
              <div className="hexagon relative m-auto" />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg"
                className="absolute m-auto top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] grayscale group-hover:filter-none"
              />
            </Button>
          </div>
          <div className="absolute items-center justify-center top-[120px] left-[60px]">
            <Button variant="ghost" className="hover:!cursor-default group">
              <div className="hexagon relative m-auto" />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                className="absolute m-auto top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] grayscale group-hover:filter-none"
              />
            </Button>
          </div>
          <div className="absolute items-center justify-center top-[120px] left-[180px]">
            <Button variant="ghost" className="hover:!cursor-default group">
              <div className="hexagon relative m-auto" />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                className="absolute m-auto top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] grayscale group-hover:filter-none"
              />
            </Button>
          </div>
          <div className="absolute items-center justify-center top-[120px] left-[300px]">
            <Button variant="ghost" className="hover:!cursor-default group">
              <div className="hexagon relative m-auto" />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
                className="absolute m-auto top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] grayscale group-hover:filter-none"
              />
            </Button>
          </div>
          <div className="absolute items-center justify-center top-[240px]">
            <Button variant="ghost" className="hover:!cursor-default group">
              <div className="hexagon relative m-auto" />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                className="absolute m-auto top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] grayscale group-hover:filter-none"
              />
            </Button>
          </div>
          <div className="absolute items-center justify-center top-[240px] left-[120px]">
            <Button variant="ghost" className="hover:!cursor-default group">
              <div className="hexagon relative m-auto" />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                className="absolute m-auto top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] grayscale group-hover:filter-none"
              />
            </Button>
          </div>
          <div className="absolute items-center justify-center top-[240px] left-[240px]">
            <Button variant="ghost" className="hover:!cursor-default group">
              <div className="hexagon relative m-auto" />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                className="absolute m-auto top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] grayscale group-hover:filter-none"
              />
            </Button>
          </div>
          <div className="absolute items-center justify-center top-[240px] left-[360px]">
            <Button variant="ghost" className="hover:!cursor-default group">
              <div className="hexagon relative m-auto" />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                className="absolute m-auto top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] grayscale group-hover:filter-none"
              />
            </Button>
          </div>
        </div>
      ) : (
        <div className="icons-container absolute">
          <div className="absolute items-center justify-center">
            <Button variant="ghost" className="hover:!cursor-default group">
              <div className="hexagon relative m-auto" />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                className="absolute m-auto top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] grayscale group-hover:filter-none"
              />
            </Button>
          </div>
          <div className="absolute items-center justify-center left-[120px]">
            <Button variant="ghost" className="hover:!cursor-default group">
              <div className="hexagon relative m-auto" />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                className="absolute m-auto top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] grayscale group-hover:filter-none"
              />
            </Button>
          </div>
          <div className="absolute items-center justify-center left-[240px]">
            <Button variant="ghost" className="hover:!cursor-default group">
              <div className="hexagon relative m-auto" />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                className="absolute m-auto top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] grayscale group-hover:filter-none"
              />
            </Button>
          </div>
          <div className="absolute items-center justify-center left-[360px]">
            <Button variant="ghost" className="hover:!cursor-default group">
              <div className="hexagon relative m-auto" />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg"
                className="absolute m-auto top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] grayscale group-hover:filter-none"
              />
            </Button>
          </div>
          <div className="absolute items-center justify-center top-[120px] left-[60px]">
            <Button variant="ghost" className="hover:!cursor-default group">
              <div className="hexagon relative m-auto" />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                className="absolute m-auto top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] grayscale group-hover:filter-none"
              />
            </Button>
          </div>
          <div className="absolute items-center justify-center top-[120px] left-[180px]">
            <Button variant="ghost" className="hover:!cursor-default group">
              <div className="hexagon relative m-auto" />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                className="absolute m-auto top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] grayscale group-hover:filter-none"
              />
            </Button>
          </div>
          <div className="absolute items-center justify-center top-[120px] left-[300px]">
            <Button variant="ghost" className="hover:!cursor-default group">
              <div className="hexagon relative m-auto" />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
                className="absolute m-auto top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] grayscale group-hover:filter-none"
              />
            </Button>
          </div>
          <div className="absolute items-center justify-center top-[240px]">
            <Button variant="ghost" className="hover:!cursor-default group">
              <div className="hexagon relative m-auto" />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                className="absolute m-auto top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] grayscale group-hover:filter-none"
              />
            </Button>
          </div>
          <div className="absolute items-center justify-center top-[240px] left-[120px]">
            <Button variant="ghost" className="hover:!cursor-default group">
              <div className="hexagon relative m-auto" />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                className="absolute m-auto top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] grayscale group-hover:filter-none"
              />
            </Button>
          </div>
          <div className="absolute items-center justify-center top-[240px] left-[240px]">
            <Button variant="ghost" className="hover:!cursor-default group">
              <div className="hexagon relative m-auto" />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                className="absolute m-auto top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] grayscale group-hover:filter-none"
              />
            </Button>
          </div>
          <div className="absolute items-center justify-center top-[240px] left-[360px]">
            <Button variant="ghost" className="hover:!cursor-default group">
              <div className="hexagon relative m-auto" />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                className="absolute m-auto top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] grayscale group-hover:filter-none"
              />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
