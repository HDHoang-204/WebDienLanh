import { NavLink } from 'react-router-dom'
import '../../style/home/duan.scss'

function Duan() {
    const activebar = {
        background: '#fec104',
        display: "flex",
        alignitems: "center",
        justifycontent: 'center',
        color: 'black'
    }
    return (
        <div className='duan'>
            {/* bannner */}
            <div className='banner'>
                <div className='bn-content'>
                    <div className='bn-text'>
                        <h3>Bạn cần chúng tôi tư vấn về thiết bị điện không?</h3>
                        <p>Tư vấn miễn phí mọi vấn đề điện nước</p>
                    </div>

                    <div className="ct">
                        <a href="" className='btn'>Liên hệ ngay</a>
                    </div>


                </div>
            </div>

            {/* duan */}
            <div className='duan-main'>
                <div className="duan-content">
                    <div className='da-text'>
                        <h1>Dự án gần đây</h1>
                    </div>
                    <div className='da-list'>
                        <ul>

                            <li ><NavLink to="/" style={({ isActive }) =>
                                isActive ? activebar : {}}><span>Tất cả</span></NavLink></li>
                            <li><NavLink to='/ddd' style={({ isActive }) =>
                                isActive ? activebar : {}}><span>Điện dân dụng</span></NavLink></li>
                            <li><NavLink to='/dcn' style={({ isActive }) =>
                                isActive ? activebar : {}}><span>Điện công nghiệp</span></NavLink></li>
                            <li><NavLink to='/htn' style={({ isActive }) =>
                                isActive ? activebar : {}}><span>Hệ thống nước</span></NavLink></li>
                        </ul>
                    </div>
                    <div className='da-menu'>
                        <div className="da-box">
                            <img src="https://bizweb.dktcdn.net/thumb/large/100/246/606/themes/801967/assets/al_image_1.jpg?1683261117540" alt="" />
                            <div className="wrapper">
                                <h4><a href=""></a>Dự án 1</h4>
                            </div>
                        </div>

                        <div className="da-box">
                            <img src="https://bizweb.dktcdn.net/thumb/large/100/246/606/themes/801967/assets/al_image_2.jpg?1683261117540https://bizweb.dktcdn.net/thumb/large/100/246/606/themes/801967/assets/al_image_2.jpg?1683261117540" alt="" />
                            <div className="wrapper">
                                <h4><a href=""></a>Dự án 1</h4>
                            </div>
                        </div>

                        <div className="da-box">
                            <img src="https://bizweb.dktcdn.net/thumb/large/100/246/606/themes/801967/assets/al_image_3.jpg?1683261117540" alt="" />
                            <div className="wrapper">
                                <h4><a href=""></a>Dự án 1</h4>
                            </div>
                        </div>

                        <div className="da-box">
                            <img src="https://bizweb.dktcdn.net/thumb/large/100/246/606/themes/801967/assets/al_image_4.jpg?1683261117540" alt="" />
                            <div className="wrapper">
                                <h4><a href=""></a>Dự án 1</h4>
                            </div>
                        </div><div className="da-box">
                            <img src="https://bizweb.dktcdn.net/thumb/large/100/246/606/themes/801967/assets/al_image_5.jpg?1683261117540" alt="" />
                            <div className="wrapper">
                                <h4><a href=""></a>Dự án 1</h4>
                            </div>
                        </div>


                        <div className="da-box">
                            <img src="	https://bizweb.dktcdn.net/thumb/large/100/246/606/themes/801967/assets/al_image_6.jpg?1683261117540" alt="" />
                            <div className="wrapper">
                                <h4><a href=""></a>Dự án 1</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chuyen gia */}
            <div className='cg'>

            </div>
        </div>
    )
}

export default Duan