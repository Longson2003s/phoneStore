import { Badge, Col } from "antd";

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
    <div style={{ width:'100%' , background: 'rgb(26,148,255)' , display: 'flex' , justifyContent:'center',}}>
      <WrapperHeader>
        <Col span={5}>
          <WrapperTextHeader>PHONESTORE</WrapperTextHeader>
        </Col>
        <Col span={13}>
          <ButtonInputSearch
          size = "large"
          bordered= {false}
          placeholder = "input search text"
          textButton = "Search"

            // onSearch={onSearch}
          />
        </Col>
        <Col span={6} style={{display:'flex',gap:'54px', alignItems:'center'}} >
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
            <Badge count={4} size="small">      
              <ShoppingCartOutlined style={{ fontSize: "30px" ,color:'#fff'}}/>
              </Badge> 
              <WrapperTextHeaderSmall>Cart</WrapperTextHeaderSmall>           
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
