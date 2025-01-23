import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons';

import './Category.css'

function Category() {
    const [activeCategory, setActiveCategory] = useState(null)
    const categoryItem = ['Ohui TheFirst', 'Ohui Dưỡng Trắng', 'Ohui Advancer', 'Ohui Dưỡng Ẩm', 'Ohui Chống Lão Hóa']

    const handleCategoryClick = (item) => {
        setActiveCategory(item)
    };

    return (
        <>
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
        </>
    );
}

export default Category;