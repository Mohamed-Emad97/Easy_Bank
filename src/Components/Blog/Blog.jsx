import React from 'react';
import {blogCards} from "../../Utilies/Conts";

export default function Blog() {
  return (
    <>
    <section id="blog" className='py-5'>
      <div className="container">
        <div className="mainHeading text-lg-start text-md-center text-sm-center text-center my-4">
          <h3>Latest Articles</h3>
        </div>
        <div className="row">
          {blogCards.map((blog,i) => 
            <>
              <div className="col-lg-3 col-md-4 col-sm-6 my-2">
                <div className="blogCard text-lg-start text-md-center text-sm-center text-center">
                  <div className="img">
                    <img src={blog.img} alt="about-pic" className="w-100" />
                  </div>
                  <div className="content p-3">
                    <span className="writer">{blog.writer}</span>
                    <h5>{blog.title}</h5>
                    <p>{blog.desc}</p>
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
