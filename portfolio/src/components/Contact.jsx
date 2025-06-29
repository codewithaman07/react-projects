import React, { useState } from 'react'
import { CONTACT } from '../constants'
import { motion } from 'motion/react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch(import.meta.env.VITE_SHEETDB_API_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          Name: '',
          Email: '',
          Message: ''
        });
      } else {
        const errorData = await response.text();
        console.error('API Error:', errorData);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };
  return (
    <div className='pb-20 pt-20'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -70 }}
        transition={{ duration: 1 }}
        className='mb-20 text-center text-4xl lg:text-5xl font-light'>
          <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </span>
      </motion.h2>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-light mb-4 text-neutral-300">
                Let's work together
              </h3>
              <p className="text-lg text-neutral-400 leading-relaxed">
                I'm always open to discussing new opportunities, creative projects, and innovative ideas.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-neutral-900/50 to-neutral-800/30 border border-neutral-700/30 hover:border-purple-500/30 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="text-purple-400 text-lg" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Location</p>
                  <p className="text-neutral-300">{CONTACT.address}</p>
                </div>
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-neutral-900/50 to-neutral-800/30 border border-neutral-700/30 hover:border-cyan-500/30 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full flex items-center justify-center">
                  <FaPhone className="text-cyan-400 text-lg" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Phone</p>
                  <p className="text-neutral-300">{CONTACT.phoneNo}</p>
                </div>
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-neutral-900/50 to-neutral-800/30 border border-neutral-700/30 hover:border-pink-500/30 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-pink-600/20 to-red-600/20 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-pink-400 text-lg" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Email</p>
                  <a 
                    href={`mailto:${CONTACT.email}`}
                    className="text-neutral-300 hover:text-pink-400 transition-colors duration-300"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 p-8 rounded-2xl border border-neutral-700/30 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg flex items-center gap-3 ${
                    submitStatus === 'success' 
                      ? 'bg-green-900/20 border border-green-500/30 text-green-400' 
                      : 'bg-red-900/20 border border-red-500/30 text-red-400'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <FaCheckCircle className="text-lg" />
                  ) : (
                    <FaExclamationTriangle className="text-lg" />
                  )}
                  <span className="text-sm">
                    {submitStatus === 'success' 
                      ? 'Message sent successfully! I\'ll get back to you soon.' 
                      : 'Failed to send message. Please try again.'}
                  </span>
                </motion.div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="Name"
                  value={formData.Name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-600/50 rounded-lg text-neutral-300 placeholder-neutral-500 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-600/50 rounded-lg text-neutral-300 placeholder-neutral-500 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  name="Message"
                  value={formData.Message}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-600/50 rounded-lg text-neutral-300 placeholder-neutral-500 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-sm" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact
