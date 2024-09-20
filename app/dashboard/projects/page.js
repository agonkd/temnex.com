import Table from '@/app/_components/utils/Table'
import React from 'react'
import constants from '@/app/_components/constants'

const page = () => {
    return (
        <div className='bg-white rounded-xl'>
            <p className='text-lg md:p-6 p-4'>Projects Table</p>
            <Table columns={constants.tableData.columns} data={constants.tableData.rows} />
        </div>
    )
}

export default page
