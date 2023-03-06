import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch ({url, intialValue}){
    const [loading, setLoading] = useState(intialValue)
    const [data, setData] = useState(intialValue)
    const [error, setError] = useState()
const fetchData = () => { 

axios.get(url).then((res) => { 
   setData(res.data);
   setLoading(false);
}).catch(error => {
setError (error)
setLoading(false);    
});
}
 
useEffect(() => {
fetchData();      
}, )

return { loading, data, error, fetchData, useEffect }

}