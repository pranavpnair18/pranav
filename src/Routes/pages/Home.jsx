import React, { useEffect, useState } from 'react';
import Designer from '../images/Designer.png';

const Home = () => {
  const [popupsVisible, setPopupsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopupsVisible(true);
    }, 100); // Slight delay for smooth transition

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <div className="container p-4 lg:flex xl:flex md:flex items-center justify-around space-y-4">
      <div className={`transition-all duration-1000 transform ${popupsVisible ? 'translate-x-0' : '-translate-x-full'} w-full md:w-1/3 p-4 bg-transparent text-white`}>
        <p>
          <b className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-purple-800">𝓗𝓲, 𝓘'𝓶 𝓟𝓻𝓪𝓷𝓪𝓿,</b>
          <br />
          <span className="text-red-500">
            𝓪 𝓒𝓸𝓶𝓹𝓾𝓽𝓮𝓻 𝓢𝓬𝓲𝓮𝓷𝓬𝓮 𝓔𝓷𝓰𝓲𝓷𝓮𝓮𝓻𝓲𝓷𝓰 𝓼𝓽𝓾𝓭𝓮𝓷𝓽 𝓪𝓼𝓹𝓲𝓻𝓲𝓷𝓰 𝓽𝓸 𝓫𝓮𝓬𝓸𝓶𝓮 𝓪 𝓯𝓻𝓸𝓷𝓽-𝓮𝓷𝓭 𝓭𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓻. 𝓘'𝓶 𝓹𝓪𝓼𝓼𝓲𝓸𝓷𝓪𝓽𝓮 𝓪𝓫𝓸𝓾𝓽 𝓬𝓻𝓮𝓪𝓽𝓲𝓷𝓰 𝓾𝓼𝓮𝓻-𝓯𝓻𝓲𝓮𝓷𝓭𝓵𝔂 𝔀𝓮𝓫 𝓮𝔁𝓹𝓮𝓻𝓲𝓮𝓷𝓬𝓮𝓼 𝓪𝓷𝓭 𝓮𝓪𝓰𝓮𝓻 𝓽𝓸 𝓰𝓻𝓸𝔀 𝓶𝔂 𝓼𝓴𝓲𝓵𝓵𝓼 𝓲𝓷 𝔀𝓮𝓫 𝓭𝓮𝓿𝓮𝓵𝓸𝓹𝓶𝓮𝓷𝓽.
          </span>
        </p>
      </div>

      <img src={Designer} className="w-1/4  border-2 m-auto border-red-600 rounded-full" alt="me" />

      <div className={`transition-all duration-1000 transform ${popupsVisible ? 'translate-x-0' : 'translate-x-full'} w-full md:w-1/3 p-4 bg-transparent text-white`}>
        <p>
          <b className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-purple-800">𝓕𝓸𝓬𝓾𝓼𝓲𝓷𝓰 𝓞𝓷:</b>
          <br />
          <span className="text-red-500">
            <ul>
              <li>𝓜𝓮𝓻𝓷 𝓢𝓽𝓪𝓬𝓴</li>
              <li>𝓓𝓳𝓪𝓷𝓰𝓸</li>
              <li>𝓕𝓪𝓼𝓽 𝓐𝓟𝓘</li>
            </ul>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Home;