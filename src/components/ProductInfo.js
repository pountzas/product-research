import product from '../assets/images/product-oneAday.jpg';
import { AiFillCheckCircle } from 'react-icons/ai';

const ProductInfo = () => {
  return (
    <div className='flex items-center justify-center space-x-8 pt-8 '>
      <img className='w-16' src={product} alt="product" />
      <div className='flex space-x-8 items-center'>
        <AiFillCheckCircle className='text-[#14BF27] text-5xl' />
        <div className=''>
          <p className='font-bold'>This is a valid product</p>
          <p className='text-[#14BF27] font-bold'>This is a valid product</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
