import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    if (!formRef.current) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are missing!");
      setError(true);
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          if (formRef.current) formRef.current.reset();

          setTimeout(() => setSuccess(false), 5000);
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          setLoading(false);
          setError(true);
        }
      );
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-neon-blue">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Let's build something{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-neon-blue to-neon-purple">
                amazing
              </span>{" "}
              together.
            </h3>
            <p className="text-gray-400 mb-8 text-lg">
              I'm currently looking for new opportunities, hackathon teams, and
              exciting projects. Whether you have a question or just want to say
              hi, I'll try my best to get back to you!
            </p>

            <div className="flex gap-6 mb-8">
              <a
                href="https://github.com/devanshkatkar246"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass-card text-gray-400 hover:text-neon-blue hover:border-neon-blue transition-all duration-300 hover-glow-blue"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/devansh-katkar-695b69317"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass-card text-gray-400 hover:text-neon-purple hover:border-neon-purple transition-all duration-300 glow-purple"
              >
                <FaLinkedin size={28} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full bg-dark-bg/50 border border-glass-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-colors"
                  placeholder="Dev...."
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="w-full bg-dark-bg/50 border border-glass-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-colors"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-dark-bg/50 border border-glass-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-colors resize-none"
                  placeholder="Hello Devansh..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-linear-to-r from-neon-blue to-neon-purple text-white font-bold rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 glow-blue"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <FaPaperPlane />
                  </>
                )}
              </button>

              {success && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center mt-4"
                >
                  Message sent successfully!
                </motion.p>
              )}
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-center mt-4"
                >
                  Failed to send message. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
