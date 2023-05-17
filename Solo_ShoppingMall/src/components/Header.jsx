import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { Link } from 'react-router-dom';
const Header = () => {
    return (

        <div>
           
            <div className="header">
           
          <img src="./src/assets/로고.png" alt="로고" className="img"/>
                <span className="text">COZ Shopping</span>
                <span className="menu">
              
                    <Button type="button" className="btn btn-light" data-bs-toggle="dropdown" aria-expanded="false">
                        <FontAwesomeIcon icon={faBars} /></Button>
                    <ul class="dropdown-menu">

                        <li><a class="dropdown-item" href="#">김수성님, 안녕하세요!</a></li>
                         <li><a class="dropdown-item" href="#"><Link to="/products/list"><FontAwesomeIcon icon={faGift} />상품리스트 페이지!</Link></a></li>
                        <li><a class="dropdown-item" href="#"><FontAwesomeIcon icon={faStar} />북마크 페이지</a></li>

                    </ul>
                </span>
         
            </div>
            

        </div>
    )
}

export default Header