import React from "react";
import "./Item.css"
const Item = ({ item }) => {
    console.log('props:', item)
    // 4가지의 컴포넌트 구현
    // data.type이 "Brand,Product,Exhibition,Category" 인 경우에 맡는 컴포넌트 구현
    if (item.type === 'Product') {// 상품인 경우
        return (
            <div className="item-type01" id={item.id}>

                <img src={item.image_url} alt="제품사진" />

                
            </div>
        )

    } else if (item.type === 'Category') {
        return (
            <div className="item-type02" id={item.id}>

                <img src={item.image_url} alt="제품사진" />

                
            </div>
        )


    } else if (item.type === 'Exhibition') {
        return (
            <div className="item-type03" id={item.id}>

                <img src={item.image_url} alt="제품사진" />

                
            </div>
        )

    } else if (item.type === 'Brand') {
        return (
            <div className="item-type04" id={item.id}>

            <img src={item.brand_image_url} alt="브랜드 사진"/>

                
            </div>
        )

    }

}

export default Item