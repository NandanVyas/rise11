import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='mt-20 bg-gray-200 px-4 py-8 h-auto flex flex-col md:flex-row justify-around'>
        
        <div className='flex flex-col md:space-y-4 items-center mb-10 md:mb-0'>
                <div>Welcome to our new Website</div>
                <Image src={"/img1.png"} alt={"Image 1"} width={200} height={200} className="mix-blend-darken w-[60%] md:w-[90%]"/>
                <Link href="virgin.com" className='uppercase underline text-xs lg:tracking-[1px]'>Learn more about Virginamerica.com</Link>
        </div>
        <div className='flex flex-col md:space-y-4 items-center'>
                <div>Deals from $49 to your favourite cities</div>
                <Image src={"/img2.png"} alt={"Image 1"} width={170} height={170} className="rounded-full mix-blend-darken w-[56%] md:w-[70%]"/>
                <Link href="/alldeals" className='uppercase underline text-xs tracking-[1px]'>See all deals</Link>
        </div>
        <div className=' flex-col lg:flex hidden my-auto'>
                <div>Created By : Nandan Vyas</div>
                <a href="mailto: nvyas_be19@thapar.edu" target="_blank" rel="noreferrer"><div className='cursor-pointer'>Mail : nvyas_be19@thapar.edu</div></a>
        </div>
    </div>
    </>
  )
}

export default Footer