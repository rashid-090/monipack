import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className='rounded-4xl bg-white text-black'>
      <div className='w-11/12 mx-auto py-20'>
        <div className='text-center mb-10'>
          <h2 className='text-3xl mb-4'>Get In Touch</h2>
          <p className='text-gray-600 text-sm max-w-md mx-auto'>
            Have a question or want to work together? Send me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className='max-w-2xl mx-auto'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {/* Name Input */}
              <div className='space-y-2'>
                <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
                  Full Name *
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-main-bg-hove focus:border-transparent transition-all duration-200 outline-none'
                  placeholder='Enter your full name'
                />
              </div>

              {/* Email Input */}
              <div className='space-y-2'>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                  Email Address *
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-main-bg-hove focus:border-transparent transition-all duration-200 outline-none'
                  placeholder='Enter your email address'
                />
              </div>
            </div>

            {/* Subject Input */}
            <div className='space-y-2'>
              <label htmlFor='subject' className='block text-sm font-medium text-gray-700'>
                Subject *
              </label>
              <input
                type='text'
                id='subject'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                required
                className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-main-bg-hove focus:border-transparent transition-all duration-200 outline-none'
                placeholder='What is this regarding?'
              />
            </div>

            {/* Message Textarea */}
            <div className='space-y-2'>
              <label htmlFor='message' className='block text-sm font-medium text-gray-700'>
                Message *
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-main-bg-hove focus:border-transparent transition-all duration-200 outline-none resize-none'
                placeholder='Tell me about your project or inquiry...'
              />
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className='w-full bg-gradient-to-r from-main-bg to-main-bg-hove text-white py-4 px-6 rounded-xl font-semibold hover:from-main-bg-hove hover:to-main-bg transform hover:scale-[1.01] transition-all duration-200 shadow-lg hover:shadow-xl'
            >
              Send Message
            </button>
          </form>

          {/* Additional Info */}
          <div className='mt-8 text-center'>
            <p className='text-gray-500 text-sm'>
              Alternatively, you can email me directly at{' '}
              <a href='mailto:info@monipack.com' className='text-main-bg hover:text-main-bg-hove font-medium'>
               info@monipack.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact