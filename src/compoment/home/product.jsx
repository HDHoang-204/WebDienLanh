import '../../style/home/product.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



function Product() {
    var settings = {
        dots: true,
        infinite: true,

        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,

    };
    return (
        <div className='product'>
            <div className='pr'>
                <div className="text-pr">
                    <h1>Sản Phẩm Nổi Bật</h1>
                </div>

                <div className='container'>
                    <Slider {...settings} className='slick'>

                        <div className='product-box'>
                            <img src="https://bizweb.dktcdn.net/thumb/large/100/246/606/products/product9-600x600-1b5a4b8c-d44d-4728-b64b-9f32eb8abcec-46b5d65f-ad88-4e8a-9375-0e73e1ac6c09-c3ae5433-4b1e-4890-8ee1-c2c0e36c1a7a.jpg?v=1503417956917" alt="" />
                            <div className='product-text'>
                                <h3><a href="">Máy phát điện siêu lạ</a></h3>
                                <span>6.000.000đ</span>
                            </div>
                        </div>

                        <div className='product-box' >
                            <img src="https://bizweb.dktcdn.net/thumb/large/100/246/606/products/slider2-600x600-9be1e64d-5678-46db-a85d-b45da7506e40-6c8184d9-59d4-4fc3-9cd7-584b39d0bb4f.jpg?v=1503417892580" alt="" />
                            <div className='product-text'>
                                <h3><a href="">Thiết bị tiết kiệm điện</a></h3>
                                <span>1.190.000đ</span>
                            </div>
                        </div>

                        <div className='product-box' >
                            <img src="https://bizweb.dktcdn.net/thumb/large/100/246/606/products/product7-600x600-c256926e-800d-4058-8aee-9e2b48889e50-9bb987fe-7556-4034-b193-8a9821f34d41-204a8862-6872-4651-acc3-5b8ad8205ae7.jpg?v=1503418055357" alt="" />
                            <div className='product-text'>
                                <h3><a href="">Bảng mạch thế hệ mới</a></h3>
                                <span>180.000đ</span>
                            </div>
                        </div>

                        <div className='product-box' >
                            <img src="https://bizweb.dktcdn.net/thumb/large/100/246/606/products/product16-e1474362532693-600x600-eeac0ef7-0fe5-4675-b266-3699640e5c4a-284f03ff-360a-473b-880a-58bf37577d64.jpg?v=1503418002943" alt="" />
                            <div className='product-text'>
                                <h3><a href="">Cap nối điện hiện đại</a></h3>
                                <span>90.000đ</span>
                            </div>
                        </div>

                    </Slider>

                </div>

            </div >

        </div >
    )
}

export default Product