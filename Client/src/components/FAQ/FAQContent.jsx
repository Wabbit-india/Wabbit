import React, { useContext } from 'react'
import Question1 from './questions/Question1'
import { Mycontext } from '../../context/Mycontext'
import Question2 from './questions/Question2'
import Question3 from './questions/Quesstion3'
import Question4 from './questions/Question4'
import Question5 from './questions/Question5'
import Question6 from './questions/Question6'

const FAQContent = () => {
  const {faqQuestion} = useContext(Mycontext)
  return (
    <div className='w-full h-[80%] overflow-hidden px-7 py-5'>
      {faqQuestion===1 &&<Question1/>}
      {faqQuestion===2 &&<Question2/>}
      {faqQuestion===3 &&<Question3/>}
      {faqQuestion===4 &&<Question4/>}
      {faqQuestion===5 &&<Question5/>}
      {faqQuestion===6 &&<Question6/>}
    </div>
  )
}

export default FAQContent
