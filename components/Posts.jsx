import { users } from './data';
import profile from '../asset/profile.svg'
import work1 from '../asset/work-1.svg'
import customer from '../asset/customer.svg'
import work2 from '../asset/work-2.svg'
import news1 from '../asset/news-1.svg'
import team1 from '../asset/team-1.svg'
import Image from 'next/image'

const Posts = () => {
  return (
    <div className='my-4'>
      <div className=' '>
        {users.map((user) => (
          <div key={user.id} className='p-4 shadow-[10px_10px_50px_rgba(0,0,0,0.1)] shadow-[-10px_-10px_50px_rgba(0,0,0,0.1)] rounded-lg border'>
            <Image src={profile} alt='image' className='w-8 h-8 rounded-full'/>
            <Image src={work1} alt='image' className='w-96 h-96 rounded '/>
            <p key={user.id}>{user.name}</p>
            <p key={user.id}>{user.time}</p>
            <p key={user.id}>{user.time}</p>
            <p key={user.id}>{user.likes} likes</p>
            <p key={user.id}>{user.comments}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Posts