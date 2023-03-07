import React from 'react';
import {logo} from "../../Utilies/imgs";

export default function Navbar() {
  return (
    <>
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="logo-pic" className='w-100'/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse center flex-lg-row flex-sm-column flex-column flex-md-column" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#blog">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#careers">Careers</a>
                            </li>
                        </ul>
                        <div className="btn">
                            <button className='btn btnMain px-4 p-2 rounded-4'>Request Invite</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    </>
  )
}
