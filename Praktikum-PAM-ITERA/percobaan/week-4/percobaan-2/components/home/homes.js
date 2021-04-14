import React from 'react';
import { Button } from 'antd';
import { Carousel } from 'antd';

const items = [
    {
        key: '1',
        title: 'Lorem ipsum 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero aperiam mollitia unde quas veritatis, doloribus laboriosam possimus exercitationem nemo? Sed delectus iste, et veniam enim eligendi esse sint repudiandae excepturi.',
    },
    {
        key: '2',
        title: 'Lorem ipsum 2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero aperiam mollitia unde quas veritatis, doloribus laboriosam possimus exercitationem nemo? Sed delectus iste, et veniam enim eligendi esse sint repudiandae excepturi.',
    },
    {
        key: '3',
        title: 'Lorem ipsum 3',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero aperiam mollitia unde quas veritatis, doloribus laboriosam possimus exercitationem nemo? Sed delectus iste, et veniam enim eligendi esse sint repudiandae excepturi.',
    }
]
export default function AppHomes() {
    return(
        <div id="hero" className="homes">
        <Carousel>
        {items.map(item => {
            return (
                <div key={item.key} className="container-fluid">
                    <div className="content">
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
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