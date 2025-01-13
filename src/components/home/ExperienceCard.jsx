import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <img 
        className=" bg-white mb-3" 
        src={data.companylogo} 
        alt="Company Logo" 
        style={{
          width: "25vw", // 10% of the viewport width
          maxWidth: "300px", // Prevent it from growing too large
          height: "13vw", // Maintain aspect ratio
          objectFit: "contain", // Ensures proper scaling
          borderRadius: "8px", // Optional: Rounded corners
        }}
        />
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>

      </div>
    </Col>
  );
}

export default ExperienceCard;