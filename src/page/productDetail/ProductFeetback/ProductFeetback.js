import RatingStars from "~/component/base/RatingStart/RatingStarts";
import clsx from "clsx";
function ProductFeetback({ ...props }) {
    return (<div {...props}>
        <div className="flex justify-end">
            <h4 className=" text-gray-500 inline-block mr-5">Your Feedback</h4>
            <RatingStars className={clsx("text-lg")} />
        </div>
    </div>);
}

export default ProductFeetback;