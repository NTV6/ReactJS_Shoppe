import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHeart,
    // faStar as StarRegular
} from '@fortawesome/free-regular-svg-icons';
import { faChevronDown, faChevronLeft, faChevronRight, faList, faHeart as faHeartSolid, faStar, faCheck } from '@fortawesome/free-solid-svg-icons';

import './Content.css'

function Content() {
    return (
        <div className="body-container">
            <div className="grid">
                <Row>
                    <Col lg={2} className='custom-padding wow animate__fadeInLeft'>
                        <div className="category hide-on-mobile-table">
                            <h3><i><FontAwesomeIcon icon={faList} /></i>DANH MỤC</h3>
                            <ul>
                                <li className="category-item--active">
                                    <div className="category-item">Ohui TheFirst</div>
                                </li>
                                <li>
                                    <div className="category-item">Ohui Dưỡng Trắng</div>
                                </li>
                                <li>
                                    <div className="category-item">Ohui Advancer</div>
                                </li>
                                <li>
                                    <div className="category-item">Ohui Dưỡng Ẩm</div>
                                </li>
                                <li>
                                    <div className="category-item">Ohui Chống Lão Hóa</div>
                                </li>
                            </ul>
                        </div>

                        <div className="category-on-tablet-mobile">
                            <ul>
                                <li>Dụng cụ và thiết bị tiện ích</li>
                                <li>Thiết bị điện gia dụng</li>
                                <li>Đồ dùng phòng bếp</li>
                                <li>Dụng cụ và thiết bị tiện ích</li>
                                <li>Thiết bị điện gia dụng</li>
                                <li>Đồ dùng phòng bếp</li>
                                <li>Dụng cụ và thiết bị tiện ích</li>
                                <li>Thiết bị điện gia dụng</li>
                                <li>Đồ dùng phòng bếp</li>
                            </ul>
                        </div>
                    </Col>

                    <Col lg={10} className='custom-padding wow animate__fadeInRight'>
                        <div className="filter-product hide-on-mobile-table">
                            <div className="filter-product__arrange">
                                Sắp xếp theo
                                <button>Phổ Biến</button>
                                <button>Mới Nhất</button>
                                <button>Bán Chạy</button>
                                <span className="fileter__select-price">Giá
                                    <i><FontAwesomeIcon icon={faChevronDown} /></i>
                                    <ul className="fileter__select-price-list">
                                        <li>Giá: Thấp đến Cao</li>
                                        <li>Giá: Cao đến Thấp</li>
                                    </ul>
                                </span>
                            </div>
                            <div className="filter-product__page">
                                <span>1</span>/2
                                <div className="filter-product__page--return">
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </div>
                                <div className="filter-product__page--next">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </div>
                            </div>
                        </div>

                        <div className="list-product">
                            <div className="grid">
                                <Row>
                                    {/* Product Item   */}
                                    <Col xs={6} sm={4} md={3} className="grid__column-2-4 custom-padding">
                                        <div className="product-item">
                                            <div className="product-item__img"
                                                style={{
                                                    backgroundImage: `url("https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lyyhqt0x2q1903@resize_w450_nl.webp")`
                                                }}>
                                            </div>
                                            <div className="product-item__name">Set dưỡng trắng Whoo đông y hoàng cung Gong
                                                Jinh Yang</div>
                                            <div className="product-item__price">
                                                <span className="product-item__price-old">12.300.000đ</span>
                                                <span className="product-item__price-current"> 11.070.000đ</span>
                                            </div>
                                            <div className="product-item__action">
                                                {/* THÊM CLASS DƯỚI VÀO THỂ SPAN ĐỂ THẢ TIM   */}
                                                {/* product-item__action-heart--like  */}
                                                <span className="product-item__action-heart">
                                                    <FontAwesomeIcon className="product-item__action-heart-empty" icon={faHeart} />
                                                    <FontAwesomeIcon className="product-item__action-heart-fill" icon={faHeartSolid} />
                                                </span>
                                                <span className="product-item__action-star">
                                                    <i><FontAwesomeIcon className='product-item__action-star--gold' icon={faStar} /></i>
                                                    <i><FontAwesomeIcon className='product-item__action-star--gold' icon={faStar} /></i>
                                                    <i><FontAwesomeIcon className='product-item__action-star--gold' icon={faStar} /></i>
                                                    <i><FontAwesomeIcon className='product-item__action-star--gold' icon={faStar} /></i>
                                                    <i><FontAwesomeIcon icon={faStar} /></i>
                                                    {/* <i><FontAwesomeIcon icon={StarRegular}/></i> */}
                                                </span>
                                                <span className="product-item__action-sold">Đã bán 88</span>
                                            </div>
                                            <div className="product-item__origin">
                                                <span className="product-item__origin-brand">Whoo</span>
                                                <span className="product-item__origin-country">Hàn Quốc</span>
                                            </div>
                                            <div className="product-item__favorite">
                                                <i><FontAwesomeIcon icon={faCheck} /></i>
                                                <span className="product-item__favorite-lable">Yêu thích</span>
                                            </div>
                                            <div className="product-item__sale-off">
                                                <div className="product-item__sale-off-percent">10%</div>
                                                <div className="product-item__sale-off-lable">GIẢM</div>
                                            </div>
                                        </div>
                                        {/* </div> */}
                                    </Col>

                                    <Col xs={6} sm={4} md={3} className="grid__column-2-4 custom-padding">
                                        <div className="product-item">
                                            <div className="product-item__img"
                                                style={{
                                                    backgroundImage: `url("https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lyyhqt0x2q1903@resize_w450_nl.webp")`
                                                }}>
                                            </div>
                                            <div className="product-item__name">Set dưỡng trắng Whoo đông y hoàng cung Gong
                                                Jinh Yang</div>
                                            <div className="product-item__price">
                                                <span className="product-item__price-old">12.300.000đ</span>
                                                <span className="product-item__price-current"> 11.070.000đ</span>
                                            </div>
                                            <div className="product-item__action">
                                                {/* THÊM CLASS DƯỚI VÀO THỂ SPAN ĐỂ THẢ TIM   */}
                                                {/* product-item__action-heart--like  */}
                                                <span className="product-item__action-heart">
                                                    <FontAwesomeIcon className="product-item__action-heart-empty" icon={faHeart} />
                                                    <FontAwesomeIcon className="product-item__action-heart-fill" icon={faHeartSolid} />
                                                </span>
                                                <span className="product-item__action-star">
                                                    <i><FontAwesomeIcon className='product-item__action-star--gold' icon={faStar} /></i>
                                                    <i><FontAwesomeIcon className='product-item__action-star--gold' icon={faStar} /></i>
                                                    <i><FontAwesomeIcon className='product-item__action-star--gold' icon={faStar} /></i>
                                                    <i><FontAwesomeIcon className='product-item__action-star--gold' icon={faStar} /></i>
                                                    <i><FontAwesomeIcon icon={faStar} /></i>
                                                    {/* <i><FontAwesomeIcon icon={StarRegular}/></i> */}
                                                </span>
                                                <span className="product-item__action-sold">Đã bán 88</span>
                                            </div>
                                            <div className="product-item__origin">
                                                <span className="product-item__origin-brand">Whoo</span>
                                                <span className="product-item__origin-country">Hàn Quốc</span>
                                            </div>
                                            <div className="product-item__favorite">
                                                <i><FontAwesomeIcon icon={faCheck} /></i>
                                                <span className="product-item__favorite-lable">Yêu thích</span>
                                            </div>
                                            <div className="product-item__sale-off">
                                                <div className="product-item__sale-off-percent">10%</div>
                                                <div className="product-item__sale-off-lable">GIẢM</div>
                                            </div>
                                        </div>
                                        {/* </div> */}
                                    </Col>

                                    <Col xs={6} sm={4} md={3} className="grid__column-2-4 custom-padding">
                                        <div className="product-item">
                                            <div className="product-item__img"
                                                style={{
                                                    backgroundImage: `url("https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lyyhqt0x2q1903@resize_w450_nl.webp")`
                                                }}>
                                            </div>
                                            <div className="product-item__name">Set dưỡng trắng Whoo đông y hoàng cung Gong
                                                Jinh Yang</div>
                                            <div className="product-item__price">
                                                <span className="product-item__price-old">12.300.000đ</span>
                                                <span className="product-item__price-current"> 11.070.000đ</span>
                                            </div>
                                            <div className="product-item__action">
                                                {/* THÊM CLASS DƯỚI VÀO THỂ SPAN ĐỂ THẢ TIM   */}
                                                {/* product-item__action-heart--like  */}
                                                <span className="product-item__action-heart">
                                                    <FontAwesomeIcon className="product-item__action-heart-empty" icon={faHeart} />
                                                    <FontAwesomeIcon className="product-item__action-heart-fill" icon={faHeartSolid} />
                                                </span>
                                                <span className="product-item__action-star">
                                                    <i><FontAwesomeIcon className='product-item__action-star--gold' icon={faStar} /></i>
                                                    <i><FontAwesomeIcon className='product-item__action-star--gold' icon={faStar} /></i>
                                                    <i><FontAwesomeIcon className='product-item__action-star--gold' icon={faStar} /></i>
                                                    <i><FontAwesomeIcon className='product-item__action-star--gold' icon={faStar} /></i>
                                                    <i><FontAwesomeIcon icon={faStar} /></i>
                                                    {/* <i><FontAwesomeIcon icon={StarRegular}/></i> */}
                                                </span>
                                                <span className="product-item__action-sold">Đã bán 88</span>
                                            </div>
                                            <div className="product-item__origin">
                                                <span className="product-item__origin-brand">Whoo</span>
                                                <span className="product-item__origin-country">Hàn Quốc</span>
                                            </div>
                                            <div className="product-item__favorite">
                                                <i><FontAwesomeIcon icon={faCheck} /></i>
                                                <span className="product-item__favorite-lable">Yêu thích</span>
                                            </div>
                                            <div className="product-item__sale-off">
                                                <div className="product-item__sale-off-percent">10%</div>
                                                <div className="product-item__sale-off-lable">GIẢM</div>
                                            </div>
                                        </div>
                                        {/* </div> */}
                                    </Col>

                                    <Col xs={6} sm={4} md={3} className="grid__column-2-4 custom-padding">
                                        <div className="product-item">
                                            <div className="product-item__img"
                                                style={{
                                                    backgroundImage: `url("https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lyyhqt0x2q1903@resize_w450_nl.webp")`
                                                }}>
                                            </div>
                                            <div className="product-item__name">Set dưỡng trắng Whoo đông y hoàng cung Gong
                                                Jinh Yang</div>
                                            <div className="product-item__price">
                                                <span className="product-item__price-old">12.300.000đ</span>
                                                <span className="product-item__price-current"> 11.070.000đ</span>
                                            </div>
                                            <div className="product-item__action">
                                                {/* THÊM CLASS DƯỚI VÀO THỂ SPAN ĐỂ THẢ TIM   */}
                                                {/* product-item__action-heart--like  */}
                                                <span className="product-item__action-heart">
                                                    <FontAwesomeIcon className="product-item__action-heart-empty" icon={faHeart} />
                                                    <FontAwesomeIcon className="product-item__action-heart-fill" icon={faHeartSolid} />
                                                </span>
                                                <span className="product-item__action-star">
                                                    <i><FontAwesomeIcon className='product-item__action-star--gold' icon={faStar} /></i>
                                                    <i><FontAwesomeIcon className='product-item__action-star--gold' icon={faStar} /></i>
                                                    <i><FontAwesomeIcon className='product-item__action-star--gold' icon={faStar} /></i>
                                                    <i><FontAwesomeIcon className='product-item__action-star--gold' icon={faStar} /></i>
                                                    <i><FontAwesomeIcon icon={faStar} /></i>
                                                    {/* <i><FontAwesomeIcon icon={StarRegular}/></i> */}
                                                </span>
                                                <span className="product-item__action-sold">Đã bán 88</span>
                                            </div>
                                            <div className="product-item__origin">
                                                <span className="product-item__origin-brand">Whoo</span>
                                                <span className="product-item__origin-country">Hàn Quốc</span>
                                            </div>
                                            <div className="product-item__favorite">
                                                <i><FontAwesomeIcon icon={faCheck} /></i>
                                                <span className="product-item__favorite-lable">Yêu thích</span>
                                            </div>
                                            <div className="product-item__sale-off">
                                                <div className="product-item__sale-off-percent">10%</div>
                                                <div className="product-item__sale-off-lable">GIẢM</div>
                                            </div>
                                        </div>
                                        {/* </div> */}
                                    </Col>

                                    <Col xs={6} sm={4} md={3} className="grid__column-2-4 custom-padding">
                                        <div className="product-item">
                                            <div className="product-item__img"
                                                style={{
                                                    backgroundImage: `url("https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lyyhqt0x2q1903@resize_w450_nl.webp")`
                                                }}>
                                            </div>
                                            <div className="product-item__name">Set dưỡng trắng Whoo đông y hoàng cung Gong
                                                Jinh Yang</div>
                                            <div className="product-item__price">
                                                <span className="product-item__price-old">12.300.000đ</span>
                                                <span className="product-item__price-current"> 11.070.000đ</span>
                                            </div>
                                            <div className="product-item__action">
                                                {/* THÊM CLASS DƯỚI VÀO THỂ SPAN ĐỂ THẢ TIM   */}
                                                {/* product-item__action-heart--like  */}
                                                <span className="product-item__action-heart">
                                                    <FontAwesomeIcon className="product-item__action-heart-empty" icon={faHeart} />
                                                    <FontAwesomeIcon className="product-item__action-heart-fill" icon={faHeartSolid} />
                                                </span>
                                                <span className="product-item__action-star">
                                                    <i><FontAwesomeIcon className='product-item__action-star--gold' icon={faStar} /></i>
                                                    <i><FontAwesomeIcon className='product-item__action-star--gold' icon={faStar} /></i>
                                                    <i><FontAwesomeIcon className='product-item__action-star--gold' icon={faStar} /></i>
                                                    <i><FontAwesomeIcon className='product-item__action-star--gold' icon={faStar} /></i>
                                                    <i><FontAwesomeIcon icon={faStar} /></i>
                                                    {/* <i><FontAwesomeIcon icon={StarRegular}/></i> */}
                                                </span>
                                                <span className="product-item__action-sold">Đã bán 88</span>
                                            </div>
                                            <div className="product-item__origin">
                                                <span className="product-item__origin-brand">Whoo</span>
                                                <span className="product-item__origin-country">Hàn Quốc</span>
                                            </div>
                                            <div className="product-item__favorite">
                                                <i><FontAwesomeIcon icon={faCheck} /></i>
                                                <span className="product-item__favorite-lable">Yêu thích</span>
                                            </div>
                                            <div className="product-item__sale-off">
                                                <div className="product-item__sale-off-percent">10%</div>
                                                <div className="product-item__sale-off-lable">GIẢM</div>
                                            </div>
                                        </div>
                                        {/* </div> */}
                                    </Col>

                                    <Col xs={6} sm={4} md={3} className="grid__column-2-4 custom-padding">
                                        <div className="product-item">
                                            <div className="product-item__img"
                                                style={{
                                                    backgroundImage: `url("https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lyyhqt0x2q1903@resize_w450_nl.webp")`
                                                }}>
                                            </div>
                                            <div className="product-item__name">Set dưỡng trắng Whoo đông y hoàng cung Gong
                                                Jinh Yang</div>
                                            <div className="product-item__price">
                                                <span className="product-item__price-old">12.300.000đ</span>
                                                <span className="product-item__price-current"> 11.070.000đ</span>
                                            </div>
                                            <div className="product-item__action">
                                                {/* THÊM CLASS DƯỚI VÀO THỂ SPAN ĐỂ THẢ TIM   */}
                                                {/* product-item__action-heart--like  */}
                                                <span className="product-item__action-heart">
                                                    <FontAwesomeIcon className="product-item__action-heart-empty" icon={faHeart} />
                                                    <FontAwesomeIcon className="product-item__action-heart-fill" icon={faHeartSolid} />
                                                </span>
                                                <span className="product-item__action-star">
                                                    <i><FontAwesomeIcon className='product-item__action-star--gold' icon={faStar} /></i>
                                                    <i><FontAwesomeIcon className='product-item__action-star--gold' icon={faStar} /></i>
                                                    <i><FontAwesomeIcon className='product-item__action-star--gold' icon={faStar} /></i>
                                                    <i><FontAwesomeIcon className='product-item__action-star--gold' icon={faStar} /></i>
                                                    <i><FontAwesomeIcon icon={faStar} /></i>
                                                    {/* <i><FontAwesomeIcon icon={StarRegular}/></i> */}
                                                </span>
                                                <span className="product-item__action-sold">Đã bán 88</span>
                                            </div>
                                            <div className="product-item__origin">
                                                <span className="product-item__origin-brand">Whoo</span>
                                                <span className="product-item__origin-country">Hàn Quốc</span>
                                            </div>
                                            <div className="product-item__favorite">
                                                <i><FontAwesomeIcon icon={faCheck} /></i>
                                                <span className="product-item__favorite-lable">Yêu thích</span>
                                            </div>
                                            <div className="product-item__sale-off">
                                                <div className="product-item__sale-off-percent">10%</div>
                                                <div className="product-item__sale-off-lable">GIẢM</div>
                                            </div>
                                        </div>
                                        {/* </div> */}
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div className="pagination list-product__pagination">
                            <ul>
                                <li>
                                    <a href="/#">
                                        <FontAwesomeIcon icon={faChevronLeft} />
                                    </a>
                                </li>
                                <li>
                                    <a href="/#" className="pagination-item--active">
                                        1
                                    </a>
                                </li>
                                <li>
                                    <a href="/#">
                                        2
                                    </a>
                                </li>
                                <li>
                                    <a href="/#">
                                        3
                                    </a>
                                </li>
                                <li>
                                    <a href="/#">
                                        4
                                    </a>
                                </li>
                                <li>
                                    <a href="/#">
                                        5
                                    </a>
                                </li>
                                <li>
                                    <a href="/#">
                                        14
                                    </a>
                                </li>
                                <li>
                                    <a href="/#">
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Content;