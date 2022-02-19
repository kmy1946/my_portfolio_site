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
import Detail_description_4 from './coomponents/works/detail_descriptions/Detail_description_4';
import Detail_description_3 from './coomponents/works/detail_descriptions/Detail_description_3';
import Detail_description_7 from './coomponents/works/detail_descriptions/Detail_description_7';

function App() {
  return (
    <Container className="App" centerContent p={{ base:"4", md:"6" }} maxWidth="10xl"  width='100%'>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <div className='bg_image'>
          <img className='bg_image_img' src={`${process.env.PUBLIC_URL}/images/paragraph_sampleee.jpg`} />
            <Profile/>
            <Text className='bg_text_top'>A little bit about me!!</Text>
          </div>
          <Skill_level />
          <Swiper_Work />
          <Contact />
        </Route>
        <Route exact path="/Detail_description_1">
          <Detail_description_1 />
        </Route>
        <Route exact path="/Detail_description_2">
          <Detail_description_2 />
        </Route>
        <Route exact path="/Detail_description_3">
          <Detail_description_3 />
        </Route>
        <Route exact path="/Detail_description_4">
          <Detail_description_4 />
        </Route>
        <Route exact path="/Detail_description_7">
          <Detail_description_7 />
        </Route>
        <Route>
          <Page404 />
        </Route>
        {/*
      <Footer />
        */}
    </Switch>
    <Footer/>
  </Container>
  );
}
export default App;
