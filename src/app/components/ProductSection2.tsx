'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

interface Product {
    id: number;
    product_title: string;
    product_brand: string;
    product_price: number;
    product_sale_price: number;
    product_gallery: string[];
    product_category: string[];
}

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        axios.get('https://api-pro.teklearner.com/product/v1/get-list-product')
            .then(response => {
                setProducts(response.data.data); // Gán dữ liệu sản phẩm vào state
            })
            .catch(error => {
                console.error("Có lỗi xảy ra khi lấy dữ liệu:", error);
            });
    }, []);

    return (
      <>
        <div className="row">
            {products.map((product) => (
                <div key={product.id} className="col-md-3 mb-4">
                    <div className="card h-100">
                        <div className="product-image-container">
                            <Link href={`/detail/${product.id}`}>
                                <img 
                                    src={product.product_gallery[0]} 
                                    alt={product.product_title} 
                                    className="card-img-top"
                                    style={{ objectFit: 'cover', height: 'auto' }} 
                                />
                            </Link>
                            <div className="product-label badge badge-dark position-absolute" style={{ top: '55%', left: '10px' }}>
                                {product.product_category.length > 0 ? product.product_category.join(', ') : "Uncategorized"}
                            </div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{product.product_title}</h5>
                            <p className="card-text">{product.product_brand || "Chưa có thương hiệu"}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="text-muted text-decoration-line-through">{product.product_price.toLocaleString()}đ</span>
                                <span className="text-danger font-weight-bold">{product.product_sale_price.toLocaleString()}đ</span>
                                <span className="badge badge-success">
                                    {(((product.product_price - product.product_sale_price) / product.product_price) * 100).toFixed(0)}% Giảm
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        {/* Baner seo 50% */}
        <div className="row my-4">
            <div className="col-md-12">
                <div 
                    className="card text-center text-white" 
                    style={{
                        backgroundImage: 'url("https://e1.pxfuel.com/desktop-wallpaper/535/941/desktop-wallpaper-blue-banner-with-dark-waves-blue-banner-thumbnail.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        height: '180px'  // Chiều cao banner tùy chỉnh
                    }}
                >
                    <div className="card-body d-flex justify-content-between align-items-center h-100">
                        <div className="text-left">
                            <h2 className="font-weight-bold">50% OFF</h2>
                            <p>On All Items</p>
                        </div>
                        <div>
                            <Link href="/shop" className="btn btn-light btn-lg">
                                SHOP NOW
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
};

export default Products;
