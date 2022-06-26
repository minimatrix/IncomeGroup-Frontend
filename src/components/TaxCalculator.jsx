
import {useState, useEffect} from "react";
import useTaxCalculation from "../hooks/useTaxCalculation";

const TaxCalculator = () => {

    const [original, setOriginal] = useState();
    const [percentage, setPercentage] = useState();
    const {result, status, submitTaxCalculation}  = useTaxCalculation({original,percentage});

    useEffect(()=>{
        console.log({original, percentage});
    })

    return <> 
        <div style={{display:"flex", flexDirection:"column"}}> 
            <h4>Tax Calculator</h4>
            
            <span for="original_value">Original Value</span>
            <input name="original_value" type="number" value={original} onChange={(e=>setOriginal(e.target.value))} />

            <span for="percentage">Percentage to add</span>
            <input name="percentage" type="number" step={0.01} value={percentage} onChange={(e=>setPercentage(e.target.value))} />
            <button style={{marginTop:20}} type="button" onClick={()=>submitTaxCalculation()}> Calculate </button>
            
            {
                result && status == "COMPLETE" ? 
                <>
                    <h5>Result</h5>
                    <span>{result?.total}</span>
                </>
            : 
                status
            }


        </div>
    </>

}

export default TaxCalculator;