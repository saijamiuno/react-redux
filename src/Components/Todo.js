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
import { useDispatch } from "react-redux";

import { handleSubmit, removeTodo } from "../Redux/Actions/Actions";

export default function Todo() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  // const [toDoList, setToDoList] = useState([]);

  const handleClick = () => {
    dispatch(handleSubmit(inputValue));
    setInputValue("");
  };
  return (
    <div>
      <Col span={24}>
        <Row>
          <Col offset={2} span={18}>
            <Input
              style={{}}
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
          </Col>
          <Col span={4}>
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
      </Col>
    </div>
  );
}
