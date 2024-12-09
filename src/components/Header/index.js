import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBell, faCircleQuestion } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping, faCheck, faChevronDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import './Header.css'
import Modal from '../Modal'

import logo_qr_shoppe from '../../assets/image/logo_qr_shoppe.png'
import logo_shoppe from '../../assets/image/logo_shoppe.png'
import thongbao_buoctoc from '../../assets/image/thongbao_buoctoc.png'

function Header() {
    const [stateModal, setStateModal] = useState(false)
    const [stateRegister, setStateRegister] = useState(true)
    const notificationBody = [1, 2, 3, 4, 5]
    const barSearchHistory = ['hihi', 'haha']
    const cartListItem = [1]

    function handleOpenRegister() {
        setStateModal(true)
        setStateRegister(true)
    }

    function handleCloseModal() {
        setStateModal(false)
    }

    function handleOpenLogin() {
        setStateModal(true)
        setStateRegister(false)
    }

    return (
        <header className="header wow animate__fadeInDown">
            <div className="grid">
                <div className="header__list hide-on-mobile-table">
                    <ul>
                        <li className="header__list-first">
                            Vào cửa hàng trên ứng dụng TickID
                            <div className="header__list-qr">
                                <img src={logo_qr_shoppe} alt="QR" />
                            </div>
                        </li>
                        <li>
                            Kết nối
                            <FontAwesomeIcon className="header__list-icon" icon={faFacebook} />
                            <FontAwesomeIcon className="header__list-icon" icon={faInstagram} />
                        </li>
                    </ul>

                    <ul>
                        <li className="header__list-notification">
                            <a href="/#">
                                <FontAwesomeIcon className="header__list-icon" icon={faBell} />
                                Thông báo
                            </a>
                            <div className="header__notification">
                                <h4>Thông Báo Mới Nhận</h4>
                                <ul>
                                    {notificationBody.map((item, index) =>
                                        <li key={index}>
                                            <img src={thongbao_buoctoc} alt="" />
                                            <div className="header__notification-body">
                                                <div className="header__notification--name">Mua sắm hết ga hết số</div>
                                                <div className="header__notification--decription">Bạn ơi đã đến lúc chốt đơn các
                                                    sản
                                                    phẩm bạn yêu thích rồi tôi tên là nguyễn tuấn việt tôi sinh ra và lớn
                                                    lên ở
                                                    thôn vũ lăng xã dân hòa huyện thanh oai thành phố hà nội việt nam trái
                                                    đất
                                                    vũ trụ dải ngân hà</div>
                                            </div>
                                        </li>
                                    )}
                                </ul>
                                <button>Xem tất cả</button>
                            </div>
                        </li>
                        <li>
                            <a href="/#">
                                <FontAwesomeIcon className="header__list-icon" icon={faCircleQuestion} />
                                Trợ giúp
                            </a>
                        </li>
                        <li className="header__list-two"><button onClick={handleOpenRegister}>Đăng kí</button></li>
                        <li><button onClick={handleOpenLogin}
                        >Đăng nhập</button></li>
                    </ul>
                </div>

                <div className="header__list--search">
                    <label htmlFor="mobile-search" className="header__mobile-search-icon">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </label>
                    <input type="checkbox" hidden id="mobile-search" className="header--search-checkbox" />

                    <div className="header__logo">
                        <img src={logo_shoppe} alt="" />
                    </div>

                    <div className="header__bar-search">
                        <div className="header__bar-search--input">
                            <input type="text" placeholder="Tìm trong Shop này" />
                            <div className="header__bar-search--history">
                                <h4>Lịch sử Tìm kiếm</h4>
                                <ul>
                                    {barSearchHistory.map((item, index) => <li key={index}>{item}</li>)}
                                </ul>
                            </div>
                        </div>

                        <div className="header__bar-search--select">
                            <span className="span">Trong Shop</span>
                            <FontAwesomeIcon className="header__bar-search--icon-down" icon={faChevronDown} />
                            <ul className="header__bar-search--option">
                                <li>
                                    <span className="header__bar-search--option-header">Trong Shop</span>
                                    <i><FontAwesomeIcon icon={faCheck} /></i>
                                </li>
                                <li>
                                    <span className="header__bar-search--option-header">Ngoài Shop</span>
                                    <i><FontAwesomeIcon icon={faCheck} /></i>
                                </li>
                            </ul>
                        </div>
                        <FontAwesomeIcon className="header__bar-search--icon-search" icon={faMagnifyingGlass} />
                    </div>

                    <div className="header__cart">
                        <i><FontAwesomeIcon icon={faCartShopping} /></i>
                        <span className="header__cart-notice">3</span>
                        <div className="header__cart-list">
                            {cartListItem.length <= 0 ?
                                < div className="header__cart-list--nocart">
                                    <img src="https://bizweb.dktcdn.net/100/364/149/themes/733818/assets/empty-cart.png?1715520353362" alt="" />
                                </div> :
                                <div div className="header__cart-list--item">
                                    <h4>Sản Phẩm Đã Thêm</h4>
                                    <ul>
                                        {cartListItem.map((item, index) =>
                                            <li key={index}>
                                                <img src={thongbao_buoctoc} alt="Ảnh sản phẩm trong giỏ hàng" />
                                                <div className="header__cart-list--item-body">
                                                    <div className="cart-list--item-body-header">
                                                        <div className="cart-list--item-body-header-text">Bộ kem đặc trị vùng mắt
                                                        </div>
                                                        <div className="cart-list--item-body-header-price">2.070.000đ</div>
                                                        <div className="cart-list--item-body-header-multiplied">x</div>
                                                        <div className="cart-list--item-body-header-quantity">1</div>
                                                    </div>
                                                    <div className="cart-list--item-body-decription">
                                                        <div className="cart-list--item-body-decription-text">Phân loại hàng: Bạc
                                                        </div>
                                                        <div className="cart-list--item-body-decription-delete">Xóa</div>
                                                    </div>
                                                </div>
                                            </li>
                                        )}
                                    </ul>
                                    <button>Xem Giỏ Hàng</button>
                                </div>
                            }
                        </div>
                    </div>
                </div>

                <div className="header-filter show-up-mobile-table">
                    <ul>
                        <li className="header-filter__item--active">Liên quan</li>
                        <li>Mới Nhất</li>
                        <li>Bán chạy</li>
                        <li>Giá</li>
                    </ul>
                </div>
            </div>
            {stateModal && <Modal onClose={handleCloseModal} onRegister={handleOpenRegister} onLogin={handleOpenLogin} stateRegister={stateRegister} />}
        </header >
    );
}

export default Header;