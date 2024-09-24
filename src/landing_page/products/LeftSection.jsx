import React from 'react'

const LeftSection = ({
    imageURL,
    productName,
    productDesc,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}) => {
    return (
        <div className='container'>
            <div className='row py-5 my-5'>
                <div className='col-6'>
                    <img src={imageURL} />
                </div>
                <div className='col-6 pt-5 px-5 '>
                    <h1>{productName}</h1>
                    <p> {productDesc} </p>
                    <div className='d-flex gap-5 my-3'>
                        <a className='text-decoration-none ' href={tryDemo} >Try Demo</a>
                        <a className='text-decoration-none ' href={learnMore}>Learn More</a>
                    </div>
                    <div className='d-flex gap-5 my-4'>
                        <a href={googlePlay}>
                            <img src="media/googlePlayBadge.svg" alt="" />
                        </a>
                        <a href={appStore}>
                            <img src="media/appstoreBadge.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LeftSection
