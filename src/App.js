import { useState } from 'react';

import { AiFillInfoCircle, AiOutlineLoading3Quarters } from 'react-icons/ai';
import { IoIosArrowDropdown } from 'react-icons/io';

import Header from './components/Header';
import ProductInfo from './components/ProductInfo';
import Research from './components/Research';

function App() {
  const [url, setUrl] = useState('');
  const [asin, setAsin] = useState('');
  const [incorrectUrl, setIncorrectUrl] = useState(false);
  const [validProduct, setValidProduct] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [asinValid, setAsinValid] = useState(false);
  const [asinInvalid, setAsinInvalid] = useState(false);

  const checkUrl = (e) => {
    e.preventDefault();
    setIncorrectUrl(false);
    setValidProduct(false);
    setAsinValid(false);
    setAsinInvalid(false);
    setAsin('');

    setIsLoading(true);

    setTimeout(() => {
      url === 'https://www.amazon.com/One-Womens-Petite-Multivitamins-Count/dp/B004XSOJ02' ? setValidProduct(true) : setIncorrectUrl(true);
      setIsLoading(false);
    }, 2000);
  };

  const checkAsin = (e) => {
    e.preventDefault();
    setValidProduct(false);
    setAsinValid(false);
    setAsinInvalid(false);

    setIsLoading(true);

    setTimeout(() => {
      asin === 'B004QQ9LVS' ? (setValidProduct(true) && setAsinValid(true) && setIncorrectUrl(false)) : setAsinInvalid(true) && setIncorrectUrl(true);
      setIsLoading(false);
    }, 2000);

  };

  return (
    <div>
      <div className='bg-[#F4F4F4] min-h-screen px-40'>
        <Header />

        <div className='px-40 pt-40 space-y-4'>
          <h2 className='font-extrabold text-3xl text-[#D3AA27]'>2nd Step</h2>
          <p className='font-bold text-2xl'>Go to Amazon.com and search the word
            <span className='text-[#1C59FD] cursor-pointer select-none'>{' '}sleep aid{' '}</span>& pick the product that is most appealing to you</p>
          <div className='flex items-center bg-[#F6EFD9] p-4 rounded-full space-x-2'>
            <AiFillInfoCircle className='text-[#D3AA27] text-3xl' />
            <p>As this is for market reasearch, please do not select our brand.</p>
          </div>
          <div>
            <h3 className='py-4'>Paste here the URL of the product that you choose!</h3>

            <div className='grid grid-cols-2 gap-4 justify-start '>
              <form onSubmit={checkUrl}>
                <input
                  type='url'
                  placeholder='URL'
                  className='w-full border-2 border-[#D3AA27] rounded-lg p-2'
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </form>

              {incorrectUrl || (asinValid && validProduct) ?
                <form onSubmit={checkAsin}>
                  <input
                    disabled={!incorrectUrl}
                    type='text'
                    placeholder='ASIN'
                    className='w-full border-2 border-[#D3AA27] rounded-lg p-2'
                    value={asin}
                    onChange={(e) => setAsin(e.target.value)}
                  />
                </form>
                :
                <></>
              }
            </div>

            {((incorrectUrl && !validProduct) || asinInvalid) &&
              <div className='mt-10 flex items-center bg-[#F6EFD9] p-4 rounded-full space-x-2'>
                <AiFillInfoCircle className='text-red-700 text-3xl ' />

                {(incorrectUrl && !asinInvalid) &&
                  <p className='mx-auto'>Incorrect URL please enter ASIN number, it can be found at the middle of the product's page under "Product Description"</p>}

                {(incorrectUrl && asinInvalid) &&
                  <p>Wrong ASIN number, it must be 10 characters made by numbers & letters and it should look like this <b>"B004QQ9LVS"</b></p>}
              </div>
            }

            {validProduct && <ProductInfo />}
          </div>

          {isLoading &&
            <div className='absolute bottom-48 right-[48.5%]'>
              <AiOutlineLoading3Quarters className='text-5xl animate-spin' />
            </div>
          }

          {validProduct &&
            <div className='text-5xl absolute bottom-4 right-[48.5%]'>
              <IoIosArrowDropdown />
            </div>
          }
        </div>

      </div>
      {validProduct &&
        <Research />
      }
    </div>
  );
}

export default App;
