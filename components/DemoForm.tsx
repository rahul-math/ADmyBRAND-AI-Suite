import React, { useState } from 'react';
import Input from './ui/Input';
import Button from './ui/Button';
import Select from './ui/Select';
import Textarea from './ui/Textarea';

const DemoForm: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        companyName: '',
        mobileNumber: '',
        youAre: 'Ad Agency',
        heardFrom: 'Google Search',
        details: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Here you would typically send the data to a server
        alert('Thank you for your request! We will be in touch shortly.');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <Input 
                label="Full Name" 
                name="fullName" 
                id="fullName" 
                placeholder="Enter Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
            />
            <Input 
                label="Email" 
                name="email" 
                id="email" 
                type="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <Input 
                label="Company name" 
                name="companyName" 
                id="companyName" 
                placeholder="Enter Company name"
                value={formData.companyName}
                onChange={handleChange}
            />
            <Input 
                label="Mobile Number" 
                name="mobileNumber" 
                id="mobileNumber" 
                placeholder="Enter Mobile Number"
                value={formData.mobileNumber}
                onChange={handleChange}
            />
            
            <div className="flex flex-col md:flex-row items-start gap-8 pt-2">
                <div className="w-full md:w-[60%] space-y-4">
                    <Select
                        label="You are"
                        name="youAre"
                        id="youAre"
                        value={formData.youAre}
                        onChange={handleChange}
                    >
                        <option>Ad Agency</option>
                        <option>Advertiser</option>
                        <option>Publisher</option>
                        <option>Student</option>
                        <option>Other</option>
                    </Select>

                    <Select
                        label="Where did you hear about us"
                        name="heardFrom"
                        id="heardFrom"
                        value={formData.heardFrom}
                        onChange={handleChange}
                    >
                        <option>Google Search</option>
                        <option>Social Media</option>
                        <option>Friend or Colleague</option>
                        <option>Conference/Event</option>
                        <option>Blog Post</option>
                    </Select>
                </div>
                <div className="hidden md:flex flex-1 items-center justify-center pl-4 pt-4">
                    <img src="https://in.admybrand.com/assets/svg/book-a-demo.svg" alt="Illustration for scheduling a demo" className="w-full max-w-[200px] object-contain" />
                </div>
            </div>
            
            <div className="pt-2">
                <Textarea
                    label="Details Requirement"
                    name="details"
                    id="details"
                    placeholder="How can we help you?"
                    rows={4}
                    value={formData.details}
                    onChange={handleChange}
                />
            </div>
            
            <div className="pt-4 flex justify-end">
                <Button 
                    type="submit" 
                    variant="primary" 
                    className="bg-hot-pink hover:bg-hot-pink/90 focus:ring-hot-pink/50 text-white">
                    Next
                </Button>
            </div>
        </form>
    );
};

export default DemoForm;