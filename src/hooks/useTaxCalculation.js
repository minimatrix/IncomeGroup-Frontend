import {useState, useCallback} from "react";
import axios from "axios";

const useTaxCalculation = ({original, percentage}) => {

    const [status, setStatus] = useState();
    const [result, setResult] = useState();

    const submitTaxCalculation = () => {

        setStatus("Calculating...");

        axios.post("http://localhost:9001", {
            original,
            percentage
        }).then(res => {
            setResult(res.data);
            setStatus("COMPLETE")
        })
        .catch(e => {
            setStatus("ERROR");
            setResult(e?.message);
        });
    }


    return {
        submitTaxCalculation,
        status, 
        result        
    }

}


export default useTaxCalculation;