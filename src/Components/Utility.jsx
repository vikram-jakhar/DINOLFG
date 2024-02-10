import React from 'react'
import TopLayer from '../assets/img/AboutLayer.webp'
import Cap_Cartun from '../assets/img/Cap_Cartun.png'
import Sayikal from '../assets/img/Sayikal_Cartun.png'
import RoadMAPtopL from '../assets/img/RoadMAPtopL.png';
import Tree from '../assets/img/utilityElipse.png'


const Utility = () => {
    return (
        <div>
            <div className='bg-[#0A4740] relative z-[1] overflow-hidden'>
                <div>
                    <img src={TopLayer} alt="TopLayer" className='w-full max-xl:mt-[-1px]' />
                </div>
                <div className=' max-w-[1014px] mx-auto px-3'>
                    <h2 className='text-[64px] text-white font-chewy mb-[23px] sm:mb-[158px] font-normal  text-center leading-[83.63px]'>Utility and Usecase</h2>
                    <div data-aos="zoom-in" data-aos-duration='400' data-aos-once='true' className=' max-w-[1014px] mb-6 relative bg-[#09655A] border border-solid border-white pt-[23px] lg:py-[62px] pl-[12px] md:pl-[35px] pr-[12px] lg:pr-[24px] rounded-[20px]'>
                        <div className='grid lg:grid-cols-6 gap-[24px] '>
                            <div className=' lg:col-span-5'>
                                <p className='text-[20px] sm:text-[32px] text-white mb-[12px] sm:mb-[28px] font-normal font-balsamiq sm:leading-[38.4px] max-w-[681px] '>We are going to work hard in otder to add <span className='text-[#8EC627] font-bold'>$</span><span className='text-[#FBA11D] font-bold'>D</span><span className='text-[#23AAAC] font-bold'>I</span><span className='text-[#D45B07] font-bold'>N</span><span className='text-[#FB5352] font-bold'>O</span> to main platforms as a form of payment</p>
                                <p className='text-[20px] sm:text-[32px] text-white font-normal font-balsamiq sm:leading-[38.4px] max-w-[695px] '>You will be able to buy a lot of things with <span className='text-[#8EC627] font-bold'>$</span><span className='text-[#FBA11D] font-bold'>D</span><span className='text-[#23AAAC] font-bold'>I</span><span className='text-[#D45B07] font-bold'>N</span><span className='text-[#FB5352] font-bold'>O</span></p>
                            </div>
                            <div className=' lg:col-span-2  flex justify-end '>
                                <div className='lg:absolute bottom-[0%] right-0 object-cover '>
                                    <img src={Cap_Cartun} alt="Cap_Cartun" className=' max-[730px]:mb-[-33px] mb-[0px] max-[730px]:w-[150px] max-[730px]:h-[259px] w-[255.51px]  h-[323px] object-contain ' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-once='true' className=' max-w-[1014px] mb-[23px] sm:mb-[168px] relative sm:mt-[125px] bg-[#09655A] !z-[3] border border-solid border-white pt-[23px] lg:py-[95px] pl-[12px] md:pr-[35px] md:pl-[12px] pr-[12px] lg:pr-[24px] rounded-[20px]'>
                        <div className='grid lg:grid-cols-6 gap-[24px] '>
                            <div className=' lg:col-span-1  flex justify-start '>
                                <div className='lg:absolute bottom-[0%] left-0 object-cover '>
                                    <img src={Sayikal} alt="Sayikal" className=' max-[730px]:w-[150px] max-[730px]:h-[259px] mt-0 max-[730px]:mt-[-38px]  w-[255.51px]  h-[323px] object-contain m-[730]:mt-[-38px] ' />
                                </div>
                            </div>
                            <div className=' lg:col-span-5 flex justify-end text-end'>
                                <p className='text-[20px] sm:text-[32px] text-white  font-normal font-balsamiq sm:leading-[38.4px] max-w-[681px]  '>We are going to have staking and buyback/ <br className='max-sm:hidden' />burning mechanism</p>
                            </div>
                        </div>
                    </div>
                    <div className='!absolute bottom-[0] right-[40%] min-[1220px]:bottom-[26%] min-[1220px]:right-[-40px] !z-[-1]'>
                        <img src={Tree} alt="tree" className='w-[220px] h-[340px] min-[1220px]:w-[376.02px] min-[1220px]:h-[502px]' />
                    </div>

                </div>
                <div className=' mb-[-13px]'>
                    <img src={RoadMAPtopL} alt="RoadMAPtopL" />
                </div>

            </div>


        </div>
    )
}

export default Utility