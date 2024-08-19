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

const ProductSection_1 = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        axios.get('https://api-pro.teklearner.com/product/v1/get-list-product')
            .then(response => {
                setProducts(response.data.data);
            })
            .catch(error => {
                console.error("Có lỗi xảy ra khi lấy dữ liệu:", error);
            });
    }, []);

    return (
        <>
        <div className="container">
            <h3 className="text-left mb-4">NEW ARRIVALS</h3>
            <div className="row">
                <div className="col-lg-6 col-md-12 mb-4">
                    <div className="card">
                        <div className="position-relative">
                            <img src="https://naidecor.vn/wp-content/uploads/2019/06/sm00301_main-1.jpg" className="card-img-top" alt="Product Image" />
                            <div className="shop-now-overlay">
                                <Link className="nav-link" href="#">
                                    SHOP NOW
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="row">
                        {products.slice(0, 2).map((product) => (
                        <div key={product.id} className="col-md-6 col-12 mb-4"> 
                            <div className="card">
                                <div className="position-relative">
                                    <Link href={`/detail/${product.id}`}>
                                        <img    
                                            src={product.product_gallery[0]} 
                                            alt={product.product_title} 
                                            className="card-img-top"
                                            style={{ objectFit: 'cover', height: 'auto' }} 
                                        />
                                    </Link>
                                    <span className="position-absolute start-0 m-2 badge bg-dark text-white" style={{ top: '90%', left: '10px' }}>
                                        {product.product_category.length > 0 ? product.product_category.join(', ') : "Uncategorized"}
                                    </span>
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
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="row">
                        {products.slice(0, 2).map((product) => (
                        <div key={product.id} className="col-md-6 col-12 mb-4">
                            <div className="card">
                                <div className="position-relative">
                                <Link href={`/detail/${product.id}`}>
                                        <img    
                                            src={product.product_gallery[0]} 
                                            alt={product.product_title} 
                                            className="card-img-top"
                                            style={{ objectFit: 'cover', height: 'auto' }} 
                                        />
                                    </Link>
                                    <span className="position-absolute start-0 m-2 badge bg-dark text-white" style={{ top: '90%', left: '10px' }}>
                                        {product.product_category.length > 0 ? product.product_category.join(', ') : "Uncategorized"}
                                    </span>
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
                </div>
                <div className="col-lg-6 col-md-12 mb-4">
                    <div className="card">
                        <div className="position-relative">
                            <img src="https://naidecor.vn/wp-content/uploads/2019/06/sm00301_main-1.jpg" className="card-img-top" alt="Product Image" />
                            <div className="shop-now-overlay">
                                <Link className="nav-link" href="#">
                                    SHOP NOW
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ProductSection_1;
