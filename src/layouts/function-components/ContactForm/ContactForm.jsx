import React, { useState } from 'react';
import './ContactForm.css';
import { MdError, MdLocalPhone, MdMail } from 'react-icons/md';
import { IoIosPin } from "react-icons/io";
import { markdownify } from '@/lib/utils/textConverter';
import { FaCheckCircle } from 'react-icons/fa';
import validateForm from './validateForm';

const ContactForm = ({ content }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState('');
  const [error, setError] = useState('');

  const { description, contact_details } = content;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setInfo('');

    const formData = new FormData();
    formData.append('form-name', 'contact');
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    // const formData = new FormData(e.target);
    // console.log(new URLSearchParams(formData).toString());

    const validate = validateForm(name, email, message);

    if (validate) {
      setError(validate);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setInfo('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => {
          setInfo('');
          setLoading(false);
        }, 2000);
      } else {
        setError('Something went wrong. Please try again 1');
        setLoading(false);
      }
    } catch (error) {
      setError('Something went wrong. Please try again 2');
      setLoading(false);
    }
  };

  // return "sfdsf";

  return (
    <div
      className="contact-main px-8 flex gap-7"
    >
      <form onSubmit={handleSubmit} className='left flex flex-col gap-9 p-5 bg-white shadow-medium rounded-xl flex-grow' method='post' name="contact">
        <input type="hidden" name="form-name" value="contact" />
        <div className="title flex flex-col gap-3">
          <h1 className='text-gray-600 font-montserrat text-2xl font-semibold text-center'>Contact Me</h1>
          <div className="line border-2 rounded-full border-primary"></div>
        </div>
        <div className="input-field relative">
          <div className="input-wrapper relative w-full rounded-md overflow-hidden">
            <input id='name' type='text' name='name' value={name} className={`input ${name !== '' ? `valid` : ''} bg-[#EBEBEB] text-[#3a3a3a] text-lg leading-none relative p-4 block w-full border-none border-b border-[#757575]`} onChange={(e) => setName(e.target.value)} required />
          </div>
          <label htmlFor='name' className='text-[#616161] text-lg leading-none absolute pointer-events-none left-4 top-0 bottom-0 whitespace-nowrap my-auto mx-0 h-fit duration-200 ease-in-out'>Name</label>
        </div>
        <div className="input-field relative">
          <div className="input-wrapper relative w-full rounded-md overflow-hidden">
            <input id='email' type='email' name='email' value={email} className={`input ${email !== '' ? `valid` : ''} bg-[#EBEBEB] text-[#3a3a3a] text-lg leading-none relative p-4 block w-full border-none border-b border-[#757575]`} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <label htmlFor='email' className='text-[#616161] bg-transparent border-none p-0 text-lg leading-none absolute pointer-events-none left-4 top-0 bottom-0 whitespace-nowrap my-auto mx-0 h-fit duration-200 ease-in-out'>Email</label>
        </div>
        <div className="input-field relative">
          <div className="input-wrapper relative w-full rounded-md overflow-hidden">
            <textarea id='message' name='message' value={message} rows={7} className={`input ${message !== '' ? `valid` : ''} resize-none bg-[#EBEBEB] text-[#3a3a3a] text-lg leading-none relative p-4 block w-full border-none border-b border-[#757575]`} onChange={(e) => setMessage(e.target.value)} required></textarea>
          </div>
          <label htmlFor='message' className='text-[#616161] text-lg leading-none absolute pointer-events-none left-4 top-4 whitespace-nowrap h-fit duration-200 ease-in-out'>Message</label>
        </div>
        {
          (info || error) && (
            <>
              <div className="infos flex flex-col gap-5">
                {
                  info && (
                    <div className="text-green-700 flex gap-2 items-center border-2 border-green-700 p-2 rounded-md">
                      <FaCheckCircle size={23} />
                      {info}
                    </div>
                  )
                }
                {
                  error && (
                    <div className="text-red-700 flex gap-2 items-center border-2 border-red-700 p-2 rounded-md">
                      <MdError size={25} />
                      {error}
                    </div>
                  )
                }
              </div>
            </>
          )
        }
        <button
          type='submit'
          className='bg-primary transition duration-[0.25s] ease-in-out hover:bg-[#d31f34] flex justify-center items-center text-white p-4 rounded-full text-xl font-medium leading-none'
          disabled={loading}>
          {
            loading ?
              <>
                <svg width="60" height="20" viewBox="0 0 60 20" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="10" r="6" opacity="1" fill="white">
                    <animate id="spinner_qYjJ" begin="0;spinner_t4KZ.end-0.25s" attributeName="opacity" dur="0.75s" values="1;.2" fill="freeze" />
                  </circle>
                  <circle cx="30" cy="10" r="6" opacity=".4" fill="white">
                    <animate begin="spinner_qYjJ.begin+0.15s" attributeName="opacity" dur="0.75s" values="1;.2" fill="freeze" />
                  </circle>
                  <circle cx="52" cy="10" r="6" opacity=".3" fill="white">
                    <animate id="spinner_t4KZ" begin="spinner_qYjJ.begin+0.3s" attributeName="opacity" dur="0.75s" values="1;.2" fill="freeze" />
                  </circle>
                </svg>
              </>
              :
              <>
                Send
              </>
          }
        </button>
      </form>
      <div className="right w-[45%] pb-0 bg-red-50 relative rounded-xl overflow-hidden">
        <div className="image-wrapper w-full h-full absolute top-0 left-0 p-5 pb-0 flex justify-center overflow-hidden ">
          <img src="/images/contact/mrmaney_transparent.png" className='object-cover object-top h-full' alt="Image" />
        </div>
        <div className="right-contents flex flex-col gap-7 text-white p-5 w-full h-full backdrop-blur-sm bg-[#00000066]">
          <div className="title flex flex-col gap-3">
            <h1 className='text-white font-montserrat text-2xl font-semibold text-center'>Reach Me</h1>
            <div className="line border-2 rounded-full border-primary"></div>
          </div>
          <p className='text-white'>
            {
              markdownify(description)
            }
          </p>
          <div className="channels flex flex-col gap-5">
            {
              contact_details?.email && (
                <div className="channel flex items-center gap-3">
                  <div className="icon-wrapper p-2 flex justify-center items-center border-2 rounded-full border-primary text-primary">
                    <MdMail className='text-2xl leading-none' />
                  </div>
                  {contact_details.email}
                </div>
              )
            }
            {
              contact_details?.phone && (
                <div className="channel flex items-center gap-3">
                  <div className="icon-wrapper p-2 flex justify-center items-center border-2 rounded-full border-primary text-primary">
                    <MdLocalPhone className='text-2xl leading-none' />
                  </div>
                  {contact_details.phone}
                </div>
              )
            }
            {
              contact_details?.location && (
                <div className="channel flex items-center gap-3">
                  <div className="icon-wrapper p-2 flex justify-center items-center border-2 rounded-full border-primary text-primary">
                    <IoIosPin className='text-2xl leading-none' />
                  </div>
                  {contact_details.location}
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm;