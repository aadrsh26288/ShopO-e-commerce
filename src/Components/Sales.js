import React from 'react'
import { Link } from 'react-router-dom'
import { GiTicket, GiDiamondRing, GiHeartPlus, GiSpiralArrow } from 'react-icons/gi';
import { FaStar } from 'react-icons/fa';

const Sales = () => {

  const reviews = [
    {
      name: 'John Doe',
      title: 'Great product!',
      review:
        'I\'ve been using this product for a few months now and I\'m really impressed with it. The quality is great and it\'s been really helpful for my work. Highly recommend!'
    },
    {
      name: 'Jane Smith',
      title: 'Excellent service!',
      review:
        'I recently ordered from this website and the service was excellent. The product arrived quickly and was exactly as described. I will definitely be ordering from here again.'
    },
    {
      name: 'Bob Johnson',
      title: 'Awesome experience!',
      review:
        'I had an awesome experience with this company. Their customer service was top-notch and they went above and beyond to make sure I was satisfied with my purchase. Would definitely recommend!'
    }
  ];
  return (
    <div className="lg:-mt-10 ">
      <div className="flex flex-col justify-ceter items-center  bg-[url('https://editorial.fidcdn.net/cdn-cgi/image/width=960,height=539,fit=cover,format=auto,dpr=1.5,gravity=0.4766081871345029x0.29044834307992207/cms/dam/jcr:77431d8f-7d9b-4d13-921d-f88d79ff7c72/trend-teddy-jackets-unisex-header-cp.jpg')] bg-no-repeat h-[500px] pt-20 bg-center">
        <div className='mt-14 text-[#FFBB38] flex flex-col items-center justify-center'>
          <h1 className='text-6xl font-bold aleo text-center '>Where woud you like to start ?</h1>
          <Link to='/shop'><button className='px-10 p-2 text-lg font-semibold mt-5 arch bg-black text-white'>Take a Look</button></Link>  
        </div>
      </div>
  
  <div className="bg-gray-100 py-12 arch">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 flex flex-col justify-center items-center shadow"
            >
              <div className="">
             <img src="https://source.unsplash.com/random/?person" alt="Free unsplash image" className='h-[100px]'></img>
              </div>
              <h3 className="text-lg font-bold mb-2">{review.title}</h3>
              <p className="text-gray-700 text-center">{review.review}</p>
              <p className="text-gray-700 text-center mt-4">- {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Sales