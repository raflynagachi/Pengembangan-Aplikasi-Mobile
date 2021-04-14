import React from 'react';
import { Row,Col } from 'antd';
import image1 from '../../home.jpg';

export default function AppAbout(){
    return(
        <div id="about" className="block aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Tentang Saya</h2>
                    <p>Data diri saya</p>
                </div>
                <div className="contentHolder">
                <img
                    alt=""
                    width={250}
                    height={250}
                    src={image1}
                 ></img>
                    <p>Saya Rafly Rigan Nagachi NIM 118140109, mahasiswa prodi Teknik Informatika ITERA. 
                        Saat ini saya sedang menempuh semester 6 dan telah berusia 20 tahun. 
                        Saya lahir di OKU Timur, 21 Desember 2000. Sejak SMA saya sudah menikmati anime mulai dari
                        Naruto, One Piece hingga anime musiman</p>
                </div>
                
            </div>
        </div>
    )
}