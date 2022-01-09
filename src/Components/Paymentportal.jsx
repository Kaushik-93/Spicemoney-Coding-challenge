import React from 'react'
const paymentportal=()=>{
    return(
        <div className="payment_portal">
        <form method="POST">
        <label className="portal-items">Enter Recipent's Bank account Number</label><br/>
        <input type="text" placeholder="12-digit number"></input><br />
        <label className="portal-items">Re-Enter Recipent's Bank account Number</label><br/>
        <input type="text" placeholder="12-digit number"></input><br/>
        <label className="portal-items">Enter Recient's IFSC</label><br/>
        <input type="text" placeholder="IFCS code"></input><br/>
        <label className="portal-items">Enter Recipent Name </label><br/>
        <input type="text" placeholder=""></input><br/>
        <button className="SubmitButton">Submit</button>
        </form>
        </div>
    );
}
export default paymentportal