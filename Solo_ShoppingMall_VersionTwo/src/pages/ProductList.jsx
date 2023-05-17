import React, { useEffect, useState } from "react";
import 전체 from "../assets/전체.png";
import 상품 from "../assets/상품.png";
import 카테고리 from "../assets/카테고리.png";
import 기획전 from "../assets/기획전.png";
import 브랜드 from "../assets/브랜드.png";
import './pages.css'
import Item from "../components/Item";
const ProductList = () => {
  const [data, setData] = useState([]);
  const [choice, setchoice] = useState('');

  useEffect(() => {
    fetch("http://cozshopping.codestates-seb.link/api/v1/products?") // fetch로 데이터 불러오기
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
      
  }, []);
  
  // 클랙했을경우 각각에 맞는 상태를 보내 주어야 한다. 
  // 어... 근데 Total은 맞는 choice 가 없는데?
  // choice가 있는 경우와 없는 경우로 나눠야할듯
const clickTotal = () =>{
  setchoice('')
  
}
//........................ choice 있는경우 ............................................
const clickProduct = () =>{
  setchoice('Product')
  
}
const clickCategory = () =>{
  setchoice('Category')
 
}
const clickExhibition = () =>{
  setchoice('Exhibition')
  
}
const clickBrand = () =>{
  setchoice('Brand')
 
}
  return (
    <div>
      {/* 각각의 카테고리별 사진 출력*/}
    {/* 클릭세 해당 컴포넌트로 이동 -> 클릭이벤트 구현 -> 클릭했을경우 -> Item 컴포넌트에서 해당하는 컴포넌트 출력*/}
    {/* 여기서 prop로 Item컴포넌트에 보내주기 데이터 보내주기 */}
    {/* 여기에 Item 컴포넌트 출력하기 -> */}

      <div className="category-container">
        <ul>
          <li className="total"><img src={전체} alt="전체" onClick={clickTotal}/>전체</li>
          <li className="product"><img src={상품} alt="상품"onClick={clickProduct}/>상품</li>
          <li className="category"><img src={카테고리} alt="카테고리" onClick={clickCategory}/>카테고리</li>
          <li className="exhibition"><img src={기획전} alt="기획전" onClick={clickExhibition}/>기획전</li>
          <li className="brand"><img src={브랜드} alt="브랜드" onClick={clickBrand}/>브랜드</li>
        </ul>
      </div>
    <Item Item={data} choice = {choice}/>
      

    </div>
  );
};


export default ProductList