import React from 'react';
import { Button } from 'antd';

import { Carousel } from 'antd';

const items = [
    {
        key: '1',
        title: 'Manga',
        content: 'Manga adalah komik atau novel grafik yang dibuat di Jepang atau menggunakan bahasa Jepang, sesuai dengan gaya yang dikembangkan di sana pada akhir abad ke-19. Manga memiliki sejarah awal yang panjang dan kompleks dalam seni Jepang terdahulu.',
    },
    {
        key: '2',
        title: 'Anime',
        content: 'Anime adalah animasi dari Jepang yang digambar dengan tangan maupun menggunakan teknologi komputer. Kata anime merupakan singkatan dari "animation" dalam bahasa Inggris, yang merujuk pada semua jenis animasi.',
    },
    {
        key: '3',
        title: 'Game',
        content: 'Sebuah Permainan adalah bentuk permainan yang terstruktur, biasanya dilakukan untuk hiburan atau kesenangan, dan kadang-kadang digunakan sebagai alat pendidikan.',
    },
]

export default function AppHomes() {
    return(
        <div id="homes" className="homes">
        <Carousel>
        {items.map(item => {
            return (
                <div key={item.key} className="container-fluid">
                    <div className="content">
                        <h3 className="text-white">{item.title}</h3>
                        <p className="text-white">{item.content}</p>
                        <div className="btnHolder">
                            <Button type="primary" size="large">Learn More</Button>
                        </div>
                    </div>
                </div>
            );
        })}
        </Carousel>
    </div>
    )
}