import React, { useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { FaPhone } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { ImLocation2 } from "react-icons/im";
import emailjs from 'emailjs-com';
import './App.css';

function App() {

  const [data, setData] = useState({
    subject: "",
    message:"",
  })
  const { subject, message } = data
  
  const onChangeData = event => {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  const onSendMail = event => {
    event.preventDefault()

    emailjs.sendForm('service_zpgtsit', 'template_kkeupkc', event.target, '2YH6TVaHF3KDdV12m')
     .then((result) => {
         // show the user a success message
     }, (error) => {
         // show the user an error
     });
    event.target.reset()
  }

  return (
    // bg container
    <div className='bg-contain bg-[#fb923c] h-100vh p-20'>
      {/* bio profile container */}
      <div className="app-container flex flex-row justify-between">
        {/* bio container */}
        <div className='flex flex-col mt-8'>
          <div className='mt-2'>
            <h1 className='text-[#7c2d12] font-bold text-3xl text-left '>Mounika Lingala</h1>
            <p className='text-left mt-1 text-[#7c2d12]  mb-5 text-[10px]' >Appication Developer</p>
          </div>
          <div className='flex flex-row mt-1'>
            <FaPhone size="20" className='text-[#431407] text-[12px] mt-1' />
            <p className='ml-4 text-[#431407]'> 9542623716</p>
          </div>
          <div className='flex flex-row mt-1'>
            <HiOutlineMail size="20" className='text-[#431407] text-[12px] mt-1' />
            <p className='ml-4 text-[#431407]'> mounikagoudlingala@gmail.com</p>
          </div>
          
          <div className='flex flex-row mt-1'>
            <ImLocation2 size="20" className='text-[#431407] text-[12px] mt-1' />
            <p className='ml-4 text-[#431407]'>Hyderabad </p>
          </div>
        </div>
        <img src='https://res.cloudinary.com/dblomc9cr/image/upload/v1680763794/WhatsApp_Image_2023-04-06_at_12.18.16_PM_lridqm.jpg' className='rounded-full w-[200px] h-[200px]' alt="" />
      </div>
      <Tabs>
       <div className='flex flex-row justify-start mt-8'>
          
          <div className='flex'>
            <TabList >
            <div className='flex flex-col justify-start items-center'>
              <div><Tab className='m-8 p-3 w-24 hover:text-white hover:border-0 hover:bg-[#7c2d12] bg-transparent border rounded-md border-[#7c2d12]'>Education</Tab></div>
              <div><Tab className='m-8 p-3 w-24 hover:text-white hover:border-0 hover:bg-[#7c2d12] bg-transparent border rounded-md border-[#7c2d12]'>Experience</Tab></div>
              <div><Tab className='m-8 p-3 w-24 hover:text-white hover:border-0 hover:bg-[#7c2d12] bg-transparent border rounded-md border-[#7c2d12]'>Projects</Tab></div>
              <div><Tab className='m-8 p-3 w-24 hover:text-white hover:border-0 hover:bg-[#7c2d12] bg-transparent border rounded-md border-[#7c2d12]'>Skills</Tab></div>
            </div>
            </TabList>
          </div>
          <div >
            <div className='w-auto'>
            <TabPanels>    
               <div className=' text-center'>
                <TabPanel>    
                  <p className='text-[#7c2d12] mb-10 mt-4 text-center font-bold-500 text-3xl'>Education</p>
                  <div className='list-disc text-left ml-20 mt-15' >
                    <li>MERN Stack course in NxtWave in the year of 2022</li>
                    <li>Master of Business Administration in HR specialization in Avanthi Institute of Engineering and Technology in the year of 2018 - 2021</li>
                    <li>Bachelor of Science [B.Sc] in Computer Science specialization in Pragathi Degree Collage in the year of 2015 - 2018</li>
                    <li>Intermediate [M.P.C] in Chaithanya Junior Collage in the year of 2013 - 2015 </li>
                    <li>Secondary School Certificate in Zilla Parishath Unnatha Patashala Thangadapally in the year of 2012-2013</li>
                    </div>
                </TabPanel>
               </div>
               <div>
                <TabPanel>
                <p className='text-[#7c2d12] mb-10 mt-5 text-right font-bold-500 text-3xl ml-[100px]'>Experience</p>
                  <div className='list-disc text-center ml-20'>
                  <p className='text-[#7c2d12] text-xl text-md'>Junior Application Developer Trainee</p>
                      <p className='text-left mt-1 text-[#7c2d12]  mb-5 text-[12px]'>Procorp India </p>
                      <p className='text-left'>January 2023 - Present</p>
                  </div>
                </TabPanel>
               </div>
               <div>
                <TabPanel>
                  <p className='text-[#7c2d12] mb-10 mt-4 text-center font-bold-500 text-3xl'>Projects!</p>
                  <div className='list-disc text-left ml-20'>
                    <p className='text-[#7c2d12] font-bold text-bold'>Tasty Kitchens  <a href='https://mounisKitchen.ccbp.tech' target='block' className='text-sm ml-2 mb-1 text-blue-800'>https://mounisKitchen.ccbp.tech</a></p>
                    <p>Developed single page dynamic application for Food Store with React.Js where users can see list of popular
Restaurants including with detailed information about restaurant and food and used to order their food</p>
                      <li>Styled the Routes and displayed the list of popular Restaurants, food details, saved items in Cart 
                        in a single page by using of external npm packages</li>
                      <li>Developed the web and mobile application using different react components and used external 
                        packeges like npm packages includes react icons, links, routers, loaders.</li>
                      <p className='text-[#7c2d12] font-bold text-bold'>Technologies: <span className='text-gray-800'>HTML, CSS, React.Js</span></p>
                  </div>
                </TabPanel>
               </div>
               <div>
                <TabPanel>
                  <p className='text-[#7c2d12] mb-10 mt-4 text-center font-bold-500 text-3xl'>Skills!</p>
                    <div className='text-left ml-20'>
                      <li>Web Development</li>
                      <li className=' font-bold text-bold'>Frontend: <span className='text-gray-800 font-bold-normal'>HTML, CSS, Bootstrap, JavaScript, React.js</span></li>
                      <li className='font-bold text-bold'>Backend: <span className='text-gray-800 font-bold-normal'>Python, Express, Node.js</span></li>
                      <li className=' font-bold text-bold'>DataBase: <span className='text-gray-800 font-bold-normal'>SQLite, MongoDB</span></li>
                      <li className=' font-bold text-bold'>Other tools: <span className='text-gray-800 font-bold-normal'>Git, Github</span></li> 
                  </div>
                </TabPanel>
                </div>
                
              </TabPanels>
            </div>
          </div>
      </div>
      </Tabs>
      <p className="text-center text-5xl mt-5 mb-8">.....</p>
      <div className="flex justify-center"> 
        <form onSubmit={onSendMail} autoComplete='"off'>
          <p className="text-center text-3xl text-[#7c2d12] mb-6">Send Email...!</p>
        <label className="text-sm font-bold ">Subject: </label><br/>
        <input className="mt-1 w-[500px] mb-4 hover:text-[#431407] border rounded-md border-[#7c2d12] bg-transparent outline-none text-white p-1 pl-3" type='text' name='subject' value={subject} onChange={onChangeData} /><br/>
        <label className="text-sm w-4/5 font-bold ">message: </label><br/>
        <input type="text" className="mt-1 w-[480px] h-28 box-content text-orange-900 hover:text-orange-900 mb-4 border rounded-md border-[#7c2d12] bg-transparent outline-none text-white pt-0 break-words pl-3" name='message' value={message} onChange={onChangeData} /><br/>
        <button type='submit' className='ml-[200px] m-8 p-3 w-24 hover:text-white hover:border-0 hover:bg-[#7c2d12] bg-transparent border rounded-md border-[#7c2d12]' >Send</button>
        </form>
      </div>
      <hr className="mt-10 border-orange-900" />
      <div className="flex flex-row items-center p-8 mt-[40px] justify-center">
        <img className="w-10 m-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png" alt="" />
        <img className="w-10  m-10" src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="" />  
        {/* <img className="w-10  m-10" src="https://commons.wikimedia.org/wiki/File:Twitter_logo.svg#/media/File:Logo_of_Twitter,_Inc..svg" alt="" />   */}
        <img className="w-10  m-10" src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="" />  
        <img className="w-10  m-10" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt=""/>  
      </div>
    </div>
  );
}

export default App;
