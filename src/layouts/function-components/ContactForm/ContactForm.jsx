import React, { useState } from 'react';
import './ContactForm.css';
import { MdError, MdLocalPhone, MdMail } from 'react-icons/md';
import { IoIosPin } from 'react-icons/io';
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
        setError('Something went wrong. Please try again.');
        setLoading(false);
      }
    } catch (error) {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="contact-main px-8 flex flex-col md:flex-row gap-7">
      <form
        onSubmit={handleSubmit}
        className="left flex flex-col gap-6 p-6 bg-white rounded-md border border-gray-300 flex-grow"
        method="post"
        name="contact"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="title flex flex-col gap-2">
          <h1 className="text-gray-700 font-sans text-2xl font-medium text-center">Contact Me</h1>
          <div className="line border-t-2 border-primary w-12 mx-auto"></div>
        </div>
        <div className="input-field">
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            className="w-full p-3 bg-gray-200 text-gray-800 text-base border border-gray-300 focus:outline-none focus:border-primary transition"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-field">
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            className="w-full p-3 bg-gray-200 text-gray-800 text-base border border-gray-300 focus:outline-none focus:border-primary transition"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-field">
          <textarea
            id="message"
            name="message"
            value={message}
            rows={5}
            className="w-full p-3 bg-gray-200 text-gray-800 text-base border border-gray-300 focus:outline-none focus:border-primary transition resize-none"
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        {(info || error) && (
          <div className="infos flex flex-col gap-3">
            {info && (
              <div className="text-green-600 flex gap-2 items-center border border-green-600 p-2 rounded">
                <FaCheckCircle size={20} />
                <span className="text-sm">{info}</span>
              </div>
            )}
            {error && (
              <div className="text-red-600 flex gap-2 items-center border border-red-600 p-2 rounded">
                <MdError size={20} />
                <span className="text-sm">{error}</span>
              </div>
            )}
          </div>
        )}
        <button
          type="submit"
          className="bg-primary transition duration-200 ease-in-out hover:bg-primary-dark text-white p-3 rounded text-base font-medium"
          disabled={loading}
        >
          {loading ? (
            <svg width="60" height="20" viewBox="0 0 60 20" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="10" r="6" fill="white">
                <animate attributeName="opacity" begin="0;spinner_restart.end-0.25s" dur="0.75s" values="1;.2" />
              </circle>
              <circle cx="30" cy="10" r="6" fill="white">
                <animate attributeName="opacity" begin="spinner_restart.begin+0.15s" dur="0.75s" values="1;.2" />
              </circle>
              <circle cx="52" cy="10" r="6" fill="white">
                <animate attributeName="opacity" begin="spinner_restart.begin+0.3s" dur="0.75s" values="1;.2" />
              </circle>
              <animate id="spinner_restart" attributeName="opacity" from="1" to="1" begin="0s" dur="2.25s" fill="freeze" />
            </svg>
          ) : (
            'Send'
          )}
        </button>
      </form>
      <div className="right w-full md:w-1/2 bg-gray-100 rounded-md border border-gray-300 p-6 flex flex-col justify-center">
        <div className="title flex flex-col gap-2">
          <h1 className="text-gray-800 font-sans text-2xl font-medium text-center">Reach Me</h1>
          <div className="line border-t-2 border-primary w-12 mx-auto"></div>
        </div>
        <p className="text-gray-700 text-base mt-4">{markdownify(description)}</p>
        <div className="channels flex flex-col gap-4 mt-6">
          {contact_details?.email && (
            <div className="channel flex items-center gap-3">
              <div className="icon-wrapper p-2 border border-gray-400 rounded-full">
                <MdMail className="text-xl text-gray-800" />
              </div>
              <span className="text-gray-800 text-base">{contact_details.email}</span>
            </div>
          )}
          {contact_details?.phone && (
            <div className="channel flex items-center gap-3">
              <div className="icon-wrapper p-2 border border-gray-400 rounded-full">
                <MdLocalPhone className="text-xl text-gray-800" />
              </div>
              <span className="text-gray-800 text-base">{contact_details.phone}</span>
            </div>
          )}
          {contact_details?.location && (
            <div className="channel flex items-center gap-3">
              <div className="icon-wrapper p-2 border border-gray-400 rounded-full">
                <IoIosPin className="text-xl text-gray-800" />
              </div>
              <span className="text-gray-800 text-base">{contact_details.location}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
