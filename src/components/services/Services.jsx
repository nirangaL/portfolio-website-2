import React from "react";
import "./service.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  const services = [
    {
      name: "UI/UX Design",
      serviceList: [
        "Lorem, Ipsum dolor sit amet consectetur elit",
        "Lorem, Ipsum dolor sit amet consectetur elit",
        "Lorem, Ipsum dolor sit amet consectetur elit",
        "Lorem, Ipsum dolor sit amet consectetur elit",
        "Lorem, Ipsum dolor sit amet consectetur elit",
      ],
    },
    {
      name: "UI/UX Design",
      serviceList: [
        "Lorem, Ipsum dolor sit amet consectetur elit",
        "Lorem, Ipsum dolor sit amet consectetur elit",
        "Lorem, Ipsum dolor sit amet consectetur elit",
        "Lorem, Ipsum dolor sit amet consectetur elit",
        "Lorem, Ipsum dolor sit amet consectetur elit",
      ],
    },
    {
      name: "UI/UX Design",
      serviceList: [
        "Lorem, Ipsum dolor sit amet consectetur elit",
        "Lorem, Ipsum dolor sit amet consectetur elit",
        "Lorem, Ipsum dolor sit amet consectetur elit",
        "Lorem, Ipsum dolor sit amet consectetur elit",
        "Lorem, Ipsum dolor sit amet consectetur elit",
      ],
    },
  ];

  return (
    <section id="service">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {services.map((services, i) => (
          <article key={i} className="service">
            <div className="service__head">
              <h3>{services.name}</h3>
            </div>

            <div className="service__list">
              {services.serviceList.map((item, j) => (
                <li key={j}>
                  <BiCheck className="service__list__icon" />
                  <p>{item}</p>
                </li>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
