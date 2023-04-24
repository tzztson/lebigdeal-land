import { useState } from "react";

const ImageViewer = () => {
    const [imgNum, setImgNum] = useState(1);
    return (
        <div className="flex flex-col gap-4 max-xl:items-center w-full">
            <div className="w-[640px] h-[640px] max-md:w-full max-md:h-full">
                <img src={require(`../assets/img/png/${imgNum}.webp`)} className="w-full" alt="" />
            </div>
            <div className="flex gap-4 grid-cols-4 max-sm:grid max-[480px]:grid-cols-3">
                {
                    [...Array(6)].map((item: number, index: number) => {
                        return (
                            <div key={`main-${index}`} className="active:border-black  p-1 border-2 border-white" onClick={() => { setImgNum(index + 1) }} >
                                <img src={require(`../assets/img/png/${index + 1}.webp`)} className="w-16 h-16" alt="" />
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default ImageViewer;