import { useState , useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import image from '../../images/empty_post.png';

export default function ActivityTab() {
  const[ loading, setLoading ] = useState(true);
  const { user, auth } = useAuth();

  useEffect(() => {
    let getData = async () => {
      if(user && auth){
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
    <div>
        <div className="border-b">
        <ul className="flex text-center pr-8 h-12 text-xs">
            <Link to="/profile" ><li className="pr-2 pl-2 h-full items-center flex hover:bg-gray-100 font-bold text-gray-500">Profile</li></Link>
            <Link to="/profile/answers" ><li className="pr-2 pl-2 h-full items-center flex hover:bg-gray-100 font-bold text-gray-500">{user.answers.length} Answers</li></Link>
            <Link to="/profile/questions" ><li className="pr-2 pl-2 h-full items-center flex hover:bg-gray-100 font-bold text-gray-500">{user.questions.length} Questions</li></Link>
            <Link to="/profile/posts" ><li className="pr-2 pl-2 h-full items-center flex hover:bg-gray-100 font-bold text-gray-500">{user.comments.length} Posts</li></Link>
            <Link to="/profile/followers" ><li className="pr-2 pl-2 h-full items-center flex hover:bg-gray-100 font-bold text-gray-500">{user.followers.length} Followers</li></Link>
            <Link to="/profile/following" ><li className="pr-2 pl-2 h-full items-center flex hover:bg-gray-100 font-bold text-gray-500">Following</li></Link>
            <Link to="/profile/log" ><li className="pr-2 pl-2 h-full items-center flex hover:bg-gray-100 font-bold text-gray-500">Edits</li></Link>
            <Link to="/profile/activity" ><li className="pr-2 pl-2 h-full items-center flex font-bold border-b-2 color-tab">Activity</li></Link>
        </ul>
        </div>
        <div className='flex justify-between pt-2 pb-2'>
          <div className='font-medium'>Activity</div>
        </div>
        <div className='border-t p-4'>
          <div className='p-6'>
          <div className='h-24 w-24 mx-auto'>
            <img src={image} alt="" />
          </div>
          <div className='mx-auto w-fit pt-2'>No recent activity.</div>
          </div>
        </div>
    </div>
    )
  }
  </> 
  )
}