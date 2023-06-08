import React, { useRef, useState } from "react"
import {FindJobs, Employers, Accordian} from './Home_Components/homeComponents'


export const FooterParagraphTwo = () => {
    let array = ['Accessibility at Indeed', 'Privacy Centre', 'Cookies', 'Privacy', 'Terms']

     let arrayMapper = array.map(item => <p className="text-dark btn p-0 my-1 me-2 my-0 fs-custom-14 tracking-normal d-inline-block me-lg-3 link-underline-dark btn text-dark border-custom rounded-0 p-0" key={item}>{item}</p>)

     return arrayMapper
}




export default function App() {
    const d = new Date();
    const date = useRef(d.getFullYear())

    let [whatForm, setWhatForm] = useState(false);
    let [whatFormInput, setWhatFormInput] = useState('');
    let [whereForm, setWhereForm] = useState(false);
    let [whereFormInput, setWhereFormInput] = useState('');
    let [clickedArticle, setClickedArticle] = useState(false);
    let [findJobs, setFindJobs] = useState(true);
    let [findEmployee, setFindEmployee] = useState(true);
    

    function preventSubmit(e) {
        e.preventDefault()
        setWhatFormInput('')
        setWhereFormInput('')
    }
 

    return (
        <div className="h-100 vw-100 p-0 m-0 bg-white font-indeed" >

            <div className="d-flex vw-100 mx-0 mt-3 mt-lg-2 justify-content-center">
                <form className="px-0 px-lg-5 w-max d-flex flex-column align-items-center" onSubmit={preventSubmit}>
                    <div className="w-max p-0 m-0 shadow-sm">
                    <section className={`px-2 py-1 bg-white  w-form rounded-top d-flex align-items-center  ${whatForm? 'border-blue': 'border-gray'}`}>                  
                        <button className="btn w-max me-0 pe-2 " type="button" title="search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M11.823 12.883a5.5 5.5 0 111.06-1.06l3.972 3.971a.5.5 0 010 .707l-.354.354a.5.5 0 01-.707 0l-3.971-3.972zM12.5 8.5a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                        </svg>
                        </button>
                        <input onFocus={() => setWhatForm(true)} onBlur={() => setWhatForm(false)} value={whatFormInput} onChange={(e) => setWhatFormInput(e.target.value)} className={`transition font-indeed bg-transparent border border-0  h-100 outline-none w-100 fs-custom text-dark`} type="text"placeholder="Job title, keywords, or company" />
                    </section>

                    <section className={`px-2 py-1 bg-white w-form  rounded-bottom d-flex align-items-center  ${whereForm? 'border-blue': 'border-gray'}`}>
                        <button className="btn w-max me-0 pe-2 " type="button" title="search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className={` bi bi-geo-alt-fill ${whereForm? 'text-white':'text-black'}`} viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                            </svg>
                        </button>
                        <input onFocus={() => setWhereForm(true)} onBlur={() => setWhereForm(false)} value={whereFormInput} onChange={(e) => setWhereFormInput(e.target.value)} className={`transition font-indeed bg-transparent border border-0  h-100 outline-none w-100 fs-custom text-dark`} type="text"placeholder="City or postcode" />
                    </section>
                    </div>
                    {/* <button className="p-2 mt-3 rounded text-center btn-indeed text-white w-100 border border-0" type="submit"><span className="fw-bold fs-custom ">Find Jobs</span></button> */}
                </form>
            </div>
            

            {findJobs && <FindJobs handleClick={() => setFindJobs(false)}/>}

            {findEmployee && <Employers handleClick={() => setFindEmployee(false)}/>}

            <article className="transition w-100 mt-4 py-3 pt-lg-2  p-lg-4 px-4 border-top-gray-two overflow-x-hidden" >
                <section className="d-flex my-2" onClick={() => setClickedArticle(prevA => !prevA)}>
                <div className="w-100">
                    <h1 className="fs-6 fw-bold tracking-normal">What's trending on Indeed</h1>
                    <p className="text-dark-gray fs-custom-14">See what's happening on Indeed to further your job search.</p>
                </div>
                <div className="w-max p-1 py-1 h-100 mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className={`transition bi bi-chevron-down ${clickedArticle? 'r-180' : ''}`} viewBox="0 0 16 16">
                    <g stroke="black" strokeWidth="2">
                        <path strokeLinecap="round" fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </g>
                    </svg>
                </div>
                </section> 
                {clickedArticle && <Accordian/>}  
            </article>
           

            <footer className="mt-3 pb-4 px-3 w-100 bg-white d-lg-none">
                <div>
                    <p className="fs-custom-14 text-dark my-0 tracking-normal">© {date.current} Indeed</p>
                    <FooterParagraphTwo/>
                </div>
            </footer>
        </div>
    )
}