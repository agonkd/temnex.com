<<<<<<< HEAD
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
=======
"use client";

import Table from '@/app/_components/utils/Table'
import React from 'react'

const Projects = () => {

    const columns = ['COMPANIES', 'MEMBERS', 'BUDGET', 'COMPLETION', 'ACTIONS'];
    const data = [
        ['Soft UI XD Version', '', '$14,000', '60%'],
        ['Soft UI XD Version', '', '$14,000', '60%'],
        ['Soft UI XD Version', '', '$14,000', '60%'],
        ['Soft UI XD Version', '', '$14,000', '60%'],
        ['Soft UI XD Version', '', '$14,000', '60%'],
    ];

    const handleEdit = (row) => {
        console.log('Edit', row);
    };

    const handleDelete = (row) => {
        console.log('Delete', row);
    };

    return (
        <div>
            < Table
                columns={columns} data={data}
                onEdit={handleEdit}
                onDelete={handleDelete}
                showActions={true}
            />
        </div >
    )
}

export default Projects
>>>>>>> a171a4f (Dashboard)
