import React from 'react'

const SummaryElement = ({parameter , value}) => {
  return(
    <div className='w-[90%] flex justify-between items-center'>
      <div>{parameter}</div>
      <div>{value}</div>
    </div>
  )
}

export default function Summary({summary}) {
  // console.log(summary)
  return (
    <div className='w-[100%] mt-[10px] md:mt-[0]  md:w-[30%] h-[100%] flex justify-center items-center'>
      <div className='w-[80%] h-[fit-content] bg-violet-500 py-[15px] px-[5px] rounded-[15px] text-white font-semibold flex justify-center flex-col items-center'>
          <h1 className='font-semibold py-[10px] text-[1.2rem]'>Summary</h1>
          <SummaryElement parameter="No. of Bikes" value={summary?.bikes}/> 
          <SummaryElement parameter="No. of Autos" value={summary?.autos}/> 
          <SummaryElement parameter="No. of Cars" value={summary?.cars}/> 
          <SummaryElement parameter="Total" value={summary?.totalVehicles}/> 
          <SummaryElement parameter="Unbilled" value={summary?.unbilled}/> 
          <h1 className='font-semibold py-[10px] text-[1.2rem]'>Collection</h1>
          <SummaryElement parameter="Cash" value={summary?.cash}/> 
          <SummaryElement parameter="Digital" value={summary?.digital}/> 
          <SummaryElement parameter="Total" value={summary?.totalCollection}/> 

      </div>
    </div>
  )
}
