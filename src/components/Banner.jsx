import { useEffect, useRef } from 'react';

const Banner = () => {
    const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const ul = textRef.current;
      ul.insertAdjacentHTML('afterend', ul.outerHTML);
      if (ul.nextSibling) {
        ul.nextSibling.setAttribute('aria-hidden', 'true');
      }
    }
  }, []);

  return (
    <div className="w-full md:h-[98px] bg-gradient-to-r from-secondary via-bg-secondary to-bg-third ... md:mt-[150px] mt-10">
          <div className="bg-black dark:bg-white dark:text-black w-full md:h-[98px] rotate-[-4deg] text-white inline-flex flex-nowrap overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)' }}>
            <ul className="flex items-center justify-between md:text-3xl text-xl font-Kanit font-bold h-full md:justify-start [&_li]:mx-8 [&_img]:max-w-none my-auto animate-infinite-scroll" ref={textRef}>
              <li>Design</li>
              <li>Discover</li>
              <li>Develop</li>
              <li>Design</li>
              <li>Discover</li>
              <li>Develop</li>
              <li>Design</li>
              <li>Discover</li>
              <li>Develop</li>
            </ul>
          </div>
        </div>
  )
}

export default Banner