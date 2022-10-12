import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Stacked, Pie, Button, SparkLine } from '../components';
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () => {
    const {currentColor} = useStateContext()

    return (
        <div className='mt-16' >
            <div className='flex flex-wrap lg:flex-nowrap justify-center ' >
                <div className='bg-white dark:text-gray-200   h-44 rounded-xl w-full  lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center' >
                    <div className='flex justify-between items-center' >
                        <div>
                            <p className='font-bold  text-lg' >Earnings ($)</p>
                            <p className='text-2xl ' >90,253,456.54</p>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <Button
                        className='hover:drop-shadow-xl'
                            color='white'
                            // bgColor='#EE8060'
                            bgColor={currentColor}
                            borderRadius='12px'
                            text='Download'
                            size='md'  />
                    </div>
                </div>

                <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
                    {earningData.map((item) => (
                        <div key={item.title}
                            className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>
                            <button
                                type='button'
                                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl  " >
                                {item.icon}
                            </button>
                            <p className='mt-3' >
                                <span className='text-lg font-semibold' >
                                {item.amount}
                                </span>
                                <span className={`text-sm text-${item.pcColor} ml-2`} >
                                {item.percentage}
                                </span>
                            </p>
                        <p className='text-sm text-gray-400 mt-1' > {item.title} </p>
                        </div>
                    ) )}
                </div>
            </div>

            <div className='flex gap-10 flex-wrap justify-center' >
                <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg  m-3 p-4 rounded-2xl md:w-780' >
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
                            <Stacked
                                width='360px'
                                height='400px'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ecommerce;