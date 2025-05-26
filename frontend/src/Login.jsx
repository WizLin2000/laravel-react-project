// import React,{useState} from 'react';
// import axios from 'axios';
// import './Login.css';

// const Login =()=>{
//     const[name,setName]=useState('');
//     const[password,setPassword]=useState('');
//     const[user,setUser]=useState(null);
//     const[errorMessage, setErrorMessage]=useState('');
//     const[successMessage,setsuccessMessage]=useState('');
//     const [errors, setErrors] = useState({});

//     const handlesubmit=async(e)=>{
//         e.preventDefault();
//         // const getCookie = (name) => {
//         //     const value = `; ${document.cookie}`;
//         //     const parts = value.split(`; ${name}=`);
//         //     if (parts.length === 2) return parts.pop().split(';').shift();
//         // };
//         try{
//             // await axios.get('http://localhost:8000/sanctum/csrf-cookie', { withCredentials: true });
//             // const csrfToken = getCookie('XSRF-TOKEN');
//             // axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

//             const response=await axios.post('http://localhost:8000/api/login',
//                 {name,password},
//                 {withCredentials: true}
//             );
//             console.log('login successful',response.data);
//             setsuccessMessage(response.data.message);
//             setErrorMessage('')
//             // setUser(response.data.user);
//         }
//         catch(error){
//     if (error.response) {
//         // 後端有返回錯誤回應
//         console.error("Request failed:", error.response.data);
//         setErrorMessage(error.response.data.message || 'Login failed.');
//         setsuccessMessage('');
//     } else if (error.request) {
//         // 請求發出，但未收到回應
//         console.error("No response received:", error.request);
//         setErrorMessage('No response from server.');
//     } else {
//         // 設定請求時發生錯誤
//         console.error("Error setting up request:", error.message);
//         setErrorMessage('An error occurred.');
//     }
//         }
         
//     }



//     return (
//         <div className="login-container">
//         <div className="login-card">
//             <h1 className="login-title">登入</h1>

//             {/* 成功或錯誤訊息 */}
//             {successMessage && (
//                 <div className="success-message">{successMessage}</div>
//             )}
//             {errorMessage && (
//                 <div className="error-message">{errorMessage}</div>
//             )}

//             <form onSubmit={handlesubmit}>
//                 <div className="mb-4">
//                     <label htmlFor="name" className="input-label">
//                         帳號
//                     </label>
//                     <input
//                         id="name"
//                         type="text"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         className="input-field"
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label htmlFor="password" className="input-label">
//                         密碼
//                     </label>
//                     <input
//                         id="password"
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="input-field"
//                     />
//                 </div>

//                 <button type="submit" className="submit-button">
//                     登入
//                 </button>
//             </form>
//         </div>
//     </div>
// );
// }
// export default Login; // 確保這一行存在，導出組件

// ChatGPT
// import React, { useState } from 'react';
// import axios from 'axios';
// import './Login.css';
// import {useNavigate} from 'react-router-dom';

// function LoginSystem() {
//     const [customerId, setCustomerId] = useState('');
//     const [customerPswd, setCustomerPswd] = useState('');
//     const [error, setError] = useState('');
//     const navigate=useNavigate();
  
//     const handleLogin = async () => {
//       setError(''); // 清空錯誤訊息
//       try {
//         const response = await axios.post('http://localhost:8000/api/login', {
//           customer_acc: customerId,
//           password: customerPswd,
          
//         },
//       {
//         withCredentials: true,
//       });
//         console.log('full_data',response.data)
//         localStorage.setItem("customer_acc",response.data.customer_acc);//新增
//         console.log("已儲存 customer_acc:", localStorage.getItem("customer_acc"));
//         alert(`登入成功！歡迎 ${response.data.user.name}`);
//         console.log('Redirecting to:', response.data.redirect_url);
//         const redirectUrl=response.data.redirect_url
//         navigate(redirectUrl);
            
//       } catch (err) {
//         console.error('Error during login:', err);
//         setError(err.response?.data?.message || '登入失敗，請稍後再試');
//       }
//     };
  
//     return (
//       <div className="container">
//         <h1 className="title">便當王網路訂購系統</h1>
//         {error && <p className="error">{error}</p>}
//         <div className="inputGroup">
//           <label className="label">帳號：</label>
//           <input
//             type="text"
//             value={customerId}
//             onChange={(e) => setCustomerId(e.target.value)}
//             className="input"
//             maxLength={20}
//             placeholder="請輸入帳號"
//           />
//         </div>
//         <div className="inputGroup">
//           <label className="label">密碼：</label>
//           <input
//             type="password"
//             value={customerPswd}
//             onChange={(e) => setCustomerPswd(e.target.value)}
//             className="input"
//             maxLength={20}
//             placeholder="請輸入密碼"
//           />
//         </div>
//         <button onClick={handleLogin} className="button">
//           登入
//         </button>
//       </div>
//     );
//   }
  
//   export default LoginSystem;

//chatGPT1
import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

function Login() {
  const [customerID, setCustomerID] = useState("");
  const [customerPswd, setCustomerPswd] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (customerID.trim() === "" || customerPswd.trim() === "") {
      setError("請輸入帳號與密碼");
      return;
    }
    
    try {//改api
      const response = await axios.post("http://localhost:8000/api/login", {
        Customer_ID: customerID,
        Customer_Pswd: customerPswd,
      });
      //AP改4行
      if (response.data.success) {
        alert("登入成功");
        console.log(response.data)
        // 跳轉到主頁面 (根據需求修改路由)
      } else {
        setError("帳號或密碼錯誤");
      }
    } catch (err) {
      setError(err.response?.data?.message || "登入失敗");
    }
  };

  return (
    <div className="login-container">
      <h2 className="title">便當王網路訂購系統</h2>
      <div className="input-container">
        <label htmlFor="customerID">帳號：</label>
        <input 
          id="customerID"
          type="text" 
          value={customerID} 
          onChange={(e) => setCustomerID(e.target.value)} 
        />
      </div>
      <div className="input-container">
        <label htmlFor="customerPswd">密碼：</label>
        <input 
          id="customerPswd"
          type="password" 
          value={customerPswd} 
          onChange={(e) => setCustomerPswd(e.target.value)} 
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      <button className="login-button" onClick={handleLogin}>登入</button>
    </div>
  );
}

export default Login;