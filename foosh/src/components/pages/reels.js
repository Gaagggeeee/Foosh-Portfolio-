import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// VIDEOS 
import Reynisfjara from '../../videos/Reynisfjara.mp4';

// STYLES
import '../styles/reels.css';

function Reels() {
    return (
        <>
            <Container className='reel-container' fluid={true}>
                {/* VIDEO ROW */}
                <Row>
                    <Col>
                        <div className='video-box'>
                            <video className='video-player' controls>
                                <source src={Reynisfjara} />
                            </video>
                            <div className='video-title-box'>
                                <p>Reynisfjara</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                {/* VIDEO ROW */}
                <Row>
                    <Col>
                        <div className='video-box'>
                            <video className='video-player' controls>
                                <source src={Reynisfjara} />
                            </video>
                            <div className='video-title-box'>
                                <p>Reynisfjara</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                {/* VIDEO ROW */}
                <Row>
                    <Col>
                        <div className='video-box'>
                            <video className='video-player' controls>
                                <source src={Reynisfjara} />
                            </video>
                            <div className='video-title-box'>
                                <p>Reynisfjara</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                {/* VIDEO ROW */}
                <Row>
                    <Col>
                        <div className='video-box'>
                            <video className='video-player' controls>
                                <source src={Reynisfjara} />
                            </video>
                            <div className='video-title-box'>
                                <p>Reynisfjara</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Reels;
