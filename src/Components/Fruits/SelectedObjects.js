import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedObject } from "../../Redux/Actions/Actions";

export default function SelectedObjects() {
  const dispatch = useDispatch();
  const { fruits, selectedFruit } = useSelector((state) => state.friuts);

  return (
    <center>
      {fruits?.map((fruit) => (
        <div
          style={{ background: fruit === selectedFruit ? "pink" : "white" }}
          onClick={() => dispatch(selectedObject(fruit))}
        >
          <h1>{fruit}</h1>
        </div>
      ))}

      <hr></hr>
      <h1>Selected fruit {selectedFruit}</h1>
    </center>
  );
}
