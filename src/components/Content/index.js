import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar as StarRegular } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown, faChevronLeft, faChevronRight, faList, faHeart as faHeartSolid, faStar, faCheck } from '@fortawesome/free-solid-svg-icons';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import './Content.css'
import Banner from './Banner';

function Content() {
    const [activeCategory, setActiveCategory] = useState(null)
    const [activeHeart, setActiveHeart] = useState(false)
    const categoryItem = ['Ohui TheFirst', 'Ohui Dưỡng Trắng', 'Ohui Advancer', 'Ohui Dưỡng Ẩm', 'Ohui Chống Lão Hóa']

    const [product, setProduct] = useState([])
    const [skip, setSkip] = useState(0)
    const [totalProduct, setTotalProduct] = useState([])
    const [state, setState] = useState(false)
    const limit = 25
    const active = Math.floor(skip / limit)
    const pageNumber = Math.ceil(totalProduct / limit)

    useEffect(() => {
        setState(false)
        fetch(`https://dummyjson.com/products?skip=${skip}&limit=${limit}`)
            .then(response => response.json())
            .then(data => {
                setProduct(data.products)
                setTotalProduct(data.total)
                setState(true)
            })
            .catch(error => console.error(error))
    }, [skip])

    function handleChangePage(index) {
        setSkip(index * limit)
    }

    function handleLastPage() {
        setSkip(skip - 25)
    }

    function handleNextPage() {
        setSkip(skip + 25)
    }

    const handleCategoryClick = (item) => {
        setActiveCategory(item)
    };

    const handleHeartClick = () => {
        setActiveHeart(!activeHeart)
    }

    return (
        <div className="body-container">
            <div className="grid">
                <Banner />
                <Row>
                    <Col lg={2} className='custom-padding wow animate__fadeInLeft'>
                        <div className="category hide-on-mobile-table">
                            <h3><i><FontAwesomeIcon icon={faList} /></i>DANH MỤC</h3>
                            <ul>
                                {categoryItem.map(item => (
                                    <li
                                        key={item}
                                        className={activeCategory === item ? "category-item--active" : ""}
                                        onClick={() => handleCategoryClick(item)}
                                    >
                                        <div className="category-item">{item}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="category-on-tablet-mobile">
                            <ul>
                                {categoryItem.map(item => (
                                    <li
                                        key={item}
                                        className={activeCategory === item ? "category-item--active" : ""}
                                        onClick={() => handleCategoryClick(item)}
                                    >
                                        <div className="category-item">{item}</div>
                                    </li>
                                ))}
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
                                <span>{active + 1}</span>/{[...Array(pageNumber)].length}
                                <div className="filter-product__page--return" style={skip <= 0 ? { pointerEvents: 'none', opacity: 0.5 } : {}} onClick={() => handleLastPage()}>
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </div>
                                <div className="filter-product__page--next" style={skip >= totalProduct - limit ? { pointerEvents: 'none', opacity: 0.5 } : {}} onClick={() => handleNextPage()}>
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </div>
                            </div>
                        </div>

                        <div className="list-product">
                            <div className="grid">
                                <Row>
                                    {/* Product Item */}
                                    {state ?
                                        <>
                                            {product.map(item =>
                                                <Col xs={6} sm={4} md={3} className="grid__column-2-4 custom-padding" key={item.id} >
                                                    <div className="product-item">
                                                        <div className="product-item__img"
                                                            style={{
                                                                backgroundImage: `url(${item.thumbnail})`
                                                            }}>
                                                        </div>
                                                        <div className="product-item__name">{item.title}</div>
                                                        <div className="product-item__price">
                                                            <span className="product-item__price-old">{Math.round(item.discountPercentage) !== 0 && `${(item.price / (1 - Math.round(item.discountPercentage) / 100)).toFixed(2)}$`}</span>
                                                            <span className="product-item__price-current"> {item.price}$</span>
                                                        </div>
                                                        <div className="product-item__action">
                                                            {/* THÊM CLASS DƯỚI VÀO THỂ SPAN ĐỂ THẢ TIM   */}
                                                            {/* product-item__action-heart--like  */}
                                                            <span className={activeHeart ? "product-item__action-heart product-item__action-heart--like" : "product-item__action-heart"} onClick={() => handleHeartClick()}>
                                                                <FontAwesomeIcon className="product-item__action-heart-empty" icon={faHeart} />
                                                                <FontAwesomeIcon className="product-item__action-heart-fill" icon={faHeartSolid} />
                                                            </span>
                                                            <span className="product-item__action-star">
                                                                {[...Array(Math.round(item.rating))].map((_, index) =>
                                                                    <i key={index}><FontAwesomeIcon className='product-item__action-star--gold' icon={faStar} /></i>
                                                                )}
                                                                {[...Array(5 - Math.round(item.rating))].map((_, index) =>
                                                                    <i key={index}><FontAwesomeIcon icon={StarRegular} /></i>
                                                                )}
                                                            </span>
                                                            <span className="product-item__action-sold">Đã bán {item.minimumOrderQuantity}</span>
                                                        </div>
                                                        <div className="product-item__origin">
                                                            <span className="product-item__origin-brand">{item.brand}</span>
                                                            <span className="product-item__origin-country">Hàn Quốc</span>
                                                        </div>
                                                        {Math.round(item.rating) === 5 &&
                                                            <div className="product-item__favorite">
                                                                <i><FontAwesomeIcon icon={faCheck} /></i>
                                                                <span className="product-item__favorite-lable">Yêu thích</span>
                                                            </div>
                                                        }
                                                        {Math.round(item.discountPercentage) !== 0 &&
                                                            <div className="product-item__sale-off">
                                                                <div className="product-item__sale-off-percent">{Math.round(item.discountPercentage)}%</div>
                                                                <div className="product-item__sale-off-lable">GIẢM</div>
                                                            </div>
                                                        }
                                                    </div>
                                                </Col>
                                            )}
                                        </> :
                                        Array.from({ length: limit }).map((_, index) => (
                                            <Col xs={6} sm={4} md={3} className="grid__column-2-4 custom-padding" key={index}>
                                                <div className="product-item">
                                                    <div className="product-item__img"></div>
                                                    <div className="product-item__name">
                                                        <Skeleton width={`100%`} />
                                                    </div>
                                                    <div className="product-item__price">
                                                        <Skeleton width={`100%`} />
                                                    </div>
                                                    <div className="product-item__action">
                                                        <Skeleton width={`100%`} />
                                                    </div>
                                                    <div className="product-item__origin">
                                                        <Skeleton width={`100%`} />
                                                    </div>
                                                </div>
                                            </Col>
                                        ))
                                    }
                                </Row>
                            </div>
                        </div>

                        <div className="pagination list-product__pagination">
                            <ul>
                                <li>
                                    <a href="/#" style={skip <= 0 ? { pointerEvents: 'none', opacity: 0.5 } : {}} onClick={() => handleLastPage()}>
                                        <FontAwesomeIcon icon={faChevronLeft} />
                                    </a>
                                </li>
                                {[...Array(pageNumber)].map((_, index) =>
                                    <li key={index}>
                                        <a href="/#" onClick={() => handleChangePage(index)} className={index === active ? "pagination-item--active" : ''}>
                                            {index + 1}
                                        </a>
                                    </li>
                                )}
                                <li>
                                    <a href="/#" style={skip >= totalProduct - limit ? { pointerEvents: 'none', opacity: 0.5 } : {}} onClick={() => handleNextPage()}>
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        </div >
    );
}

export default Content;