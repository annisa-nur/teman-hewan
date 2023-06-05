import React from "react";
import { Component } from 'react';
import items from "./data";
//import Client from "./Contentful";

const RoomContext = React.createContext();

export default class RoomProvider extends Component {
  state = {
    rooms: [], 
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    //
    type: "all",
    gender: "all",
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    vaccine: false,
    steril: false
  };

  // //getData
  // getData = async () => {
  //   try {
  //     let response = await Client.getEntries({
  //       content_type: "hotelBookingRoom",
  //       //order: "sys.createdAt"
  //       //order: 'field.price'
  //       //order: '-field.price' <-- reversed order
  //     });

  //   let rooms = this.formatData(response.items);

  //   let featuredRooms = rooms.filter(room => room.featured === true);
  //     //
  //   let maxPrice = Math.max(...rooms.map(item => item.price));
  //   let maxSize = Math.max(...rooms.map(item => item.size));
  //   this.setState({
  //     rooms,
  //     featuredRooms,
  //     sortedRooms: rooms,
  //     loading: false,
  //       //
  //     price: maxPrice,
  //     maxPrice,
  //     maxSize
  //   });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  componentDidMount() {
    //this.getData();
    let rooms = this.formatData(items);

    let featuredRooms = rooms.filter(room => room.featured === true);
      //
    let maxPrice = Math.max(...rooms.map(item => item.price));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
        //
      price: maxPrice,
      maxPrice
    })
  };

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }
  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);

    this.setState(
      {
        [name]: value
      },
      this.filterRooms
    );
  };
  filterRooms = () => {
    let {
      rooms,
      type,
      gender,
      price,
      vaccine,
      steril,
    } = this.state;

    let tempRooms = [...rooms];
    // transform values
    price = parseInt(price);
    // filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }
    // filter by gender
    if (gender !== "all") {
      tempRooms = tempRooms.filter(room => room.gender === gender);
    }
    // filter by price
    tempRooms = tempRooms.filter(room => room.price <= price);

    //filter by vaccine
    if (vaccine) {
      tempRooms = tempRooms.filter(room => room.vaccine === true);
    }
    //filter by steril
    if (steril) {
      tempRooms = tempRooms.filter(room => room.steril === true);
    }
    this.setState({
      sortedRooms: tempRooms
    });
  };
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }}
      >  
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}
