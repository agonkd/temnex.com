import React from 'react';

// Reusable Table component
const Table = ({ columns, data }) => {
    return (
        <table className='w-full'>
            <thead>
                <tr>
                    {columns.map((col, index) => (
                        <th className='md:px-6 p-4 text-xs text-grey text-left' key={index}>{col}</th>
                    ))}
                </tr>
            </thead>
            <tbody className='divide-y'>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((col, colIndex) => (
                            <td className='md:px-6 p-4 first-of-type:font-medium' key={colIndex}>{row[col]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
