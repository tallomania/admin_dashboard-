import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { IoIosMore } from 'react-icons/io';
import { GoPrimitiveDot } from 'react-icons/go';

import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { Stacked, Pie, Button, SparkLine, LineChart } from '../components';
import { earningData, SparklineAreaData, ecomPieChartData, recentTransactions } from '../data/dummy';
import product2 from '../data/product2.jpg';

import { useStateContext } from '../contexts/ContextProvider';
import { LegendItemStyle } from '@syncfusion/ej2-react-charts';

const DropDown = ({ currentMode }) = (
    <div className='w-28 border-1 border-color px-2 py-1 rounded-md' >
        <DropDownListComponent
            id='time'
            fields={{
                text: 'Time',
                value: 'Id'
            }}
            style={{
                border: 'none',
                color: (currentColor === 'Dark') && 'whitesmoke'
            }}
            value='1'
            dataSource={dropdownData}
            popupHeight='220px'
        />
    </div>
);

const Ecommerce = () => {
    const { currentColor } = useStateContext();

    return (
        <div className='mt-16' >
            <div className='flex flex-wrap lg:flex-nowrap justify-center ' >
                <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg  h-44 rounded-xl w-full  lg:w-80 p-8 pt-9 m-3 bg-hero-pattern  dark:bg-switch bg-no-repeat bg-cover bg-center' >
                    <div className='flex justify-between items-center' >
                        <div>
                            <p className='font-bold text-gray-600 text-lg' >Earnings ($)</p>
                            <p className='text-2xl dark:text-gray-400' >90,253,456.54</p>
                        </div>
                        <button
                            type='button'
                            style={{ backgroundColor: currentColor }}
                            className='text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full p-4 '
                        >
                            <BsCurrencyDollar />
                        </button>
                    </div>
                    <div className='mt-5'>
                        <Button
                        className='hover:drop-shadow-xl'
                            color='gray-300'
                            bgColor={currentColor}
                            borderRadius='12px'
                            text='Download'
                            size='md'
                            />
                    </div>
                </div>

                <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
                    {earningData.map((item) => (
                        <div key={item.title}
                            className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>
                            <button
                                type='button'
                                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl  "
                                    >
                                {item.icon}
                            </button>
                            <p className='mt-3' >
                                <span className='text-lg font-semibold' >
                                {item.amount}
                                </span>
                                <span className={`text-sm text-${item.pcColor} ml-2`}
                                >
                                {item.percentage}
                                </span>
                            </p>
                        <p className='text-sm text-gray-400 mt-1' > {item.title} </p>
                        </div>
                    ) )}
                </div>
            </div>

            <div className='flex gap-10 flex-wrap justify-center' >
                <div className='bg-white dark:text-gray-300 dark:bg-secondary-dark-bg  m-3 p-4 rounded-2xl md:w-780' >
                    <div className='flex justify-between' >
                        <p className='font-semibold text-xl' > Revenue Updates ($)</p>
                        <div className='flex items-center gap-4' >
                            <p className='flex items-center gap-2 text-gray-600  hover:drop-shadow-xl'>
                                <span> <GoPrimitiveDot /> </span>
                                <span> Expense </span>
                            </p>
                            <p className='flex items-center gap-2 text-green-400  hover:drop-shadow-xl'>
                                <span> <GoPrimitiveDot /> </span>
                                <span> Budget </span>
                            </p>
                        </div>
                    </div>
                    <div className='mt-10 flex gap-10 flex-wrap justify-center' >
                        <div className='border-r-1 border-color m-4 pr-10' >
                            <div>
                                <p>
                                    <span className='text-3xl font-semibold' > 98,538</span>
                                    <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-gradient-to-bl from-cyan-300 to-green-600 ml-3 text-xs' >23%</span>
                                </p>
                                <p className='text-gray-500 mt-1' >
                                    Budget
                                </p>
                            </div>
                            <div className='mt-8'>
                                <p>
                                    <span className='text-3xl font-semibold' >  32,137</span>
                                </p>
                                <p className='text-gray-500 mt-1' >
                                    Expense
                                </p>
                            </div>
                            <div className='mt-5' >
                                <SparkLine
                                    currentColor={currentColor}
                                    id='line-sparking'
                                    type='Line'
                                    height='80px'
                                    width='250px'
                                    data={SparklineAreaData}
                                    color={currentColor}
                                />
                            </div>
                            <div className='mt-10' >
                            <Button
                                    color='white'
                                    bgColor={currentColor}
                                    text='Download Report'
                                    borderRadius='12px'
                                />
                            </div>
                        </div>
                        <div>
                            <Stacked width='360px' height='400px' />
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className='rounded-2xl md:w-400 p-4 m-3'
                        style={{ backgroundColor: currentColor }} >

                        <div className='flex justify-between items-center' >
                            <p className='font-semibold text-white text-2xl' >Earnings</p>

                            <div>
                                <p className='text-2xl text-white font-semibold mt-8 ' >$92,345.34</p>
                                <p className='text-gray-300' > Monthly Revenue</p>
                            </div>
                        </div>

                        <div className='mt-4' >
                            <SparkLine
                                id='column-sparkLine'
                                height='100px'
                                width='320'
                                color='rgb(242, 252, 253)'
                                type='Column'
                                data={SparklineAreaData}
                                currentColor={currentColor}
                            />
                    </div>
                    </div>
                    <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10 ' >
                        <div>
                            <p className='text-2xl font-semibold' > $50,558 </p>
                            <p className='text-gray-400' >Yearly Sales </p>
                        </div>

                        <div className='w-40' >
                            <Pie
                                id='pie-chart'
                                data={ecomPieChartData}
                                legendVisiblity={false}
                                height='160px'
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex gap-10 m-4 flex-wrap justify-center ' >
                <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 ' >
                    <div className='flex justify-between items-center gap-2' >
                        <p>Recent Transactions </p>
                        <DropDown currentMode={currentMode}  />
                    </div>

                    <div className='m-10 w-72 md:w-400' >
                        {recentTransactions.map((item) => (
                            <div key={item.title} className='flex justify-between mt-4' >
                                <div className='flex gap-4' >
                                    <button
                                        type='button'
                                        style={{
                                            color: item.iconColor,
                                            backgroundColor: item.iconBg,
                                        }}
                                        className='text-2xl rounded-lg p-4 hover:drop-shadow-xl'
                                    >
                                        {item.icon}
                                    </button>
                                    <div>
                                        <p className='text-md font-semibold' >{ item.title}</p>
                                        <p className='text-sm text-gray-400' >{ item.desc}</p>
                                    </div>
                                </div>
                                <p className={`text-${item.pcColor}`} >{ item.pcColor}</p>
                            </div>
                        ) )}
                    </div>
                    <div className='flex justify-between items-center mt-5 border-t-1 border-color' >
                        <div className='mt-3' >
                            <Button
                                color='white'
                                text='Add'
                                bgColor={currentColor}
                                borderRadius='12px'
                            />
                        </div>
                        <p className='text-gray-500 text-md' > 30 Recent Transactions</p>
                    </div>
                </div>
                <div className='bg-white dark:texxt-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760' >
                    <div className='flex justify-between items-center gap-2 mb-10'>
                        <p className='text-xl font-semibold' >Sales Reviews</p>
                        <DropDown currentMode={currentMode} />
                    </div>
                    <div className='md:w-full overflow-auto'>
                        <LineChart />
                    </div>
                </div>
            </div>

            <div className='flex flex-wrap justify-center' >
                <div className='md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3' >
                    <div className='flex justify-between' >
                        <p className='text-xl font-semibold' >Weekly Stats</p>
                        <button
                            type='button'
                            className='text-xl font-semibold text-gray-500'
                        >
                            <IoIosMore />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ecommerce;