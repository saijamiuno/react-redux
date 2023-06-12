import "./App.css";
import { Col, Row } from "antd";
import Todo from "./Components/Todo";
import User from "./Components/User";
import Data from "./Components/Data";
import TotalRecords from "./Components/TotalRecords";

function App() {
  return (
    <div className="App">
      <h1>WORKING</h1>
      <Col offset={4} span={12}>
        <Todo />
      </Col>

      <Col span={24}>
        <Row>
          <Col span={8}>
            <User />
          </Col>
          <Col span={8}>
            <Data />
          </Col>
          <Col span={8}>
            <TotalRecords />
          </Col>
        </Row>
      </Col>
      <br />
    </div>
  );
}

export default App;
