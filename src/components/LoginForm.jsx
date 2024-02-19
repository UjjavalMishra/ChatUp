// import React, { useState } from "react";
// import axios from "axios";
// const LoginForm = () => {
//   const [username, setUsetname] = useState("");
//   const [password, setpassword] = useState("");
//   const [error, setError] = useState("");
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const authoObject = {
//       "Project-ID": "532dc0c5-fb0f-421c-8dbe-42f8eedc2f4e",
//       "User-Name": username,
//       "User-Secret": password,
//     };
//     try {
//       await axios.get("https://api.chatengine.io/chats", {
//         headers: authoObject,
//       });

//       localStorage.setItem("username", username);
//       localStorage.setItem("password", password);
//       window.location.reload();
//     } catch (error) {
//       setError("Incorrect ID or password");
//     }
//   };
//   return (
//     <div className="wrapper">
//       <div className="form">
//         <h1 className="title">Chat Application</h1>
//         <form action="" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsetname(e.target.value)}
//             className="input"
//             placeholder="Username"
//             required
//           />
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setpassword(e.target.value)}
//             className="input"
//             placeholder="password"
//             required
//           />
//           <div align="center">
//             <button type="submit" className="button">
//               <span>Start Chatting</span>
//             </button>
//           </div>
//           <h2 className="error">{error}</h2>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;
import { useState } from 'react';
import axios from 'axios';

const projectID = '1b7801d6-8a66-4be4-a442-89219d833dfc';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default Modal;