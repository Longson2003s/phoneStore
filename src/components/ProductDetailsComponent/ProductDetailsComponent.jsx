import { Button, Col,Image, InputNumber, Row } from 'antd'
import React from 'react'
import imageProduct from '../../assets/images/A15-8.png'
import imageProductSmall from '../../assets/images/A15-6.png'
import { WrapperAddressProduct, WrapperBtnQualityProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, } from './style'
import { StarFilled,PlusOutlined,MinusOutlined } from '@ant-design/icons';
import ButtonComponent from './../ButtonComponent/ButtonComponent';
const ProductDetailsComponent = () => {
  const onChange = () => {}
  return (
    <Row style={{ padding: '16px', background: '#fff', borderRadius: '4px'}}>
    <Col span={10} style={{borderRight:'1px solid #e5e5e5' , paddingRight:'8px'}}>
        <Image src={imageProduct} alt="image product" preview={false} />
        <Row style={{paddingTop: '10px' , justifyContent:' space-between'}}>
            <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false}/>  
             </WrapperStyleColImage> 
             <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false}/>  
             </WrapperStyleColImage> 
             <WrapperStyleColImage span={4}>,
            <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false}/>  
             </WrapperStyleColImage> 
             <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false}/>  
             </WrapperStyleColImage> 
             <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false}/>  
             </WrapperStyleColImage> 
             <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false}/>  
             </WrapperStyleColImage> 
             
        </Row>
    </Col>
    <Col span={14} style={{paddingLeft: '10px'}}>
        <WrapperStyleNameProduct>SamSung Galaxy A15 Blue</WrapperStyleNameProduct>
        <div>
          <StarFilled style={{ fontSize: '12px' , color:'rgb(253,216,54)'}}/>
          <StarFilled style={{ fontSize: '12px' , color:'rgb(253,216,54)'}}/>
          <StarFilled style={{ fontSize: '12px' , color:'rgb(253,216,54)'}}/>
          <span>|buy 34</span>
        </div>
        <WrapperPriceProduct>
          <WrapperPriceTextProduct>200.000</WrapperPriceTextProduct>
        </WrapperPriceProduct>
        <WrapperAddressProduct>
          <span>send</span>
          <span className='address'>huy khhiem , tanh linh , binh thuan</span>
          <span className='change-address'> - change address</span>
        </WrapperAddressProduct>
        <div style={{ margin: '10px 0 20px',padding: '10px 0', borderTop: ' 1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5'}}>
          <div style={{ marginBottom: '10px'}}>Number</div>
          <WrapperQualityProduct>
           <button style={{border:'none', background: 'transparent'}}>
           <MinusOutlined style={{color:'#000', fontSize: '20px'}} size="10px" />
           </button>
           <WrapperInputNumber  defaultValue={3} onChange={onChange} size="small" />    
           <button style={{border:'none', background: 'transparent'}}>       
           <PlusOutlined style={{color:'#000', fontSize: '20px'}} size="10px" />
           </button>
           </WrapperQualityProduct>       
        </div>
        <div style={{ display: 'flex' , alignItems: 'center', gap: '12px' }} >
          <ButtonComponent  
          border = {false}
           size={40} 
           styleButton={{
            background: 'rgb(255,57,69)',
            height:'48px',
            width:'220px',
            border: 'none',
            borderRadius: '4px'
          }}

            textButton={'buy'}
           styleTextButton={{color: '#fff', fontSize: '15px', fontWeight: '7000'}}>

        </ButtonComponent>

        <ButtonComponent  
          border = {false}
           size={40} 
           styleButton={{
            background: '#fff',
            height:'48px',
            width:'220px',
            border: '1px solid rgb(13,92,182) ',
            borderRadius: '4px'
          }}

            textButton={'installment'}
           styleTextButton={{color: 'rgb(13,92,,182)', fontSize: '15px'}}>

        </ButtonComponent>
        </div>
    </Col>
  </Row>
  )
}

export default ProductDetailsComponent
