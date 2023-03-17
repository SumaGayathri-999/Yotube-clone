import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Header from './Components/header/Header'
import SideBar from './Components/sideBar/SideBar';
import HomeScreen from './Components/screens/home/HomeScreen';
import "./_app.scss";
import LoginScreen from './Components/screens/login/LoginScreen';
import {Routes,Route } from 'react-router-dom';
import Watchscreen from './Components/screens/watchScreen/Watchscreen';
import SearchScreen from './Components/screens/SearchScreen';


const Layout = ({children})=>{
  const [isSidebar,setSidebar] = useState(false);

  const toggleSidebar = ()=>{
    setSidebar(isSidebar => !isSidebar)
  }
  return (
    <>
       <Header toggleSidebar={toggleSidebar}/>
       <div className="app__container ">
          <SideBar  isSidebar = {isSidebar} toggleSidebar={toggleSidebar} />
        <Container  fluid className="app__main" >
              {children}
          </Container>

       </div> 
    </>
  )
}

function App() {
  const {accesstoken,loading} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
     if((!accesstoken) && (!loading)){
       navigate("/")
     }
  },[accesstoken,loading]);
  return (
    <>
         <Routes>
            <Route path="/" element={<LoginScreen />}></Route>
            <Route path="/home" element={<Layout><HomeScreen /></Layout>}></Route>
            <Route path='/watch/:id' element={<Layout><Watchscreen /></Layout>}></Route>
            <Route path='/search/:query' element={<Layout><SearchScreen /></Layout>}></Route>
            <Route path="*" element={<h1>Invalid Route</h1>} ></Route>
         </Routes>
    </>
  )
}

export default App;