import { nanoid } from 'nanoid';


const fullStar = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-star-fill text-custom-star" viewBox="0 0 16 16">
<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>

const emptyStar = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-star text-custom-star" viewBox="0 0 16 16">
   <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg>

const halfStar = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-star-half text-custom-star" viewBox="0 0 16 16">
<path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
</svg>

export const fakeData = [
    {
        title: 'Starbucks',
        src: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/4b0619f4dbd9d79db94efcbc41fc7e28',
        numOfReviews: '59,763' ,
        id : nanoid(),
        starRatingCode: [fullStar,fullStar,fullStar,halfStar,emptyStar]
    },
    {
        title: 'Waitrose & Partners',
        src: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/fe77a54113972845c3f415102b892e49',
        numOfReviews: '2,924' ,
        id : nanoid(),
        starRatingCode: [fullStar,fullStar,fullStar,halfStar,emptyStar]
    },
    {
        title: 'Home Bargains',
        src: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/e0c28bfa5bf7ffbf8ceff90b5f4104e2',
        numOfReviews: '2,755' ,
        id : nanoid(),
        starRatingCode: [fullStar,fullStar,halfStar,emptyStar,emptyStar]
    },
    {
        title: 'Home Instead',
        src: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/88363dd7d9bbaedafaebabc5dfe24a6f',
        numOfReviews: '7,979' ,
        id : nanoid(),
        starRatingCode: [fullStar,fullStar,fullStar,fullStar,halfStar]
    },
    {
        title: 'Burger King',
        src: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/abc5dab8caaee300de12022cd2c3fc91',
        numOfReviews: '52,177' ,
        id : nanoid(),
        starRatingCode: [fullStar,fullStar,fullStar,emptyStar,emptyStar]
    },
    {
        title: 'Co-op Group',
        src: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/9ee28568a47002ead1a11da1ea5a1c29',
        numOfReviews: '4,625' ,
        id : nanoid(),
        starRatingCode: [fullStar,fullStar,fullStar,emptyStar,emptyStar]
    },
    {
        title: "McDonald's",
        src: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/dea0fd6be6add21b96253edc9e9a718c',
        numOfReviews: '223,689' ,
        id : nanoid(),
        starRatingCode: [fullStar,fullStar,fullStar,emptyStar,emptyStar]
    },
    {
        title: 'Wm Morrisons Supermarkets',
        src: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/2b96549017093f75c3c9de92a2763b99',
        numOfReviews: '6,084' ,
        id : nanoid(),
        starRatingCode: [fullStar,fullStar,fullStar,emptyStar,emptyStar]
    },
    {
        title: 'Lloyds Banking Group',
        src: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/b302bb0a07b8106bdc6a6c3ed0f56468',
        numOfReviews: '1,763' ,
        id : nanoid(),
        starRatingCode: [fullStar,fullStar,fullStar,fullStar,halfStar]
    },
]

function Stars({starRatingCode}) {
    return(
        <span className="my-0 py-0 btn border-0 p-0">
            {starRatingCode.map(item => <span key={nanoid()}>{item}</span>)}
      </span> 
     )
}

export function CustomerReview(props) {
    return (
        <article className={`${props.title !== 'Lloyds Banking Group' ?'border-bottom-gray': null} pt-4 pb-3`}>
        <div className="d-flex">
            <img src={props.src} width="48px" height="48px" className="shadow-custom rounded" alt="" />
            <div className="ms-3">
                <p className="fw-bold mb-0 btn border-0 p-0">{props.title}</p>
                <p className="d-flex align-items-end mt-0 pt-0">
                    <Stars starRatingCode={props.starRatingCode}/> 
                    <span className="ms-2 fs-custom-14 text-indeed btn p-0 border-0">{props.numOfReviews} reviews</span>
                </p>
            </div>
        </div>
        <div className="d-flex">
            <p className="p-0 m-0 me-4 btn border-0 text-dark-gray fs-custom-14">Salaries</p>
            <p className="p-0 m-0 me-4 btn border-0 text-dark-gray fs-custom-14">Questions?</p>
            <p className="p-0 m-0 me-4 btn border-0 text-dark-gray fs-custom-14">Open jobs</p>
        </div>
    </article>
    )
}


export const comparingArray = [
    {
    companies:[
        {
            src:'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/fb993a15058a5869bc6e4a51256db565',
            title:'ASDA',
            rating: '3.3',
            reviewNum: '10.3K'
        },
        {
            src:'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/ecef75a6cb6a494740d9497027192402',
            title:'H&M',
            rating: '4.6',
            reviewNum: '6.4K'
        }
    ]
    },
    {
        companies:[
            {
                src:'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/ecd79dfaaf30c40661e708c5e8db59e0',
                title:'BT',
                rating: '4.3',
                reviewNum: '12.1K'
            },
            {
                src:'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/223bd1c9cd96f110bd281191c0f4eda6',
                title:'Tesco',
                rating: '3.1',
                reviewNum: '19.4K'
            }
        ]
    },
    {
        companies:[
            {
                src:'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/76b365e481c96410a45876ea3fcf78d9',
                title:'Barclays',
                rating: '2.8',
                reviewNum: '4.3K'
            },
            {
                src:'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/9d833438e509b613d19e913fdb5724f8',
                title:'Ryanair',
                rating: '2.5',
                reviewNum: '7.4K'
            }
        ]
    },
    {
        companies:[
            {
                src:'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/370339b4379d12c11d941354df22a6e2',
                title:'JD Sports Fashion',
                rating: '4.7',
                reviewNum: '22.5K'
            },
            {
                src:'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/e17da8e5140c656cac3e64592efc3109',
                title:'The Range',
                rating: '3.5',
                reviewNum: '3.9K'
            }
        ]
    },
]

export function CompareCompanies(props) {

    return(
        <div className="border-light border rounded d-flex align-items-center p-3 py-4 my-3">
                       <div className="w-100 d-flex flex-column align-items-center">
                        <img src={props.src} width="48px" height="48px" alt="" className="shadow-custom rounded" />
                        <div className="d-flex flex-column align-items-center mt-2">
                            <p className="fs-custom-14 py-0 my-0 fw-bold">{props.title}</p>
                            <div className='d-flex flex-column flex-sm-row align-items-center justify-content-center'>
                                <p className="fs-custom-14 py-0 my-0 fw-bold d-flex align-items-center h-max">
                                    <span className='p-0'>{props.rating}</span>
                                    <span className='mx-1 pb-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-custom-star" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                    </span>
                                </p>
                                <p className="fs-12 py-0 my-0 text-gray">{props.reviewNum} reviews</p>
                            </div>
                        </div>
                       </div>
                       <p className="text-dark">vs</p>
                       <div className="w-100 d-flex flex-column align-items-center">
                        <img src={props.srcTwo} width="48px" height="48px" alt="" className="shadow-custom rounded" />
                        <div className="d-flex flex-column align-items-center mt-2">
                            <p className="fs-custom-14 py-0 my-0 fw-bold">{props.titleTwo}</p>
                           <div className='d-flex flex-column flex-sm-row align-items-center justify-content-center'>
                            <p className="fs-custom-14 py-0 my-0 fw-bold d-flex align-items-center h-max">
                                    <span className='p-0 mb-0'>{props.ratingTwo}</span>
                                    <span className='mx-1 pb-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-custom-star" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                    </span>
                                </p>
                                <p className="fs-12 py-0 my-0 text-gray">{props.reviewNumTwo} reviews</p>
                           </div>
                        </div>
                       </div>
                    </div>
    )
}