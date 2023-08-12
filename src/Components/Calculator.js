import React,{useState} from "react";


const Calculator=()=>{
    let[num1,setNum1]=useState();
    let[num2,setNum2]=useState();
    let[num3,setNum3]=useState();
    let[error,setError]=useState();

        function addition()
        {
                let result=Number(num1)+Number(num2);
                setNum3(result);
        }
        function subtraction()
        {
                let result=num1-num2;
                setNum3(result)
        }

        function multiplication()
        {
                let result=num1*num2;
                setNum3(result)
        }

        function division()
        {
                let result=num1/num2;
                setNum3(result)
        }




    return(

        <div className="form">
            <h1>React Calculator</h1>
            <form>
            <input type="text" value={num1} placeholder="num1" onChange={(e)=>setNum1(e.target.value)}/><br /><br />
            <input type="text" value={num2} placeholder="num2" onChange={(e)=>setNum2(e.target.value)}/><br />
           {/* <input type="number" value={num3} onChange={(e)=>(e.target.value)}/> */}
          
            <br />
            <div className="button">
                
               <button className="btn-style" onClick={addition}>+</button>
               <button  className="btn-style" onClick={subtraction}>-</button>
               <button className="btn-style" onClick={multiplication}>*</button>
               <button className="btn-style" onClick={division}>/</button>
              </div>
              <p>Result : {num3}</p>
            
            </form>


        </div>
    )
}

export default Calculator;