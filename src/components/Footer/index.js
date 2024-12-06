import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";

import './Footer.css'
import logo_qr_shoppe_footer from '../../assets/image/logo_qr_shoppe_footer.png'

function Footer() {
    return ( 
        <footer className="footer wow animate__fadeInUp">
            <div className="grid">
                <div className="row">
                    <div className="grid__column-2-4 col-6 footer-column">
                        <h4 className="footer-heading">
                            CHĂM SÓC KHÁCH HÀNG
                        </h4>
                        <div className="footer-link">
                            Trung Tâm Trợ Giúp
                        </div>
                        <div className="footer-link">
                            TickID Mail
                        </div>
                        <div className="footer-link">
                            Hướng Dẫn Mua Hàng
                        </div>
                    </div>

                    <div className="grid__column-2-4 col-6 footer-column">
                        <h4 className="footer-heading">
                            VỀ TICKID
                        </h4>
                        <div className="footer-link">
                            Giới Thiệu Về TickID Việt Nam
                        </div>
                        <div className="footer-link">
                            Tuyển Dụng
                        </div>
                        <div className="footer-link">
                            Điều Khoản TickID
                        </div>
                    </div>

                    <div className="grid__column-2-4 col-6 hide-on footer-column">
                    </div>

                    <div className="grid__column-2-4 col-6 footer-column">
                        <h4 className="footer-heading">
                            THEO DÕI CHÚNG TÔI TRÊN
                        </h4>
                        <div className="footer-link">
                            <i><FontAwesomeIcon icon={faFacebook}/></i>
                            Facebook
                        </div>
                        <div className="footer-link">
                            <i><FontAwesomeIcon icon={faSquareInstagram}/></i>
                            Instagram
                        </div>
                        <div className="footer-link">
                            <i><FontAwesomeIcon icon={faLinkedin}/></i>
                            LinkedIn
                        </div>
                    </div>

                    <div className="grid__column-2-4 col-6 footer-column">
                        <h4 className="footer-heading">
                            VÀO CỬA HÀNG TRÊN ỨNG DỤNG TICKID
                        </h4>
                        <div className="footer-link-img">
                            <img src={logo_qr_shoppe_footer} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <p>@ 2003 - Bản quyền thuộc về Công ty NTV6</p>
        </footer>
     );
}

export default Footer;