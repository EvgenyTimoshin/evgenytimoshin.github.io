import React, {useState, useEffect} from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import WorkIcon from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SimpleHeader from "./SimpleHeader.js";

function About(){

    return(
        <>
        <SimpleHeader Title="My Timeline" Color="#0C0D0F"/>
        <VerticalTimeline>
            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#F8B461', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #F8B461' }}
                    date="09/2019 - present"
                    iconStyle={{ background: '#F8B461','background-image': 'url("/workicon.png")', 'background-repeat': 'no-repeat',
                    'background-size': 'cover'} }
                    
                >
                    <h3 className="vertical-timeline-element-title">Software Engineer II</h3>
                    <h4 className="vertical-timeline-element-subtitle">OpenJaw Technologies Iberica, Madrid</h4>
                    <p>
                    Working with OpenJaws' biggest airline client in production environment. 
                    </p>
                    <p>
                    Worked with two seperate medium sized teams (5-12 people) under Agile methodologies.
                    </p>
                    <p>
                    Played a key role in integrating and delivering functional responsive design web pages for the client.
                    </p>
                    <p>
                    Providing support and maintenance for the airline’s online Tech stack. (JAVA, JSP , JAVASCRIPT, XML, XSLT , HTML, CSS). Deep Debugging and Application support skills.
                    </p>
                    <p>
                    Using various project version controls systems.
                    </p>
                
                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#955461', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #955461' }}
                date="06/2019 - 09/2019"
                iconStyle={{ background: '#955461','background-image': 'url("/androidicon.png")', 'background-repeat': 'no-repeat',
                'background-size': 'cover'} }
                
            >
                <h3 className="vertical-timeline-element-title">Remote Android Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">Ethelcare Solutions, Belfast</h4>
                <p>
                Core Android Application Developer for two Android Applications, Tablet and Mobile.
                </p>
                <p>
                (JAVA, KOTLIN, REST APIs, FIREBASE Services, other various dependencies, UX/UI integration).
                </p>
                <p>
                Worked closely with remote backend engineers to implement end to end features. Took over web app development for a short time to help with workload. ( NODEJS, Javascript, REST API, HTML, CSS, Boostrap)
                </p>
                <p>
                Refactored code base to make components of the application reusable and debuggable.
                </p>
                <p>
                Deep debugging and fixing fundamental application faults.
                </p>
                <p>
                Internationalization and Localisation to adapt the applications to various markets.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#513649', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #513649' }}
                date="09/2015 - 06/2019"
                iconStyle={{ background: '#513649','background-image': 'url("/universityicon.png")', 'background-repeat': 'no-repeat',
                'background-size': 'cover'} }
                
            >
                <h3 className="vertical-timeline-element-title">Bachelors Degree in Computer Science</h3>
                <h4 className="vertical-timeline-element-subtitle">Technilogical University Dublin</h4>
                <p>
                    Graduated with highest  Honors degree.
                </p>
                <p>
                Award Of Student Excellence, for overall profeciency in my studies.
                </p>
                <p>
                Best Final Year Student, for receiving the highest overall grades in my course of 2019.
                </p>
                <p>
                Best Final Year Project. Architecture and Design Workflow with VR.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#D37C65', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #D37C65' }}
                date="09/2015 - 06/2019"
                iconStyle={{ background: '#D37C65','background-image': 'url("/universityicon.png")', 'background-repeat': 'no-repeat',
                'background-size': 'cover'} }
                
            >
                <h3 className="vertical-timeline-element-title">Bachelors Degree in Computer Science</h3>
                <h4 className="vertical-timeline-element-subtitle">University of Applied Science, Darmstadt</h4>
                <p>
                 Studied at "Hochschule Darmstadt" as part of the EDDIT. (European Double Degree in Technology).
                </p>
                <p>
                Technical Lead role on a collaborative project with Lufthansa Airlines to establish a prototype for an internal eLearning platform.
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
        </>
    );
}

export default About;