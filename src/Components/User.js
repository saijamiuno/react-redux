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
  Segmented,
  Collapse,
  Space,
  Checkbox,
} from "antd";
import { useSelector } from "react-redux";

import { handleSubmit } from "../Redux/Actions/Actions";

export default function User() {
  const { toDoList } = useSelector((state) => state);

  return (
    <div>
      <Col span={24}>
        <br />
        <h2>Total Data</h2>
        <Row>
          <Col offset={1} span={8}>
            <Card
              style={{ textAlign: "left", backgroundColor: "#e8eaed" }}
              //   #cbf0f8 , #fdcfe8 , #d7aefb
              bodyStyle={{ textAlign: "left" }}
              title="User.js"
            >
              {toDoList.length > 0 ? (
                toDoList.map((v) => <li>{v}</li>)
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
