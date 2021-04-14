import React from 'react';

import image1 from '../../assets/feature/satu.jpg';
import image2 from '../../assets/feature/dua.jpg';
import image3 from '../../assets/feature/tiga.jpg';
import image4 from '../../assets/feature/empat.jpg';
import image5 from '../../assets/feature/lima.jpg';
import image6 from '../../assets/feature/enam.jpg';
import image7 from '../../assets/feature/tujuh.jpg';
import image8 from '../../assets/feature/lapan.jpg';
import image9 from '../../assets/feature/sembilan.jpg';

import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

export default function AppFeatures(){
     return(
      <div id="feature" className="block featureBlock bgGray">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>Lorem Ipsum Lorem</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card
                hoverable
                cover={<img alt="Lorem Lorem" src={image1} />}
              >
                <Meta title="Lorem Lorem" />
              </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card
                hoverable
                cover={<img alt="Lorem Lorem" src={image2} />}
              >
                <Meta title="Lorem Lorem" />
              </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card
                hoverable
                cover={<img alt="Lorem Lorem" src={image3} />}
              >
                <Meta title="Lorem Lorem" />
              </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card
                hoverable
                cover={<img alt="Lorem Lorem" src={image4} />}
              >
                <Meta title="Lorem Lorem" />
              </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card
                hoverable
                cover={<img alt="Lorem Lorem" src={image5} />}
              >
                <Meta title="Lorem Lorem" />
              </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card
                hoverable
                cover={<img alt="Lorem Lorem" src={image6} />}
              >
                <Meta title="Lorem Lorem" />
              </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card
                hoverable
                cover={<img alt="Lorem Lorem" src={image7} />}
              >
                <Meta title="Lorem Lorem" />
              </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card
                hoverable
                cover={<img alt="Lorem Lorem" src={image8} />}
              >
                <Meta title="Lorem Lorem" />
              </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card
                hoverable
                cover={<img alt="Lorem Lorem" src={image9} />}
              >
                <Meta title="Lorem Lorem" />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
     )
}

