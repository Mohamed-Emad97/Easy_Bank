import React from 'react';
import {homeBg} from '../../Utilies/imgs';

export default function Home() {
  return (
    <>
    <section id="home" className='vh-100 position-relative'>
      <div className="container h-100">
          <div className="h-100">
            <div className="caption d-flex justify-content-center h-100 flex-column">
              <h1>Next generation <br/> digital banking</h1>
              <p>
                Take your financial life online. Your Easybank account <br/>
                will be a one-stop-shop for spending , saving, <br/>
                budgeting, investing, and much more.
              </p>
              <div className="button">
                <button className='btn btnMain px-4 p-2 rounded-4 align-self-start'>Request Invite</button>
              </div>
            </div>
          </div>
          <div className="image">
            <div className="homeImg">
              <img src={homeBg} alt="home-pic" className='w-100'/>
            </div>
          </div>
      </div>
    </section>
    </>
  )
}
