import "./App.css";
import { Col, Row } from "antd";
import Todo from "./Components/TodoApp/Todo";
import User from "./Components/TodoApp/User";
import Data from "./Components/TodoApp/Data";
import TotalRecords from "./Components/TodoApp/TotalRecords";
import SelectedObjects from "./Components/Fruits/SelectedObjects";

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
      <SelectedObjects/>
    </div>
  );
}

export default App;
