import React from 'react'

const CV = () => {
    return (
        <div className='h-full bg-white rounded-xl'>
            <iframe
                src="https://www.sbs.ox.ac.uk/sites/default/files/2019-01/cv-template.pdf"
                unoptimized
                style={{ width: '100%', height: '100%', border: 'none' }}
                type="application/pdf"
            ></iframe>
        </div>
    )
}

export default CV
