import React from "react";
import { Row, Col, Card } from "antd";
import { useSelector } from "react-redux";
import { selectedObject } from "../../Redux/Actions/Actions";

export default function Render1() {
  const { selectedFruit } = useSelector((state) => state.friuts);

  return (
    <div>
      <Col span={24}>
        <Row>
          <Col  span={20}>
            <Card
              style={{ textAlign: "left", backgroundColor: "#fbbc04" }}
              bodyStyle={{ textAlign: "left" }}
              title="Render 1.js"
            >
              <h1>Selected fruit {selectedFruit}</h1>
            </Card>
          </Col>
        </Row>
      </Col>
    </div>
  );
}
