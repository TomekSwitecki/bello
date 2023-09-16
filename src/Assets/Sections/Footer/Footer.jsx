import React, { useState, useRef } from 'react';
import { Logo } from "../../Components/Logo/Logo";
import Inputfield from "../../Components/Inputfield/Inputfield";

import Button, { ButtonType, ButtonColor } from "../../Components/Button/Button";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FooterDecoration1 from "../../../Resources/Easy/Footer_decoration_1.png";
import FooterDecoration2 from "../../../Resources/Easy/Footer_decoration_2.png";
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
const error = () => toast.error('Please provide contact email!', {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
});


export function Footer() {
    const [formData, setFormData] = useState({
        email: '',
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.email) {
            error();
            return;
        }
        emailjs.send('service_8iw9vjs', 'template_4z7nnln', formData, 'ZaVhnKcgbVGzajia4')
            .then((result) => {
                console.log(result.text);

            }, (error) => {
                console.log(error.text);
            });
        setFormData({
            email: '',
        });
        success();
    };


    return (
        <React.Fragment>
            <footer className="footer">
                <div className="footer__carousel">
                    <div className="scrolling-text">
                        <span>We design <span className="text--primary">solutions.</span> </span>
                        <span>We design <span className="text--primary">UI.</span> </span>
                        <span>We design <span className="text--primary">UX.</span> </span>
                        <span>We design <span className="text--primary">solutions. </span></span>
                        <span>We design <span className="text--primary">solutions. </span></span>
                        <span>We design <span className="text--primary">solutions. </span></span>
                        <span>We design <span className="text--primary">solutions. </span></span>
                    </div>
                    <div className="scrolling-text--2">
                        <span>We design <span className="text--primary">solutions.</span> </span>
                        <span>We design <span className="text--primary">UI.</span> </span>
                        <span>We design <span className="text--primary">UX.</span> </span>
                        <span>We design <span className="text--primary">solutions. </span></span>
                        <span>We design <span className="text--primary">solutions. </span></span>
                        <span>We design <span className="text--primary">solutions. </span></span>
                        <span>We design <span className="text--primary">solutions. </span></span>
                    </div>
                </div>
                <div className="footer__content">
                    <div className="footer__content--left">
                        <Logo />
                        <div className="footer__info">
                            We will help you to create product of your dreams.
                            Websites, apps, branding, logo.<br></br>
                            Say 👋 at <a href="mailto:hellofrombello@gmail.com"><u>hellofrombello@gmail.com</u></a>
                        </div>
                        <div className="footer__links">
                            <a className="footer__link" href="https://github.com/TomekSwitecki"><box-icon name='github' type='logo' ></box-icon></a>
                            {/* <a className="footer__link"><box-icon name='youtube' type='logo' ></box-icon></a>
                        <a className="footer__link"> <box-icon type='logo' name='discord-alt'></box-icon></a> */}
                            <a className="footer__link" href="https://dribbble.com/Switecki"> <box-icon name='dribbble' type='logo' ></box-icon></a>
                        </div>
                    </div>
                    <div className="footer__content--right">
                        <div className="footer__newsletter">
                            <span className="newsletter__title">Join our newsletter to stay up to date with our projects and products.</span>

                            <form onSubmit={handleSubmit} className="newsletter__input" >
                                <Inputfield placeholder={"Email adress"} value={formData.email}
                                    onChange={(e) => setFormData({ email: e.target.value })}
                                    name="email"
                                    type="email" />
                                <Button
                                    submit
                                    type={ButtonType.Filled}
                                    color={ButtonColor.Primary}
                                    text={"Sign up"}
                                />
                            </form>

                            <span className="newsletter__consent">By subsribing you agree to with our privacy policy and provide consent to recive updates from our company.</span>
                        </div>
                    </div>
                    <img className='footer_ilustration--bg footer_ilustration--1' src={FooterDecoration1}></img>
                    <img className='footer_ilustration--bg footer_ilustration--2' src={FooterDecoration2}></img>
                </div>
                <div className="footer__copyrights"><p>© 2023 Bello All rights reserved. Made with ❤️ in Poland</p></div>
            </footer>

        </React.Fragment >
    );
}
