import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

function ProjectCard(Props){
    return(
        <div className="cardHolder">
        <Card className="text-center bg-light text-dark">
            <Card.Img variant="top" src={Props.Image} />
                <Card.Body>
                    <Card.Title>{Props.Title}</Card.Title>
                    <Card.Text>
                        {Props.Description}
                    </Card.Text>
                    <Button variant="primary">More Details</Button>
                </Card.Body>
            <Card.Footer className="text-muted">{Props.Date}</Card.Footer>
        </Card>
        </div>
    );
}

export default ProjectCard;