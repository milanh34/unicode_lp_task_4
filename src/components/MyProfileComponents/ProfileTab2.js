import { useState } from 'react';
import { Link } from 'react-router-dom';
import coding from '../../images/coding.jpg'
import image from '../../images/pic.jpg'
import { LuArrowBigUp, LuArrowBigDown } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";

export default function ProfileTab2() {
    
    const [upvote, setUpvote] = useState(120)
    const [downvote, setDownvote] = useState(20)
    const [retweet, setRetweet] = useState(1)
  return (
    <div>
        <div className='mt-8'>
                    <ul className='flex'>
                        <Link to='/myprofile'><li className='pt-2 pb-2 mr-2 mb-2 rounded-3xl border-0 colour text-white w-32 text-center font-medium text-lg'>Profile</li></Link>
                        <Link to='/myprofile/questions'><li className='pt-2 pb-2 mr-2 mb-2 rounded-3xl border-2 border-gray-400 text-gray-400 w-32 text-center font-medium text-lg hover:bg-gray-200 hover:cursor-pointer'>Questions</li></Link>
                        <Link to='/myprofile/answers'><li className='pt-2 pb-2 mr-2 mb-2 rounded-3xl border-2 border-gray-400 text-gray-400 w-32 text-center font-medium text-lg hover:bg-gray-200 hover:cursor-pointer'>Answered</li></Link>
                        <Link to='/myprofile/posts'><li className='pt-2 pb-2 mr-2 mb-2 rounded-3xl border-2 border-gray-400 text-gray-400 w-32 text-center font-medium text-lg hover:bg-gray-200 hover:cursor-pointer'>Posts</li></Link>
                    </ul>
                    <ul className='flex'>
                        <Link to='/myprofile/following'><li className='pt-2 pb-2 mr-2 mb-2 rounded-3xl border-2 border-gray-400 text-gray-400 w-32 text-center font-medium text-lg hover:bg-gray-200 hover:cursor-pointer'>Following</li></Link>
                        <Link to='/myprofile/followers'><li className='pt-2 pb-2 mr-2 mb-2 rounded-3xl border-2 border-gray-400 text-gray-400 w-32 text-center font-medium text-lg hover:bg-gray-200 hover:cursor-pointer'>Followers</li></Link>
                        <Link to='/myprofile/log'><li className='pt-2 pb-2 mr-2 mb-2 rounded-3xl border-2 border-gray-400 text-gray-400 w-32 text-center font-medium text-lg hover:bg-gray-200 hover:cursor-pointer'>Edits</li></Link>
                        <Link to='/myprofile/activity'><li className='pt-2 pb-2 mr-2 mb-2 rounded-3xl border-2 border-gray-400 text-gray-400 w-32 text-center font-medium text-lg hover:bg-gray-200 hover:cursor-pointer'>Activity</li></Link>
                    </ul>
                </div>
                <div className='flex items-center justify-end'>
                    <div className='mr-1 font-semibold'>Sort By : </div>
                    <input type="date" className='border-2 rounded-2xl p-1 pr-3 pl-3 w-36 hover:bg-gray-100'/>
                </div>
                <div className='bg-white mt-4 p-4 pl-8 rounded-3xl shadow-box'>
                    <div className='w-8/12 flex'>
                        <div className='mr-3'><img src={image} className='h-20 w-20 circle border-0'/></div>
                        <div className='flex flex-col justify-center'>
                            <div className='text-2xl font-bold'>full name</div>
                            <div className='text-lg font-medium text-gray-500'>python developer at XYZ</div>
                        </div>
                    </div>
                    <div className='flex mt-4'>
                        <div className='w-8/12'>
                            <div className='text-2xl font-bold'>Question asked/answered?</div>
                            <div className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, reiciendis libero rem at, natus repellat nihil nostrum amet asperiores eius tenetur quod debitis tempora quae assumenda eaque dolorem nam. Eaque dignissimos magni nulla ex dolores laborum, repellendus odit accusantium itaque incidunt laudantium ratione optio. Soluta cumque dolorum laborum obcaecati est!</div>
                        </div>
                        <div className='w-4/12 flex justify-center'>
                            <div><img src={coding} alt="coding image" className='h-56 w-56 rounded-3xl' /></div>
                        </div>
                    </div>
                    <div className='flex justify-between mt-3'>
                        <div className='flex items-center text-gray-400'>
                            <div><LuArrowBigUp className='text-3xl hover:text-blue-600 hover:cursor-pointer' onClick={()=>setUpvote(upvote+1)}/></div>
                            <div className='mr-2 font-bold'>{upvote}</div>
                            <div><LuArrowBigDown className='text-3xl hover:text-blue-600 hover:cursor-pointer' onClick={()=>setDownvote(downvote+1)}/></div>
                            <div className='mr-4 font-bold'>{downvote}</div>
                            <div><FaRegComment className='text-2xl hover:text-blue-600 hover:cursor-pointer'/></div>
                            <div className='mr-4 font-bold'>2</div>
                            <div><FaRetweet className='text-3xl hover:text-blue-600 hover:cursor-pointer' onClick={()=>setRetweet(retweet+1)}/></div>
                            <div className='mr-4 font-bold'>{retweet}</div>
                            
                        </div>
                        <div className='flex items-center mr-6'>
                            <p className='text-lg text-gray-500'>dd/mm/yyyy</p>
                            <BsThreeDots className='ml-3 text-2xl hover:cursor-pointer hover:text-blue-500'/>
                        </div>
                    </div>
                </div>
                <div className='bg-white mt-8 p-4 pl-8 rounded-3xl shadow-box'>
                    <div className='w-8/12 flex'>
                        <div className='mr-3'><img src={image} className='h-20 w-20 circle border-0'/></div>
                        <div className='flex flex-col justify-center'>
                            <div className='text-2xl font-bold'>full name</div>
                            <div className='text-lg font-medium text-gray-500'>python developer at XYZ</div>
                        </div>
                    </div>
                    <div className='flex mt-4'>
                        <div className='w-8/12'>
                            <div className='text-2xl font-bold'>Question asked/answered?</div>
                            <div className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, reiciendis libero rem at, natus repellat nihil nostrum amet asperiores eius tenetur quod debitis tempora quae assumenda eaque dolorem nam. Eaque dignissimos magni nulla ex dolores laborum, repellendus odit accusantium itaque incidunt laudantium ratione optio. Soluta cumque dolorum laborum obcaecati est!</div>
                        </div>
                        <div className='w-4/12 flex justify-center'>
                            <div><img src={coding} alt="coding image" className='h-56 w-56 rounded-3xl' /></div>
                        </div>
                    </div>
                    <div className='flex justify-between mt-3'>
                        <div className='flex items-center text-gray-400'>
                            <div><LuArrowBigUp className='text-3xl hover:text-blue-600 hover:cursor-pointer' onClick={()=>setUpvote(upvote+1)}/></div>
                            <div className='mr-2 font-bold'>{upvote}</div>
                            <div><LuArrowBigDown className='text-3xl hover:text-blue-600 hover:cursor-pointer' onClick={()=>setDownvote(downvote+1)}/></div>
                            <div className='mr-4 font-bold'>{downvote}</div>
                            <div><FaRegComment className='text-2xl hover:text-blue-600 hover:cursor-pointer'/></div>
                            <div className='mr-4 font-bold'>2</div>
                            <div><FaRetweet className='text-3xl hover:text-blue-600 hover:cursor-pointer' onClick={()=>setRetweet(retweet+1)}/></div>
                            <div className='mr-4 font-bold'>{retweet}</div>
                            
                        </div>
                        <div className='flex items-center mr-6'>
                            <p className='text-lg text-gray-500'>dd/mm/yyyy</p>
                            <BsThreeDots className='ml-3 text-2xl hover:cursor-pointer hover:text-blue-500'/>
                        </div>
                    </div>
                    </div>
    </div>
  )
}
