import React, { useState } from 'react'
import { CONTACT } from '../constants'
import { motion } from 'motion/react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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
        setFormData({ Name: '', Email: '', Message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: CONTACT.address,
      gradient: 'from-cyan-400 to-blue-500',
      delay: 0.2
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: CONTACT.phoneNo,
      gradient: 'from-amber-400 to-orange-500',
      delay: 0.4
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: CONTACT.email,
      isLink: true,
      gradient: 'from-orange-400 to-amber-500',
      delay: 0.6
    }
  ];

  return (
    <div id="contact" className='pb-20 pt-20'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -70 }}
        transition={{ duration: 1 }}
        className='mb-20 text-center text-4xl lg:text-5xl font-bold'>
        <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-cyan-400 bg-clip-text text-transparent">
          Get In Touch
        </span>
      </motion.h2>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-light mb-4 text-white flex items-center gap-2 justify-center lg:justify-start">
                <HiSparkles className="text-amber-300" />
                Let's work together
                <HiSparkles className="text-orange-400" />
              </h3>
              <p className="text-lg text-cyan-300/60 leading-relaxed">
                I'm always open to discussing new opportunities, creative projects, and innovative ideas.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <motion.div
                  key={info.label}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: info.delay }}
                  className="group relative p-5 rounded-2xl overflow-hidden"
                  whileHover={{ x: 8, scale: 1.02 }}
                >
                  {/* Glass background */}
                  <div className="absolute inset-0 bg-[#0b1528]/70 backdrop-blur-xl border border-cyan-400/20 rounded-2xl group-hover:border-amber-400/50 transition-all duration-300"></div>

                  {/* Gradient glow */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 rounded-2xl`}></div>

                  <div className="relative flex items-center gap-4">
                    <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="text-sm text-cyan-400/70">{info.label}</p>
                      {info.isLink ? (
                        <a
                          href={`mailto:${info.value}`}
                          className="text-cyan-200 hover:text-amber-300 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-cyan-200">{info.value}</p>
                      )}
                    </div>
                  </div>

                  {/* Border glow */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form with 3D effect */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Outer glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 via-amber-500/10 to-orange-500/10 rounded-3xl blur-2xl"></div>

            {/* Form container */}
            <div className="relative p-8 rounded-2xl overflow-hidden">
              {/* Glass background */}
              <div className="absolute inset-0 bg-[#0b1528]/70 backdrop-blur-xl border border-cyan-400/20 rounded-2xl"></div>

              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-amber-400/20 to-orange-400/20 animate-gradient-shift opacity-30"></div>

              <form onSubmit={handleSubmit} className="relative space-y-6">
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl flex items-center gap-3 ${submitStatus === 'success'
                        ? 'bg-emerald-900/30 border border-emerald-500/30 text-emerald-400'
                        : 'bg-red-900/30 border border-red-500/30 text-red-400'
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

                {/* Name Field */}
                <div className="group">
                  <label className="block text-sm font-medium text-cyan-400/70 mb-2">
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="Name"
                      value={formData.Name}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3.5 bg-[#050a14]/50 border border-cyan-400/20 rounded-xl text-white placeholder-cyan-400/40 focus:border-amber-400/60 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Your name"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-amber-400 to-orange-400 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 rounded-full"></div>
                  </div>
                </div>

                {/* Email Field */}
                <div className="group">
                  <label className="block text-sm font-medium text-cyan-400/70 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="Email"
                      value={formData.Email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3.5 bg-[#050a14]/50 border border-cyan-400/20 rounded-xl text-white placeholder-cyan-400/40 focus:border-amber-400/60 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="your.email@example.com"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-amber-400 to-orange-400 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 rounded-full"></div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="group">
                  <label className="block text-sm font-medium text-cyan-400/70 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      rows="4"
                      name="Message"
                      value={formData.Message}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3.5 bg-[#050a14]/50 border border-cyan-400/20 rounded-xl text-white placeholder-cyan-400/40 focus:border-amber-400/60 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Tell me about your project..."
                    ></textarea>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-amber-400 to-orange-400 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 rounded-full"></div>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full px-6 py-4 rounded-xl font-medium overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-amber-400 to-orange-400 animate-gradient-shift"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-amber-400 to-orange-400 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <span className="relative text-[#0b1528] font-bold flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#0b1528]/30 border-t-[#0b1528] rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact
