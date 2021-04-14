import React from 'react';
import { Row,Col } from 'antd';

const items = [
    {
        key: '1',
        title: 'Lorem Ipsum',
        content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Libero aperiam mollitia unde quas veritatis, doloribus laboriosam possimus exercitationem nemo?',
    },
    {
        key: '2',
        title: 'Lorem Ipsum',
        content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Libero aperiam mollitia unde quas veritatis, doloribus laboriosam possimus exercitationem nemo?',
    },
    {
        key: '3',
        title: 'Lorem Ipsum',
        content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Libero aperiam mollitia unde quas veritatis, doloribus laboriosam possimus exercitationem nemo?',
    },
]

export default function AppAbout(){
    return(
        <div id="about" className="block aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>About Us</h2>
                    <p>Lorem ipsum, lorem ipsum</p>
                </div>
                <div className="contentHolder">
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Libero aperiam mollitia unde quas veritatis, doloribus laboriosam possimus exercitationem nemo? Sed delectus iste, et veniam enim eligendi esse sint repudiandae excepturi.</p>
                </div>
                <Row gutter={[16, 16]}>
                    {items.map(item => {
                        return (
                            <Col md={{ span:8 }} key={item.key}>
                                <div className="content">
                                    <div className="icon">
                                        {item.icon}
                                    </div>
                                    <h3>item.title</h3>
                                    <p>(item.content)</p>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </div>
    )
}