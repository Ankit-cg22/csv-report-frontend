import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useState , useEffect} from 'react'
import Navbar from './components/Navbar';
import Report from './components/Report';
import CircularLoader from './components/CircularLoader';
const BACKEND_URL = "https://report-generation.onrender.com";

function App() {

  const [metadata , setMetadata] = useState();
  const [showReport , setShowReport] = useState(false);
  const [loading , setLoading] = useState(false)
  const [excelFile , setExcelFile] = useState(null)

  const handleClick = async () => {
    if(excelFile===null)return;
    var formData = new FormData();
    formData.append("excelfile", excelFile , "demoName")
    setLoading(true)
    axios.post(`${BACKEND_URL}/parseFile` , formData, 
    {
      'headers': {
        "Content-Type": "multipart/form-data",
      },
    }
    )
    .then((response)=>{
      
      setMetadata(response.data.metadata)
      setShowReport(true)
      setLoading(false)
    })
    .catch((error)=>{
      console.log(error)
    })
    
  }
  
  return (
    <div>
      <Navbar/>
      <div className='w-[100%] max-w-[1400px] m-auto'>
        { showReport ? 
          <Report metadata={metadata}/> 
          :
          <div className='w-full h-[90vh] flex flex-col justify-center items-center'>
            <input type="file" name="excelfile" className='my-[20px] p-[15px] min-w-[160px] min-h-[20px] text-white font-semibold bg-violet-500 rounded-[10px] cursor-pointer flex justify-center items-center' onChange={(e)=>setExcelFile(e.target.files[0])}></input>
            <div className='p-[15px] min-w-[160px] min-h-[20px] text-white font-semibold bg-violet-500 rounded-[10px] cursor-pointer flex justify-center items-center' onClick={handleClick}>
              {loading ? <CircularLoader/> : "Generate Report"}
            </div>
          </div>
        }
      </div>
    </div>
  );
}



export default App;
