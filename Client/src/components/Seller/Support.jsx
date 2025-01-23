import React from 'react';
import img from '../../assets/Seller/seller.png';

export default function Support() {
    return (
        <div className='h-full w-[81vw] flex justify-center'>
            <div className='h-[47vh] w-[62vw] flex bg-bgmain mt-20 rounded-2xl'>
                <div className='w-[55%]'>
                    <h1 className='pt-20 px-20 font-nunito font-extrabold text-[45px] -rotate-3'>
                        Need help?
                    </h1>

                    <h2 className='pt-1 px-20 font-bold text-[25px] -rotate-2'>
                        We're here for you.
                    </h2>

                    <div className='h-[15vh] w-[20vw] ml-16 flex items-center gap-10'>
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

                <div className='w-[45%]'>
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
