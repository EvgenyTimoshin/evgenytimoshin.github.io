import React from "react"
import CareerTemplate from "./CareerTemplate";

function Career(){

    const OpenJawTechnologies = {
        
    }

    return(
        <CareerTemplate Title="Software Engineer II"
         CompanyName="OpenJaw Technologies"
          Description="Some shit happened"
           Image="airline.jpg"
            Location="Madrid"
             Technologies={["Java", "Jsp","SOAP", "XSLT", "XML"]}
             Links={["https://www.openjawtech.com/"]}
             />
    );
}

export default Career;