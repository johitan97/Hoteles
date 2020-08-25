import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer }
  from "react-icons/fa";
import Title from './Title'
export default class Services extends Component {
    state={
        services:[
            {
              icon:<FaCocktail />,
              title:"Cocteles gratis",
              info:'Siempre en la busqueda de la felicidad'
            },
            {
                icon:<FaHiking />,
                title:"Disfruta nuevas experiencias",
                info:'Siempre en la busqueda de la felicidad'
            },
            {
                icon:<FaShuttleVan />,
                title:"Descubre Nuevas Oportunidades",
                info:'Siempre en la busqueda de la felicidad'
            },
            {
                icon:<FaBeer />,
                title:"Grandes bebidas",
                info:'Siempre en la busqueda de la felicidad'
            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Servicios" />
                
                <div className="services-center">
                  {this.state.services.map((item, index) =>{
                      return <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                      </article>
                  })}
                </div>
            </section>
        );
    }
}