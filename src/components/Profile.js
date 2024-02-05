import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import './Profile.css';
import prof from '../images/pic.jpg'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { Outlet, Link } from 'react-router-dom';
import image from '../images/empty_post.png';

export default function Profile() {

  const[ loading, setLoading ] = useState(true);
  const { user, auth } = useAuth();

  useEffect(() => {
    let getData = async () => {
      if(user.userName && auth.accessToken){
        setLoading(false);
      }
    }
    getData();
  },[])

  return (
  <>
  {
  loading? (
  <>
    <div className='flex justify-center items-center h-96'>
      <div>
        <div className='mb-4 flex justify-center'><div className='Load'></div></div>
        <div>If the page does not load, try to <Link to='/register' className='underline text-blue-600'>sign in</Link> or <Link to='/login' className='underline text-blue-600'>log in</Link></div>
      </div>
    </div>
  </>
  ) : (
    <div className='h-fit profile-div flex pt-8'>
      <div className='h-fit w-7/12'>
        <div className='h-fit w-11/12'>
          <div className='h-36 flex'>
            <div className='h-fit w-1/4 flex justify-center items-center'>
              <div className='flex items-center justify-center'><img src={prof} alt="profile" className='w-32 h-32 circle' /></div>
            </div>
            <div className='h-full w-3/4'>
              <div className='flex justify-between items-center h-fit'>
                <div className='text-2xl font-bold pt-1 pb-1 pl-2'>{user.userName}</div>
                <div><Link to=''><FontAwesomeIcon icon={faShare} className='border border-gray-300 p-1.5 circle mr-2 hover:bg-gray-100'/></Link></div>
              </div>
              <div className='h-fit w-full pl-2 pt-1 text-gray-400 bg-white text-xs'><Link to='' className='hover:underline'>Add Profile Credentials</Link></div>
              <div className='h-fit w-full pl-2 pt-1 text-gray-400 text-xs'><Link to='' className='hover:underline'>{user.followers.length} followers</Link> • <Link to='' className='hover:underline'>{user.following.length} following</Link></div>
            </div>
          </div>
          <div className='h-fit w-full pl-2 pt-2 pb-3 text-gray-400 text-xs'><Link to='' className='hover:underline'>Write a description about yourself</Link></div>
          <div className='pl-2 pb-2 pr-2 '>
            <Outlet />
          </div>
        </div>
      </div>
      <div className='h-fit w-5/12'>
        <div className='p-4 pr-12 pl-12'>
          <div className='border-b flex justify-between items-center'>
            <div className='font-semibold'>Credentials & Highlights</div>
            <div className='mb-1'><CreateOutlinedIcon fontSize='large' className='border p-1.5 circle hover:cursor-pointer hover:bg-gray-100'/></div>
          </div>
          <div className='pt-2 flex'>
            <ul className='pr-2'>
              <li className='pb-1'><BusinessCenterOutlinedIcon/></li>
              <li className='pb-1'><SchoolOutlinedIcon/></li>
              <li className='pb-0.5'><LocationOnOutlinedIcon/></li>
              <li className='pb-0.5'><RemoveRedEyeOutlinedIcon className='p-0.5 circle border bg-gray-100'/></li>
              <li><CalendarTodayOutlinedIcon className='p-0.5 border circle bg-gray-100'/></li>
            </ul>
            <ul className='w-full'>
              <li className='text-blue-700 pb-1'><span className='hover:underline hover:cursor-pointer'>Add employment credential</span></li>
              <li className='text-blue-700 pb-1'><span className='hover:underline hover:cursor-pointer'>Add education credential</span></li>
              <li className='text-blue-700 pb-1.5'><span className='hover:underline hover:cursor-pointer'>Add location credential</span></li>
              <li className='pb-1.5'>{user.views.length} content views <span className='text-gray-400'>0 this month</span></li>
              <li>Joined (Month) (Year)</li>
            </ul>
          </div>
          <div className='border-b flex justify-between items-center mt-8'>
            <div className='font-semibold'>Knows about</div>
            <div className='mb-1'><CreateOutlinedIcon fontSize='large' className='border p-1.5 circle hover:cursor-pointer hover:bg-gray-100'/></div>
          </div>
          <div className='border-t p-4'>
          <div className='p-6 pb-12'>
          <div className='h-24 w-24 mx-auto'>
            <img src={image} alt="" />
          </div>
          <div className='mx-auto w-fit pt-2'>You haven't added any topics yet. </div>
          </div>
          <div className='mx-auto w-fit'><button className='rounded-3xl p-1 pr-2 pl-2 text-indigo-500 border-indigo-500 border hover:bg-indigo-100 bg-white text-sm'>Add topics</button></div>
        </div>
        </div>
      </div>
    </div>
  )
  }
  </> 
  )
}