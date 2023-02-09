import React from 'react'

export default function ReportTable({tableData}) {
 
  return (
    <div className='w-[98%] m-auto md:w-[70%] h-[100%] '>
        <div className='bg-violet-500 text-white font-semibold rounded-[15px] pyg-[10px] mt-[10px] h-[95%] overflow-auto'  >
            <table className='  border-collapse w-[100%} m-auto ' >
              <thead className=''>
                <tr className='h-[100%] '>
                  {tableData?.headings.map((h , idx)=>(
                      <th key={idx} className='sticky top-0 z-100 bg-violet-600  p-[4px] text-white w-full h-[100%]'>
                        <div className='w-full justify-center items-center  h-full'>
                          {h}
                        </div>
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
        
                {tableData?.data.map((d,idx)=>{
                  return (
                    <tr key={idx}>
                      {tableData?.headings.map((h,idx)=>(
                        <td key={idx} className='w-[90px] py-[5px]'>
                          <div  className='w-[95px] flex justify-center items-center'>
                            {d[h]}
                          </div>
                        </td>
                      ))}
                    </tr>
                  )
                })}
              </tbody>
        
            </table>
        </div>
    </div>
  )
}
