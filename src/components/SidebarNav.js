import image from '../images/pic.jpg'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import axios from './Axios';

const SidebarNav = () => {

    const[ loading, setLoading ] = useState(true);
    const { user, auth, updat, setUpdat } = useAuth();

    useEffect(() => {
        let getData = async () => {
            if(user.userName && auth.accessToken){
                setLoading(false);
            }
        }
        getData();
    },[])

    const openQuestionBox = () =>{
        document.getElementById('questionbox').classList.toggle('hidden')
    }
    
    const handleSubmit = async () => {
        let q = document.getElementById('questionAsked').value
        let c = document.getElementById('categoryQuestion').value
        
        try{
            let res = await axios.post('/question/post',
                {question: q, category: c},
                {headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'authToken': `${auth.accessToken}`}}
            );
            console.log(res)
            if(res.data.Error){
                document.getElementById('submitbutton').classList.toggle('hidden');
                document.getElementById('unsuccessful').classList.toggle('hidden');
                setTimeout(() => {
                    document.getElementById('submitbutton').classList.toggle('hidden');
                    document.getElementById('unsuccessful').classList.toggle('hidden');
                }, 3000)
            } else if(q && c && res){
                setTimeout(() => {
                    document.getElementById('questionbox').classList.toggle('hidden');
                    window.alert("Question Added Successfully!");
                    document.getElementById('questionAsked').value="";
                    document.getElementById('categoryQuestion').value="";
                    setUpdat(updat+1);
                }, 300);
            }
        } catch (e){
            console.error(e)
            document.getElementById('submitbutton').classList.toggle('hidden');
            document.getElementById('unsuccessful').classList.toggle('hidden');
            setTimeout(() => {
                document.getElementById('submitbutton').classList.toggle('hidden');
                document.getElementById('unsuccessful').classList.toggle('hidden');
            }, 3000)
        }
    }
  return (
    <>
    {
        loading? (
        <>
        <div className='h-screen'>
            <div className='mb-4 flex justify-center items-center h-screen'>
                <div className='Load'></div>
            </div>
        </div>
        </>
        ) : (
    <div className='flex'>
    <div className="colour w-full h-screen text-2xl">
        <div className="h-1/6 flex items-center justify-center">
            <Link to='/myprofile' className='flex items-center justify-evenly p-4 w-8/12 bg1 rounded-2xl hover:cursor-pointer'>
                <div className='pr-2'><img src={image} className='circle border-0 h-20 w-20'></img></div>
                <div className='font-bold text-white'>My Profile</div>
            </Link>
        </div>
        <div className='h-3/6 flex justify-end'>
            <div className='w-9/12 flex'>
                <ul className='pr-2 w-9/12'>
                    <li className='pl-2 pt-4 pb-4 flex hover:cursor-pointer bg1 rounded-xl'><HomeOutlinedIcon sx={{ fontSize:40, color:"white" }}/><div className='text-white font-bold pl-4 my-auto'>Home</div></li>
                    <li className='pl-2 pt-4 pb-4 flex hover:cursor-pointer bg1 rounded-xl'><ListAltOutlinedIcon sx={{ fontSize:40, color:"white" }}/><div className='text-white font-bold pl-5 my-auto'>Following</div></li>
                    <li className='pl-2 pt-4 pb-4 flex hover:cursor-pointer bg1 rounded-xl'><NotificationsOutlinedIcon sx={{ fontSize:40, color:"white" }}/><div className='text-white font-bold pl-5 my-auto'>Notification</div></li>
                    <li className='pl-2 pt-4 pb-5 flex hover:cursor-pointer bg1 rounded-xl'><CalendarTodayOutlinedIcon sx={{ fontSize:38, color:"white" }}/><div className='text-white font-bold pl-6 my-auto'>Spaces</div></li>
                    <li className='pl-2 pt-4 pb-4 flex hover:cursor-pointer bg1 rounded-xl'><QuestionAnswerIcon sx={{ fontSize:38, color:"white" }}/><div className='text-white font-bold pl-6 my-auto'>Answer</div></li>
                </ul>
            </div>
        </div>
        <div className='h-2/6 flex flex-col justify-evenly items-center'>
            <Link className='border-2 border-white p-4 pl-6 pr-6 border-radius font-bold text-white bg1 flex'>Try Quora<AddIcon sx={{ fontSize:30 }}/></Link>
            <Link className='border-0 p-4 pl-6 pr-6 border-radius font-bold text-color bg-white bg2 flex' onClick={openQuestionBox}>Add Question<KeyboardArrowRightIcon sx={{ fontSize:30 }}/></Link>
        </div>
    </div>
    <div className='absolute z-10 bg-white hidden' id='questionbox'>
        <div className='flex items-center justify-between'>
            <div>
                <div className='ml-4 mr-4 text-lg font-semibold pb-6 mt-2'>Question : <input type="text" id='questionAsked' className='w-96 ml-5 border-b focus:outline-none font-normal'/></div>
                <div className='ml-4 mr-4 text-lg font-semibold'>Category : <input type="text" id='categoryQuestion' className='w-96 ml-5 border-b focus:outline-none font-normal'/></div>
            </div>
            <div className='mr-6'>
                <button className='color text-white pl-4 pr-4 p-2 rounded-xl'id='submitbutton'  onClick={handleSubmit}>Submit</button>
                <div className='text-color font-semibold hidden' id='unsuccessful'>Unsucessful</div>
            </div>
        </div>
    </div>
    </div>
    )
    }
    </>
  )
}


export default SidebarNav