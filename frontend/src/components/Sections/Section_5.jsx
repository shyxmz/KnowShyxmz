import React from 'react'
import bg2 from '../../assets/bg2.png'
import laptop from "../../assets/desk.jpg"
import Button from '../Buttons/Section_3_button';

const Section_5 = () => {
  return (
    <section className='section-5 h-screen bg-[#eef7fe] flex items-center justify-center'>
        <div className='bg-5 h-[550px] w-[1000px] flex items-center justify-around gap-4'
        style={{
            backgroundImage:`url(${bg2})`,
            backgroundPosition:"center",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat",
        }}
        >
            <div className="side-1">
                <h1 className='text-white text-4xl font-bold mb-10'>Coming soon...</h1>
                <img 
                className='h-52 w-96 object-cover'
                src={laptop} alt="" />
            </div>
            <div className="side-2">
                <p className='w-72 text-xs text-gray-200 leading-6 mb-10'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
                <Button />
            </div>
        </div>
    </section>
  )
}

export default Section_5