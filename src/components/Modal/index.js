import { useState } from 'react';
import './Modal.css'

function Modal({ onClose, stateRegister, onRegister, onLogin }) {
    const [values, setValues] = useState({})
    console.log(values)
    function handleChange(e) {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    return (
        <div className="modal">
            <div className="modal__body">
                <div className="auth-form">
                    <div className="auth-form--register">{stateRegister ? 'ĐĂNG KÝ' : 'ĐĂNG NHẬP'}</div>
                    <div onClick={() => stateRegister ? onLogin() : onRegister()} className="auth-form--login">{stateRegister ? 'ĐĂNG NHẬP' : 'ĐĂNG KÝ'}</div>
                </div>

                <div className="infomation">
                    <input name='email' type="text" placeholder="Email của bạn" onChange={handleChange} />
                    <input name='password' type="text" placeholder="Mật khẩu của bạn" onChange={handleChange} />
                    {stateRegister ? <input name='againPassword' type="text" placeholder="Nhập lại mật khẩu" onChange={handleChange} /> : ''}
                </div>

                {stateRegister ?
                    <div className="clause">Bằng việc đăng kí, bạn đã đồng ý với Shopee về
                        <a href="/#"> Điều khoản dịch vụ</a> &
                        <a href="/#"> Chính sách bảo mật</a>
                    </div> :
                    <div className="forgot-password">
                        <a href="/#">Quên mật khẩu</a>
                        <a href="/#">Cần trợ giúp?</a>
                    </div>
                }


                <div className="btn-register">
                    <button>{stateRegister ? 'ĐĂNG KÝ' : 'ĐĂNG NHẬP'}</button>
                </div>
                <div className="btn-login">
                    <button onClick={onClose}>TRỞ LẠI</button>
                </div>

                <div className="social-network">
                    <div className="social-network--facebook">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
                            alt="" />
                        Kết nối với Facebook
                    </div>
                    <div className="social-network--google">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png"
                            alt="" />
                        Kết nối với Google
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;