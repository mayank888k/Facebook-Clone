import React from "react";
import MediaCard from "./MediaCard";
import "./pages.css";
import page1 from './images/page1.jpg'
import page2 from './images/page2.jpg'
import page3 from './images/page3.jpg'
import page4 from './images/page4.jpg'

const Pages = () => {
  return (
    <div className="pages">
    <div className="page__title">
      <h1>Suggested for you</h1>
      <h3>Pages you might interested in</h3>
    </div>
      <div className="cards">
      <div className="card">
        <MediaCard img = {page1} title="Foodie" info="Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant, animal or fungal origin, and contains essential nutrients" />
      </div>
      <div className="card">
        <MediaCard img = {page2} title="Robotics" info="Robotics is an interdisciplinary field that integrates computer science and engineering. Robotics involves design, construction, operation, and use of robots." />
      </div>
      </div>
      <div className="cards">
      <div className="card">
        <MediaCard img = {page3} title="Mother Earth" info="Nature, in the broadest sense, is the natural, physical, material world or universe. Nature can refer to the phenomena of the physical world, and also to life in general.Earth's Future is a transdisciplinary, Gold Open Access journal " />
      </div>
      <div className="card">
        <MediaCard img = {page4} title="Gaming Tube" info="India is expected to add nearly 40 million online gamers during 2020−22, according to Deloitte. Maple Capital Advisors' report estimates that the Indian gaming industry will grow 41% annually due to the growth of digital infrastructure." />
      </div>
      </div>
    </div>
  );
};

export default Pages;
