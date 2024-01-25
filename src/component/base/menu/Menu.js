import clsx from "clsx";
import Button from "../button/Button";
import { NewF, NewS, BellF, BellS, BagS, BagF } from 'icon';
function Menu({ className, ...props }) {
    return (<div className={clsx("flex items-center", className)}>
        <Button
            icon={{
                content: <NewS />,
                react: <NewF />,
            }}
            className="p-1 flex flex-row"
        >
            <span className="max-lg:hidden xl:max-2xl:inline-block">News</span>
        </Button>
        <Button
            icon={{
                content: <BellS />,
                react: <BellF />,
            }}
            className="p-1 flex flex-row"
        >
            <span className="max-lg:hidden xl:max-2xl:inline-block">Notification</span>
        </Button>
        <Button
            icon={{
                content: <BagS />,
                react: <BagF />,
            }}
            className="p-1 flex flex-row"
            href="./cart"
        >
            <span className="max-lg:hidden xl:max-2xl:inline-block">Cart</span>
        </Button>
        <Button
            icon={{
                content: <BagS />,
                react: <BagS />,
            }}
            className="p-1 flex flex-row"
        >
            <span className="max-lg:hidden xl:max-2xl:inline-block">Personal</span>
        </Button>
    </div>);
}

export default Menu;