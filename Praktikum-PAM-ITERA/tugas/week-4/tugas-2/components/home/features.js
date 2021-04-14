import React from 'react';
import image1 from '../../assets/feature/gambar1.png';
import image2 from '../../assets/feature/gambar2.png';
import image3 from '../../assets/feature/gambar3.png';
import image4 from '../../assets/feature/gambar4.png';
import image5 from '../../assets/feature/gambar5.png';
import image6 from '../../assets/feature/gambar6.png';
import image7 from '../../assets/feature/gambar7.png';
import image8 from '../../assets/feature/gambar8.png';
import image9 from '../../assets/feature/gambar9.png';
import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;
export default function AppFeatures(){
     return(
      <div id="feature" className="block featureBlock bgGray">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>Gallery</h2>
            <p>Our post in Instagram.</p>
          </div>
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card
                hoverable
                cover={<img alt="Gambar" src={image1} />}
              >
                <Meta title="post-1" />
              </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card
                hoverable
                cover={<img alt="Gambar" src={image2} />}
              >
                <Meta title="post-2" />
              </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card
                hoverable
                cover={<img alt="Gambar" src={image3} />}
              >
                <Meta title="post-3" />
              </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card
                hoverable
                cover={<img alt="Gambar" src={image4} />}
              >
                <Meta title="post-4" />
              </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card
                hoverable
                cover={<img alt="Gambar" src={image5} />}
              >
                <Meta title="post-5" />
              </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card
                hoverable
                cover={<img alt="Gambar" src={image6} />}
              >
                <Meta title="post-6" />
              </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card
                hoverable
                cover={<img alt="Gambar" src={image7} />}
              >
                <Meta title="post-7" />
              </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card
                hoverable
                cover={<img alt="Gambar" src={image8} />}
              >
                <Meta title="post-8" />
              </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card
                hoverable
                cover={<img alt="Gambar" src={image9} />}
              >
                <Meta title="post-9" />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
     )
}

