import React, { Children } from "react";
import "./css/bot.css";


// this is functional components
const Bot = () => <h1>fuunction components 1</h1>;


const CardB = ({children}) => <div>
  <div className="card border-0 shadow-lg rounded-3 m-4 CardB">
    <div className="card-body">
      {children}
    </div>
  </div>
</div>

export default Bot;
export { CardB };