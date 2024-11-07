import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../../style/home/contact.scss'
function Contact() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,

    };
    return (
        <div className=" contacts">
            <div className="gt">
                <div className="gt-box">
                    <div className="gt-text">
                        <h1>Về chúng tôi</h1>
                    </div>

                    <div className="gt-main">
                        <div className="gt-main-text">
                            <h3>TPIN tự hào là thương hiệu TOP 10 VN</h3>
                            <p>TPIN là thương hiệu điện nước toàn cầu được đông đảo khách hàng tin tưởng và giới chuyên gia đánh giá cao. TSON nổi tiếng với các công thức chăm sóc sắc đẹp được nghiên cứu và phát triển bởi các nhà khoa học Châu Âu, nơi sở hữu nhiều nguồn tài nguyên quý giá</p>
                            <ul>
                                <li>Công nghệ kỹ thuật tiên tiến nhất</li>
                                <li>Chế độ hậu mãi tuyệt vời</li>
                                <li>Hỗ trợ tư vấn nhiệt tình</li>
                                <li>Phục vụ tận tình tại nhà</li>
                            </ul>
                            <a href="#" className="btn">Xem thêm</a>
                        </div>
                        <div className="video">
                            <iframe
                                width="500"
                                height="400"
                                src="https://www.youtube.com/embed/nfP5N9Yc72A"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <div className="dv">
                <div className="dv-product">
                    <div className="dv-text">
                        <h1>Dịch vụ</h1>
                    </div>
                    <div className='dv-container'>
                        <Slider {...settings}  >

                            <div className='dv-box'>
                                <div className="img">
                                    <img src="https://bizweb.dktcdn.net/thumb/large/100/246/606/articles/service-4.jpg?v=1504624742607" alt="" />
                                    <div className="conten">
                                        <a href="#" className="btn">Xem thêm</a>
                                    </div>
                                </div>

                                <div className='dv-text'>
                                    <h3><a href="">Máy phát điện siêu lạ</a></h3>
                                    <p>Hệ thống điện, nước lâu ngày sẽ có những hỏng hóc ngoài ý muốn làm phiền cuộc sống của bạn. Hãy liên hệ với chúng...</p>
                                </div>
                            </div>

                            <div className='dv-box' >
                                <div className="img">
                                    <img src="https://bizweb.dktcdn.net/thumb/large/100/246/606/articles/service-1-13ce5540-f414-49aa-b7b4-0d21ff2c4d06.jpg?v=1504624603803" alt="" />
                                    <div className="conten">
                                        <a href="#" className="btn">Xem thêm</a>
                                    </div>
                                </div>

                                <div className='dv-text'>
                                    <h3><a href="">Thiết bị tiết kiệm điện</a></h3>
                                    <p>Hệ thống điện, nước lâu ngày sẽ có những hỏng hóc ngoài ý muốn làm phiền cuộc sống của bạn. Hãy liên hệ với chúng...</p>
                                </div>
                            </div>

                            <div className='dv-box' >
                                <div className="img">
                                    <img src="https://bizweb.dktcdn.net/thumb/large/100/246/606/articles/service-3.jpg?v=1504624586050" alt="" />
                                    <div className="conten">
                                        <a href="#" className="btn">Xem thêm</a>
                                    </div>
                                </div>

                                <div className='dv-text'>
                                    <h3><a href="">Bảng mạch thế hệ mới</a></h3>
                                    <p>Hệ thống điện, nước lâu ngày sẽ có những hỏng hóc ngoài ý muốn làm phiền cuộc sống của bạn. Hãy liên hệ với chúng...</p>



                                </div>
                            </div>

                            <div className='dv-box' >
                                <div className="img">
                                    <img src="https://bizweb.dktcdn.net/thumb/large/100/246/606/articles/service-2.jpg?v=1504624540293" alt="" />
                                    <div className="conten">
                                        <a href="#" className="btn">Xem thêm</a>
                                    </div>


                                </div>

                                <div className='dv-text'>
                                    <h3><a href="">Cap nối điện hiện đại</a></h3>
                                    <p>Hệ thống điện, nước lâu ngày sẽ có những hỏng hóc ngoài ý muốn làm phiền cuộc sống của bạn. Hãy liên hệ với chúng...</p>
                                </div>
                            </div>

                        </Slider>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Contact