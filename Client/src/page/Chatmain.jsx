import React from 'react'

function Chatmain() {
  return (
    <div className=' h-[100vh] bg-gray-200'>
        <main className=''>
        <nav className='w-full h-[55px]  border-b border-gray-400 bg-gray-100'>
          <div className='flex gap-3  p-2'>
            <img src="" alt="" className='w-10 h-10 rounded-full' />
            <h1>Mohammed Hussain</h1>
            </div>
            <h5 className='text-[13px] relative -top-7 left-14'>. Online</h5>
        </nav>
        <div className='w-full h-[78vh]  bg-slate-200'>
          <main className='w-full h-[70vh]'>Hi</main>
          <footer className=' p-2 w-full h-12 flex'>
            <div className='flex items-center cursor-pointer justify-center w-36 text-green-800 h-8 rounded-2xl border border-black sm:text-sm text-[12px]'>Project Complete</div>
            <div className='flex items-center cursor-pointer justify-center w-36 text-green-800 h-8 rounded-2xl border border-black mx-10 sm:text-sm text-[12px]'>Share Demo</div>
          </footer>
        </div>
        <footer className='flex items-center border-t border-gray-400 justify-between px-3 w-full h-[52px]  bg-gray-200'>
          
          <div className='flex items-center gap-2'><div className='w-32 text-green-900 h-8  rounded-2xl border border-gray-300 flex items-center 
          justify-center cursor-pointer sm:text-sm 375:text-[12px] 320:text-[10px]'>Upload files
          </div>
          <div><input type="text" className=' h-10   px-4 outline-none bg-gray-200 sm:text-lg text-sm w-[190px] 320:max-w-[500px]' placeholder='Type a message' /></div>
          </div>
          <div className='flex justify-center items-center w-10 h-7 rounded-2xl bg-green-900'></div>
        </footer>
      </main>

    </div>
  )
}

export default Chatmain
