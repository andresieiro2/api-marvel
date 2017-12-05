import React from 'react';
import './index.scss';

const Header = () => (
 <div className="Header" >
   <div className="container">
     <div className="row ">
       <div className="col-4 col-md-2">
         <img
           alt="Marvel"
           className="logo"
           src="https://vignette.wikia.nocookie.net/siivagunner/images/a/a7/Marvel_Logo.png/revision/latest?cb=20170510074130"
          />
       </div>
       <div className="col-8 col-md-10 d-flex align-items-center justify-content-end">
         <h1 className="title">Comics Search</h1>
       </div>
     </div>
   </div>
 </div>
);

export default Header;
