import React, {Fragment} from "react";
import Container from 'react-bootstrap/Container';
import Media from 'react-media';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeHeader from './HomeHeader.js';
import About from './About.js';
import Projects from './Projects.js'

function Home(){

    const hBigBoxStyle = { 
        color: 'white',
        'text-align': 'center',
        'vertical-align': 'middle',
        'line-height': '850px',
        'height': '100px',
        'text-shadow': '2px 2px #343a40',
        'font-size': '5.5vw'
    };

    const pBigBoxStyle = {
        color: 'white',
        'text-align': 'center',
        'vertical-align': 'middle',
        'line-height': '800px',
        'text-shadow': '2px 2px #343a40',
        'font-size': '1.5vw'
    }

    const hStyleSmallBox = {
        color: 'white',
        'text-align': 'center',
        'vertical-align': 'middle',
        'line-height': '433px',
        'width': '-webkit-fill-available',
        'text-shadow': '2px 2px #343a40',
        'font-size': '1.5vw'
    }

    const hStyleSmallBoxSmallScreen = {
        color: 'white',
        'text-align': 'center',
        'vertical-align': 'middle',
        'line-height': '433px',
        'width': '-webkit-fill-available',
        'text-shadow': '2px 2px #343a40',
        'font-size': '5vw'
    }


    const bigBoxClasses = `boxImgZoom`
    const smallBoxClasses = `boxImgZoom`
    const textClasses = `fadeText`

    const pictures = () => {
        return(
            <Container fluid>
            <Row>
                <Col md={8}>
                    <Row className={bigBoxClasses}>
                        <div className="personalImageBig">
                            <h1 style={hBigBoxStyle} className={textClasses}>Hello, I'm Evgeny Timoshin</h1>
                            <p style={pBigBoxStyle} className={textClasses}>I am a professional software engineer, with a passion for creative work.</p>
                        </div>
                    </Row>
                </Col>
                <Col>
                    <Row className={smallBoxClasses}>
                    <div className="programmingImage">
                        <h1 style={hStyleSmallBox} className={textClasses}>My Professional Career</h1>
                    </div>
                    </Row>
                    <Row className={smallBoxClasses}> 
                    <div className="universityImage">
                        <h1 style={hStyleSmallBox} className={textClasses}>Education Portfolio</h1>
                    </div>
                    </Row>
                    <Row className={smallBoxClasses}>
                    <div className="gamedevImage">
                        <h1 style={hStyleSmallBox} className={textClasses}>Related Hobbies</h1>
                    </div>
                    </Row>
                </Col>
            </Row>
            </Container>
        );
    }

    const smallScreenStack = () => {
        return(
            <Container fluid>
            <Row>
                <Col md={8}>
                    <Row className={smallBoxClasses}>
                        <div className="personalImageSmall">
                            <h1 style={hStyleSmallBoxSmallScreen} className={textClasses}>Hello, I'm Evgeny Timoshin</h1>
                            <p style={pBigBoxStyle} className={textClasses}>I am a professional software engineer, with a passion for creative work.</p>
                        </div>
                    </Row>

                    <Row className={smallBoxClasses}>
                    <div className="programmingImage">
                        <h1 style={hStyleSmallBoxSmallScreen} className={textClasses}>My Professional Career</h1>
                    </div>
                    </Row>
                    <Row className={smallBoxClasses}> 
                    <div className="universityImage">
                        <h1 style={hStyleSmallBoxSmallScreen} className={textClasses}>Education Portfolio</h1>
                    </div>
                    </Row>
                    <Row className={smallBoxClasses}>
                    <div className="gamedevImage">
                        <h1 style={hStyleSmallBoxSmallScreen} className={textClasses}>Related Hobbies</h1>
                    </div>
                    </Row>
                </Col>
            </Row>
            </Container>
        );
    }

    const homeContent = () => {
        return(
            <>
            <HomeHeader/>
            <About/>
            <Projects/>
            </>
        );
    }
    return(
        <div>
        <Media queries={{
          small: "(max-width: 750px)",
          medium: "(min-width: 750px) and (max-width: 3000px)",
        }}>
          {matches => (
            <Fragment>
              {matches.small && homeContent()}
              {matches.medium && homeContent()}
            </Fragment>
          )}
        </Media>
      </div>
    );
}

export default Home;