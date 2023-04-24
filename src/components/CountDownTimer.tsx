import React, { useState, useRef, useEffect } from 'react'

const CountDownTimer = () => {
    const [timer, setTimer] = useState('');

    const Ref = useRef<any>(null);


    const getTimeRemaining = (e: any) => {
        const total = new Date("Jan 5, 2024 07:01:13").getTime() - new Date().getTime();
        console.log(total);
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }

    const startTimer = (e: any) => {
        let { total, hours, minutes, seconds }
            = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (hours > 9 ? hours : '0' + hours) + '' +
                (minutes > 9 ? minutes : '0' + minutes) + ''
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }

    const clearTimer = (e: any) => {
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }

    const getDeadTime = () => {
        let deadline = new Date();

        // This is where you need to adjust if 
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds());
        console.log(deadline);
        return deadline;
    }

    useEffect(() => {
        clearTimer(getDeadTime());
    });

    return (
        <div className='flex gap-2'>
            <div className='flex flex-col'>
                <p className='text-center text-[12px]'>Hours</p>
                <div className='flex gap-1'>
                    <span className='bg-white text-black border rounded-lg  px-[4px] font-black text-xl'>{timer.substring(0, 1)}</span>
                    <span className='bg-white text-black border rounded-lg  px-[4px] font-black text-xl'>{timer.substring(1, 2)}</span>
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='text-center text-[12px]'>Minutes</p>
                <div className='flex gap-1'>
                    <span className='bg-white text-black border rounded-lg  px-[4px] font-black text-xl'>{timer.substring(2, 3)}</span>
                    <span className='bg-white text-black border rounded-lg  px-[4px] font-black text-xl'>{timer.substring(3, 4)}</span>
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='text-center text-[12px]'>Seconds</p>
                <div className='flex gap-1'>
                    <span className='bg-white text-black border rounded-lg  px-[4px] font-black text-xl'>{timer.substring(4, 5)}</span>
                    <span className='bg-white text-black border rounded-lg  px-[4px] font-black text-xl'>{timer.substring(5, 6)}</span>
                </div>
            </div>
        </div >
    )
}

export default CountDownTimer;