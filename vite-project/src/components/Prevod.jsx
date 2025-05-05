import { useState,useEffect } from 'react'

export const Prevod = () => {
    const [cislo, setCislo] = useState(0);
    const [kurzy, setKurzy] = useState([]);

    const getKurzy = async () => {
        try{
            const response = await fetch("https://api.frankfurter.dev/v1/latest?base=EUR");
            const data = await response.json();
            setKurzy(data);
        }catch(error){
            console.log(error);
        }
    };
    useEffect(() =>{
        getKurzy();
    },[kurzy]);
return(
    <div>
        <h1>
            Oi oi Hughie prevedeme na Euro
        </h1>  
        <div>
            <input
                type ="number"
                value={cislo}
                onChange={(e) => setCislo(e.target.value)}
                style={{padding: '5px'}}
            />
            <select>
                {
                Object.entries(kurzy).map(([key,value]) =>{<option value={value}>{key}</option>})
                }
                </select>
            <button>Preved</button>
        </div>
    </div>        
)
}