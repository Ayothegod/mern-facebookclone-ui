import {FaSearch} from 'react-icons/fa'
import {HiChatAlt} from 'react-icons/hi'
import {MdPerson,MdNotifications} from 'react-icons/md'
import profile from '../asset/profile.svg'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='flex bg-blue-600 text-white p-4 items-center justify-between h-12 sticky top-0'>
        <div>
            <p className='text-2xl font-bold text-white'>AioSocial</p>
        </div>
        <div className=' items-center bg-white rounded-full px-2 py-1 space-x-2 hidden md:flex   md:w-1/2'>
            <input type="text" placeholder="Search for friends, posts or videos" className='py-1 px-2 text-sm outline-slate-500 rounded-full w-full'/>
            <FaSearch className='h-4 w-4 text-black'/>
        </div>
        <div className='flex space-x-8'>
            <div className='flex space-x-4'>
                <span className='relative '>
                    <HiChatAlt className='h-6 w-6'/>
                    {/* <p className='absolute top-3 -right-2 bg-red-500 text-[10px] p-[1px] rounded-full'>1</p> */}
                </span>
                <span>
                    <MdPerson className='h-6 w-6'/>
                </span>
                <span>
                    <MdNotifications className='h-6 w-6'/>
                </span>
            </div>
            <Image alt='profile' src={profile} className='h-6 w-6 rounded-full'/>
        </div>
    </div>
  )
}

export default Header