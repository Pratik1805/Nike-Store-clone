import ReviewCard from "../Componenets/ReviewCard"
import { reviews } from "../Constants"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold ">
        What Our 
        <span className="text-coral-red "> Customer's </span>
        Say?
      </h3>
      <p className=" inf0-text m-auto mt-4 max-w-lg text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio officiis pariatur omnis dolore ducimus maxime placeat cumque ratione deleniti possimus iure repellendus accusantium harum obcaecati error excepturi, libero laborum debitis.</p>
      <div className=" mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 ">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName = {review.customerName}
            rating = {review.rating}
            feedback = {review.feedback}/>
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews