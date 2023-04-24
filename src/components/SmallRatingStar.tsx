const SmallRatingStar = (props: any) => {
    return (
        <div className={`rating rating-${props.size} flex gap-1`}>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f3c621]" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f3c621]" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f3c621]" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f3c621]" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f3c621]" checked onChange={() => { }} />
        </div>
    )
}

export default SmallRatingStar;