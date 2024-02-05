import image from '../images/pic.jpg'
import coding from '../images/coding.jpg'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FiberManualRecordSharpIcon from '@mui/icons-material/FiberManualRecordSharp';
import LaunchIcon from '@mui/icons-material/Launch';
import CachedIcon from '@mui/icons-material/Cached';
import { LuArrowBigUp, LuArrowBigDown } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faPenToSquare, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Question = () => {
    const [upvote, setUpvote] = useState(130)
    const [downvote, setDownvote] = useState(20)
    const [retweet, setRetweet] = useState(1)

    const more = () =>{
        document.getElementById('more1').classList.add('hidden')
        document.getElementById('more1').classList.remove('block')
        document.getElementById('less1').classList.add('block')
        document.getElementById('less1').classList.remove('hidden')
    }
    const less = () =>{
        document.getElementById('more1').classList.remove('hidden')
        document.getElementById('more1').classList.add('block')
        document.getElementById('less1').classList.remove('block')
        document.getElementById('less1').classList.add('hidden')
    }
  return (
    <div className="bg-gray-100 h-fit">
        <div className="h-fit profile-div flex pt-8">
            <div className="w-7/12 ml-4">
                <div className='bg-white pb-0.5'>
                    <div className="text-2xl font-bold p-2 pb-0">How do I learn Python?</div>
                    <div className="mt-1 flex justify-between text-gray-500 p-2 border-b pb-1">
                        <ul className='flex items-center'>
                            <li className='p-2 border rounded-3xl pl-3 pr-3 hover:bg-gray-100 hover:cursor-pointer mr-2'><div><FontAwesomeIcon icon={faPenToSquare} className='mr-1'/>Answer</div></li>
                            <li className='mr-2 p-2 hover:bg-gray-100 rounded-3xl border-0 hover:cursor-pointer'><div className='flex items-center'><RssFeedIcon sx={{ fontSize:24 }}/><p className='pr-1'>Follow</p><FiberManualRecordSharpIcon sx={{ fontSize:5 }}/><p className='pl-1'>2.4K</p></div></li>
                            <li className='p-2 hover:bg-gray-100 rounded-3xl border-0 hover:cursor-pointer'><div className='flex'><PersonAddAltOutlinedIcon className='mr-1'/>Request</div></li>
                        </ul>
                        <ul className='flex items-center'>
                            <li className='mr-2 hover:cursor-pointer hover:text-blue-500'><InfoOutlinedIcon sx={{ fontSize:20 }}/></li>
                            <li className='flex mr-4'><LuArrowBigDown className='text-2xl hover:cursor-pointer hover:text-blue-500' onClick={()=>setDownvote(downvote+1)}/>{downvote}</li>
                            <li className='flex mr-3'><FaRegComment className='text-lg mt-0.5 mr-0.5 hover:cursor-pointer hover:text-blue-500'/>2</li>
                            <li><BsThreeDots className='text-lg hover:cursor-pointer hover:text-blue-500'/></li>
                        </ul>
                    </div>
                    <div className='p-2 pb-0 flex items-center justify-between text-gray-400 '>
                        <div className='text-sm'>Ad by Amazon Web Services (AWS)</div>
                        <div><BsThreeDots className='text-lg hover:cursor-pointer hover:text-blue-500'/></div>
                    </div>
                    <div className='text-md font-bold p-2 pb-0'>Looking to easily host your websites? Try AWS for free.</div>
                    <div className='p-2 pb-0 pt-1 text-md text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consequuntur fuga iusto veritatis pariatur delectus.</div>
                    <div className='ml-2 p-1 pl-3 pr-3 border-0 rounded-3xl w-fit bg-gray-100 text-gray-500 font-medium hover:cursor-pointer hover:bg-gray-200 mb-1'><LaunchIcon className='mr-2 text-blue-400'/>Sign Up</div>
                </div>
                <div className='flex items-center justify-between p-2 text-sm'>
                    <div>All related (100+) <FontAwesomeIcon icon={faAngleDown} className='text-gray-500'/></div>
                    <div className='flex items-center'>
                        <div className='mr-2 font-medium text-gray-500'>Sort </div>
                        <div className='border flex items-center border-gray-200 rounded-3xl p-1 pr-3 pl-3 hover:bg-gray-200'><p>Recommended</p><FontAwesomeIcon icon={faAngleDown} className='text-gray-500 ml-1'/></div>
                    </div>
                </div>
                <div className='bg-white'>
                    <div className='flex pl-2 pt-2'>
                        <div><img src={image} alt="image" className='h-10 w-10 circle mr-2'/></div>
                        <div>
                            <div className='flex items-center text-sm'><p className='mr-1 font-bold'>Peter Parker</p><FiberManualRecordSharpIcon sx={{ fontSize:3 }}/><p className='text-blue-400 ml-1 hover:cursor-pointer hover:text-blue-700'>Follow</p></div>
                            <div className='text-sm text-gray-400'>Python Developer at Multinational Corporations (2012-present) <FiberManualRecordSharpIcon sx={{ fontSize:3 }}/> 3y</div>
                        </div>
                    </div>
                    <div className='m-1 text-sm pl-2'><span className='font-bold'>Lorem </span>ipsum dolor sit amet consectetur adipisicing elit. Ullam facilis quaerat accusantium aut et eaque officiis, id repellendus quis incidunt ut reiciendis voluptatem architecto maxime omnis vitae temporibus porro doloribus aliquid odit rem mollitia excepturi perferendis quisquam. Odit minima ea cum laudantium deleniti, ducimus ipsam maiores iure.</div>
                    <div className='m-3'><img src={coding} alt="coding image" className='h-72 w-full'/></div>
                    <div className='m-1 text-sm h-20 overflow-y-auto over block pl-2' id='more1'><span className='font-bold'>Lorem </span>ipsum dolor sit amet, consectetur adipisicing elit. At fugiat, provident, necessitatibus laudantium veniam voluptates explicabo placeat pariatur impedit libero quibusdam modi vel corporis doloribus obcaecati ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, non. Iste, voluptates. Atque, ea ullam. Eos facilis fugiat numquam velit. <span className='text-blue-400 hover:text-purple-400 hover:cursor-pointer' onClick={more}>(more)</span></div>
                    <div className='m-1 text-sm h-20 overflow-y-auto over hidden pl-2' id='less1'><span className='font-bold'>Lorem </span>ipsum dolor sit amet, consectetur adipisicing elit. At fugiat, provident, necessitatibus laudantium veniam voluptates explicabo placeat pariatur impedit libero quibusdam modi vel corporis doloribus obcaecati ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, non. Iste, voluptates. Atque, ea ullam. Eos facilis fugiat numquam velit. amet consectetur adipisicing elit. Blanditiis eum atque excepturi minus reiciendis perferendis perspiciatis! Illum sapiente a impedit quam vitae neque, nemo veniam sunt soluta amet ipsum assumenda blanditiis illo officiis eaque tenetur quisquam. Hic numquam minima ratione. Blanditiis recusandae magni fuga soluta consequuntur sequi sint, veritatis, quia doloremque, tenetur excepturi numquam quos sit ut nobis quisquam a! Deleniti sit, expedita ducimus ex aliquid doloribus, tempore odit amet mollitia corrupti ipsa laborum blanditiis assumenda suscipit sed ab nulla! <span className='text-blue-400 hover:text-purple-400 hover:cursor-pointer' onClick={less}>(less)</span></div>
                    <div className='flex items-center justify-between border-t pl-2 pr-3 p-1 text-sm'>
                        <div className='flex items-center'>
                            <div className='flex mr-3'>
                                <div className='pl-2 pr-2 p-1 border border-gray-300 hover:cursor-pointer hover:bg-gray-200 bg-gray-100 rounded-l-3xl flex items-center' onClick={()=>{setUpvote(upvote+1)}}><LuArrowBigUp className='text-blue-500 text-xl'/>Upvote<FiberManualRecordSharpIcon sx={{ fontSize:3 }} className='mr-1 ml-1'/>{upvote}</div>
                                <div className='pl-2 pr-2 p-1 border border-gray-300 hover:cursor-pointer hover:bg-slate-200 bg-gray-100 rounded-r-3xl flex items-center'><LuArrowBigDown className='text-xl'/></div>
                            </div>
                            <div className='flex items-center mr-3'><FaRegComment className='mr-1 hover:cursor-pointer hover:text-blue-500'/>2</div>
                            <div className='flex'><CachedIcon className='mr-1 hover:cursor-pointer hover:text-blue-500' sx={{ fontSize:20 }}/>125</div>
                        </div>
                        <div><BsThreeDots className='text-lg hover:cursor-pointer hover:text-blue-500'/></div>
                    </div>
                </div>
            </div>
            <div className="w-4/12 ml-5 h-fit mr-4">
                <div className='bg-white'>
                    <div className='font-semibold p-2 border-b'>Related questions</div>
                    <div className='text-blue-700 p-2 pl-3 pr-3 mb-4 border-t'>
                        <ul>
                            <li className='pl-1 pb-3 pr-2 hover:cursor-pointer hover:text-blue-400'>How should I start learning Python?</li>
                            <li className='pl-1 pb-3 pr-2 pt-1 hover:cursor-pointer hover:text-blue-400'>What are the best learning site for Python?</li>
                            <li className='pl-1 pb-3 pr-2 pt-1 hover:cursor-pointer hover:text-blue-400'>What's the best way to learn Python AI?</li>
                            <li className='pl-1 pb-3 pr-2 pt-1 hover:cursor-pointer hover:text-blue-400'>Where can I start programming to learn Python along the way?</li>
                            <li className='pl-1 pb-3 pr-2 pt-1 hover:cursor-pointer hover:text-blue-400'>On average, how long does it take for a newbie to learn the general fundamentals and functions of Python if it is their first language?</li>
                            <li className='pl-1 pb-3 pr-2 pt-1 hover:cursor-pointer hover:text-blue-400'>How long would it take to master Python?</li>
                            <li className='pl-1 pt-1 hover:cursor-pointer hover:text-gray-600 text-gray-400'>Add question</li>
                        </ul>
                    </div>
                </div>
                <div className='p-4 bg-gray-50 border-gray-200 border'></div>
                <div className='h-6 bg-white border border-gray-200 border-t-0 justify-center flex items-center text-gray-400'>Advertisement</div>
            </div>
        </div>
    </div>
  )
}

export default Question