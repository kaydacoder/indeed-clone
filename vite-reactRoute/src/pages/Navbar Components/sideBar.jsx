import {showingSideBar, closingSideBar} from '../NavBar';
import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";




export default function App() {

    const showSideBar = useContext(showingSideBar);
    const setShowSideBar = useContext(closingSideBar);

    return(
        <div className={`transition font-indeed bg-white shadow-lg vh-100 z-2 position-fixed end-0 overflow-hidden ${showSideBar? 'w-66': 'w-0'}`}>
        <div className=" text-end mb-2 p-2">
            <button title="exit" className="bg-transparent border border-0" onClick={() => setShowSideBar(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-lg text-black" viewBox="0 0 16 16">
                <g stroke="black" strokeWidth="0.5">
                    <path strokeLinecap="square" d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </g>
            </svg>
            </button>
        </div>

        <Link to="/" className='text-dark link-offset-2 link-underline link-underline-opacity-0' onClick={() => setShowSideBar(false)}>
            <section className='d-flex px-3 pt-2 pb-0 border-bottom-gray'>
            <p className=' fw-bolder tracking-normal text dark w-100'>Find Jobs</p>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
            <g stroke="black" strokeWidth="0.5">
                <path stroke="black" fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </g>
            </svg>
            </div>
            </section>
        </Link>

        <Link to="company-reviews" className='text-dark link-offset-2 link-underline link-underline-opacity-0' onClick={() => setShowSideBar(false)}>
            <section className='d-flex p-3 pb-0 border-bottom-gray'>
            <p className=' fw-bold tracking-normal text dark w-100'>Company reviews</p>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
            <g stroke="black" strokeWidth="0.5">
                <path stroke="black" fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </g>
            </svg>
            </div>
            </section>
        </Link>

        <Link to="salary-guide" className='text-dark link-offset-2 link-underline link-underline-opacity-0' onClick={() => setShowSideBar(false)}>
            <section className='d-flex p-3 pb-0 border-bottom-gray'>
            <p className=' fw-bold tracking-normal text dark w-100'>Salary guide</p>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
            <g stroke="black" strokeWidth="0.5">
                <path stroke="black" fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </g>
            </svg>
            </div>
            </section>
        </Link>

        <Link to="employers-or-post-job" className='text-dark link-offset-2 link-underline link-underline-opacity-0' onClick={() => setShowSideBar(false)}>
            <section className='d-flex p-3 pb-0 border-bottom-gray'>
            <p className='fw-bold tracking-normal text dark w-100'>Employers</p>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
            <g stroke="black" strokeWidth="0.5">
                <path stroke="black" fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </g>
            </svg>
            </div>
            </section>
        </Link>

        <div className='bg-light p-1'></div>

        <Link to="sign-in" className='text-dark link-offset-2 link-underline link-underline-opacity-0' onClick={() => setShowSideBar(false)}>
            <section className='d-flex p-3 pb-0 border-bottom-gray'>
            <p className=' fw-bold tracking-normal text dark w-100'>Create your CV</p>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
            <g stroke="black" strokeWidth="0.5">
                <path stroke="black" fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </g>
            </svg>
            </div>
            </section>
        </Link>

        <Link to="/" className='text-dark link-offset-2 link-underline link-underline-opacity-0' onClick={() => setShowSideBar(false)}>
            <section className='d-flex p-3  border-bottom-gray'>
            <div className='text dark w-100 ls-1'>
                <p className=' fw-bold tracking-normal'>Country and language</p>
                <span className='text-gray fs-12'>GB</span> <span className='text-gray fs-custom-14'>United Kingdom</span>
                </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
            <g stroke="black" strokeWidth="0.5">
                <path stroke="black" fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </g>
            </svg>
            </div>
            </section>
        </Link>

        <Link to="/" className='text-dark link-offset-2 link-underline link-underline-opacity-0' onClick={() => setShowSideBar(false)}>
            <section className='d-flex p-3 pb-0 border-bottom-gray'>
            <p className=' fw-bold tracking-normal text dark w-100'>Help Centre</p>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
            <g stroke="black" strokeWidth="0.5">
                <path stroke="black" fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </g>
            </svg>
            </div>
            </section>
        </Link>

        </div>
    )
}