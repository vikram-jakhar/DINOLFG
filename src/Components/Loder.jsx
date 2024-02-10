import React, { useEffect, useState } from "react";
const Lodre = () => {
    const [loder, setloader] = useState(true);
    useEffect(() => {
        setTimeout(() => { setloader(false); }, 3000);
    }, []);
    {
        if (loder === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }
    return (
        <div>
            {loder ? (
                <div className="flex-col bg-[#103536] z-50 fixed gap-4 w-full flex items-center justify-center min-h-full top-[-1px]">

                    <h3 className='text-[85px] md:text-[120px] lg:text-[175.64px] text-[#23AAAC] animate-bounce  drop-shadow-[0px_6.337px_0px_#000] font-normal text-center font-dino lg:leading-[166.85px] leading-none lg:pt-[83px] text-wrap '>
                        <span className='text-[#FBA11D]'>D</span>
                        <span className='text-[#23AAAC]'>i</span>
                        <span className='text-[#D45B07]'>n</span>
                        <span className='text-[#8EC627]'>o</span>
                        <span className='text-[#8EC627]'>L</span>
                        <span className='text-[#FCCA2B]'>F</span>
                        <span className='text-[#8F78D2]'>G</span>...
                    </h3>
                    <div className="w-28 h-28 border-8 text-[#D45B07] text-4xl animate-spin border-[#8EC627] flex items-center justify-center border-t-[#194643] rounded-full">
                        <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" className=" animate-ping">
                            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"></path>
                        </svg>
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    )
}

export default Lodre