import React ,{useEffect, useState} from 'react'
import Designer from '../images/Designer.png'
import { CombSpinner } from 'react-loaders';



const Home = () => {
  const [popupsVisible, setPopupsVisible] = useState(false);
const [loading,setLoading]= useState(true)
  useEffect(() => {
    // Delay adding the show class to ensure animations work correctly
    const timer = setTimeout(() => {
      setPopupsVisible(true);
    }, 2500); // Adjust the delay as needed

    // Clean up timer
    return () => clearTimeout(timer);
  }, []);
  
  React.useEffect(() => {
    // Simulate a loading scenario (e.g., fetching data)
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds delay
  }, []);
  return (
    <>

      <div className="container mx-auto p-4">
        <div className="parent">
        <img src={Designer} className='image max-w-full h-auto' alt="me" />
          <div id="popup" className="popup w-full md:w-1/3 p-4 mb-4">
            <p>
              <b className='bold'>𝓗𝓲, 𝓘'𝓶 𝓟𝓻𝓪𝓷𝓪𝓿,</b><br />
              <span className='para'>
                𝓪 𝓒𝓸𝓶𝓹𝓾𝓽𝓮𝓻 𝓢𝓬𝓲𝓮𝓷𝓬𝓮 𝓔𝓷𝓰𝓲𝓷𝓮𝓮𝓻𝓲𝓷𝓰 𝓼𝓽𝓾𝓭𝓮𝓷𝓽 𝓪𝓼𝓹𝓲𝓻𝓲𝓷𝓰 𝓽𝓸 𝓫𝓮𝓬𝓸𝓶𝓮 𝓪 𝓯𝓻𝓸𝓷𝓽-𝓮𝓷𝓭 𝓭𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓻. 𝓘'𝓶 𝓹𝓪𝓼𝓼𝓲𝓸𝓷𝓪𝓽𝓮 𝓪𝓫𝓸𝓾𝓽 𝓬𝓻𝓮𝓪𝓽𝓲𝓷𝓰 𝓾𝓼𝓮𝓻-𝓯𝓻𝓲𝓮𝓷𝓭𝓵𝔂 𝔀𝓮𝓫 𝓮𝔁𝓹𝓮𝓻𝓲𝓮𝓷𝓬𝓮𝓼 𝓪𝓷𝓭 𝓮𝓪𝓰𝓮𝓻 𝓽𝓸 𝓰𝓻𝓸𝔀 𝓶𝔂 𝓼𝓴𝓲𝓵𝓵𝓼 𝓲𝓷 𝔀𝓮𝓫 𝓭𝓮𝓿𝓮𝓵𝓸𝓹𝓶𝓮𝓷𝓽.
              </span>
            </p>
          </div>
          
          
          <div id="popup2" className="popup2 w-full md:w-1/3 p-4 mb-4 ">
            <p>
              <b className='bold'>𝓕𝓸𝓬𝓾𝓼𝓲𝓷𝓰 𝓞𝓷:</b><br />
              <span className='para'>
                <ul>
                  <li>𝓜𝓮𝓻𝓷 𝓢𝓽𝓪𝓬𝓴</li>
                  <li>𝓓𝓳𝓪𝓷𝓰𝓸</li>
                  <li>𝓕𝓪𝓼𝓽 𝓐𝓟𝓘</li>
                </ul>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home