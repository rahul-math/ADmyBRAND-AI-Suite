
import React, { useState } from 'react';
import Input from './ui/Input';
import Textarea from './ui/Textarea';
import Button from './ui/Button';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Contact form submitted:', formData);
        alert('Thank you for your message! We will get back to you shortly.');
        // Here you would typically send the data to a server.
        // We could also call a prop to close the modal.
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <Input
                label="Name"
                name="name"
                id="contact-name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <Input
                label="Email"
                name="email"
                id="contact-email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <Input
                label="Subject"
                name="subject"
                id="contact-subject"
                placeholder="What is this about?"
                value={formData.subject}
                onChange={handleChange}
                required
            />
            <Textarea
                label="Message"
                name="message"
                id="contact-message"
                placeholder="Your message..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
            />
            <div className="pt-4 flex justify-end">
                <Button
                    type="submit"
                    variant="primary"
                    className="bg-hot-pink hover:bg-hot-pink/90 focus:ring-hot-pink/50 text-white"
                >
                    Send Message
                </Button>
            </div>
        </form>
    );
};

export default ContactForm;
