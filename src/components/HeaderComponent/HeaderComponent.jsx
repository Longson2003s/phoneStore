import { Col } from "antd";
import Search from "antd/es/transfer/search";
import React from "react";
import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperHeaderAccout,
  WrapperTextHeaderSmall,
} from "./style";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader gutter='16px'>
        <Col span={6}>
          <WrapperTextHeader>PHONESTORE</WrapperTextHeader>
        </Col>
        <Col span={12}>
          <Search
            placeholder="input search text"
            enterButton
            // onSearch={onSearch}
          />
        </Col>
        <Col span={6} style={{display:'flex',gap:'20px'}} >
          <WrapperHeaderAccout>
            <UserOutlined style={{ fontSize: "30px" }} />
            <div>
              <WrapperTextHeaderSmall>Login/register</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Account</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccout>
          <div>       
              <ShoppingCartOutlined style={{ fontSize: "30px" ,color:'#fff'}}/>
              <WrapperTextHeaderSmall>Cart</WrapperTextHeaderSmall>           
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
