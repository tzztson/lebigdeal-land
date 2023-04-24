const ProgressBar = (props: any) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
                <div className="rating flex items-center ">
                 <p className="text-lg pr-2">5</p>
                 <input type="radio" name="rating-2" className="mask mask-star-2 bg-gray-400" />
                </div>
                <div className="h-4 bg-gray-200 w-64 max-sm:w-48">
                    <div className={`h-4 bg-yellow-400 w-[80%]`}></div>
                </div>
                <p className="border border-gray-300 rounded-full px-4">10</p>
            </div>
            <div className="flex items-center gap-4">
                <div className="rating flex items-center ">
                    <p className="text-lg pr-2">4</p>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-gray-400" />
                </div>
                <div className="h-4 bg-gray-200 w-64 max-sm:w-48">
                    <div className={`h-4 bg-yellow-400 w-[20%]`}></div>
                </div>
                <p className="border border-gray-300 rounded-full px-4">2</p>
            </div>
            <div className="flex items-center gap-4">
                <div className="rating flex items-center ">
                    <p className="text-lg pr-2">3</p>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-gray-400" />
                </div>
                <div className="h-4 bg-gray-200 w-64 max-sm:w-48">
                    <div className={`h-4 bg-yellow-400 w-[0%]`}></div>
                </div>
                <p className="border border-gray-300 rounded-full px-4">0</p>
            </div>
            <div className="flex items-center gap-4">
                <div className="rating flex items-center ">
                    <p className="text-lg pr-2">2</p>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-gray-400" />
                </div>
                <div className="h-4 bg-gray-200 w-64 max-sm:w-48">
                    <div className={`h-4 bg-yellow-400 w-[0%]`}></div>
                </div>
                <p className="border border-gray-300 rounded-full px-4">0</p>
            </div>
            <div className="flex items-center gap-4">
                <div className="rating flex items-center ">
                    <p className="text-lg pr-2">1</p>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-gray-400" />
                </div>
                <div className="h-4 bg-gray-200 w-64 max-sm:w-48">
                    <div className={`h-4 bg-yellow-400 w-[0%]`}></div>
                </div>
                <p className="border border-gray-300 rounded-full px-4">0</p>
            </div>
        </div>
    )
}

export default ProgressBar;