import React from 'react';
import { Card, Col, Row } from 'antd';

const items = [
    {
        key: '1',
        title: 'One Piece',
        image: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
        content: "Enter Monkey D. Luffy, a 17-year-old boy who defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate ransacking villages for fun, Luffy's reason for being a pirate is one of pure wonder: the thought of an exciting adventure that leads him to intriguing people and ultimately, the promised treasure. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach the most coveted of all fortunes—One Piece.",
    },
    {
        key: '2',
        title: 'Fullmetal Alchemist: Brotherhood',
        image: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg',
        content: "Alchemy is bound by this Law of Equivalent Exchange—something the young brothers Edward and Alphonse Elric only realize after attempting human transmutation: the one forbidden act of alchemy. They pay a terrible price for their transgression—Edward loses his left leg, Alphonse his physical body. It is only by the desperate sacrifice of Edward's right arm that he is able to affix Alphonse's soul to a suit of armor. Devastated and alone, it is the hope that they would both eventually return to their original bodies that gives Edward the inspiration to obtain metal limbs called \"automail\" and become a state alchemist, the Fullmetal Alchemist.",
    },
    {
        key: '3',
        title: 'Code Geass: Hangyaku no Lelouch R2',
        image: 'https://cdn.myanimelist.net/images/anime/4/9391.jpg',
        content: "One year has passed since the Black Rebellion, a failed uprising against the Holy Britannian Empire led by the masked vigilante Zero, who is now missing. At a loss without their revolutionary leader, Area 11's resistance group—the Black Knights—find themselves too powerless to combat the brutality inflicted upon the Elevens by Britannia, which has increased significantly in order to crush any hope of a future revolt.",
    },
]

const AppBaruu = () => {
    
    return(
        
        <div id="Top" className="Top black">
            <div className="titleHolder">
                    <h2>Top anime</h2>
                    <p>Menurut saya</p>
                </div>
            <Row gutter={[16, 16]}>
                    {items.map(item => {
                        return (
                            <Col md={{ span:8 }} key={item.key}>
                                <div className="content">
                                    <div className="icon">
                                        <img src={item.image} width="180px" height="300px"/>
                                    </div>
                                    <h2>{item.title}</h2>
                                    <p>{(item.content)}</p>
                                </div>
                            </Col>
                        );
                    })
                    }
            </Row>
        </div>
    );
    
};
export default AppBaruu;