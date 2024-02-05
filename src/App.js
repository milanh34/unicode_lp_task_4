import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import ProfileTab from './components/ProfileComponents/ProfileTab';
import AnswersTab from './components/ProfileComponents/AnswersTab';
import QuestionsTab from './components/ProfileComponents/QuestionsTab';
import PostsTab from './components/ProfileComponents/PostsTab';
import FollowersTab from './components/ProfileComponents/FollowersTab';
import FollowingTab from './components/ProfileComponents/FollowingTab';
import EditsTab from './components/ProfileComponents/EditsTab';
import ActivityTab from './components/ProfileComponents/ActivityTab';
import Question from './components/Question';
import SidebarMyProfile from './components/SidebarMyProfile';
import SidebarQuestion from './components/SidebarQuestion';
import Register from './components/Register';
import Login from './components/Login';
import ProfileTab2 from './components/MyProfileComponents/ProfileTab2';
import FollowersTab2 from './components/MyProfileComponents/FollowersTab2';
import FollowingTab2 from './components/MyProfileComponents/FollowingTab2';
import ActivityTab2 from './components/MyProfileComponents/ActivityTab2';
import EditsTab2 from './components/MyProfileComponents/EditsTab2';
import PostsTab2 from './components/MyProfileComponents/PostsTab2';
import QuestionTab2 from './components/MyProfileComponents/QuestionTab2';
import AnswersTab2 from './components/MyProfileComponents/AnswersTab2';

function App() {
  return (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<><Navbar/><Profile/></>}>
          <Route path='' element={<ProfileTab/>}></Route>
          <Route path='answers' element={<AnswersTab/>}></Route>
          <Route path='questions' element={<QuestionsTab/>}></Route>
          <Route path='followers' element={<FollowersTab/>}></Route>
          <Route path='following' element={<FollowingTab/>}></Route>
          <Route path='posts' element={<PostsTab/>}></Route>
          <Route path='log' element={<EditsTab/>}></Route>
          <Route path='activity' element={<ActivityTab/>}></Route>
        </Route>
        <Route path='/myprofile' element={<SidebarMyProfile/>}>
          <Route path='' element={<ProfileTab2/>}/>
          <Route path='answers' element={<AnswersTab2/>}/>
          <Route path='questions' element={<QuestionTab2/>}/>
          <Route path='followers' element={<FollowersTab2/>}/>
          <Route path='following' element={<FollowingTab2/>}/>
          <Route path='posts' element={<PostsTab2/>}/>
          <Route path='log' element={<EditsTab2/>}/>
          <Route path='activity' element={<ActivityTab2/>}/>
        </Route>
        <Route path='/question' element={<SidebarQuestion/>}/>
        <Route path='/question1' element={<Question/>}/>
      </Routes>
    </Router>
  </AuthProvider>
  );
}

export default App;
