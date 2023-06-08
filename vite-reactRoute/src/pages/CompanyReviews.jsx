import { useState, useRef } from "react";
import { fakeData, CustomerReview,comparingArray, CompareCompanies } from "./Company-Reviews/artificialData";
import { nanoid } from 'nanoid';
import { menuArray } from "./SignUp";

const FooterParagraphTwo = () => {
    let array = ['Anti-Slavery statement','Accessibility at Indeed', 'Privacy Centre', 'Cookies', 'Privacy', 'Terms']

     let arrayMapper = array.map(item => <p className="text-dark btn p-0 m-2 my-1 text-start my-0 fs-custom-14 tracking-normal d-block d-sm-inline-block link-underline-dark btn text-dark border-custom rounded-0 p-0" key={item}>{item}</p>)

     return arrayMapper
}

export default function App() {
    let [outline, setOutline] = useState('');

    const d = new Date();
    const date = useRef(d.getFullYear())
    let [emailInput, setEmailInput] = useState('');


    return (
        <div className="h-100 vw-100 p-0 font-indeed">
            <main className="m-3 mt-4">
                <h1 className="fw-bolder py-0">Find great places to work</h1>
                <p className="text-gray fs-custom-14 py-0">Get access to millions of company reviews</p>

                <form action="" className="mt-4">
                    <label htmlFor="search-input" className="fw-bolder">Company name or job title</label>
                    <section>
                        <div className={`transition d-flex align-items-center w-100 bg-transparent rounded-2 border-gray-two my-3 mb-2 ${outline}`} >
                            <input id="search-input" onFocus={() => setOutline(prev => prev === 'input-outline-red'? prev : 'input-outline')}
                            onBlur={() => setOutline(prev => prev === 'input-outline-red'? prev : 'input-outline-blur')} type="text" 
                            className="p-2 px-3 border-0 w-100 input-outline-none"/>
                            <span className="p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="24" role="img" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="text-gray">
                                    <path fillRule="evenodd" d="M13.335 14.749a6.5 6.5 0 111.414-1.414l6.105 6.104a.5.5 0 010 .707l-.708.708a.5.5 0 01-.707 0l-6.104-6.105zM14 9.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" clipRule="evenodd"></path>
                                </svg>
                            </span>
                        </div>
                        <button type="submit" className={`transition d-flex w-100 mt-0 p-2 px-3 btn-indeed rounded border-gray text-white fw-bold d-flex justify-content-center align-items-center `}>
                            <span className="me-1">Find Companies</span>
                        </button>
                    </section>
                </form>
                <div className="d-flex justify-content-center mt-3">
                    <p className="border-bottom border-primary text-indeed w-max text-center">Do you want to search for salaries?</p>
                </div>

                <section className="mt-5">
                    <h3 className="fw-bolder fs-5">Popular companies</h3>
                    <div>
                       {
                        fakeData.map(item => {
                        return <CustomerReview title={item.title} src={item.src} numOfReviews={item.numOfReviews}
                             starRatingCode={item.starRatingCode} key={item.id}/>})
                       }
                    </div>
                </section>

                <section className="mt-5">
                    <h3 className="fw-bolder fs-5">Compare working at</h3>
                    <div>
                        {comparingArray.map(item => 
                        <CompareCompanies src={item.companies[0].src} title={item.companies[0].title} rating={item.companies[0].rating} reviewNum={item.companies[0].reviewNum}
                        srcTwo={item.companies[1].src} titleTwo={item.companies[1].title} ratingTwo={item.companies[1].rating} reviewNumTwo={item.companies[1].reviewNum} key={nanoid()}/>)}
                    </div>
                </section>
            </main>

            <footer className=" w-100 h-max text-indeed mt-5">
            <div className="pe-sm-5 me-3">
                {menuArray.map(item => <p className={`fs-custom-14 d-block d-sm-inline-block m-2 my-1 py-0 p-0 text-start btn w-max ${item === 'Work at Indeed'? 'text-indeed border-0 border-bottom border-primary' :'text-dark border-0'} rounded-0`} key={nanoid()}>{item}</p>)}
            </div>
            <div className="mt-5 pe-sm-5">
                <p className="fs-custom-14 text-dark m-2 my-0 tracking-normal  d-inline-block">© {date.current} Indeed</p>
                <FooterParagraphTwo/>
            </div>
        </footer>
        </div>
    )
}