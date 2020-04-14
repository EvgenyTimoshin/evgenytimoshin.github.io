import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function HomeHeader(){

    const homeHeaderClasses = `HomeHeader`;

    const hBigBoxStyle = { 
        color: 'white',
        'text-align': 'center',
        'vertical-align': 'middle',
        'text-shadow': '2px 2px #343a40',
        'font-size': '65px',
        'padding-bottom': '50px'
    };

    const pBigBoxStyle = {
        color: 'white',
        'text-align': 'center',
        'vertical-align': 'middle',
        'text-shadow': '2px 2px #343a40',
        'font-size': '30px',
    }

    const textClasses = `fadeText`
    

    return(
        <Container fluid className={homeHeaderClasses}>
            <div  className={`homeContainerDiv`}>
                <h1 style={hBigBoxStyle} className={textClasses}>Hello, I'm Evgeny Timoshin</h1>
                <p style={pBigBoxStyle} className={`discoverMeP fadeText`}>I am a professional software engineer, with a passion for creative work.</p>
                <Button className={`fadeText button-color`}id="AboutHeader" href="#AboutHeader"style={{'margin': 'auto', 'background-color': ' #F8B461'}} variant="secondary" size="lg">
                    Discover me
                </Button>
            </div>
        </Container>
    );
}

export default HomeHeader;