import React from 'react'

function Banner(props) {
    console.log("Banner")
    console.log(props.tests.data)
    const testDetails = props.tests.data
  return (
    
    <div className='container'>
    <div className='row'>
        <div className='d-flex flex-row justify-content-start'>
          <div className='col-3'>
              <div><span>TEST TYPE</span>
              <li>
                  <ul>
                      PSYCHOMETRIC
                  </ul>
                  <ul>
                      APTITUDE
                  </ul>
                  <ul>
                      CODING
                  </ul>
                  <ul>
                      DOMAIN
                  </ul>
              </li>
              </div>
          
          </div>
          <div className=''>
                <div className='d-flex flex-row align-items-stretch'>
                    {testDetails && testDetails.map((test,index)=>(
                      <div className='border col-4 m-2 p-2'>
                            <p className='fw-bold'>{test.testName}</p>
                            <p>Level:{test.difficultyLevel}</p>
                            <p>Duration:{test.durationPerTest}</p>


                      </div>
                    ))}

                </div>
          
          </div>
    </div></div>
    </div>
    
  )
}

export default Banner