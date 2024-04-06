import Styled from "styled-components";
import { Card } from "antd";



export const WrapperCardStyle = Styled(Card)`
  width:200px;
  & img {
    height:200px;
    width:200px;
  },
  position: relative;

 
`

export const StyleNameProduct = Styled.div`
 font-weight:400;
 font-size: 12px;
 line-height: 16px;
 color: rgb(56,56,61);
 font-weight: 400;

`

export const WrapperReportText = Styled.div`
  font-size: 10px;
  color:rgb(128,128,137);
  display:flex;
  align-items: center;
  margin: 6px 0 0px;

`

export const WrapperPriceText = Styled.div`
  color: rgb(255,66,78);
  font-size: 16px;
  font-weight: 500;
 
`

export const WrapperDiscountText = Styled.span`
  color: rgb(255,66,78);
  font-size: 12px;
  font-weight: 500;
`