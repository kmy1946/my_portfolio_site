import React, { useRef, useState } from "react";
import { Container, Box } from "@chakra-ui/react";
import {Textarea, Button, Input} from "@chakra-ui/react";
import ReactModal from 'react-modal';
import { useModal } from 'react-hooks-use-modal';
import emailjs from '@emailjs/browser';
import {init,sendForm,send} from 'emailjs-com';
import Contact_Modal from "./Contact_Modal";

//import dotenv from 'dotenv'
//dotenv.config()

//import dotenv from 'dotenv';
//dotenv.config({ path: path.join(__dirname, '.env') });

//require('dotenv').config()

function Contact() {
  const [nameing, setNameing] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = event => {
    event.preventDefault();

    alert(`以下の内容で送信します。 \n 
            お名前: ${nameing} \n
            メールアドレス: ${email} \n 
            お問い合わせ内容: ${message} \n
            `);
    setNameing('');
    setEmail('');
    setMessage('');
  };

  const form = useRef();

  const sendEmail = (e) => {
    //init('user_gDaVFUI0iCKVc8EkuHJpW')
    e.preventDefault();
  
    alert(`以下の内容で送信します。 \n 
              お名前: ${nameing} \n
              メールアドレス: ${email} \n 
              お問い合わせ内容: ${message} \n
            `);
        
  const service_id = process.env.REACT_APP_SERVICE_ID
  const template_id = process.env.REACT_APP_TEMPLATE_ID
  const user_id = process.env.REACT_APP_USER_ID

  emailjs.sendForm(service_id, template_id, e.target, user_id)//form.current
    .then((result) => {
        console.log(result.text);
        alert('送信しました');
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <Box w={'full'} boxShadow={'2xl'} rounded={'lg'} p={6} textAlign={'center'} className="card contact-box text-center mx-auto rounded" id="contact">

      <div className="card-body contact_group">
        <Contact_Modal />
        <p className="contact_me">
          Get in Touch with Me!
        </p>
        <form ref={form} onSubmit={sendEmail}>
          
          <input type="hidden" name="csrf_token" value="{{ csrf_token() }}"/>
          <div className="mb-3">
            <Input type="text" name="user_name" bgColor="white" borderColor="gray" className="form-control" onChange={(event) => setNameing(event.target.value)}    placeholder="Your Name" id="name" required data-validation-required-message="Please enter your name" required/>
          </div>
          <div className="mb-3">
            <Input bgColor="white" borderColor="gray" type="email" className="form-control" onChange={(event) => setEmail(event.target.value)}
              placeholder="Your Email Address" name="user_email" id="email" required data-validation-required-message="Please enter your Email Address" required/>
          </div>
          <div className="mb-3">
            <Textarea type="text" bgColor="white" borderColor="gray" className="form-control" onChange={(event) => setMessage(event.target.value)} placeholder="Message" name="message" id="message" rows="5" required></Textarea>
            <p className="help-block text-danger"></p>
          </div>
          <div className="mb-3" id="success">
            <Button className="btn" bgColor='yellow.300' type="submit" value="Send" id="sendMessageButton"><i className="fas fa-paper-plane"></i>Send!!!</Button>
          </div>
        </form>

      </div>
    </Box>
  )
  
}
export default Contact