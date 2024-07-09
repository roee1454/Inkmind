import { useEffect, useState } from 'react';

const ScrollProgressBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;

      setScrollPosition(parseInt(scroll));
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-2 z-50">
      <div
        className="bg-primary h-full transition-width rounded-md duration-300 ease-out"
        style={{ width: `${scrollPosition}%` }}
      />
    </div>
  );
}

export default ScrollProgressBar;