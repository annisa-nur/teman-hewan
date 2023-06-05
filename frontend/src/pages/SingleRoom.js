import React, { useContext } from "react";
import defaultBcg from "../images/room-1.jpg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";

const SingleRoom = () => {
  const { slug } = useParams();
  const { getRoom } = useContext(RoomContext);
  const room = getRoom(slug);
  // const defaultBcg = defaultBcg; // replace with actual default background if needed

  if (!room) {
    return (
      <div className="error">
        <h3> no such pet could be found...</h3>
        <Link to="/rooms" className="btn-primary">
          back to pets
        </Link>
      </div>
    );
  }
  
  const {
    name,
    description,
    gender,
    price,
    extras,
    vaccine,
    steril,
    images
  } = room;

  const [main, ...defaultImages] = images;

    return (
      <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`Hi, my name is ${name}!`}>
            <Link to="/rooms" className="btn-primary">
              back to pets
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : Rp{price}</h6>
              <h6>gender : {gender}</h6>
              <h6>{vaccine ? "pet vaccinated 100%" : "pet is not vaccinated"}</h6>
              <h6>{steril ? "pet sterilized" : "pet is not sterilized"}</h6>
            </article>
          </div>
        </section>
        <section className="adoptButton">
          <Link to="/ApprovalForm" className="btn-primary">
          Adopt Now!
          </Link>
        </section>
        <Footer />
      </>
    );
}

export default SingleRoom;

