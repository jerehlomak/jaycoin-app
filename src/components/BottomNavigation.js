import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const BottomNavigation = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const [currentScreen, setCurrentScreen] = useState('/')

    useEffect(() => {
        setCurrentScreen(location.pathname)
    },[location])

  return (
    <nav className='fixed px-[6px] text-white bottom-2 left 4 right-4 rounded-lg bg-black flex justify-around items-center w-full h-[76px] z-50'>
        <div
            onClick={() => navigate('/')}
            className={`flex flex-col items-center justify-center w-14 h-14 rounded-lg ${currentScreen === '/' ? 'bg-black' : 'bg-gray-900'}`}
        >
            <div className='flex flex-col items-center justify-center'>
                <img className='w-7 h-7 object-contain' src='' alt='M' />
                <p className='text-sm text-center text-red-800'>Home</p>
            </div>
        </div>
        <div
            onClick={() => navigate('/earn')}
            className={`flex flex-col items-center justify-center w-14 h-14 rounded-lg ${currentScreen === '/earn' ? 'bg-black' : 'bg-gray-900'}`}
        >
            <div className='flex flex-col items-center justify-center'>
                <img className='w-9 h-9 object-contain' src='' alt='M' />
                <p className='text-sm text-center'>Earn</p>
            </div>
        </div>
        <div
            onClick={() => navigate('/shares')}
            className={`flex flex-col items-center justify-center w-14 h-14 rounded-lg ${currentScreen === '/shares' ? 'bg-black' : 'bg-gray-900'}`}
        >
            <div className='flex flex-col items-center justify-center'>
                <img className='w-9 h-9 object-contain' src='' alt='M' />
                <p className='text-sm text-center'>Referrals</p>
            </div>
        </div>
        <div
            onClick={() => navigate('/daily')}
            className={`flex flex-col items-center justify-center w-14 h-14 rounded-lg ${currentScreen === '/daily' ? 'bg-black' : 'bg-gray-900'}`}
        >
            <div className='flex flex-col items-center justify-center'>
                <img className='w-9 h-9 object-contain' src='' alt='M' />
                <p className='text-sm text-center'>Daily</p>
            </div>
        </div>
        <div
            onClick={() => navigate('/airdrop')}
            className={`flex flex-col items-center justify-center w-14 h-14 rounded-lg ${currentScreen === '/airdrop' ? 'bg-black' : 'bg-gray-900'}`}
        >
            <div className='flex flex-col items-center justify-center'>
                <img className='w-9 h-9 object-contain' src='' alt='M' />
                <p className='text-sm text-center'>Airdrop</p>
            </div>
        </div>
    </nav>
  )
}

export default BottomNavigation