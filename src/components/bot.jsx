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

const AplyButton = ({children}) => <>
  <div className="btn btn-primary btn-lg shadow-lg rounded-3">
    <div>
      {children}
    </div>
  </div>
</>

const Commentb = ({children}) => <>
  {/* <div className="input-group mb-3">
    <span className="input-group-text bg-dark" id="basic-addon1"></span>
    <input type="text" className="form-control" placeholder={children} aria-label={children} aria-describedby="basic-addon1" />
  </div> */}
  <div className="input-group mt-3 mb-3">
    <textarea className="form-control border border-end-0" aria-label="white textarea" placeholder={children}></textarea>
    <span className="input-group-text bg-dark border border-start-0 rounded-end-3 d-block">
     <button className="bg-dark" id="Sendbutton"><i className="fas fa-paper-plane"></i></button>
    </span>
  </div>
</>
export {Commentb};

export default Bot;
export { CardB };
export { AplyButton };