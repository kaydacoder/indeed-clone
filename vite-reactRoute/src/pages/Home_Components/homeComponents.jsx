import React, { createContext, useContext, useState } from 'react';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

// the find jobs section
export function FindJobs({handleClick}) {
    return (
        <div className='px-3 overflow-x-hidden'>
        <section className="w-100 mt-3 font-indeed h-max overflow-x-hidden">
        <article className="bg-white shadow-sm border-gray w-100 h-max rounded overflow-x-hidden">
            <div className="d-flex position-relative z-1 h-100 ">
            <div className="w-100 h-100 p-3 py-4">
                <h1 className="fs-5 fw-bold text-dark mb-2 tracking-normal">Find Jobs wherever you are</h1>
                <p className="text-dark tracking-normal mb-2 text-wrap">Use the mobile app to search and save jobs while on the go.</p>
                <span className="fw-bold text-indeed btn p-0"><span className="me-1">Get the Indeed app </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <g stroke="#2557a7" strokeWidth="1">
                        <path strokeLinecap="round" fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                    </g>
                    </svg>  
                </span>
            </div>
            <div className="h-100 w-max d-flex flex-column-reverse p-0 m-0 bg-transparent">
                <div className="text-end h-100">
                    <button className="btn h-100 p-1 px-3">
                        <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-x-lg text-dark" viewBox="0 0 16 16">
                            <g fill="none" stroke="black" strokeWidth="2">
                                <path strokeLinecap="square" d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                            </g>
                        </svg>
                    </button>
                    <div className="my-5 my-lg-4 py-3 py-sm-1 py-md-1"></div>
                    <img src="https://c03.s3.indeed.com/mosaic-providers-homepage/dist/FindJobsLocation_Icon.eee13d72c475607394ac.svg" className="indeed-img " alt=""/>
                </div>
            </div>
            </div>

        </article>
       
        </section>
        </div>
    )
}

// the Employers section is here
export function Employers({handleClick}) {
    return(
        <div className='px-3 overflow-x-hidden'>
        <section className="w-100 mt-3 font-indeed h-max overflow-x-hidden">
        <article className="bg-white shadow-sm border-gray w-100 h-max rounded overflow-x-hidden">
            <div className="d-flex position-relative z-1 h-100 ">
            <div className="w-100 h-100 p-3 py-4">
                <h1 className="fs-5 fw-bold text-dark mb-3 tracking-normal">Employers, your next hire is here</h1>
                <span className="fw-bold text-indeed btn p-0 "><span className="me-1">Post a job</span> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <g stroke="#2557a7" strokeWidth="1">
                            <path strokeLinecap="round" fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                        </g>
                    </svg>  
                </span>
            </div>
            <div className="h-100 w-max d-flex flex-column-reverse p-0 m-0 bg-transparent">
                <div className="text-end h-100">
                    <button className="btn h-100 p-2 px-3">
                        <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-x-lg text-dark" viewBox="0 0 16 16">
                            <g fill="none" stroke="black" strokeWidth="1">
                                <path strokeLinecap="square" d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
            </div>

        </article>
       
        </section>
        </div>
    )
}


const accordianArray = [
    {
    title:'Trending Searches',
    isOpen: false,
    links: ['Full time Aberdeen','Gayton', 'Full time Portsmouth','Full time Lincoln','Full time Derby',
     'Full time Wolverhampton','Aston','Barnetby DN38', 'Full time Bristol','Full time Coventry']
    }, 
    {
    title:'Trending Jobs',
    isOpen: false,
    links: ['Freelance Remote','Business Analyst Remote', 'Web Developer Remote','Customer Service Advisor Remote','Data Entry Remote',
     'Work From Home No Experience Remote','Work From Home £35,000 Remote','UK Remote Working Remote', 'Fully Remote Remote','Work From Home £25,000 Remote']
    }, 
    {
    title:'Popular Cities',
    isOpen: false,
    links: ['Nottingham','Cardiff', 'Bradford','Aberdeen','Newcastle Upon Tyne', 'Remote','Glasgow','Swindon', 'Bristol','Edinburgh']
    },
    {
    title:'Popular Companies',
    isOpen: false,
    links: ['Lidl','National Trust', 'Sainsburys','Greggs','Morrisons', 'Chelsea Westminster Hospital','Aldi','McDonalds', 'Asda','Next PLC']
    }
]

const ATemplate = (props) => {
    let [rotateIcon, setRotateIcon] = useState(false);
    let {links} = props;
 

    return (
        <div className='overflow-x-hidden'>
        <article className="mt-0 py-2 pt-lg-2  p-lg-5 p-xl-0 py-xl-3  mx-0 mx-md-1 mx-xl-0 ps-xl-0 border-bottom-gray mb-3" onClick={() => setRotateIcon(pi => !pi)}>
            <section className="d-flex">
            <div className="w-100">
                <h1 className="fs-6 fw-bold tracking-normal">{props.title}</h1>
            </div>
            <div className="w-max py-1 py-0 h-100 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className={`transition bi bi-chevron-down ${rotateIcon? 'r-180': ''}`} viewBox="0 0 16 16">
                <g stroke="black" strokeWidth="2">
                    <path strokeLinecap="round" fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </g>
                </svg>
            </div>
            </section>   
        </article>
        {rotateIcon && links.map (param => <Link to={'/'}><p className='btn fs-custom-14 d-block p-0 bg-transparent text-indeed ms-3  w-max' key={nanoid()}>{param}</p></Link> )}
        </div>
    )
}



export const Accordian = () => {
        

    return(
        <div className="transition mb-4 w-100 overflow-x-hidden">
            {accordianArray.map(item => <ATemplate title={item.title}  key={nanoid()} item={item.title} links={item.links}/>)}     
        </div>
    )
}