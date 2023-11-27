// import withImg from '../assets/with.png'

interface WithXeroProps {
    withImg: string;
    withXero: string;
  }
  const WithXero: React.FC<WithXeroProps> = ({withImg,withXero})=> {
  return (
    <div className='flex flex-col items-center justify-center my-12'>
        <div className='text-center font-bold text-2xl'>{withXero}</div>
         <img src={withImg} alt='withXero' className='mt-8 px-6'/>
    </div>
  )
}
export default WithXero;
