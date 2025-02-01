import React from 'react';
import img from '../../assets/Seller/seller.png';

export default function Support() {
    return (
        <div className='max-md:w-[100vw] h-[80vh] w-[81vw] flex justify-center'>

            <div className='max-md:w-[91vw] h-[47vh] w-[62vw] flex bg-bgmain mt-20 rounded-2xl overflow-hidden'>

                <div className='max-md:flex max-md:flex-col max-md:w-[100%] h-full w-[55%]'>
                    <div className='max-md:w-[100%]'>

                        <h1 className='max-md:pt-14  max-md:text-[20px] pt-20 px-20 font-nunito font-extrabold text-[45px] -rotate-3'>
                            Need help?
                        </h1>c

                        <h2 className='max-md:text-[20px] max-md:px-10 text-center pt-1 px-20 font-bold text-[25px] -rotate-2'>
                            We're here for you.
                        </h2>
                    </div>

                    <div className='max-md:ml-0 h-[15vh] w-[20vw] ml-16 flex items-center gap-10 '>
                        {/* Email Us Button */}
                        <a
                            href="mailto:Support@wabbit.in"
                            className='bg-maincolor h-[50px] w-[130px] rounded-xl text-white ml-5 text-[20px] font-bold flex items-center justify-center'
                        >
                            Email Us
                        </a>

                        {/* Call Us Button */}
                        <a
                            href="tel:+917340112746"
                            className='bg-maincolor h-[50px] w-[130px] rounded-xl text-white text-[20px] font-bold flex items-center justify-center'
                        >
                            Call Us
                        </a>
                    </div>
                </div>

                <div className='w-[45%] max-md:hidden'>
                    <img
                        className='h-[100%] w-[50vw] object-cover'
                        src={img}
                        alt="Support Illustration"
                    />
                </div>
            </div>
        </div>
    );
}
