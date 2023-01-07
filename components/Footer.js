import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='mt-20 bg-gray-200 h-screen flex flex-row justify-evenly'>
        
        <div className='flex flex-col space-y-4 pt-10 items-center'>
                <div>Welcome to our new Website</div>
                <Image src={"/img1.png"} alt={"Image 1"} width={200} height={200} className="mix-blend-darken"/>
                <Link href="virgin.com" className='uppercase underline text-xs tracking-[1px]'>Learn more about Virginamerica.com</Link>
        </div>
        <div className='flex flex-col space-y-4 pt-10 items-center'>
                <div>Deals from $49 to your favourite cities</div>
                <Image src={"/img2.png"} alt={"Image 1"} width={170} height={170} className="rounded-full mix-blend-darken"/>
                <Link href="/alldeals" className='uppercase underline text-xs tracking-[1px]'>See all deals</Link>
        </div>
        <div className=' flex-col space-y-4 pt-32 items-center md:flex hidden'>
                <div>Created By : Nandan Vyas</div>
        </div>
    </div>
    </>
  )
}

export default Footer