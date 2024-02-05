import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import './SidebarPage.css';
import logo from '../images/logo.png'
import image from '../images/pic.jpg'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { LuArrowBigUp, LuArrowBigDown } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import SidebarNav from './SidebarNav';
import axios from './Axios';

const SidebarMyProfile = () => {

    const[ loading, setLoading ] = useState(true);
    const { user, setUser, auth, questionId, setQuestionId } = useAuth();
    const [ questionSearched, setQuestionSearched ] = useState(false);
    const [ questionArray, setQuestionArray ] = useState([]);
    const [ userArray, setUserArray ] = useState([]);
    const [ render, setRender ] = useState(true);
    const navigate = useNavigate();

    const [retweet, setRetweet] = useState(1)

    useEffect(() => {
        let getData = async () => {
            if(user.userName && auth.accessToken){
                setLoading(false);
            }
        }
        getData();
    },[])

    let searchQuestion = async () => {
        try {
            let questionCategory = document.getElementById('searchQuestion').value;
            let resq = await axios.post('/question/search',
                {categories:questionCategory},
                {headers: {'Content-Type':'application/json', 'authToken':`${auth.accessToken}`}}
            );
            let resu = await axios.get('/allUsers',
                {headers: {'Content-Type':'application/json'}}
                );
                if(resq && resu) {
                setQuestionSearched(true);
                setQuestionArray(resq.data.result[0]);
                setUserArray(resu.data.users);
                console.log(user)
                if(questionArray.length === 0){
                    console.log("No questions related to this category !");
                } else {
                    setRender(false)
                    setRender(true)
                }
            }
        } catch (e) {
            console.error(e)
        }
    }

    let loadQuestionId = async (q) => {
        await setQuestionId(q);
        if(questionId === q){
            navigate(`/question`)
        }
    }
    
    let upvote = async (q) => {
        try {
            let res = await axios.post(`/question/upvote/${q}`,
                {},
                {headers: {'Content-Type':'application/json', 'authToken':`${auth.accessToken}`}}
            );
            searchQuestion();
        } catch (e) {
            console.error(e)
        }
    }

    let downvote = async (q) => {
        try {
            let res = await axios.post(`/question/downvote/${q}`,
                {},
                {headers: {'Content-Type':'application/json', 'authToken':`${auth.accessToken}`}}
            );
            searchQuestion();
        } catch (e) {
            console.error(e)
        }
    }

    let follow = async (q) => {
        try{
            let res = await axios.post(`/follow/${q}`,
                {},
                {headers: {'Content-Type':'application/json', 'authToken':`${auth.accessToken}`}}
            );
            if(res.data.success === true){
                window.alert(`Followed user successfully`)
                let followingsArray = user.following
                followingsArray.push(q)
                setUser({
                    "_id":user._id,
                    "answers":user.answers,
                    "comments":user.comments,
                    "followers":user.followers,
                    "following":followingsArray,
                    "questions":user.questions,
                    "views":user.views,
                    "userEmail":user.email,
                    "userName":user.name,
                    "userPassword":user.password
                  })
                searchQuestion();
            } else {
                window.alert('Error. Try again later!')
            }
        } catch (e) {
            console.error(e)
        }
    }
    
    let unfollow = async (q) => {
        try{
            let res = await axios.post(`/unfollow/${q}`,
            {},
            {headers: {'Content-Type':'application/json', 'authToken':`${auth.accessToken}`}}
            );
            if(res.data.success === true){
                window.alert(`Unfollowed user successfully`)
                let followingsArray = user.following
                let followingsArray2 = followingsArray.filter(function(userid){
                    return userid !== q;
                });
                setUser({
                    "_id":user._id,
                    "answers":user.answers,
                    "comments":user.comments,
                    "followers":user.followers,
                    "following":followingsArray2,
                    "questions":user.questions,
                    "views":user.views,
                    "userEmail":user.email,
                    "userName":user.name,
                    "userPassword":user.password
                  })
                searchQuestion();
            } else {
                window.alert('Error. Try again later!')
            }
        } catch (e) {
            console.error(e)
        }
    }

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
    <div className='w-4/5 bg3'>  
    <div className="bg3 p-12">
        <div className='flex items-center'>
            <div className='pr-10 pl-2'><img src={logo} alt="Quora" width="144px" className='mr-6'/></div>
            <div className='border rounded-3xl text-lg flex items-center bg-white border-gray-200 hover:border-gray-400 w-9/12'>
                <SearchOutlinedIcon className='m-2 mr-5' sx={{ color:"#a32c29", fontSize:30}}/>
                <input type="text" id='searchQuestion' placeholder='Search for anything...' className='focus:outline-none w-full'/>
                <div className='bg4-gray-200 flex items-center h-12 rounded-r-3xl justify-center w-32 text-color font-medium'>
                    <span className='hover:cursor-pointer' onClick={() => {searchQuestion()}}>Search</span>
                </div>
            </div>
        </div>
        {
        questionSearched? (
            <div className='flex mt-6 p-4 mr-20'>
                <div className='w-11/12'>
                    {
                        render && questionArray.map((q) => {
                            return (
                            <div key={q._id}>
                                <div className='bg-white mt-8 p-4 pl-8 rounded-3xl shadow-box'>
                                    <div className='flex justify-between items-center'>
                                        <div className='w-8/12 flex'>
                                            <div className='mr-3'><img src={image} className='h-20 w-20 circle border-0'/></div>
                                            <div className='flex flex-col justify-center'>
                                                <div className='text-2xl font-bold'>
                                                    {
                                                        userArray.map((u) => {
                                                            if(u._id === q.user){
                                                                return (
                                                                    <p key={u._id}>{u.name}</p>
                                                                )
                                                            }
                                                        })
                                                    }
                                                </div>
                                                <div className='text-lg font-medium text-gray-500'>python developer at XYZ</div>
                                            </div>
                                        </div>
                                        {
                                            q.user === user._id? (
                                                <div></div>
                                            ) : (
                                                user.following.includes(q.user)? (
                                                    <div className='mr-5 p-1 pl-3 font-medium hover:cursor-pointer bg1 pr-3 colour text-lg text-white rounded-3xl' onClick={() => {unfollow(q.user)}}>unfollow</div>
                                                ) : (
                                                    <div className='mr-5 p-1 pl-3 font-medium hover:cursor-pointer bg1 pr-3 colour text-lg text-white rounded-3xl' onClick={() => {follow(q.user)}}>follow</div>
                                                )
                                            )
                                        }
                                    </div>
                                    <div className='flex mt-4'>
                                        <div className='w-8/12'>
                                            <div className='text-2xl font-bold hover:cursor-pointer underline hover:text-gray-500' onClick={() => loadQuestionId(q._id)}>{q.question}</div>
                                            <div className='text-lg text-gray-700'><span className='font-semibold'>Category: </span>{q.categories}</div>
                                        </div>
                                        <div className='w-4/12 flex justify-center'>
                                        </div>
                                    </div>
                                    <div className='flex justify-between mt-3'>
                                        <div className='flex items-center text-gray-400'>
                                            <div><LuArrowBigUp className='text-3xl hover:text-blue-600 hover:cursor-pointer' onClick={() => upvote(q._id)}/></div>
                                            <div className='mr-2 font-bold'>{q.upvotes.length}</div>
                                            <div><LuArrowBigDown className='text-3xl hover:text-blue-600 hover:cursor-pointer' onClick={() => downvote(q._id)}/></div>
                                            <div className='mr-4 font-bold'>{q.downvotes.length}</div>
                                            <div><FaRegComment className='text-2xl hover:text-blue-600 hover:cursor-pointer'/></div>
                                            <div className='mr-4 font-bold'>{q.comments.length}</div>
                                            <div><FaRetweet className='text-3xl hover:text-blue-600 hover:cursor-pointer' onClick={()=>setRetweet(retweet+1)}/></div>
                                            <div className='mr-4 font-bold'>{retweet}</div>                            
                                        </div>
                                        <div className='flex items-center mr-6'>
                                            <p className='text-lg text-gray-500'>{q.createdAt.split("T")[0]}</p>
                                            <BsThreeDots className='ml-3 text-2xl hover:cursor-pointer hover:text-blue-500'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
                <div className='w-1/12 pl-5' ><CancelOutlinedIcon className='hover:cursor-pointer' onClick={() => {setQuestionSearched(false)}} sx={{ color:"#a32c29", fontSize:30 }}/></div>
            </div>
        ) : (
        <div className='flex'>
            <div className='mt-6 w-8/12 pr-12'>
                <div className='w-8/12 flex'>
                    <div className='mr-6'><img src={image} className='h-40 w-40 circle border-0'/></div>
                    <div className='flex flex-col justify-center'>
                        <div className='textsize1 font-bold'>{user.userName}</div>
                        <div className='text-xl font-medium text-gray-500'>python developer at XYZ (role)</div>
                    </div>
                </div>
                <Outlet/>
            </div>
            <div className='mt-14 w-4/12'>
                <div className='bg-white mr-20 mb-10 rounded-3xl'>
                    <div className='w-1/2 text-2xl font-bold text-center mx-auto pt-4 pb-4'>Credentials & Highlights</div>
                    <div className='border w-1/4 mx-auto'></div>
                    <div className='pt-4 text-lg font-medium mx-auto w-3/4 text-orange-700'>
                        <ul>
                            <li className='pb-8'>Has worked in Mc Donalds</li>
                            <li className='pb-8'>Has been a part of several hackathons</li>
                            <li className='pb-8'>Active extra-curriculars</li>
                            <li className='pb-24'>Birth year-1982</li>
                        </ul>
                    </div>
                </div>
                <div className='bg-white mr-20 rounded-3xl'>
                    <div className='w-3/4 text-2xl font-bold text-center mx-auto pt-4 pb-4'>Knows About</div>
                    <div className='border w-1/4 mx-auto'></div>
                    <div className='pt-4 text-lg font-medium mx-auto w-3/4 text-orange-700'>
                        <ul>
                            <li className='pb-8'>Coding</li>
                            <li className='pb-8'>Cooking</li>
                            <li className='pb-8'>Dancing</li>
                            <li className='pb-24'>Failing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        )
        }
    </div>
    </div>
    )
    }
    </div>
  )
}

export default SidebarMyProfile