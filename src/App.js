import { useState } from "react";
import Message from "./Components/Message";
import { Container } from "./Main/Container";
import { Convert, Array } from "./Main/Convert";
import { List } from "./Main/List";
import { ListItem } from "./Main/ListItem";
import { NewItem } from "./Main/NewItem";

export default function App() {
  return (
    <div className="App">
      {/* {/* <Container/> */}
      {/* <List array={langs} /> */}
      <Container/>
    </div>
  );
}