import Link from 'next/link';
import React from 'react';

  

function Hero() {
  return (
<div className='gradient-background'>
<div className="pt-4 rounded-md min-h-[100vh] w-full">
<header className="px-2.5 sticky sm:px-20 py-2 items-center flex justify-center w-full">
    {/* Logo */}
    <div className="w-[100px] flex items-center">
      <h3 className="text-xl font-normal text-white hover:opacity-90">
        <Link href="/">Formbase</Link>
      </h3>
    </div>
    </header>

        <div className='min-h-[60vh] flex flex-col justify-center items-center text-center mt-32'>
          <div className="mx-auto max-w-3xljustify-center items-center text-center ">
            <div className="mt-2 text-center">
             <div className='max-w-2xl mx-auto'>
               <h1 className="text-6xl  font-normal tracking-tight text-white sm:text-7xl md:text-8xl">
               Collecting feedback has never been easier.
               </h1>
             </div>
              <div className='max-w-[300px] mx-auto sm:max-w-2xl'>
                <p className=" text-base font-light leading-2 mt-6 text-secondary-foreground text-white text-opacity-75 sm:text-lg">
                Create forms to gather feedback from your audience about their experience with your service.
                </p>
              </div>
            </div>
          </div>

          <div className="flex mt-12">

                <form action="https://submit-form.com/8q2AYuHM5" className="flex gap-2">
              <input type="email" id="email" name="email" placeholder="Subscribe to the waitlist" required className="p-3  border border-gray-300 rounded-md placeholder:text-black placeholder:opacity-70 placeholder:text-base placeholder:font-normal" />
              <button type="submit" className="px-6  rounded-md bg-white text-black py-3">Join waitlist</button>
            </form>
            </div>
          
          
          <div className='flex justify-center items-center gap-2 mt-8'>
          
            

          </div>
        </div>

      </div>
   </div>
  );
}

export default Hero;
