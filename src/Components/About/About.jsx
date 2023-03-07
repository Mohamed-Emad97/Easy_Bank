import React from 'react';
import {aboutCards} from "../../Utilies/Conts";

export default function About() {
  return (
    <>
    <section id="about" className='py-5'>
      <div className="container pt-5">
        <div className="mainHeading text-lg-start text-md-center text-sm-center text-center">
          <h3>Why choose Easybank?</h3>
          <p>
            We leverage Open Banking to turn your bank account into your financial hub. <br/>
            Control your finances like never before.
          </p>
        </div>
        <div className="row">
          {aboutCards.map((card,i) => 
            <>
              <div className="col-lg-3 col-md-4 col-sm-6 my-2">
                <div className="aboutCard p-2 text-lg-start text-md-center text-sm-center text-center">
                  <div className="img my-4">
                    <img src={card.img} alt="about-pic" className="w-25" />
                  </div>
                  <div className="content">
                    <h4>{card.title}</h4>
                    <p>{card.desc}</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
    </>
  )
}
