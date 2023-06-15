import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleCallApi } from "./../../Redux/Actions/ApiAction";
import { Button, Col, Row, Table } from "antd";
export default function HomePage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.apiData);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);

  // useEffect(() => {
  //   dispatch(handleCallApi());
  // }, [dispatch]);

  console.log(data, "data");
  return (
    <div style={{ padding: "2vw" }}>
      <Col span={24}>
        <Row justify={"space-between"}>
          <Col>
            <Table
              columns={[
                {
                  width: "100px",
                  title: "ORDER ID",
                  dataIndex: "id",
                },
                {
                  title: "TITLE",
                  dataIndex: "title",
                },
                {
                  title: "BODY",
                  dataIndex: "body",
                },
              ]}
              dataSource={data?.data}
            />
            <Col span={12}>
              <Button
                onClick={() => {
                  dispatch(handleCallApi());
                }}
              >
                Show Api Data
              </Button>
            </Col>
          </Col>
        </Row>
      </Col>
    </div>
  );
}
