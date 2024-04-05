import { Col } from "antd";

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
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";


const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader gutter='16px'>
        <Col span={6}>
          <WrapperTextHeader>PHONESTORE</WrapperTextHeader>
        </Col>
        <Col span={12}>
          <ButtonInputSearch
          size = "large"
          bordered= {false}
          placeholder = "input search text"
          textButton = "Search"

        
          

            // onSearch={onSearch}
          />
        </Col>
        <Col span={6} style={{display:'flex',gap:'20px', alignItems:'center'}} >
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
