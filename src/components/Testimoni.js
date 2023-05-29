import React, { Component } from "react";
import Title from "./Title";
import room1 from "../images/room-1.jpg";
import room2 from "../images/room-1.jpg";
import room3 from "../images/room-1.jpg";
export default class testimoni extends Component {
  state = {
    services: [
      {
        images: room1 ,
        alt: "profile1",
        title: "Naufal Faiq Ramadhan",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      },
      {
        images: room2,
        alt: "profile2",
        title: "Annisa Nur Rahmadhani",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      },
      {
        images: room3 ,
        alt: "profile3",
        title: "Muhammad Rangga Rafif",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      }
    ]
  };
  render() {
    return (
      <section className="testimoni">
        <Title title="Happy Owners" />
        <div className="testimoni-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="testimoni">
                <img src={item.images} alt="{item.alt}"></img>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
