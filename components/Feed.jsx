import { users } from './data';
import profile from '../asset/profile.svg'
import Image from 'next/image'
import {FaTag,FaLaugh} from 'react-icons/fa';
import { HiPhotograph,HiLocationMarker} from 'react-icons/hi';
import Posts from './Posts';

const Feed = () => {
  return (
    <div className=' grow-[2]  w-[45%] p-2 border-r-2'>
      <div className=' p-4 shadow-[10px_10px_50px_rgba(0,0,0,0.1)] shadow-[-10px_-10px_50px_rgba(0,0,0,0.1)] rounded-lg border'>
        <div className='flex mb-4 items-center space-x-2 '>
          <Image src={profile} alt='image' className='h-8 w-8 rounded-full'/>
          <input type="text" placeholder='What is on Your Mind' className=' w-full text-sm py-2 px-2 outline-blue-500' />
        </div><hr />
        <div className='flex gap-2 flex-col md:flex-row md:items-center md:justify-between py-2 '>
          <span className='flex items-center space-x-2'>
            <HiPhotograph className='h-6 w-6 text-red-500'/>
            <p className='text-sm'>Photo or Videos</p>
          </span>
          <span className='flex items-center space-x-2'>
            <FaTag className='h-6 w-6 text-blue-500'/>
            <p className='text-sm'>Tag</p>
          </span>
          <span className='flex items-center space-x-2'>
            <HiLocationMarker className='h-6 w-6 text-green-500'/>
            <p className='text-sm'>Location</p>
          </span>
          <span className='flex items-center space-x-2'>
            <FaLaugh className='h-6 w-6 text-yellow-500'/>
            <p className='text-sm'>Felling</p>
          </span>
          <input type="button" value="Share" className='text-sm bg-green-500 py-1 rounded-md text-white  px-2 font-bold' />
        </div>
      </div>
      <div>
        <Posts/>
      </div>
    </div>
  )
}

export default Feed
//hidden md:block shadow-blue-100