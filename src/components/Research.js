import { useState } from 'react'

const Research = () => {
  const [firstQuestion, setFirstQuestion] = useState('')
  const [secondQuestion, setSecondQuestion] = useState('')

  const checkNextStep = firstQuestion === '' || secondQuestion === ''

  return (
    <section className='min-h-screen flex flex-col items-center'>
      <div className=' px-40 py-28 grid grid-rows-2'>
        <div className='grid grid-cols-2 gap-20'>
          <h3 className='font-semibold text-2xl'>What made you pick this product from the search results?</h3>
          <div>
            <h3 className='font-semibold text-2xl'>Looking to the product detail page, what grabs your attention the most?</h3>
            <h3 className='font-semibold text-2xl'>What do you like about this product?</h3>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-20'>
          <textarea
            onChange={e => setFirstQuestion(e.target.value)}
            placeholder='lorem ipsum dolr, nisl eget aliquam luctus, nisl nisl aliquam nisl, nec aliquam nisl nisl sit isl sit amet nisl. Sed euismod, nisl eget aliquam luctus, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl. iquam luctus, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl. Sed eu'
            className='w-full h-40 border-2 border-gray-300 rounded p-2'
          />
          <textarea
            onChange={e => setSecondQuestion(e.target.value)}
            placeholder='lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget asit nisl, nec aliquam nisl nisl sit amet nisl. Sed eu'
            className='w-full h-40 border-2 border-gray-300 rounded p-2'
          />
        </div>
      </div>
      <button disabled={checkNextStep} className='bg-[#FFCC07] w-[40%] disabled:bg-[#fcf1c9] rounded' type='button' >Next</button>
    </section>
  )
}

export default Research