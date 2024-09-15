import React from 'react';
<<<<<<< HEAD

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
=======
import PropTypes from 'prop-types';
import { CiEdit, CiTrash } from 'react-icons/ci';

const Table = ({
    columns,
    data,
    onEdit,
    onDelete,
    showActions = false,
}) => {
    return (
        <table className='w-full text-left text-sm bg-white rounded-xl'>
            <thead>
                <tr className='text-xs text-gray-400 font-semibold border-b'>
                    {columns.map((col, index) => (
                        <th key={index} className='p-6'>
                            {col}
                        </th>
                    ))}
                    {showActions && <th className='p-6'></th>} {/* Optional actions column */}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex} className='border-b'>
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex} className='p-6'>
                                {cell}
                            </td>
                        ))}
                        {showActions && (
                            <td className='p-4 flex space-x-2 text-2xl'>
                                {onEdit && (
                                    <button
                                        onClick={() => onEdit(row)}
                                        className='text-blue-500 hover:text-blue-800 p-1'
                                        aria-label='Edit'
                                    >
                                        <CiEdit />
                                    </button>
                                )}
                                {onDelete && (
                                    <button
                                        onClick={() => onDelete(row)}
                                        className='text-red-500 hover:text-red-800 p-1'
                                        aria-label='Delete'
                                    >
                                        <CiTrash />
                                    </button>
                                )}
                            </td>
                        )}
>>>>>>> a171a4f (Dashboard)
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

<<<<<<< HEAD
=======
Table.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
    showActions: PropTypes.bool,
};

>>>>>>> a171a4f (Dashboard)
export default Table;
