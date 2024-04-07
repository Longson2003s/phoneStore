import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperTypeProduct } from './style'
import CardComponent from '../../components/CardComponent/CardComponent'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import ButtonComponent from './../../components/ButtonComponent/ButtonComponent';
const HomePage = () => {
  const arr = ['LENOVO', 'SAMSUNG' , 'IPHONE' ,'MI']
  return (
    <div style={{ padding: '0 120px'}}>
      <WrapperTypeProduct>
        {arr.map((item)=>{
            return (
                <TypeProduct name={item} key={item}/>
            )
        })}
        </WrapperTypeProduct>
    <div style={{marginTop:'20px', display:'flex',alignItems:'center',gap: '30px', flexWrap: 'wrap'}}>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
    </div>
    <div style={{ width: '100%', display: 'flex',  justifyContent: 'center', marginTop: ' 10px' }} >
   <WrapperButtonMore textButton='views items' type = 'outline' styleButton={
      {
        border: '1px solid rgb(11, 116, 229)', color: 'rgb(11,116,229)',
        width: '240px', height: '38px' , borderRadius: '4px'
      }
    }
     styleTextButton={{ fontWeight: 500 }}/>

</div>
</div>
  )
  }
export default HomePage
