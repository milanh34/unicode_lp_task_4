import './Navbar.css';
import SidebarNav from './SidebarNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { faPenToSquare, faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import image from '../images/logo.png';
import prof from '../images/pic.jpg';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const openSidebar = () => {
    document.getElementById('sidebar').classList.toggle('show')
    document.getElementById('sidebar').classList.toggle('hide')
  }
  return (
  <>
    <div className='w-1/5 z-10 absolute hide' id='sidebar'>
      <SidebarNav/>
    </div>
    <div className='border-b shadow z-0 w-full'>
        <div className="nav-div">
            <li className="flex justify-between h-12 items-center p-2">
                <ul><Link><img src={image} alt="Quora" width="88px" className='mr-6'/></Link></ul>
                <ul><Link className='hover:bg-gray-100 pr-3 pl-3 pt-2 pb-2 rounded-md'><HomeOutlinedIcon sx={{ fontSize: 30 }}/></Link></ul>
                <ul><Link className='hover:bg-gray-100 pr-3 pl-3 pt-2 pb-2 rounded-md'><ListAltOutlinedIcon sx={{ fontSize: 30 }}/></Link></ul>
                <ul><Link><FontAwesomeIcon icon={faPenToSquare} className='text-xl hover:bg-gray-100 pr-3 pl-3 pt-2 pb-2 rounded-md'/></Link></ul>
                <ul><Link className='hover:bg-gray-100 pr-3 pl-3 pt-2 pb-2 rounded-md'><GroupsOutlinedIcon sx={{ fontSize: 33 }}/></Link></ul>
                <ul><Link className='hover:bg-gray-100 pr-3 pl-3 pt-2 pb-2 rounded-md'><NotificationsOutlinedIcon sx={{ fontSize: 26 }}/></Link></ul>
                <ul><div className='w-72 h-8 border hover:border-blue-600 rounded-sm text-gray-500 flex text-sm items-center'><FontAwesomeIcon icon={faSearch} className='m-2'/> <input type="text" placeholder='Search Quora' className='h-full w-full focus:outline-none'/></div></ul>
                <ul><Link><div className='border h-6 ml-2 flex justify-center items-center rounded-2xl p-4 hover:bg-gray-100 '>Try Quora+</div></Link></ul>
                <ul onClick={openSidebar}><p><div className='hover:bg-gray-100 pr-2 pl-2 pt-2 pb-2 rounded-md hover:cursor-pointer'><div><img src={prof} alt="profile" className='h-6 w-6 circle'/></div></div></p></ul>
                <ul><Link className='hover:bg-gray-100 pr-2 pl-2 pt-2 pb-2 rounded-md'><LanguageOutlinedIcon sx={{ fontSize: 26 }}/></Link></ul>
                <ul className='rounded-2xl'>
                  <div className='h-8 flex items-center'>
                    <a className='color pl-4 rounded-l-2xl h-8 pt-1'>
                      <Link className='pr-2 border-r border-black text-white'>Add Question</Link>
                    </a>
                    <div className='p-1 pl-2 pr-4 color rounded-r-2xl'>
                      <FontAwesomeIcon icon={faAngleDown} className='text-white '/>
                    </div>
                  </div>
                </ul>
            </li>
        </div>
    </div>
  </>
  )
}
