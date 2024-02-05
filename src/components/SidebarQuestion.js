import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import axios from './Axios';
import './SidebarPage.css';
import image from '../images/pic.jpg'
import coding from '../images/coding.jpg'
import logo from '../images/logo.png'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { LuArrowBigUp, LuArrowBigDown } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import SidebarNav from './SidebarNav';

const SidebarQuestion = () => {

    const[ loading, setLoading ] = useState(true);
    const { user, auth, questionId } = useAuth();
    const [ question, setQuestion ] = useState({});

    useEffect(() => {
        try {
            let getData = async () => {
                let res = await axios.get('/question/all',
                    {headers: {'Content-Type':'application/json'}}
                );
                let questionArray = res.data.questions
                for(let i = 0 ; i < questionArray.length ; i++){
                    let qu = questionArray[i];
                    if(qu._id === questionId){
                        setQuestion(questionArray[i])
                    }
                }
                if(user.userName && auth.accessToken && question){
                    setLoading(false);
                }
            }
            getData();
        } catch (e) {
            console.error(e)
        }
    },[auth.accessToken, loading])

    let downvoteq = async (q) => {
        try {
            let res = await axios.post(`/question/downvote/${q}`,
                {},
                {headers: {'Content-Type':'application/json', 'authToken':`${auth.accessToken}`}}
            );
            if(res.data.message.includes("successfully")){
                setLoading(true);
            }
            console.log(res);
        } catch (e) {
            console.error(e)
        }
    }
    const [upvote, setUpvote] = useState(120)
    const [downvote, setDownvote] = useState(20)
    const [retweet, setRetweet] = useState(1)
    return (
    <div className="flex">
    <div className='colour w-1/5'>
        <SidebarNav/>
    </div>
    {
    loading? (
    <>
    <div className='flex items-center h-screen m-auto'>
        <div>
            <div className='mb-4 flex justify-center'><div className='Load'></div></div>
            <div>If the page does not load, try to <Link to='/register' className='underline text-blue-600'>sign in</Link> or <Link to='/login' className='underline text-blue-600'>log in</Link></div>
        </div>
    </div>
    </>
    ) : (
    <div className='h-full w-4/5'>
            
    <div className="bg3 pt-12 h-screen pl-12 w-full">
        <div className='flex items-center'>
            <div className='pr-10 pl-2'><img src={logo} alt="Quora" width="144px" className='mr-6'/></div>
            <div className='border rounded-3xl text-lg flex items-center bg-white border-gray-200 hover:border-gray-400 w-9/12'>
                <SearchOutlinedIcon className='m-2 mr-5' sx={{ color:"#a32c29", fontSize:30}}/>
                <input type="text" placeholder='Search for anything...' className='focus:outline-none w-full'/>
                <Link to='' className='bg4 flex items-center h-12 rounded-r-3xl justify-center w-32 text-color font-medium'>Search</Link>
            </div>
        </div>
        <div className='mt-8 w-full'>
            <div className='w-full pr-12'>
                <div className='textsize1 font-bold mb-4'>{question.question}</div>
                <div className='flex justify-between w-full pb-4'>
                    <ul className='flex items-center'>
                        <li className='pt-1 pb-1 mr-2 rounded-3xl border-2 border-gray-400 text-gray-400 w-28 text-center font-medium hover:bg-gray-200 hover:cursor-pointer'><FontAwesomeIcon icon={faPenToSquare} className='pr-2'/>Answer</li>
                        <li className='pt-1 pb-1 mr-2 rounded-3xl border-2 border-gray-400 text-gray-400 w-28 text-center font-medium hover:bg-gray-200 hover:cursor-pointer'><FontAwesomeIcon icon={faPlus} className='pr-2'/>Follow</li>
                        <li className='pt-0.5 pb-0.5 mr-2 rounded-3xl border-2 border-gray-400 text-gray-400 w-28 text-center font-medium hover:bg-gray-200 hover:cursor-pointer'><PersonAddAltOutlinedIcon className='pr-2' sx={{ fontSize:28 }}/>Request</li>
                    </ul>
                    <ul className='flex items-center'>
                        <li className='mr-2 hover:cursor-pointer hover:text-blue-500'><InfoOutlinedIcon sx={{ fontSize:30 }}/></li>
                        <li className='flex mr-4 text-lg'><LuArrowBigDown className='text-3xl hover:cursor-pointer hover:text-blue-500' onClick={() => downvoteq(question._id)}/>{question.downvotes.length}</li>
                        <li className='flex mr-4 text-lg'><FaRegComment className='text-xl mt-0.5 mr-0.5 hover:cursor-pointer hover:text-blue-500'/>{question.comments.length}</li>
                        <li><BsThreeDots className='text-xl hover:cursor-pointer hover:text-blue-500'/></li>
                    </ul>
                </div>
                <div className='colour h-0.5 mb-4'></div>
                <div className='flex items-center justify-end'>
                    <div className='mr-1 font-semibold'>Sort By : </div>
                    <div className='border-2 border-gray-400 rounded-3xl p-1 pr-3 pl-3 flex hover:bg-gray-100 bg-white'><p>Relevance</p><KeyboardArrowDownIcon/></div>
                </div>
            </div>
            {
            question.answers.length!==0? (
            <div className='overflow-x-auto pb-5 gridd pr-12'>
                <div className='bg-white mt-4 p-4 pl-8 rounded-3xl shadow-box' style={{ width: "800px" }}>
                    <div className='flex justify-between items-center'>
                        <div className='flex w-8/12'>
                            <div className='mr-3'><img src={image} className='h-20 w-20 circle border-0'/></div>
                            <div className='flex flex-col justify-center'>
                                <div className='text-2xl font-bold'>full name</div>
                                <div className='text-lg font-medium text-gray-500'>python developer at XYZ</div>
                            </div>
                        </div>
                        <div className='mr-5 p-1 pl-3 font-medium hover:cursor-pointer bg1 pr-3 colour text-lg text-white rounded-3xl'>follow</div>
                    </div>
                    <div className='flex mt-4'>
                        <div className='w-8/12'>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, reiciendis libero rem at, natus repellat nihil nostrum amet asperiores eius tenetur quod debitis tempora quae assumenda eaque dolorem nam. Eaque dignissimos magni nulla ex dolores laborum, repellendus odit accusantium itaque incidunt laudantium ratione optio. Soluta cumque dolorum laborum obcaecati est!</div>
                        </div>
                        <div className='w-4/12 flex justify-center'>
                            <div><img src={coding} alt="coding image" className='h-40 w-56 rounded-3xl' /></div>
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
                <div className='bg-white mt-4 p-4 pl-8 rounded-3xl shadow-box' style={{ width: "800px" }}>
                <div className='flex justify-between items-center'>
                        <div className='flex w-8/12'>
                            <div className='mr-3'><img src={image} className='h-20 w-20 circle border-0'/></div>
                            <div className='flex flex-col justify-center'>
                                <div className='text-2xl font-bold'>full name</div>
                                <div className='text-lg font-medium text-gray-500'>python developer at XYZ</div>
                            </div>
                        </div>
                        <div className='mr-5 p-1 pl-3 font-medium hover:cursor-pointer bg1 pr-3 colour text-lg text-white rounded-3xl'>follow</div>
                    </div>
                    <div className='flex mt-4'>
                        <div className='w-8/12'>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, reiciendis libero rem at, natus repellat nihil nostrum amet asperiores eius tenetur quod debitis tempora quae assumenda eaque dolorem nam. Eaque dignissimos magni nulla ex dolores laborum, repellendus odit accusantium itaque incidunt laudantium ratione optio. Soluta cumque dolorum laborum obcaecati est!</div>
                        </div>
                        <div className='w-4/12 flex justify-center'>
                            <div><img src={coding} alt="coding image" className='h-40 w-56 rounded-3xl' /></div>
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
            ) : (
                <div className='h-96 font-bold text-2xl flex items-center justify-center text-color'>
                    No Answers
                </div>
            )
            }
            <div className='text-3xl font-bold mt-8'>Related Questions</div>
            <div className='ml-16 p-2 mt-4 pl-6 border-l-2 border-gray-400'>
                <div className='text-xl underline text-gray-500 pb-3'>How to dance?</div>
                <div className='text-xl underline text-gray-500 pb-3'>How to cook Paneer Butter Masala?</div>
                <div className='text-xl underline text-gray-500 pb-3'>How to get KT?</div>
            </div>
        </div>
    </div>
    </div>
    )
    }
    </div>
  )
}

export default SidebarQuestion