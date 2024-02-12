import React, { useState } from 'react'
import { Discord, Insta, Twiter } from './SvgFileOnly'
import Flight_Jet from '../assets/img/Flight_Jet.webp'
import Saiykal from '../assets/img/Sayikal_Cartun.webp'
import Cap_Cartun from '../assets/img/Cap_Cartun.webp'
import Could_Right from '../assets/img/Cloud_Right.webp'
import bottom_Elipse from '../assets/img/bottomElipse.webp'

const HeroSec = () => {
    const [nav, setNav] = useState(false)
    function show() {
        setNav(!nav)
        if (nav === false) {
            document.body.classList.add("max-lg:overflow-hidden")
        }
        else {
            document.body.classList.remove("max-lg:overflow-hidden")
        }
    };
    return (
        <>
            <div className='bg-[url(../src/assets/img/herobgimg.webp)] bg-cover bg-no-repeat bg-center  min-h-screen lg:min-h-[130vh]  relative z-[1] overflow-hidden'>
                <div className=' absolute  bottom-[-1px] -z-[1]'>
                    <img src={bottom_Elipse} alt="bottom_Elipse" className='w-full ' />
                </div>
                <div className='max-w-[1132px]  mx-auto px-3 '>
                    <div className=' absolute -start-[1%] top-[30%] -z-[1]'>
                        <img src={Could_Right} alt="Could_Left" className='Cloud_Left max-[542px]:w-[100px] max-[542px]:h-60px w-[177.32px] h-[119.85px]' />
                    </div>
                    <div className=' absolute end-[1%] top-[17%] -z-[1]'>
                        <img src={Could_Right} alt="Could_Right" className='Cloud_Right max-[542px]:w-[100px] max-[542px]:h-60px  w-[177.32px] h-[119.85px]' />
                    </div>

                    <div className=' pt-8'>
                        <nav className='flex justify-between bg-white px-3 border-b-[#000000] border-solid border-b-4 rounded-[61.1px] items-center '>
                            <div data-aos="zoom-in" data-aos-duration="3000" data-aos-once='true' data-aos-delay='3000' >
                                <h3 className='text-[39.13px] cursor-pointer font-dino relative z-[60]'>
                                    <span className='text-[#FBA11D]'>D</span>
                                    <span className='text-[#23AAAC]'>i</span>
                                    <span className='text-[#D45B07]'>n</span>
                                    <span className='text-[#8EC627]'>o</span>
                                    <span className='text-[#FCCA2B]'>L</span>
                                    <span className='text-[#8F78D2]'>F</span>
                                    <span className='text-[#8EC627]'>G</span>
                                </h3>
                            </div>
                            <ul className={`${nav ? "left-0" : "left-[-100%]"} items-center  mobileView duration-300 flex gap-[28px]`}>
                                <li onClick={show} className='text-[18px] font-chewy font-normal sm:leading-[23.52px] text-[black] after:absolute after:w-0 after:bg-black after:h-[2px] after:left-[0] after:bottom-[-2px] hover:after:w-full after:duration-300 after:rounded-[80px]   relative '><a href="#about" >About</a></li>
                                <li onClick={show} className='text-[18px] font-chewy font-normal sm:leading-[23.52px] text-[black] after:absolute after:w-0 after:bg-black after:h-[2px] after:left-[0] after:bottom-[-2px] hover:after:w-full after:duration-300 after:rounded-[80px]   relative '><a href="#tokenomic" >Tokenomic</a></li>
                                <li onClick={show} className='text-[18px] font-chewy font-normal sm:leading-[23.52px] text-[black] after:absolute after:w-0 after:bg-black after:h-[2px] after:left-[0] after:bottom-[-2px] hover:after:w-full after:duration-300 after:rounded-[80px]   relative '><a href="#roadmap" >Roadmap</a></li>
                                <li onClick={show} className='text-[18px] font-chewy font-normal sm:leading-[23.52px] text-[black] after:absolute after:w-0 after:bg-black after:h-[2px] after:left-[0] after:bottom-[-2px] hover:after:w-full after:duration-300 after:rounded-[80px]   relative '><a href="#faq" >FAQ</a></li>
                                <li className='max-[600px]:!flex !hidden   gap-2'>
                                    <span onClick={show} className='hover:bg-black  w-[37px] h-[37px] bg-[white] hover:shadow-[0px_0px_20px_4px_rgba(0,0,0,0)] transition duration-300 border border-solid border-[black] rounded-[50px] flex justify-center items-center'>
                                        <a href="https://www.Twitter.com/" target='_blank'><Twiter /></a>
                                    </span>
                                    <span onClick={show} className='w-[37px] h-[37px] bg-[white] border border-solid border-[black] rounded-[50px] flex justify-center items-center'>
                                        <a href="https://www.Discord.com/" target='_blank'>  <Discord /></a>
                                    </span>
                                    <span onClick={show} className='w-[37px] h-[37px] bg-[white] border border-solid border-[black] rounded-[50px] flex justify-center items-center'>
                                        <a href="https://www.Instagram.com/" target='_blank'> <Insta /></a>
                                    </span>
                                </li>
                                <li onClick={show} className='min-[401px]:hidden bg-[url(../src/assets/img/bgbtnimg.webp)] bg-cover group bg-center bg-no-repeat'>
                                    <p className='pt-[11px] pb-[19.57px] px-[36px] text-[18px] group-hover:text-white transition-all duration-300 ease-linear font-normal text-black font-chewy leading-[131%]'>Join Now</p>
                                </li>

                            </ul>
                            <div className='flex items-center gap-[8px]'>
                                <div className='max-[600px]:hidden flex gap-2'>
                                    <span className=' hover:bg-black duration-300 transition group w-[37px] h-[37px] bg-[white] border border-solid border-[black] rounded-[50px] flex justify-center items-center'>
                                        <a href="https://www.Twitter.com/" target='_blank'><Twiter /></a>
                                    </span>
                                    <span className='hover:bg-black duration-300 transition group cursor-pointer w-[37px] h-[37px] bg-[white] border border-solid border-[black] rounded-[50px] flex justify-center items-center'>
                                        <a href="https://www.Discord.com/" target='_blank'>  <Discord /></a>
                                    </span>
                                    <span className='hover:bg-black duration-300 transition group cursor-pointer w-[37px] h-[37px] bg-[white] border border-solid border-[black] rounded-[50px] flex justify-center items-center'>
                                        <a href="https://www.Instagram.com/" target='_blank'> <Insta /></a>
                                    </span>
                                </div>
                                <button className='max-[400px]:hidden bg-[url(../src/assets/img/bgbtnimg.webp)] bg-cover group bg-center bg-no-repeat'>
                                    <p className='pt-[11px] pb-[19.57px] px-[36px] text-[18px] group-hover:text-white transition-all duration-300 ease-linear font-normal text-black font-chewy leading-[131%]'>Join Now</p>
                                </button>
                                <label className='lg:hidden' onClick={show}>
                                    {nav ? (
                                        <div className='relative z-50'>
                                            <span className=' flex w-6 h-1 bg-black duration-300 rounded-2xl rotate-45 mb-1'></span>
                                            <span className=' flex w-6 h-1 bg-black duration-300 rounded-2xl absolute top-0 -rotate-45 mb-1'></span>
                                        </div>
                                    ) : (
                                        <div className='relative z-50'>
                                            <span className=' flex w-6 h-1 bg-black duration-300 rounded-2xl mb-1'></span>
                                            <span className=' flex w-6 h-1 bg-black duration-300 rounded-2xl mb-1'></span>
                                            <span className=' flex w-6 h-1 bg-black duration-300 rounded-2xl'></span>
                                        </div>
                                    )}
                                </label>


                            </div>
                        </nav>
                    </div>
                    <div className=' grid lg:grid-cols-2 px-3  '>
                        <div className=' absolute end-[40%] max-[853px]:end-[35%] bottom-[18%]'>
                            <img src={Saiykal} alt="Saiykal" className='Sayikal max-[852px]:w-[100px] max-[852px]:h-[120px]  lg:w-[131.84px] h-[165px]' />
                        </div>
                        <div className=' absolute end-[7%] bottom-[10%] max-[852px]:bottom-[6%]'>
                            <img data-aos="fade-right" data-aos-duration="3000" data-aos-once='true' data-aos-delay='3000' src={Cap_Cartun} alt="Cap_Cartun" className='Cap_Cartun  max-[852px]:w-[120px] max-[852px]:h-[140px]  w-[160.21px] h-[190px]' />
                        </div>
                        <div className='col-span-1 flex justify-center lg:justify-start max-lg:order-2'>
                            <div className='lg:mt-[175px] mt-3 flex px-7'>
                                <img data-aos="zoom-in-left" data-aos-duration="3000" data-aos-once='true' data-aos-delay='3000' src={Flight_Jet} alt="Flight_Jet" className='plane max-[665px]:w-[250px] max-[665px]:h-[150px]  w-[300.14px] lg:w-[394.14px] lg:h-[244.86px] h-[200.86px]' />
                            </div>

                        </div>
                        <div data-aos="zoom-in" data-aos-duration="3000" data-aos-once='true' data-aos-delay='3000' className=' col-span-1 flex justify-center  max-lg:mt-4 max-lg:order-1 '>
                            <h3 className='text-[85px] md:text-[120px] lg:text-[175.64px] drop-shadow-[0px_6.337px_0px_#000] font-normal whitespace-nowrap font-dino lg:leading-[166.85px] leading-none text-center lg:pt-[83px] text-wrap max-w-[400px]'>
                                <span className='text-[#FBA11D]'>D</span>
                                <span className='text-[#23AAAC]'>i</span>
                                <span className='text-[#D45B07]'>n</span>
                                <span className='text-[#8EC627]'>o</span><br className='max-lg:hidden max-sm:flex' />
                                <span className='text-[#8EC627]'>L</span>
                                <span className='text-[#FCCA2B]'>F</span>
                                <span className='text-[#8F78D2]'>G</span>
                            </h3>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default HeroSec