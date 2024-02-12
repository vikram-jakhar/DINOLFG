import React from "react";
import { Accordion, AccordionHeader, AccordionBody, } from "@material-tailwind/react";
import RoAdMapBottom from '../assets/img/RoAdMApBottom.webp';

function Icon({ id, open }) {
    return (
        <div className="relative ">
            <svg className={`${id === open ? "rotate-180" : "rotate-0"}  sm:mr-12   transition-transform`} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="18" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 36 36)" fill="white" />
                <path d="M12.2857 14L18 19.625L23.7143 14L26 15.125L18 23L10 15.125L12.2857 14Z" fill="#0A4740" />
            </svg>


        </div>
    );
}
function AccordionSec() {
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <div id="faq" className="relative">
                <div className="mt-[-14px]">
                    <img src={RoAdMapBottom} alt="RoAdMapBottom" />
                </div>
                <div className="max-w-[1140px] mx-auto px-3  ">
                    <h2 className='sm:text-[64px] text-[40px] text-white  leading-[132%] text-center font-normal font-chewy lg:mb-[61px] mb-[13px] sm:mb-[35px]'>FAQs</h2>
                    <div data-aos="zoom-in" data-aos-once='true' className=" mx-auto relative max-w-[800px] px-2 ">
                        <Accordion className={` sm:pb-[27px] border mb-4 rounded-full sm:ps-[26px] border-[#C5C5C5]  p-3 sm:pt-[30px]  ${open === 1 ? 'rounded-[26px] sm:rounded-[45px] ' : 'rounded-full'}`} open={open === 1} icon={<Icon id={1} open={open} />}                >
                            <AccordionHeader onClick={() => handleOpen(1)} className=" text-[11px] sm:text-[16px] md:text-[20px] font-balsamiq text-start font-bold text-white w-full justify-between" >Maecenas laoreet, sapien vel cursus ultricies?</AccordionHeader>
                            <AccordionBody className=" text-[14px]  text-white  md:text-[16px] font-balsamiq  font-medium max-w-[600px] pt-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur incidunt officia provident. </AccordionBody>
                        </Accordion>
                        <Accordion className={` border   border-[#C5C5C5] rounded-full mb-4 p-3 sm:pt-[30px] sm:pb-[27px] sm:ps-[26px] overflow-hidden ${open === 2 ? 'rounded-[26px] sm:rounded-[45px]' : 'rounded-full'}`} open={open === 2} icon={<Icon id={2} open={open} />} >
                            <AccordionHeader onClick={() => handleOpen(2)} className=" text-[11px] text-white font-balsamiq sm:text-[16px] md:text-[20px] text-start font-bold "> Maecenas laoreet, sapien vel cursus ultricies?</AccordionHeader>
                            <AccordionBody className=" text-[14px] text-white font-balsamiq  md:text-[16px] font-medium  max-w-[600px] pt-3 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga culpa quis consequuntur beatae qui voluptatum sunt. </AccordionBody>
                        </Accordion>
                        <Accordion className={` border mb-4 rounded-full p-3 border-[#C5C5C5] sm:pt-[30px] sm:pb-[27px] sm:ps-[26px] ${open === 3 ? 'rounded-[26px] sm:rounded-[45px]' : 'rounded-full'}`} open={open === 3} icon={<Icon id={3} open={open} />}>
                            <AccordionHeader onClick={() => handleOpen(3)} className="font-balsamiq text-[11px] sm:text-[16px] md:text-[20px] text-start font-bold text-white" >Maecenas laoreet, sapien vel cursus ultricies?</AccordionHeader>
                            <AccordionBody className="font-balsamiq text-[14px] text-white md:text-[16px] font-medium  max-w-[600px] pt-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum iusto impedit inventore nulla modi consequatur velit dicta repudiandae provident. </AccordionBody>
                        </Accordion>
                        <Accordion className={` border mb-4 rounded-full p-3 sm:pt-[30px] border-[#C5C5C5] sm:pb-[27px] sm:ps-[26px] ${open === 4 ? 'rounded-[26px] sm:rounded-[45px]' : 'rounded-full'}`} open={open === 4} icon={<Icon id={4} open={open} />}>
                            <AccordionHeader onClick={() => handleOpen(4)} className="font-balsamiq text-[11px] sm:text-[16px] md:text-[20px] text-start font-bold text-white">Maecenas laoreet, sapien vel cursus ultricies?</AccordionHeader>
                            <AccordionBody className="font-balsamiq text-[14px] text-white md:text-[16px] font-medium  max-w-[600px] pt-3 ">Lorem ipsum dolor sit amet consectetur. </AccordionBody>
                        </Accordion>
                        <Accordion className={` border mb-4 rounded-full p-3 sm:pt-[30px] sm:pb-[27px] border-[#C5C5C5] sm:ps-[26px] ${open === 5 ? 'rounded-[26px] sm:rounded-[45px]' : 'rounded-full'}`} open={open === 5} icon={<Icon id={5} open={open} />}>
                            <AccordionHeader onClick={() => handleOpen(5)} className="font-balsamiq text-[11px] sm:text-[16px] md:text-[20px] text-start font-bold text-white">Maecenas laoreet, sapien vel cursus ultricies?</AccordionHeader>
                            <AccordionBody className="font-balsamiq text-[14px] text-white md:text-[16px] font-medium max-w-[600px] pt-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi mollitia laboriosam libero, accusamus minima ducimus eveniet blanditiis impedit aliquam voluptate vero perferendis dignissimos veniam rem reiciendis exercitationem dolores in, totam et voluptatem esse nemo. </AccordionBody>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AccordionSec;