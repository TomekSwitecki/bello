import React, { useState, useRef } from 'react';
import { ReactComponent as Message } from "../../../Resources/Palms/message.svg";
import { Section } from "../../Components/Section/Section";
import { ComplexLabel } from "../../Components/ComplexLabel/ComplexLabel";
import { IdCard } from "@vectopus/atlas-icons-react";
import { Envelope } from "@vectopus/atlas-icons-react";
import arrow from "../../../Resources/arrow.png";
import Inputfield from '../../Components/Inputfield/Inputfield';
import Button, { ButtonType, ButtonColor } from "../../Components/Button/Button";
import ToggleButton from '../../Components/ToggleButton/ToggleButton';
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const error = () => toast.error('Please provide contact info!', {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
});

const success = () => toast.success('Your request has beed submited!', {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
});

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        selectedServices: [],
    });
    const formRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            error();
            return;
        }
        formData.selectedServices = formData.selectedServices.join(', ');

        const emailData = {
            ...formData,
            customSelectedServices: formData.selectedServices,
        };

        emailjs.send('service_8iw9vjs', 'template_rlv5bo1', emailData, 'ZaVhnKcgbVGzajia4')
            .then((result) => {

                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setFormData({
            name: '',
            email: '',
            message: '',
            selectedServices: [],
        });
        success();
        formRef.current.reset();
    };

    const handleServiceClick = (service) => {
        const updatedSelectedServices = [...formData.selectedServices];

        const index = updatedSelectedServices.indexOf(service);

        if (index === -1) {
            updatedSelectedServices.push(service);
        } else {
            updatedSelectedServices.splice(index, 1);
        }
        setFormData({
            ...formData,
            selectedServices: updatedSelectedServices,
        });

    };


    const services = ["Branding", "UX Audit", "UI/UX Design", "Product Design", "Logo", "Web development"];

    const toggleButtons = services.map((service) => (
        <ToggleButton
            key={service}
            item={service}
            handleItemClick={handleServiceClick}
            isChecked={formData.selectedServices.includes(service)}
        />
    ));

    return (
        <Section id="contact_section" dir="column" >
            <div className="contact-section__wrapper">
                <div className="contact-section">
                    <div className="contact-section__left">
                        <div className="contact-section__info">
                            <h2 className="contact-section__heading">How to contact us?👋</h2>
                            <img className="contact-section__arrow" src={arrow}></img>
                            <ComplexLabel prepend={<IdCard size={24} />} title={"By contact form!"} description={"It’s the best way to contact us!"}></ComplexLabel>
                            <ComplexLabel prepend={<Envelope size={24} />} title={"By mail!"} description={"You can also contact us directly via email!"} content={"hellofrombello@gmail.com"}></ComplexLabel>
                            <ComplexLabel prepend={<box-icon type='logo' name='discord-alt'></box-icon>} title={"By contact form!"} description={"Our friendly team is here to help"} content={"hibello#42312"}></ComplexLabel>
                        </div>
                        <div className="contact-section__ilustration">
                            <Message></Message>
                        </div>
                    </div>
                    <div className="contact-section__right">
                        <div className="contact-form">
                            <form onSubmit={handleSubmit} ref={formRef}>
                                <h2 className='contact-form__title'>Let’s team up! 🔥</h2>
                                <span className='contact-form__subtitle'>Tell us more about yourself and what you’ve got in mind!</span>

                                <div className="toggle-buttons">{toggleButtons}</div>


                                <div className='contact-form__inputfields'>
                                    <Inputfield label={"What’s your name?"} value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        name="name"
                                        type={"text"} />
                                    <Inputfield label={"What’s your email?"} value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        name="email"
                                        type="email" />
                                    <Inputfield label={"Tell us more about project of your dreams!"} value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        isTextArea
                                        name="message" />
                                </div>

                                <Button
                                    submit
                                    type={ButtonType.Filled}
                                    color={ButtonColor.Secondary}
                                    text={"Let's get in touch!"}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </Section>
    );
}
