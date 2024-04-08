import React, { Fragment } from "react";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Col, Pagination, Row } from "antd";
import { WrapperNavbar, WrapperProducts } from "./style";

const TypeProductpage = () => {
  const onChange = () => {};
  return (
    <div style={{ width: '100%', background: "#efefef" }}>
      <Row style={{ width: " 1270px", margin: "0 auto" }}>
        <WrapperNavbar span={4}>
          <NavbarComponent />
        </WrapperNavbar>
        <Col >
          <WrapperProducts>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProducts>
          <Pagination
            defaultCurrent={2}
            total={100}
            onChange={onChange}
            style={{ textAlign: "center", marginTop: "10px" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default TypeProductpage;
