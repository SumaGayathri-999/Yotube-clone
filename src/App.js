import React,{useState,useEffect} from 'react'
import {lazy} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import "./_app.scss";
import {Routes,Route } from 'react-router-dom';
import LoginScreen from './Components/screens/login/LoginScreen';
const Header = lazy(()=>import('./Components/header/Header'));
const SideBar  = lazy(()=>import ('./Components/sideBar/SideBar'));
const HomeScreen = lazy(()=>import('./Components/screens/home/HomeScreen'));
const Watchscreen = lazy(()=>import('./Components/screens/watchScreen/Watchscreen'));
const SearchScreen = lazy(()=>import('./Components/screens/SearchScreen'));




const Layout = ({children}) => {
  const [isSidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar((prevSidebar) => !prevSidebar);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <div className="app__container ">
        <SideBar isSidebar={isSidebar} toggleSidebar={toggleSidebar} />
        <Container fluid className="app__main">
          {children}
        </Container>
      </div>
    </>
  );
};

function App() {
  const {accesstoken, loading} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accesstoken && !loading) {
      navigate("/");
    }
  }, [accesstoken, loading]);

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/home" element={
            <Layout>
              <React.Suspense fallback={<div style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                marginTop: "50vh",
              }}>Loading...</div>}>
                  <HomeScreen />
                </React.Suspense>
            </Layout>
          }
        />
        <Route path="/watch/:id" element={
            <Layout>
              <React.Suspense fallback={<div style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                marginTop: "50vh",
              }}>Loading...</div>}>
                  <Watchscreen />
               </React.Suspense>
            </Layout>
          }
        />
        <Route path="/search/:query" element={
            <Layout>
              <React.Suspense fallback={<div style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                marginTop: "50vh",
              }}>Loading...</div>}>
                  <SearchScreen />
               </React.Suspense>
            </Layout>
          }
        />
        <Route path="*" element={
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                marginTop: "50vh",
              }}
            >
              404 Not Found 😞
            </h1>
          }
        />
      </Routes>
    </>
  );
}

export default App;
