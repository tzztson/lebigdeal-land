const ImageIntroduction = (props: any) => {
    return (
        <div className="flex flex-col items-center justify-center gap-12">
            <img src={props.image} className="w-96" alt="" />
            <p className="">{props.title}</p>
        </div>
    )
}

export default ImageIntroduction;