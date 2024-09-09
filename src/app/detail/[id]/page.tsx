'use client';
import React from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

// Hàm fetch dữ liệu
const fetcher = (url: string) => fetch(url).then(res => res.json());    

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { data, error } = useSWR(
    `https://api-pro.teklearner.com/product/v1/get-product-detail?id=${params.id}`,
    fetcher
  );

  if (error) return <p>Có lỗi xảy ra khi tải dữ liệu.</p>;
  if (!data) return <p>Đang tải...</p>;

  // Lọc sản phẩm theo ID từ params
  const product = data.data;

  if (!product) {
    return <p>Không tìm thấy dữ liệu sản phẩm.</p>;
  }

  return (
    <>
    <section className='bg-light py-3'>
        <div className='container p-0'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                    <li className="breadcrumb-item">Detail</li>
                    <li className="breadcrumb-item active" aria-current="page">{product.product_title}</li>
                </ol>
            </nav>
        </div>
        <div className="container bg-white py-3">
        <div className="row">
            <div className="col-lg-6">
            <div className="row">
                <div className="col-2 d-flex flex-column">
                {product.product_gallery && product.product_gallery.length > 0 ? (
                    product.product_gallery.map((img: string, index: number) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Small Product Image ${index + 1}`}
                        className="img-fluid mb-2"
                    />
                    ))
                ) : (
                    <p>Không có hình ảnh.</p>
                )}
                </div>

                {/* Hình ảnh lớn */}
                <div className="col-10">
                {product.product_gallery && product.product_gallery.length > 0 ? (
                    <img
                    src={product.product_gallery[0]}
                    alt="Large Product Image"
                    className="img-fluid"
                    />
                ) : (
                    <p>Không có hình ảnh lớn.</p>
                )}
                </div>
            </div>
            </div>

            {/* Phần chi tiết sản phẩm */}
            <div className="col-lg-6">
            <h2>{product.product_title}</h2>
            <p className="text-muted">{product.product_brand || "Chưa có thương hiệu"}</p>
            <p>{product.product_description}</p>
            <div className="d-flex align-items-center mb-3">
                <span className="text-muted text-decoration-line-through">{product.product_price.toLocaleString()}đ</span>
                <span className="ms-2 h4 text-danger">{product.product_sale_price.toLocaleString()}đ</span>
                <span className="badge bg-dark ms-3">
                {(((product.product_price - product.product_sale_price) / product.product_price) * 100).toFixed(0)}% Giảm
                </span>
            </div>
            <p>Bạn có thể theo dõi giá sản phẩm <Link href="#">Theo dõi</Link></p>
            <div className="d-flex gap-2 mb-4">
                <button className="btn btn-dark">ADD TO CART</button>
                <button className="btn btn-outline-dark">BUY NOW</button>
            </div>
            <p><Link href="#"><i className="bi bi-heart"></i> Xem danh sách yêu thích</Link></p>
            <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-light text-dark">áo thun nam</span>
                <span className="badge bg-light text-dark">áo thun nữ</span>
                <span className="badge bg-light text-dark">áo thun nam</span>
                <span className="badge bg-light text-dark">áo thun nữ</span>
                <span className="badge bg-light text-dark">áo thun nam</span>
                <span className="badge bg-light text-dark">áo thun nữ</span>
            </div>
            </div>
        </div>
        </div>
    </section>
    </>
  );
};

export default ProductDetail;
