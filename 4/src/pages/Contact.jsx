import React, { useRef, useState, Suspense } from 'react';
import emailjs from '@emailjs/browser';
import Fox from '../models/Fox';
import Loader from '../components/Loader';
import { Canvas } from '@react-three/fiber';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [IsLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => setCurrentAnimation('walk');
  const handleBlur = () => setCurrentAnimation('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Mohamed Sabry",
        from_email: form.email,
        to_email: 'engmohamedsabry925@gmail.com',
        message: form.message 
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      showAlert({ 
        show: true, 
        text: 'Message sent successfully! I will get back to you soon.',
        type: 'success'
      });
      
      setTimeout(() => {
        hideAlert();
        setCurrentAnimation('idle');
        setForm({ name: '', email: '', message: '' });
      }, 5000);
    }).catch((error) => {
      setIsLoading(false);
      setCurrentAnimation('idle');
      console.error(error);
      showAlert({ 
        show: true, 
        text: 'Failed to send message. Please try sending directly to engmohamedsabry925@gmail.com',
        type: 'danger'
      });
    });
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container min-h-screen py-12'>
      {alert.show && <Alert {...alert} />}
      
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>
          Get in <span className='blue-gradient_text font-semibold'>Touch</span>
        </h1>
        <p className='text-slate-600 mt-3 text-base'>
          Have a project in mind or want to discuss frontend opportunities? Feel free to reach out directly or fill out the form below.
        </p>

        {/* Direct Contact Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6'>
          <a 
            href='tel:01201289813' 
            className='flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-blue-500 hover:shadow-md transition-all'
          >
            <div className='w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 font-bold'>
              📞
            </div>
            <div>
              <p className='text-xs text-slate-500 font-medium'>Phone</p>
              <p className='text-sm font-semibold text-slate-800'>01201289813</p>
            </div>
          </a>

          <a 
            href='mailto:engmohamedsabry925@gmail.com' 
            className='flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-blue-500 hover:shadow-md transition-all'
          >
            <div className='w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 font-bold'>
              ✉️
            </div>
            <div>
              <p className='text-xs text-slate-500 font-medium'>Email</p>
              <p className='text-xs font-semibold text-slate-800 truncate max-w-[160px] sm:max-w-none'>engmohamedsabry925@gmail.com</p>
            </div>
          </a>
        </div>

        <form 
          ref={formRef}
          className='w-full flex flex-col gap-6 mt-8'
          onSubmit={handleSubmit}
        > 
          <label className='text-slate-800 font-semibold text-sm'>
            Name
            <input 
              type="text" 
              name="name"
              className="input"
              placeholder="Your name"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-slate-800 font-semibold text-sm'>
            Email
            <input 
              type="email" 
              name="email"
              className="input"
              placeholder="your.email@example.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-slate-800 font-semibold text-sm'>
            Your message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="How can I help you?"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button 
            type='submit'
            className='btn font-semibold tracking-wide py-3'
            disabled={IsLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {IsLoading ? 'Sending ...' : 'Send Message'}
          </button>
        </form>  
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px] mt-8 lg:mt-0'>
        <Canvas 
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation} 
              position={[0.5, 0.35, 0]}
              rotation={[12.625, -0.6, 0]}
              scale={[0.48, 0.48, 0.48]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;