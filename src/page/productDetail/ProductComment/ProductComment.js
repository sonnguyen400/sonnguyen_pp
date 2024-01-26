import UserComment from "./UserComment/UserComment";

function ProductComment({ ...props }) {
    return (<div {...props}>
        <h4 className=" text-gray-500 text-sm">Question & Answer</h4>
        <form className="px-1">
            <div ><textarea className="w-full border border-gray-400 p-4 rounded-lg" placeholder="Enter your question"></textarea></div>
            <div className="w-[calc(100% + 0.25rem)] -mx-1 mt-1">
                <div className="w-5/12 px-1 inline-block"><input className=" w-full border border-gray-400 p-2 rounded-lg" placeholder="Enter your name" /></div>
                <div className="w-5/12 px-1 inline-block"> <input className=" w-full border border-gray-400 p-2 rounded-lg" placeholder="Your Email / Phone number" /></div>
                <div className="w-2/12 px-1 inline-block"> <button type="submit" className=" bg-blue-500 w-full rounded-lg text-white py-2">Gửi</button></div>
            </div>
        </form>
        <div>
            <UserComment />
            <UserComment />
        </div>
    </div>);
}

export default ProductComment;