import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedFruitNames } from "../../Redux/Actions/PersistAction";
export default function SelectedNames() {
  const dispatch = useDispatch();
  const { fruits, selectedFruit } = useSelector((state) => state.persistFriuts);

  return (
    <center>
      {fruits?.map((fruit) => (
        <div
          style={{
            color: "#4084f2",
            maxWidth: "10vw",
            background: fruit === selectedFruit ? "#e8eaed" : "white",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => dispatch(selectedFruitNames(fruit))}
        >
          <h1>{fruit}</h1>
        </div>
      ))}

      <hr></hr>
    </center>
  );
}
