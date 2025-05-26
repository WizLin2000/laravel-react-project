import { Navigate, useParams } from "react-router-dom";
import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import './bento_detail.css';
import beef from './imgs/1.jpg'
import axios from "axios";

// function detail(){

//     const navigate=useNavigate();
// const handleCatalogClick = () => {

//     console.log('瀏覽便當型錄');
    
//     navigate('/catalog');
    
// }    
//     return (
    
//     <div className="lunch-catalog-container">
    
//         <div className="lunch-image-container">
    
//         <img src={beef} alt="Lunch Image" className="lunch-image" />
    
//         </div>
    
//     <div className="lunch-description-container">
    
//         <div className="lunch-description">
    
//             <span>便當編號: C0001</span>
    
//             <span>便當名稱: 漢堡肉餐盒</span>
    
//             <span>單價: 50元</span>
    
//             <span>餐廳: 中正排骨</span>
    
//         </div>
    
//     <button className="show-catalog" onClick={handleCatalogClick}>瀏覽便當型錄</button>
    
//     </div>
    
//     </div>
    
//     );
    
// }
// export default detail;

//chatGPT

function BentoDetail() {
  const navigate=useNavigate();
  const handleonclick=()=>{
  
    navigate('/catalog');
  }

  const {id}= useParams();
  console.log('獲取便當id',id);
  const [bento,setbento]=useState(null);
  useEffect(()=>{
    const fetchbentodetail=async()=>{
      try{
        const response=await axios.get(`http://localhost:8000/api/bento/${id}`);
        setbento(response.data);

      }catch(error){
        console.error('無法獲取便當資訊',error);
      }
    };
    fetchbentodetail();
  },[id])
  if(!bento){
    return <p>loading...</p>;
  }
  
    return (
      <div className="bento-detail-container">
        <div className="bento-detail-card">
          {/* <img src={bento.imgSrc} alt={bento.name} className="bento-detail-image" /> */}
          <div className="bento-detail-info">
            <p><strong>便當編號：</strong>{bento.bentos_id}</p>
            <p><strong>便當名稱：</strong>{bento.bento_name}</p>
            <p><strong>單價：</strong>{bento.bento_price}元</p>
            <p><strong>餐廳：</strong>{bento.bento_restaurant}</p>
            <button className="view-catalog-button" onClick={handleonclick}>瀏覽便當型錄</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default BentoDetail;