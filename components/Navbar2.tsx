import { ChevronDown, Clock, EllipsisVertical, Plus, RefreshCcw } from 'lucide-react';
import React from 'react'

const Navbar2 = () => {
  return (
    <div className='flex w-full justify-between'>
        <div><h1 className='font-semibold text-black'>CNAPP Dashboard</h1></div>
        <div className='flex gap-4'> 
            <button className='flex gap-3 bg-white rounded-md p-2 text-zinc-500 border-zinc-600 text-sm text-center'>Add Widget <Plus className='h-3 w-4 mt-1 text-center'/></button>
            <button className='flex bg-white rounded-md p-2 text-zinc-500 border-zinc-600 text-sm text-center'><RefreshCcw size={15} className=' mt-1'/></button>
            <button className='flex bg-white rounded-md p-2 text-zinc-500 border-zinc-600 text-sm text-center'><EllipsisVertical size={15} className=' mt-1'/></button>
            <button className='flex gap-1 bg-white rounded-md p-1 text-blue-900 border-zinc-600 text-sm text-center font-semibold'><Clock size={18} className=' mt-1 text-white' fill=''/><span className='flex text-xl'>|</span><p className='flex mt-1 gap-1'> Last 2 days <ChevronDown size={15} className='mt-1'/></p></button>
        </div>
    </div>
  )
}

export default Navbar2;