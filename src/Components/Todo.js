import React, { useState } from "react";
import {
  Button,
  Tag,
  Popover,
  Row,
  Col,
  // notification,
  // Popconfirm,
  Table,
  Input,
  Card,
} from "antd";
import { useSelector, useDispatch } from "react-redux";

import { handleSubmit, removeTodo } from "../Redux/Actions/Actions";

export default function Todo() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  // const [toDoList, setToDoList] = useState([]);

  const { toDoList } = useSelector((state) => state);

  const handleClick = () => {
    dispatch(handleSubmit(inputValue));
    setInputValue("");
  };
  return (
    <div>
      <Col span={24}>
        <Row>
          <Col offset={4} span={12}>
            <Input
              style={{}}
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
          </Col>
          <Col span={2}>
            <Button
              onClick={() => {
                handleClick();
              }}
            >
              Submit
            </Button>
          </Col>
        </Row>
        <br />
        <h2>Total Data</h2>
        <Row>
          <Col offset={1} span={8}>
            <Card
              style={{ textAlign: "left", backgroundColor: "#e8eaed" }}
              //   #cbf0f8 , #fdcfe8 , #d7aefb
              bodyStyle={{ textAlign: "left" }}
              title="Todo.js"
            >
              {toDoList.length > 0 ? (
                toDoList.map((v) => (
                  <li onClick={() => dispatch(removeTodo(v))}>{v}</li>
                ))
              ) : (
                <h3>Empty</h3>
              )}
            </Card>
          </Col>
        </Row>
      </Col>
    </div>
  );
}
