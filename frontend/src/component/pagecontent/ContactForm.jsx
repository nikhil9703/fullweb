import { useState } from 'react';
import '../../styles/contactform.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', contact: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert("Thank you for contacting us!");
    setFormData({ name: '', email: '', contact: '' });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Contact Us</h2>
      <label>Name</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      <label>Email</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      <label>Contact</label>
      <input type="tel" name="contact" value={formData.contact} onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
