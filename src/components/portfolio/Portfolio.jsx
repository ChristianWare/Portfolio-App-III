import "./portfolio.scss";

import React, { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className='container'>
        <div className='item'>
          <img
            src='https://media-exp1.licdn.com/dms/image/C4E0BAQHhbVLaNOTTfA/company-logo_200_200/0/1556848405410?e=2159024400&v=beta&t=wWw3x55m5NtiV9tjtr0uUVvV-Avz2lYcvysSn0ALzQ0'
            alt=''
          />
          <h3>Banking App</h3>
        </div>
        <div className='item'>
          <img
            src='https://media-exp1.licdn.com/dms/image/C4E0BAQHhbVLaNOTTfA/company-logo_200_200/0/1556848405410?e=2159024400&v=beta&t=wWw3x55m5NtiV9tjtr0uUVvV-Avz2lYcvysSn0ALzQ0'
            alt=''
          />
          <h3>Banking App</h3>
        </div>
        <div className='item'>
          <img
            src='https://media-exp1.licdn.com/dms/image/C4E0BAQHhbVLaNOTTfA/company-logo_200_200/0/1556848405410?e=2159024400&v=beta&t=wWw3x55m5NtiV9tjtr0uUVvV-Avz2lYcvysSn0ALzQ0'
            alt=''
          />
          <h3>Banking App</h3>
        </div>
        <div className='item'>
          <img
            src='https://media-exp1.licdn.com/dms/image/C4E0BAQHhbVLaNOTTfA/company-logo_200_200/0/1556848405410?e=2159024400&v=beta&t=wWw3x55m5NtiV9tjtr0uUVvV-Avz2lYcvysSn0ALzQ0'
            alt=''
          />
          <h3>Banking App</h3>
        </div>
        <div className='item'>
          <img
            src='https://media-exp1.licdn.com/dms/image/C4E0BAQHhbVLaNOTTfA/company-logo_200_200/0/1556848405410?e=2159024400&v=beta&t=wWw3x55m5NtiV9tjtr0uUVvV-Avz2lYcvysSn0ALzQ0'
            alt=''
          />
          <h3>Banking App</h3>
        </div>
        <div className='item'>
          <img
            src='https://media-exp1.licdn.com/dms/image/C4E0BAQHhbVLaNOTTfA/company-logo_200_200/0/1556848405410?e=2159024400&v=beta&t=wWw3x55m5NtiV9tjtr0uUVvV-Avz2lYcvysSn0ALzQ0'
            alt=''
          />
          <h3>Banking App</h3>
        </div>
        <div className='item'>
          <img
            src='https://media-exp1.licdn.com/dms/image/C4E0BAQHhbVLaNOTTfA/company-logo_200_200/0/1556848405410?e=2159024400&v=beta&t=wWw3x55m5NtiV9tjtr0uUVvV-Avz2lYcvysSn0ALzQ0'
            alt=''
          />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
}
