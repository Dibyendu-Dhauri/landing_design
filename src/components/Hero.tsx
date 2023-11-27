import HeroImg from '../assets/hero.png'
import image1 from '../assets/image 11.png'
import image2 from '../assets/image 12.png'
import image3 from '../assets/image 13.png'
import image4 from '../assets/image 14.png'

export default function Hero() {

    const groupImg = [
        {
            id:1,
            img: image1,
            img2: image1
        },
        {
            id:2,
            img: image2,
            img2: image2,
        },
        {
            id:3,
            img: image3,
            img2: image3,
        },
        {
            id:4,
            img: image4,
            img2: image4,
        },
    ]
  return(
    <div className=' mt-12 flex flex-col items-center justify-center '>
        <div className='font-bold text-4xl text-center px-4'>Build your audience and grow your brand</div>
        <div className='text-center mt-5 text-gray-500 '>no more, no less. Deploy from our single pane of glass, manage them with ease and scale up as fast as your workload grows.</div>
        <div className='mt-8'>
        <button className="btn btn-primary">Get Started Now</button>
        </div>
        <div className='mt-5 px-4'>
            <img src={HeroImg} alt='hero' />
        </div>
        <div className='flex items-center justify-center mx-4 mt-4'>
            {groupImg.map((item)=>(
                <div key={item.id} className='mx-4 '>
                    <img src={item.img} className='mb-3' />
                    <img src={item.img2} className='' />
                    </div>
            ))}
        </div>
    </div>
  )
}
