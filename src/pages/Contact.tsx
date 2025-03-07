import { useMediaQuery } from '@mui/material';
import { BackgroundGray } from '../components/common/BackgroundGray';
import { Button } from '../components/common/Button';

function Contact() {
  const isSmallScreen = useMediaQuery('(max-width:1100px)');

  return (
    <div className="overflow-hidden">
      <BackgroundGray />
      {isSmallScreen ? (
        <div>
          <h1 className="text-5xl text-main-green text-center mb-4 space-grotesk mt-10">
            Contact Me
          </h1>
          <div className="flex overflow-hidden -z-10 h-screen w-full items-center justify-center mt-[-16rem] flex-col">
            <Button variant="ghost">
              <h1 className="text-white text-xl space-grotesk">
                <a href="mailto:keszthelyi.donat@gmail.com">
                  keszthelyi.donat
                  <span className="text-main-green">@</span>gmail.com
                </a>
              </h1>
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex overflow-hidden -z-10 h-screen w-full items-center justify-center mt-[-6rem]">
          <Button variant="ghost">
            <h1 className="text-white text-5xl space-grotesk">
              <a href="mailto:keszthelyi.donat@gmail.com">
                keszthelyi.donat
                <span className="text-main-green">@</span>gmail.com
              </a>
            </h1>
          </Button>
        </div>
      )}
    </div>
  );
}

export default Contact;
