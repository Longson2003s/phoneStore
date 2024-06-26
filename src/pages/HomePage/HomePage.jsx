import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperTypeProduct } from './style'
import CardComponent from '../../components/CardComponent/CardComponent'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
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
    <div style={{marginTop:'20px', display:'flex',alignItems:'center',gap: '20px'}}>
      <CardComponent/>
    </div>
    <NavbarComponent/>
    </div>
  )
}
export default HomePage
