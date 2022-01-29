import logo from './logo.svg';
import './App.css';
import { Container, Text } from '@chakra-ui/react';
import { Switch, Route } from "react-router-dom";
import Profile from './coomponents/about/Profile'
import Skill_level from './coomponents/about/Skill_level'
import NavBar from './coomponents/base/header/NavBar'
import Footer from './coomponents/base/Footer'
import Contact from './coomponents/contact/Contact';
import Swiper_Work from './coomponents/works/Swiper_Work'
import Detail_description_1 from './coomponents/works/detail_descriptions/Detail_description_1';
import Detail_description_2 from './coomponents/works/detail_descriptions/Detail_description_2';
import Page404 from './coomponents/base/Page404'
{/*
import Footer from './base/Footer';
import Page404 from './base/Page404';
import Swiper_Work from './works/Swiper_Work';
import NavBar from './base/header/NavBar';
import Skill_level from './about/Skill_level';
import Detail_description_1 from './works/detail_descriptions/Detail_description_1';
import Detail_description_2 from './works/detail_descriptions/Detail_description_2';
import Profile from './about/Profile';
*/}

function App() {
  return (
    <Container className="App" centerContent p={{ base:"4", md:"6" }} maxWidth="10xl"  width='100%'>
      <Switch>
        <Route exact path='/'>
          <NavBar />
          <div className='bg_image'>
          <img className='bg_image_img' src={`${process.env.PUBLIC_URL}/images/Inkedbg_image_1_LI.jpg`} />
            <Profile/>
            <Text className='bg_text_top'>A little bit about me!!</Text>
          </div>
          <Skill_level />
          <Swiper_Work />
          <Contact />
          <Footer/>
        </Route>
        <Route exact path="/Detail_description_1">
          <Detail_description_1 />
        </Route>
        <Route exact path="/Detail_description_2">
          <Detail_description_2 />
        </Route>
        <Route>
          <Page404 />
        </Route>
        {/*
      <Footer />
        */}
    </Switch>
  </Container>
  );
}
export default App;
