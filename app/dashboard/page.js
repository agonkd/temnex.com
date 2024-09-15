"use client"

import React from 'react';
<<<<<<< HEAD
import constants from '../_components/constants';
import { FaBell } from "react-icons/fa";
import { MdDone } from 'react-icons/md';
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import Table from '../_components/utils/Table';
import { IoMdArrowUp } from 'react-icons/io';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
    // Data for the charts
    const lineChartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Active Users',
                data: [65, 59, 80, 81, 56, 55, 40],
                borderColor: '#4A90E2',
                backgroundColor: 'rgba(74, 144, 226, 0.2)',
                borderWidth: 2,
                tension: 0.2 // Slightly smooth curve
            }
        ]
    };

    const barChartData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Sales Overview',
                data: [10, 25, 15, 30, 20],
                backgroundColor: '#50C878',
                borderColor: '#50C878',
                borderWidth: 1
            }
        ]
    };

    // Chart options
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false, // Allow the chart to grow with its container
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: false,
                },
                beginAtZero: true
            }
        }
    };

    return (
        <>
            <div className='rounded-xl grid lg:grid-cols-4 md:grid-cols-2 md:gap-6 gap-4'>
                {constants.tinyCards.map((item, index) => (
                    <div key={index} className='bg-white md:px-6 p-4 rounded-xl flex justify-between items-center flex-row md:gap-6 gap-4'>
=======
import { BiSolidCreditCard } from "react-icons/bi";
import { IoMdKey } from "react-icons/io";
import { PiFilesFill } from "react-icons/pi";
import { FaArrowUpLong, FaCheck, FaEllipsisVertical, FaBell, FaCartShopping } from "react-icons/fa6";
import { CiDatabase } from "react-icons/ci";
import { Line, Bar } from 'react-chartjs-2';
import constants from '../_components/constants';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
} from 'chart.js';
import Table from '../_components/utils/Table';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
);

const Dashboard = () => {

    const columns = ['COMPANIES', 'MEMBERS', 'BUDGET', 'COMPLETION', 'ACTIONS'];
    const data = [
        ['Soft UI XD Version', '', '$14,000', '60%'],
        ['Soft UI XD Version', '', '$14,000', '60%'],
        ['Soft UI XD Version', '', '$14,000', '60%'],
        ['Soft UI XD Version', '', '$14,000', '60%'],
        ['Soft UI XD Version', '', '$14,000', '60%'],
    ];

    return (
        <div className='md:space-y-6 space-y-4'>
            <div className='grid xl:grid-cols-4 lg:grid-cols-2 md:gap-6 gap-4'>
                {constants.tabs.map((tab, index) => (
                    <div key={index} className='bg-white p-6 rounded-xl flex justify-between'>
>>>>>>> a171a4f (Dashboard)
                        <div>
                            <span className='text-grey'>{item.label}</span>
                            <p className="text-xl font-medium text-dark">
                                {item.value}
                                <sup className={`ml-2 font-semibold ${item.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                    {item.change > 0 ? '+' + item.change : item.change}
                                </sup>
                            </p>
                        </div>
                        <div className='p-3 rounded-lg text-xl bg-dark text-white'>
                            {item.icon}
                        </div>
                    </div>
                ))}
            </div>
            <div className='grid lg:grid-cols-5 md:gap-6 gap-4'>
<<<<<<< HEAD
                <div className='lg:col-span-2 bg-white md:p-6 p-4 rounded-xl md:space-y-6 space-y-4'>
                    <div className='bg-gray-100 p-3 rounded-lg relative aspect-[3/1]'>
                        <Line data={lineChartData} options={chartOptions} />
=======
                <div className='bg-white lg:col-span-2 p-6 rounded-xl space-y-6'>
                    <div id="chart-one" className='w-full aspect-[3/1] rounded-lg'>
                        <Line data={constants.chartOneData} options={constants.chartOneOptions} />
>>>>>>> a171a4f (Dashboard)
                    </div>
                    <div>
                        <p className='text-lg text-dark'>Active Users</p>
                        <p className='text-sm text-grey'><span className='font-semibold'>(+23%)</span> than last week</p>
                    </div>
<<<<<<< HEAD
                    <ul className='grid xl:grid-cols-4 md:gap-6 gap-4'>
                        {constants.tinyCards.map((item, index) => (
                            <li key={index} className='space-y-4'>
                                <div className='flex items-center gap-1'>
                                    <span className='p-1 bg-pink-500 text-white text-xs rounded'><FaBell /></span>
                                    <span className='font-light text-sm'>{item.label}</span>
=======
                    <ul className='grid xl:grid-cols-4 lg:grid-cols-2 gap-6'>
                        {constants.graphTabs.map((tab, index) => (
                            <li key={index}>
                                <div className='flex items-center gap-2 text-sm text-dark'>
                                    <span
                                        className='w-6 h-6 rounded flex justify-center items-center text-white shadow'
                                        style={{ backgroundColor: tab.icon[1] }}
                                    >
                                        {tab.icon[0]}
                                    </span>
                                    {tab.title}
>>>>>>> a171a4f (Dashboard)
                                </div>
                                <div className='space-y-2'>
                                    <p className='text-xl font-semibold'>{item.value}</p>
                                    <div className='w-full h-1 bg-gray-200 flex items-center rounded-full'>
                                        <span className='block w-[60%] h-1.5 bg-dark rounded-full'></span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex flex-col lg:col-span-3 bg-white md:p-6 p-4 rounded-xl md:space-y-6 space-y-4'>
                    <div className='space-y-2'>
                        <p className='text-lg'>Sales Overview</p>
                        <p className='text-grey'><span className='font-semibold'>4% more</span> in 2021</p>
                    </div>
<<<<<<< HEAD
                    <div className='relative w-full h-full'>
                        <Bar data={barChartData} options={chartOptions} />
=======
                    <div id="chart-two" className='h-full'>
                        <Bar data={constants.chartTwoData} options={constants.chartTwoOptions} />
>>>>>>> a171a4f (Dashboard)
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:gap-6 gap-4'>
                <div className='lg:col-span-2 bg-white rounded-xl'>
                    <div className='flex justify-between items-center md:p-6 p-4'>
                        <div className='space-y-2'>
                            <p className='text-lg'>Projects</p>
                            <p className='text-sm text-grey flex gap-1'>
                                <span className='font-semibold flex items-center gap-1'>
                                    <MdDone className='text-blue-500 text-lg' />30 done
                                </span> this month
                            </p>
                        </div>
                        <IoEllipsisVerticalSharp className="text-xl" />
                    </div>
<<<<<<< HEAD
                    <Table columns={constants.tableData.columns} data={constants.tableData.rows} />
=======
                    <Table columns={columns} data={data} />
>>>>>>> a171a4f (Dashboard)
                </div>
                <ul className='bg-white md:p-6 p-4 rounded-xl md:space-y-6 space-y-4'>
                    <div className='space-y-2'>
                        <p className='text-lg'>Orders Overview</p>
                        <p className='text-sm text-grey flex gap-1'>
                            <span className='font-semibold flex items-center gap-1'>
                                <IoMdArrowUp className='text-green-500 text-lg' />
                                24%
                            </span> this month
                        </p>
                    </div>
                    <ul className='space-y-1'>
                        {constants.ordersOverview.map((item, index) => (
                            <li key={index} className='flex md:gap-6 gap-4 group'>
                                <div className='flex flex-col items-center gap-1'>
                                    {item.icon}
                                    <span className='h-8 w-0.5 bg-gray-300 group-last-of-type:h-4'></span>
                                </div>
                                <div className='leading-tight'>
                                    <p className='font-medium'>{item.label}</p>
                                    <span className='text-xs text-grey'>{item.timestamp}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </ul>
            </div>
        </>
    );
}

export default Dashboard;
