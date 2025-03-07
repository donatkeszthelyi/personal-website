import { useMediaQuery } from '@mui/material';
import './Typewriter.css';

export const Typewriter = () => {
  const isSmallScreen = useMediaQuery('(max-width:1100px)');

  return (
    <div className="text-center items-center justify-center">
      {isSmallScreen ? (
        <p className="line-1-mobile anim-typewriter-mobile source-code-pro text-white text-center">
          Hey there! I'm{' '}
          <span className="text-main-green font-bold">Donát</span>.
        </p>
      ) : (
        <p className="line-1 anim-typewriter source-code-pro text-white text-center">
          Hey there! I'm{' '}
          <span className="text-main-green font-bold">Donát</span>. An aspiring
          web developer.
        </p>
      )}
    </div>
  );
};
