import React,{useState,useEffect} from "react";
import './bento_catalog.css';
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// const bentoData = [

//     { id: '001', name: '漢堡肉飯盒', price: 50, imgSrc: '/image/1.1.jpg' },
    
//     { id: '002', name: '火腿玉米飯', price: 60, imgSrc: '/image/1.2.jpg' },
    
//     { id: '003', name: '香菇雞', price: 65, imgSrc: '/image/1.3.jpg' },
    
//     { id: '004', name: '漢堡肉拼盤', price: 60, imgSrc: '/image/1.4.jpg' }
    
//     ];
    
// function BentoCatalog() {
    
//     const [quantity, setQuantity] = useState({});
        
//     const handleQuantityChange = (id, value) => {
        
//     setQuantity(prev => ({ ...prev, [id]: value }));
    
//     };
    

    
//     return (
//     <div className="outer_container">
//         <div className="bento_container">
//             {bentoData.map(bento=>(
//                 <div key={bento.id} className='bento-item'>
//                     <img src="" alt={bento.name}/>
//                     <h2>{bento.name}</h2>
//                     <p>{`價格:${bento.price}元`}</p>
//                     <Link to='./hambergerdetail'>顯示細部說明</Link>
//                     <p>
//                         <input type="number" value={quantity[bento.id]||0} onChange={(e)=>handleQuantityChange(bento.id,e.target.value)} placeholder='數量'/>個
//                     </p>
//                 </div>
//             ))}
//         </div>
//         <button className="order_button">新增訂購項目</button>
//     </div>
   
//     );
    
// }
    
//     export default BentoCatalog;

//chatGPT 生成
import { useNavigate } from "react-router-dom";
import axios from "axios";

  
  function BentoCatalog() {
    const [quantity, setQuantity] = useState({});
    const [bentoData,setBentodata]=useState([]);
    const [error,setError]=useState(null);
    const navigate=useNavigate();
    //監聽數量變化
    const handleQuantityChange = (id, value) => {
      setQuantity((prev) => ({ ...prev, [id]: value }));
    };

    //後端換取便當資訊
    useEffect(()=>{
      const fetchbentodata=async()=>{
        try{
          const response=await axios.get("http://localhost:8000/api/bento");
          console.log('api data:',response.data)
          const customerAcc = localStorage.getItem("customer_acc");
          console.log("📌 檢查 BentoCatalog 畫面 localStorage customer_acc:", customerAcc);
          setBentodata(response.data);
          
        }catch(error){
          console.error('載入資訊失敗',error);
          setError("無法載入便當資訊");
        }
      };
      fetchbentodata();
    },[]);

    const handleorder=async()=>{
      const customerAcc=localStorage.getItem("customer_acc");
      console.log("檢查 customer_acc:", customerAcc);
      const selecteditems=bentoData
      .filter((bento)=>quantity[bento.bentos_id]>0)
      .map((bento)=>({
        id:bento.bentos_id,
        name:bento.bento_name,
        price:bento.bento_price,
        quantity:quantity[bento.bentos_id],
        subtotal:quantity[bento.bentos_id]*bento.bento_price,
      }));
      if (selecteditems.length===0){
        alert('至少選一個便當');
        return
      }
      try{
        await axios.post("http://localhost:8000/api/orders",
          {order_date:new Date().toISOString().split('T')[0],
            customer_acc:customerAcc,
            items:selecteditems,
          },
        );
        alert('提交成功');
        localStorage.setItem("lunchbag",JSON.stringify(selecteditems));
        navigate("/order");
      }catch(error){
        console.error("提交訂單失敗",error)
        alert('error');
      }
    };
    return (
      <div className="catalog-container">
        <div className="bento-container">
          {bentoData.map((bento) => (
            <div key={bento.bentos_id} className="bento-item">
              {/* <img src={bento.imgSrc} alt={bento.name} className="bento-image" /> */}
              <h3 className="bento-name">便當名稱：{bento.bento_name}</h3>
              <p className="bento-price">單價：{bento.bento_price}元</p>
              {/* <a href={`/lunchcatalog/${bento.id}`} className="bento-link">
                顯示細部說明
              </a> 改過*/}
              <Link to={`/catalog/${bento.bentos_id}`} className="bento-link">顯示細部說明</Link>
              <div className="quantity-container">
                <label htmlFor={`quantity-${bento.bentos_id}`}>數量：</label>
                <input
                  id={`quantity-${bento.bentos_id}`}
                  type="number"
                  value={quantity[bento.bentos_id] || 0}
                  onChange={(e) => handleQuantityChange(bento.bentos_id, e.target.value)}
                  placeholder="數量"
                  className="quantity-input"
                />
                個
              </div>
            </div>
          ))}
        </div>
        <button className="add-order-button" onClick={handleorder}>新增訂購項目</button>
      </div>
    );
  }
  
  export default BentoCatalog;