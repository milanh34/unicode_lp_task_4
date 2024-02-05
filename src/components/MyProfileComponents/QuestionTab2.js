import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import image from '../../images/pic.jpg'
import { BsThreeDots } from "react-icons/bs";
import axios from '../Axios';

export default function QuestionsTab2() {
    
    const[ loading, setLoading ] = useState(true);
    const { user, auth, updat, setUpdat, questionId, setQuestionId } = useAuth();
    const [ questionData, setQuestionData ] = useState([]);
    const [ delet, setDelet ] = useState(0);
    const [ render, setRender ] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        let getData = async () => {
            if(auth.accessToken){
                try{
                    let res = await axios.get('/question/get', {
                        headers: {
                            'Content-Type': 'application/json',
                            'authToken': `${auth.accessToken}`
                        }
                    });
                    if(res.data.questions && Array.isArray(res.data.questions)){
                        setQuestionData(res.data.questions);
                        setRender(false)
                        setRender(true)
                    } else {
                        console.log("Invalid data format received from the server")
                    }
                    if(user.userName && auth.accessToken && questionData!==null && questionData!==undefined){
                        setLoading(false);
                    }
                } catch (e) {
                    console.log(e);
                    window.alert("Error in fetching data. Please try again later.")
                }
            }
        }
        getData();
    },[auth.accessToken, delet, updat])

    let loadQuestionId = async (q) => {
        await setQuestionId(q);
        if(questionId === q){
            navigate(`/question`)
        }
    }

    let updateQuestion = async (q) => {
        try {
            let c = await window.prompt("Enter Category");
            let res = await axios.put(`/question/${q}`,
            {categories:c},
            {headers: {'Content-Type':'application/json', 'authToken':`${auth.accessToken}`}}
            );
            console.log(res)
            if(res.data.message.includes('Successfully')){
                setTimeout(() => {
                    setUpdat(updat+1);
                    window.alert('Question Updated Successfully!')
                }, 500)
            } else {
                window.alert("Question Updation Failed!");
            }
        } catch (e) {
            console.log(e)
            window.alert("Question Updation Failed!");
        }
    }

    let deleteQuestion = async (q) => {
        try {
            let sure = window.confirm('The question will be deleted. Are you sure?');
            if(sure){
                let res = await axios.delete(`/question/${q}`,
                    {headers: {'Content-Type':'application/json', 'authToken':`${auth.accessToken}`}}
                );
                if(res.data.message.includes('Successfully')){
                    setTimeout(() => {
                        setDelet(delet+1);
                        window.alert("Question Deleted Successfully!")
                    }, 1000)
                } else {
                    window.alert("Question Deletion Unsuccessful!");
                }
            }
        } catch (e) {
            console.log(e)
            window.alert("Question Deletion Unsuccessful!");
        }
    }

  return (
    <div>
        <div className='mt-8'>
                    <ul className='flex'>
                        <Link to='/myprofile'><li className='pt-2 pb-2 mr-2 mb-2 rounded-3xl border-2 border-gray-400 text-gray-400 w-32 text-center font-medium text-lg hover:bg-gray-200 hover:cursor-pointer'>Profile</li></Link>
                        <Link to='/myprofile/questions'><li className='pt-2 pb-2 mr-2 mb-2 rounded-3xl border-0 colour text-white w-32 text-center font-medium text-lg'>Questions</li></Link>
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
                {
        loading? (
        <>
        <div className='h-80'>
            <div className='mb-4 flex justify-center items-center h-80'>
                <div className='Load'></div>
            </div>
        </div>
        </>
        ) : (<>
                <div className='flex items-center justify-end'>
                    <div className='mr-1 font-semibold'>Sort By : </div>
                    <input type="date" className='border-2 rounded-2xl p-1 pr-3 pl-3 w-36 hover:bg-gray-100'/>
                </div>
                {
                    render && questionData.map((q) => {
                        console.log(q);
                        return (
                <div key={q._id} className='bg-white mt-4 p-4 mb-8 pl-8 rounded-3xl shadow-box'>
                    <div className='w-8/12 flex'>
                        <div className='mr-3'><img src={image} className='h-20 w-20 circle border-0'/></div>
                        <div className='flex flex-col justify-center'>
                            <div className='text-2xl font-bold'>{user.userName}</div>
                            <div className='text-lg font-medium text-gray-500'>python developer at XYZ</div>
                        </div>
                    </div>
                    <div className='flex mt-4'>
                        <div className='w-8/12'>
                            <div className='text-2xl font-bold underline hover:cursor-pointer hover:text-gray-500' onClick={() => loadQuestionId(q._id)}>{q.question}</div>
                            <div className='text-lg'>{q.categories}</div>
                        </div>
                    </div>
                    <div className='flex justify-between mt-3'>
                        <div className='flex'>
                            <div className='color p-2 pl-4 pr-4 mr-4 rounded-3xl text-white font-semibold' onClick={() => deleteQuestion(q._id)}><button>Delete</button></div>
                            <div className='color p-2 pl-4 pr-4 mr-4 rounded-3xl text-white font-semibold' onClick={() => updateQuestion(q._id)}><button>Update</button></div>
                        </div>
                        <div className='flex items-center mr-6'>
                            <p className='text-lg text-gray-500'>{q.createdAt.split("T")[0]}</p>
                            <BsThreeDots className='ml-3 text-2xl hover:cursor-pointer hover:text-blue-500'/>
                        </div>
                    </div>
                </div>
                        );
                }
                )
                }
            </>)
        }
    </div>
  )
}
