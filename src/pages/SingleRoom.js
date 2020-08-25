import React, { Component } from "react";
import defaultBcg from "../images/room-9.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";


export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  static contextType = RoomContext;

  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3> No encontramos la habitacion.</h3>
          <Link to="/rooms" className="btn-primary">
            Retoma a Rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    const [ ...defaultImages] = images;
    console.log(defaultImages);

    return (
      <>
        <Hero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Regresar a Habitaciones
            </Link>
          </Banner>
        </Hero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Detalles</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Informacion</h3>
              <h6>Precio : ${price}</h6>
              <h6>Capacidad : {size} En total</h6>
              <h6>
                Capacidad Maxima :
                {capacity > 1 ? `${capacity} personas` : `${capacity} persona`}
              </h6>
              <h6>{pets ? "pets allowed" : "No incluye mascotas"}</h6>
              <h6>{breakfast && "Incluye el desayuno y la comida"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Adicionales</h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}
