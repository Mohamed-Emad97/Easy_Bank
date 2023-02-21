import React from 'react';
import {footer} from '../../Utilies/imgs';

export default function Contact() {
  return (
    <>
    <section id="contact" className='py-5'>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="logoImg mb-4">
              <img src={footer} alt="footer-pic" className="w-75" />
            </div>
            <div className="social text-lg-start text-md-center text-sm-center text-center">
              <span className="facebook mx-1 fs-2"><i class="fa-brands fa-square-facebook"></i></span>
              <span className="youtube mx-1 fs-2"><i class="fa-brands fa-youtube"></i></span>
              <span className="twitter mx-1 fs-2"><i class="fa-brands fa-square-twitter"></i></span>
              <span className="pinterest mx-1 fs-2"><i class="fa-brands fa-square-pinterest"></i></span>
              <span className="instagram mx-1 fs-2"><i class="fa-brands fa-square-instagram"></i></span>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <ul className='list-unstyled text-lg-start text-md-center text-sm-center text-center'>
              <li className='my-2'><a href="#about">About Us</a></li>
              <li className='my-2'><a href="#contact">Contact</a></li>
              <li className='my-2'><a href="#blog">Blog</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <ul className='list-unstyled text-lg-start text-md-center text-sm-center text-center'>
              <li className='my-2'><a href="#">Careers</a></li>
              <li className='my-2'><a href="#">Support</a></li>
              <li className='my-2'><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-lg-3">
            <div className="leftSide d-flex flex-column align-items-center gap-3">
              <div className="btn">
                <button className='btn btnMain px-4 p-2 rounded-4'>Request Invite</button>
              </div>
              <p>Easybank, All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
