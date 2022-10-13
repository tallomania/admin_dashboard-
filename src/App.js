import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MdOutlineSettings } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Sidebar, Footer, ThemeSettings } from './components';
import { Ecommerce, Pie, Line, Orders, Employees, Calendar, Kanban, Stacked, Customers, Area, Pyramid, Financial, Bar, ColorMapping, Editor, ColorPicker } from './pages';
import { useStateContext } from './contexts/ContextProvider';

import './App.css'

const App = () => {
    const { activeMenu, themeSettings, setThemeSettings, currentColor, setCurrentMode, setCurrentColor, currentMode } = useStateContext();

    useEffect(() => {
        const currentThemeColor = localStorage.getItem("colorMode");
        const currentThemeMode = localStorage.getItem("themeMode");
        if ( currentThemeColor && currentThemeMode ) {
            setCurrentColor(currentThemeColor);
            setCurrentMode(currentThemeColor);
        }
    }, []);

    return (
        <div className={ currentMode === 'Dark' ? 'dark' : ''} >
            <BrowserRouter>
                <div className='flex relative dark:bg-main-dark-bg' >
                    <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }} >
                        <TooltipComponent content='Goto Settings' position='Top' >
                            <button
                                type='button'
                                className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-gray-400'
                                style={{ background: currentColor, borderRadius: "50%" }}
                                onClick={() => setThemeSettings(true)} >
                                <MdOutlineSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                        { activeMenu ? (
                                <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white' >
                                    <Sidebar />
                                </div>
                            ) : (
                                <div className='w-0 dark:bg-secondary-dark-bg ' >
                                    <Sidebar />
                                </div>
                    )}

                    <div className={ `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'} ` }>
                        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full' >
                            <Navbar />
                        </div>


                        <div>

                            {themeSettings && <ThemeSettings />}
                        <Routes>
                            <Route path='/' element={< Ecommerce />} />
                            <Route path='/ecommerce' element={< Ecommerce />} />

                            <Route path='/orders' element={< Orders />} />
                            <Route path='/employees' element={< Employees />} />
                            <Route path='/customers' element={< Customers />} />

                            <Route path='/kanban' element={< Kanban />} />
                            <Route path='/editor' element={< Editor />} />
                            <Route path='/calendar' element={< Calendar />} />
                            <Route path='/color-picker' element={< ColorPicker />} />

                            <Route path='/bar' element={< Bar />} />
                            <Route path='/line' element={< Line />} />
                            <Route path='/pyramid' element={< Pyramid />} />
                            <Route path='/pie' element={< Pie />} />
                            <Route path='/color-mapping' element={< ColorMapping />} />
                            <Route path='/area' element={< Area />} />
                            <Route path='/financial' element={< Financial />} />
                            <Route path='/stacked' element={< Stacked />} />
                        </Routes>
                        </div>
                        < Footer />
                    </div>

                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;