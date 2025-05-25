
import Cover from './Cover'

const FeatureBooks = () => {
  return (
    <div className=' h-full w-full  '>
      
        <div className= 'p-2  lg:text-[48px] text-[17px] w-[800px] h-full tracking-tight headline leanding-0 overflow-x-auto'>
            <span className=' text-neutral-900 font-[550]  h-full'>Store.</span> <span className='subheadline text-neutral-700 font-semibold md:font-normal'>The best way to  buy the books you love.</span> 
        </div>
        
        <Cover></Cover>
    </div>
  )
}

export default FeatureBooks