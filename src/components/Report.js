import React from 'react'
import ReportTable from './ReportTable'
import Summary from './Summary'

export default function Report({metadata}) {
  return (
    <div className='flex flex-col md:flex-row h-[90vh]'>
        <Summary summary={metadata?.summary}/>
        <ReportTable tableData={metadata?.tableData}/>
    </div>
  )
}
