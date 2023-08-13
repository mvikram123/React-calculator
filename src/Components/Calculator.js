import React,{useState} from "react";


const Calculator=()=>{
    let[num1,setNum1]=useState("")
    let[num2,setNum2]=useState("")
    let[num3,setNum3]=useState(null)
    let[error,setError]=useState(null)



    const validateInput=()=>{

        if(num1=="" || num2=="" || isNaN(num1)||isNaN(num2)){
            setError("Please Enter a valid number");
            return false
        }
    
        setError(null)
        return true
    
    };
    const add=()=>{
        if(validateInput()){

            setNum3(parseFloat(num1)+parseFloat(num2));
        }
 }





const subtract=()=>{
    if(validateInput()){

        setNum3(parseFloat(num1)-parseFloat(num2));
    }
}

const multiply=()=>{
    if(validateInput()){

        setNum3(parseFloat(num1)*parseFloat(num2));
    }
}


const division=()=>{
    if(validateInput()){
        if(num2!=="0")

        setNum3(parseFloat(num1)/parseFloat(num2));
    }
    else{
        setError("division by zero is not allowed");
    }
}

    // here is normal function
    //     function addition()
    //     {
    //             let result=Number(num1)+Number(num2);
    //             setNum3(result);
    //     }
    //     function subtraction()
    //     {
    //             let result=num1-num2;
    //             setNum3(result)
    //     }

    //     function multiplication()
    //     {
    //             let result=num1*num2;
    //             setNum3(result)
    //     }

    //     function division()
    //     {
    //             let result=num1/num2;
    //             setNum3(result)
    //     }




    return(

        <div className="form">
            <h1>React Calculator</h1>
            <form>
            <input type="text" value={num1} placeholder="num1" onChange={(e)=>setNum1(e.target.value)}/><br /><br />
            <input type="text" value={num2} placeholder="num2" onChange={(e)=>setNum2(e.target.value)}/><br />
           {/* <input type="number" value={num3} onChange={(e)=>(e.target.value)}/> */}
          
            <br />
            <div className="button">
                
               <button className="btn-style" onClick={add}>+</button>
               <button  className="btn-style" onClick={subtract}>-</button>
               <button className="btn-style" onClick={multiply}>*</button>
               <button className="btn-style" onClick={division}>/</button>
              </div>
              <div className="error">
                {error ? (
                <p className="red">{error}</p>
                  ) : num3 != null ? (
                  <p className="green">success</p>
                   ) : null}
           </div>
        <div className="success">
            {" "}
             {num3 != null ? `Result: ${num3}` : null}
        </div>
            
            </form>


        </div>
    )
}

export default Calculator;