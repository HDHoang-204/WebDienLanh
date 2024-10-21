import { NavLink } from 'react-router-dom';
import '../style/navbar.scss';


function Navbar() {
    const activebar = {
        color: '#fec104',
    };
    return (
        <div className="menu">
            <nav>
                <a href="#"> <h1>ĐIỆN NƯỚC <span>TPin</span></h1></a>
                <ul>
                    <li><NavLink style={({ isActive }) => isActive ? activebar : {}} to='/'> Trang chủ </NavLink></li>
                    <li><NavLink style={({ isActive }) => isActive ? activebar : {}} to='/sp'> Sản phẩm</NavLink></li>
                    <li><NavLink style={({ isActive }) => isActive ? activebar : {}} to='/dv'> Dịch vụ</NavLink></li>
                    <li><NavLink style={({ isActive }) => isActive ? activebar : {}} to='/tt'> Tin tức</NavLink></li>
                </ul>

                <a href="#" className="btn">Giỏ hàng</a>
            </nav>
        </div>
    )
}

export default Navbar