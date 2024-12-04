import React, { useState } from 'react';
import './ContactForm.css';
import { MdLocalPhone, MdMail } from 'react-icons/md';
import { IoIosPin } from "react-icons/io";
import { markdownify } from '@/lib/utils/textConverter';

const ContactForm = ({ content }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const { description, contact_details } = content;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      console.log(response);

      if (response.ok) {
        setStatus('success');
        console.log('Form submitted successfully');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
        console.error('Form submission failed');
      }
    } catch (error) {
      setStatus('error');
      console.error('An error occurred:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="contact-main px-8 flex gap-7"
    >
      <form onSubmit={handleSubmit} className='left flex flex-col gap-9 flex-grow' name="contact" data-netlify="true">
        {/* <input type="hidden" name="form-name" value="contact" /> */}
        <div className="input-field relative">
          <div className="input-wrapper relative w-full rounded-md overflow-hidden">
            <input className={`input ${name !== '' ? `valid` : ''} bg-[#cfcfcf] text-[#3a3a3a] text-lg leading-none relative p-4 block w-full border-none border-b border-[#757575]`} onChange={(e) => setName(e.target.value)} />
          </div>
          <label className='text-[#616161] text-lg leading-none absolute pointer-events-none left-4 top-0 bottom-0 whitespace-nowrap my-auto mx-0 h-fit duration-200 ease-in-out'>Name</label>
        </div>
        <div className="input-field relative">
          <div className="input-wrapper relative w-full rounded-md overflow-hidden">
            <input className={`input ${email !== '' ? `valid` : ''} bg-[#cfcfcf] text-[#3a3a3a] text-lg leading-none relative p-4 block w-full border-none border-b border-[#757575]`} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <label className='text-[#616161] text-lg leading-none absolute pointer-events-none left-4 top-0 bottom-0 whitespace-nowrap my-auto mx-0 h-fit duration-200 ease-in-out'>Email</label>
        </div>
        <div className="input-field relative">
          <div className="input-wrapper relative w-full rounded-md overflow-hidden">
            <textarea rows={7} className={`input ${message !== '' ? `valid` : ''} resize-none bg-[#cfcfcf] text-[#3a3a3a] text-lg leading-none relative p-4 block w-full border-none border-b border-[#757575]`} onChange={(e) => setMessage(e.target.value)} />
          </div>
          <label className='text-[#616161] text-lg leading-none absolute pointer-events-none left-4 top-4 whitespace-nowrap h-fit duration-200 ease-in-out'>Message</label>
        </div>
        {status === 'success' && <p className="text-green-500 my-2">Message sent successfully!</p>}
        {status === 'error' && <p className="text-red-500 mt-2">Failed to send message. Please try again.</p>}
        <button
          type='submit'
          className='bg-primary text-white p-4 rounded-full text-xl font-medium leading-none'
          disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
      <div className="right w-[40%] p-5 pb-0 bg-red-50 relative rounded-xl overflow-hidden">
        <div className="image-wrapper w-full h-full relative flex justify-center overflow-hidden ">
          <img src="/images/contact/mrmaney_transparent.png" className='absolute object-cover object-top h-full' alt="Image" />
        </div>
        <div className="right-contents flex flex-col gap-7 text-white p-5 absolute top-0 left-0 w-full h-full backdrop-blur-sm bg-[#00000066]">
          <div className="title flex flex-col gap-3">
            <h1 className='text-white font-montserrat text-2xl font-semibold text-center'>Contact Me</h1>
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