import React,{useState} from "react";
import { useLocation,useNavigate } from "react-router-dom";
import './bento_lunchbag.css';//css

function order(){
    const location =useLocation();
    const navigate=useNavigate();
    const{selectitem:initialItems}=location.state||{selectitem:[]}
    const[orderitem,setorderitem]=useState(initialItems);
    
    const calculate=()=>{
        return orderitem.reduce((total,item)=>total+item.subtotal,0);
    }
    return(
        <div className="ordercontainer">
            <h1 className="order_title">便當袋明細</h1>
            <table className="order_table">
            <thead>
          <tr>
            <th>便當編號</th>
            <th>便當名稱</th>
            <th>單價</th>
            <th>數量</th>
            <th>小計</th>
            <th>刪除</th>
          </tr>
        </thead>
        <tbody>
          {orderitem.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price} 元</td>
              <td>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                  className="quantity-input"
                />
              </td>
              <td>{item.subtotal} 元</td>
              <td>
                <button className="remove-btn" onClick={() => handleRemoveItem(item.id)}>刪除訂購項目</button>
              </td>
            </tr>
          ))}
        </tbody>
            </table>
            <h2 className="total-price">總價：{calculate()} 元</h2>
            <div className="order-buttons">
                <button className="order-btn" onClick={() => navigate("/catalog")}>瀏覽便當型錄</button>
                <button className="order-btn">修改訂購數量</button>
                <button className="order-btn">取消採購訂單</button>
                <button className="order-btn">填寫交貨資料</button>
             </div>
        </div>
    )
}
export default order;