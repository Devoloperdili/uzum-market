import React from 'react'
import { FaApple } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { SiTelegram } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import "./Footer.css"
function Footer() {
    return (
        <div className='container footer'>
            <br />
            <div className='grapes__footer_one_row'>
                <h3>Biz haqimizda</h3>
                <br />
                <p>Topshirish punktlari</p>
                <br />
                <p>Vakansiyalar</p>
            </div>
            <br />
            <div className="grapes__footer_two_row">
                <h3>Foydalanuvchilarga</h3>
                <br />
                <p>Biz bilan bogʻlanish</p>
                <br />
                <p>Savol-Javob</p>
            </div>
            <br />
            <div className="grapes__footer_three_row">
                <h3>Tadbirkorlarga</h3>
                <br />
                <p>Uzumda soting</p>
                <br />
                <p>Sotuvchi kabinetiga kirish</p>
            </div>
            <br />
            <div className="grapes__footer_four_row">
                <p>ivolada yuklab olish</p>
                <p>
                    <FaApple />
                    app store
                </p>
                <p>
                    <FaGooglePlay />
                    play market
                </p>
                <br />
                <br />
                <br />
                <p className='grap__p'>
                    <FiInstagram className='footer__instagram' />
                    <a href=""></a>
                    <SiTelegram className='footer__telegram' />
                    <a href=""></a>
                    <IoLogoYoutube className='footer__youtube' />
                    <a href=""></a>
                    <FaFacebook className='footer__facebook' />
                    <a href=""></a>
                </p>
            </div>
        </div>

    )
}

export default Footer