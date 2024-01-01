import clsx from "clsx";
function DynamicList({ children, layout, ...props }) {
    let { className, ...properties } = props;
    console.log(className)
    return (<div {...properties} className={className} >
        <div className={clsx("flex scrollbar w-full ",
            {
                "flex-row": layout === "row",
                "flex-col": layout === "col",
                "hover:w-max h-full": layout === "row",
                "hover:h-max w-full": layout === "col"
            }
        )}>
            {children}
        </div>
    </div >);
}

export default DynamicList;