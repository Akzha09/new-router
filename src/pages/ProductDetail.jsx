import React,{ useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/product'
import "./ProductDetail.css"

function ProductDetail() {
    const {id} = useParams()
    const findProduct = products.find((item) => item.id == id)
    const[title,setTitle] = useState("Akzha")
    const[category,setCategory] = useState("Nike")
    const [image, setImage] = useState(findProduct.image)


    function changeTitle(){
      if(title == "Akzha"){
        setTitle("Kuti")
      }else {
        setTitle("Akzha")
      }
    }


  return (
    <div>
      Akz {id}
      <h5>{findProduct.title}</h5>

      <div className='gla'>

      <img src={image} alt="" />
      </div>


<div className='ima'>
<div className='one'></div>
<div className='on'></div>
<div className='o'></div>
<div className='ox'>
  <h6>Личные Данные</h6>
  <h5>Номер:709607193</h5>
  <h4>

  Город:Бишкек
  </h4>
  <h6>Muslimov AKZHOL</h6>
</div>


     {
     findProduct.images.map((image) => (
        <img onClick={() =>setImage(image)} src={image} alt="" />
     ))
     }
     
</div>


 <div className='vip'></div>
 <div className='vi'></div>
 <div className='v'></div>


 <div className='bmw'>

 Состояние:

Б/у
Модель:5 series
<br />
BMW M5 E34
Топливо:Бензин
<br />
Год:1994
<br />
Кузов:Седан 

<br />
Коробка передач:Механика

<br />

<br />

Объем двигателя:4




 </div>

 
  <button className='bot'>Купить</button>

 
  <button className='too'>Позвонить</button>


  

  {title}
<button onClick={() => changeTitle()}>Send</button>
{category}
<button onClick={() => setCategory("Naryn")}>Click</button>

{
     findProduct.images.map((image) => (
        <img onClick={() =>setImage(image)} src={image} alt="" />
     ))
     }
    </div>

    
  )
}

export default ProductDetail
