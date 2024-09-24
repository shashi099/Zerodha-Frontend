import React from 'react'

const RightSection = ({
    imageURL,
    productName,
    productDesc,
    learnMore,
}) => {
  return (
    <div className='container'>
    <div className='row'>
        
        <div className='col-6' style={{paddingTop:"200px"}}>
            <h1>{productName}</h1>
            <p> {productDesc} </p>
            <div className='d-flex gap-5 my-3'>
                 <a className='text-decoration-none ' href={learnMore}>Learn More</a>
            </div>
        </div>

        <div className='col-6'>
            <img src={imageURL} />
        </div>


    </div>

</div>
  )
}

export default RightSection
