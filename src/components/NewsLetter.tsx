import paperPlane from '../assets/Paper Plane.png'

export default function NewsLetter() {
  return (
    <div className='mx-2 flex flex-col items-center bg-blue-200 rounded-3xl  py-6 px-12 my-4 lg:mx-32 lg:my-64'>
       <img src={paperPlane} alt='paperPlane' className='w-10 h-10 lg:w-40 lg:h-36'/> 
       <p className='text-lg font-bold mt-6 text-center lg:text-5xl'>Subscribe to Our Newsletter & get the Coupon code.</p>
       <p className='text-sm  mt-6 text-center lg:text-2xl lg:mt-12'>All your information is completely confidential</p>
       <div className=' mt-6 flex items-center justify-center lg:mt-12 lg:w-full '>
       <input type="text" placeholder="Type Your mail" className="input input-bordered  w-full max-w-xs  mr-4 lg:w-full" />
       <button className="btn btn-primary">Subscribe</button>
       </div>
    </div>
  )
}
