import React, { useEffect, useState } from 'react'
import railtrack from '../img/railtrack.png';
import './Rail.css';

const token1= "JlP4rX07CeVE0yx7y715X2LsDFGvnugy";

const Rail = () => {

    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);
    const [value4, setValue4] = useState(0);
    const [value5, setValue5] = useState(0);

    const fetchData = async (pin)=>{
           const response =  await fetch(`https://blr1.blynk.cloud/external/api/get?token=${token1}&${pin}`).then((res)=>{
                return res.json();
            })
           return response;
    }

    const timerFunction = async() =>{
        setTimeout(async()=>{
            const data1 = await fetchData('v0');
            setValue1(data1);
            const data2 = await fetchData('v1');
            setValue2(data2);
            const data3 = await fetchData('v2');
            setValue3(data3);
            const data4 = await fetchData('v3');
            setValue4(data4);
            const data5 = await fetchData('v4');
            setValue5(data5);
            
            timerFunction();
        },5000);
    }

    useEffect(()=>{
        timerFunction();
    })
    return (
        <section className='relative rounded m-auto max-w-[900px] h-[600px] rail' style={{ backgroundImage: `url(${railtrack})`, backgroundPosition: 'contain', backgroundRepeat:'no-repeat', backgroundSize:'cover' }}>
            {/* right middle  */}
            {/* <div className='absolute right-0 top-[45%] flex shadow pole'>
               {
                   (value1==0) ? 
                   <div className='rounded-full bg-red-500 w-[10px] h-[10px] mr-1' />
                   :
                   <div className='rounded-full bg-green-500 w-[10px] h-[10px]' />
               }
            </div> */}

              {/* left middle  */}{console.log(value1)}
            <div className='absolute left-0 top-[45%] flex shadow  pole'>
                {
                    (value1==0)?
                    <div className='rounded-full bg-red-500 w-[10px] h-[10px] mr-1' />
                    :
                    <div className='rounded-full bg-green-500 w-[10px] h-[10px]' />
                }
            </div>

            {/* left first  */}
            <div className='absolute left-[35%] -rotate-45 top-[40%] flex shadow  pole'>
                {
                    (value2==0)?
                    <div className='rounded-full bg-red-500 w-[10px] h-[10px] mr-1' />
                    :
                    <div className='rounded-full bg-green-500 w-[10px] h-[10px]' />
                }
            </div>

            {/* left second  */}
            <div className='absolute left-[37%] rotate-45 top-[77%] flex shadow   pole'>
                {
                (value3==0)?
                <div className='rounded-full bg-red-500 w-[10px] h-[10px] mr-1' />
                :
                <div className='rounded-full bg-green-500 w-[10px] h-[10px]' />
                }
            </div>

            {/* right first  */}
            <div className='absolute left-[60%] rotate-45 top-[40%] flex shadow   pole'>
                {
                    (value4==0)?
                    <div className='rounded-full bg-red-500 w-[10px] h-[10px] mr-1' />
                    :
                <div className='rounded-full bg-green-500 w-[10px] h-[10px]' />
                }
            </div>

            {/* right second  */}
            <div className='absolute left-[60%] -rotate-45 top-[80%] flex shadow  pole'>
                {
                    (value5==0?
                        <div className='rounded-full bg-red-500 w-[10px] h-[10px] mr-1' />
                        :
                        <div className='rounded-full bg-green-500 w-[10px] h-[10px]' />
                    )
                }
            </div>
            <div className='text-[100px] text-[#4D4D4D] absolute -bottom-2 left-[20%]'>→</div>
            <div className='text-[100px] text-[#4D4D4D] absolute -bottom-2 right-[20%]'>←</div>
        </section>

    )
}

export default Rail