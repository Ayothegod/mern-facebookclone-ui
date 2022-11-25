import {
  FaBookmark,
  FaQuestionCircle,
  FaCalendarCheck,
  FaBookReader,
} from 'react-icons/fa';
import { HiChatAlt, HiVideoCamera, HiUserGroup } from 'react-icons/hi';
import { MdOutlineSettings, MdRssFeed } from 'react-icons/md';
import { users } from './data';
import profile from '../asset/profile.svg'
import Image from 'next/image'

const Leftbar = () => {
  return (
    <div className=" hidden md:block grow w-[20%]  border-r-2">
      <div className=''>
        <div className="space-y-2">
          <span className="flex items-center w-full space-x-4">
            <MdRssFeed className="w-6 h-6" />
            <p className="text-lg font-normal">Feed</p>
          </span>
          <span className="flex items-center w-full space-x-4">
            <HiChatAlt className="w-6 h-6" />
            <p className="text-lg font-normal">Chats</p>
          </span>
          <span className="flex items-center w-full space-x-4">
            <HiVideoCamera className="w-6 h-6" />
            <p className="text-lg font-normal">Videos</p>
          </span>
          <span className="flex items-center w-full space-x-4">
            <HiUserGroup className="w-6 h-6" />
            <p className="text-lg font-normal">Groups</p>
          </span>
          <span className="flex items-center w-full space-x-4">
            <FaBookmark className="w-6 h-6" />
            <p className="text-lg font-normal">Bookmarks</p>
          </span>
          <span className="flex items-center w-full space-x-4">
            <FaQuestionCircle className="w-6 h-6" />
            <p className="text-lg font-normal">Questions</p>
          </span>
          <span className="flex items-center w-full space-x-4">
            <FaCalendarCheck className="w-6 h-6" />
            <p className="text-lg font-normal">Events</p>
          </span>
          <span className="flex items-center w-full space-x-4">
            <FaBookReader className="w-6 h-6" />
            <p className="text-lg font-normal">Courses</p>
          </span>
          <span className="flex items-center w-full space-x-4">
            <MdOutlineSettings className="w-6 h-6" />
            <p className="text-lg font-normal">Settings</p>
          </span>
          <span>
            <input
              type="button"
              value="Show More"
              className=" text-sm font-semibold my-4 shadow-md  rounded-sm bg-gray-300 px-4 py-1"
            />
          </span>
          <hr className='border border-gray-300 w-5/6'/>
        </div>
        <div className=' space-y-2 mt-2'>
          {users.map((user) => (
           <div key={user.id} className='flex space-x-2 items-center '>
            <Image alt='profile' src={profile} className='h-6 w-6 rounded-full'/>
            <p key={user.id} className='text-lg font-normal'>{user.name}</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
