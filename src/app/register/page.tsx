"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import axios from "axios";

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        birthday: '',
        address: '',
        gender: '',
        otp: ''
    });

    const [step, setStep] = useState(1);
    const [error, setError] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState('');
    const [otpExpired, setOtpExpired] = useState(false);
    const router = useRouter();
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };
    const checkEmail = async () => {
        try {
            const response = await axios.post('https://api-pro.teklearner.com/auth/v1/check-email', {
                email: formData.email
            });
            if (response.data.exists) {
                setErrorMessage('Email đã tồn tại!');  // Hiển thị thông báo lỗi
            } else {
                setErrorMessage('');
                setStep(2);
            }
        } catch (error) {
            setErrorMessage('Có lỗi xảy ra khi kiểm tra email');
        }
    };

    const checkPhone = async () => {
        if (!formData.phone) {
            setErrorMessage('Số điện thoại không được bỏ trống');
            return;
        }
        try {
            const response = await axios.post('https://api-pro.teklearner.com/auth/v1/check-phone', {
                phone: formData.phone
            });
            if (response.data.exists) {
                setErrorMessage('Số điện thoại đã tồn tại!');
            } else {
                setErrorMessage('');
                sendOtp();
                setStep(3);
            }
        } catch (error) {
            setErrorMessage('Có lỗi xảy ra khi kiểm tra số điện thoại');
        }
    };
    const sendOtp = async () => {
        try {
            const response = await axios.post('https://api-pro.teklearner.com/auth/v1/send-otp-email', {
                email: formData.email
            });
            if (response.data.success) {
                setErrorMessage('');  
                setStep(3);           
                setOtpExpired(false);
            } else {
                setErrorMessage('');
            }
        } catch (error) {
            setErrorMessage('Có lỗi xảy ra khi gửi OTP: ' + error.response?.data?.message || error.message);
        }
    };
    const handleRegister = async (e) => {
        e.preventDefault();
        if (otpExpired) {
            setErrorMessage('Mã OTP đã hết hạn. Vui lòng yêu cầu mã mới.');
            return;
        }
        try {
            const response = await axios.post('https://api-pro.teklearner.com/auth/v1/register', formData);
            const successMessage =
            "Chúc mừng! Bạn đã đăng ký tài khoản thành công";
            if (response.data?.data === successMessage) {
                alert("Đăng ký tài khoản thành công!");
                router.push("/"); // Chuyển hướng đến trang chủ sau khi đăng ký thành công
              } else {
                // Xử lý trường hợp không khớp với phản hồi thành công
                console.warn("Unexpected success response:", response.data);
                setError(
                  `Đăng ký không thành công: ${
                    response.data?.data || "Không có thông tin chi tiết"
                  }`
                );
              }
        } catch (error) {
            setErrorMessage('Có lỗi xảy ra: ' + error.response?.data?.message || error.message);    
        }
    };
    useEffect(() => {
        if (step === 3) {
            console.log('Chuyển sang bước nhập OTP');
        }
    }, [step]);

    return (
        <div className="container mt-4 py-3 d-flex justify-content-center">
            <div className="col-md-8">

                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

                <form onSubmit={handleRegister}>
                    <div className="d-flex justify-content-center mb-3 ">
                        <button type="button" className="btn btn-primary me-2">Đăng ký với Facebook</button>
                        <button type="button" className="btn btn-danger me-2">Đăng ký với Google</button>
                        <button type="button" className="btn btn-info">Đăng ký với Instagram</button>
                    </div>

                    <p className="text-center py-3">HOẶC</p>
                    {step === 1 && (
                        <>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="name" className="form-label">Họ Tên *</label>
                                    <input type="text" className="form-control" id="name" placeholder="Họ" value={formData.name} onChange={handleChange} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="email" className="form-label">Email *</label>
                                    <input type="email" className="form-control" id="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                                </div>
                                <div className="col-md-6 py-3">
                                    <label htmlFor="password" className="form-label">Mật khẩu *</label>
                                    <input type="password" className="form-control" id="password" placeholder="Mật khẩu" value={formData.password} onChange={handleChange} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="address" className="form-label">Địa chỉ *</label>
                                    <input type="text" className="form-control" id="address" placeholder="Địa chỉ" value={formData.address} onChange={handleChange} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="birthday" className="form-label">Ngày sinh *</label>
                                    <input type="date" className="form-control" id="birthday" placeholder="Ngày sinh" value={formData.birthday} onChange={handleChange} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="gender" className="form-label">Giới tính *</label>
                                    <select className="form-control" id="gender" value={formData.gender} onChange={handleChange}>
                                        <option value="nam">Nam</option>
                                        <option value="nữ">Nữ</option>
                                        <option value="khác">Khác</option>
                                    </select>
                                </div>
                            </div>
                            
                            <button type="button" className="btn btn-dark" onClick={checkEmail}>Kiểm tra Email</button>
                        </>
                    )}
                    {step === 2 && (
                        <>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Số điện thoại *</label>
                                <input type="text" className="form-control" id="phone" placeholder="Số điện thoại" value={formData.phone} onChange={handleChange} />
                            </div>
                            <button type="button" className="btn btn-dark" onClick={checkPhone}>Kiểm tra số điện thoại</button>
                        </>
                    )}
                    {step === 3 && (
                        <>
                            <div className="mb-3">
                                <label htmlFor="otp" className="form-label">OTP *</label>
                                <input type="text" className="form-control" id="otp" placeholder="Nhập OTP" value={formData.otp} onChange={handleChange} disabled={otpExpired} />
                                {otpExpired && <div className="text-danger">Mã OTP đã hết hạn.</div>}
                            </div>
                            <button type="submit" className="btn btn-dark" disabled={otpExpired}>Đăng ký</button>
                            {otpExpired && <button type="button" className="btn btn-secondary mt-2" onClick={sendOtp}>Gửi lại OTP</button>}
                        </>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Register;
