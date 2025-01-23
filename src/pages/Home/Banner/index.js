import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './Banner.css'

function Banner() {
    const linkImg = [
        "https://cf.shopee.vn/file/sg-11134258-7rfig-m3n5dwjvl6y05e_xxhdpi",
        "https://cf.shopee.vn/file/vn-11134258-7ras8-m3n14slrp15tab_xxhdpi",
        "https://cf.shopee.vn/file/sg-11134258-7rfgs-m3n0kdqn1idncb_xxhdpi",
        "https://cf.shopee.vn/file/vn-11134258-7ras8-m3mzek16gn9878_xxhdpi",
        "https://cf.shopee.vn/file/sg-11134258-7rffj-m3lsi35nm0v95b_xxhdpi",
        "https://cf.shopee.vn/file/sg-11134258-7rfha-m3lugjga1ummba_xxhdpi",
        "https://cf.shopee.vn/file/sg-11134258-7rfhr-m3n4cvccm91z67_xxhdpi",
        "https://cf.shopee.vn/file/sg-11134258-7rfff-m3ltxafs6xuv07_xxhdpi",
        "https://cf.shopee.vn/file/sg-11134258-7rfg0-m3n4b88r2bmo0e_xxhdpi",
        "https://cf.shopee.vn/file/vn-11134258-7ras8-m3n1avbxkr7g81_xxhdpi",
        "https://cf.shopee.vn/file/sg-11134258-7rfey-m3n44rux4qn983_xxhdpi",
        "https://cf.shopee.vn/file/sg-11134258-7rfg9-m3n1a0a122izcf_xxhdpi",
        "https://cf.shopee.vn/file/sg-11134258-7rffz-m3n44tlwkix4ba_xxhdpi",
        "https://cf.shopee.vn/file/sg-11134258-7rfh1-m3lua43cm6jm60_xxhdpi",
        "https://cf.shopee.vn/file/sg-11134258-7rfi4-m3n44ujr71oudf_xxhdpi",
        "https://cf.shopee.vn/file/sg-11134258-7rfg4-m3n4hpolgayr68_xhdpi",
        "https://cf.shopee.vn/file/sg-11134258-7rffy-m3n4hwpd7uzhd7_xhdpi",
    ]

    return (
        <div className="banner">
            <div id="carouselExampleAutoplaying" className="carousel slide banner-left" data-bs-ride="carousel">
                <div className="carousel-inner border-radius">
                    <div className="carousel-item active">
                        <img src="https://cf.shopee.vn/file/vn-11134258-7ras8-m3aazcwgxo8ced_xxhdpi" className="d-block w-100" alt="Banner" />
                    </div>
                    {linkImg.map((item, index) =>
                        <div className="carousel-item" key={index}>
                            <img src={item} className="d-block w-100" alt="Banner" />
                        </div>
                    )}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="banner-right">
                <div className="banner-right-1">
                    <img alt="Banner" src="https://cf.shopee.vn/file/sg-11134258-7rfg4-m3n4hpolgayr68_xhdpi" />
                </div>
                <div className="banner-right-2">
                    <img alt="Banner" src="https://cf.shopee.vn/file/sg-11134258-7rffy-m3n4hwpd7uzhd7_xhdpi" />
                </div>
            </div>
        </div>
    );
}

export default Banner;