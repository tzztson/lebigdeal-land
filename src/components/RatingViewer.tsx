import SmallRatingStar from "./SmallRatingStar";

const RatingViewer = (props: any) => {
    return (
        <div>
            <div className="flex items-center gap-2">
                <p>{props.title}</p>
                <p>Vérifié </p>
            </div>
            <SmallRatingStar size="sm" />
            <p>{props.content}</p>
            {props.image && <img src={props.image} alt="" />}
            <p>il y a 2 semaines</p>
        </div>
    )
}

export default RatingViewer;