const RatingStar = () => {
    return (
        <div className="flex items-center gap-4">
            <div className="rating rating-md rating-half">
                <input type="radio" name="rating-5" className="rating-hidden" />
                <input type="radio" name="rating-5" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                <input type="radio" name="rating-5" className="bg-yellow-500 mask mask-star-2 mask-half-2 mr-1" />
                <input type="radio" name="rating-5" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                <input type="radio" name="rating-5" className="bg-yellow-500 mask mask-star-2 mask-half-2 mr-1" />
                <input type="radio" name="rating-5" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                <input type="radio" name="rating-5" className="bg-yellow-500 mask mask-star-2 mask-half-2 mr-1" />
                <input type="radio" name="rating-5" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                <input type="radio" name="rating-5" className="bg-yellow-500 mask mask-star-2 mask-half-2 mr-1" />
                <input type="radio" name="rating-5" className="bg-yellow-500 mask mask-star-2 mask-half-1" checked onChange={() => { }} />
                <input type="radio" name="rating-5" className="bg-yellow-500 mask mask-star-2 mask-half-2 mr-1" />
            </div>
            <p>4.8 (12 avis)</p>
        </div>
    )
}

export default RatingStar;