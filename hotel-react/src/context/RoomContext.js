import React, { createContext, useEffect, useState } from "react";

import { roomData } from "../data";

export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState("1 Adult");
  const [kids, setKids] = useState("0 Children");
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]));
  }, [adults, kids]);

  const handleClick = (event) => {
    
    event.preventDefault();

    setLoading(true);

    const newRooms = roomData.filter((room) => {
      return total <= room.maxPerson;

    });
    setTimeout(() => {
      setRooms(newRooms);
      setLoading(false);
    }, 3000);
  };

  return (
    <RoomContext.Provider
      value={{ rooms, adults, kids, setAdults, setKids, total, handleClick, loading }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
