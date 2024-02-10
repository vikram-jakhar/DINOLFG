import React from 'react'
import AboutLeft from '../assets/img/AboutElipseLeft.png'
import treeRight from '../assets/img/AboutElipseight.png'
import Gudaa from '../assets/img/CartunRight.png'
const AboutSec = () => {
    return (
        <>
            <div id='about' className='bg-[#09655A] relative z-[2]  '>
                <div data-aos="zoom-in" data-aos-once='true' className=' relative' >
                    <div className='!z-[20] !relative'>
                        <h2 className='text-center pt-[76px]  mb-[42px]'>
                            <span className='text-[64px] font-chewy font-normal leading-[83.63px] text-white'>About </span>
                            <span className='text-[69.67px] font-dino font-normal leading-[66.19px]'>
                                <span className='text-[#FBA11D]'>D</span>
                                <span className='text-[#23AAAC]'>i</span>
                                <span className='text-[#D45B07]'>n</span>
                                <span className='text-[#8EC627]'>o</span>
                                <span className='text-[#FCCA2B]'>L</span>
                                <span className='text-[#8F78D2]'>F</span>
                                <span className='text-[#8EC627]'>G</span>
                            </span>
                        </h2>
                        <p className='text-[24px] z-[5] relative mb-[18px] text-white leading-[28.8px] text-center font-balsamiq font-normal'>$DINO is a meme coin with very strong utility.</p>
                        <p className=' text-[24px] z-[5] relative mb-[10px] text-white font-normal leading-[28px] font-balsamiq text-center max-w-[560px] m-auto'>Biggest problem of meme coins is lack of utility and usecase, <span className='font-bold text-[#8EC627]'>$</span><span className='font-bold text-[#FBA11D]'>D</span><span className='font-bold text-[#23AAAC]'>I</span><span className='font-bold text-[#D45B07]'>N</span><span className='font-bold text-[#FB5352]'>O</span> is going to fix it.</p>
                        <p className='text-[24px] z-[5] relative mb-[14px]  leading-[28.8px] text-white font-normal font-balsamiq text-center m-auto max-w-[522px]'>We want to bring a lot of usecases and utility to $DINO holders, just sit back and relax.</p>
                        <p className='text-[24px] !z-[5] !relative pb-[17px]  leading-[28.8px] text-white font-normal font-balsamiq max-w-[599px] text-center m-auto'>In $DINO, we want to build a very strong community, that’s why we are going to have a lot of games and crypto tips in our Telegram and Twitter.</p>
                    </div>
                    <img src={AboutLeft} alt="AboutLeft" className=' absolute top-0 min-[500px]:top-[217px] z-[2] left-0 w-[150px] h-[250px] lg:w-[297px] lg:h-[421px]' />
                    <img src={treeRight} alt="treeRight" className='absolute top-0 min-[500px]:!bottom-[0] z-[2] right-0 w-[150px] h-[250px] lg:w-[297px] lg:h-[421px]' />
                    <img src={Gudaa} alt="treeRight" className='absolute min-[1080px]:bottom-[0] min-[500px]:bottom-[-40%] bottom-[-15%] z-[2] right-0 w-[90px] h-[130px] min-[500px]:w-[169px] min-[500px]:h-[205px]' />
                </div>
            </div>
        </>
    )
}
export default AboutSec