
import axios from '../axios-data';



const AxiosData = (currentSt) => {
  
    const order = currentSt
    
  
    axios.post('/orders.json', order)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  export default AxiosData;