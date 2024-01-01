import Carousel, { CAROUSEL_STYLE_1 } from "~/components/base/Carousel";
import Card from "~/components/base/Card";
import ProductItem from "~/components/base/ProductItem";
function HomePage({ children }) {
    return (<div className="w-full max-w-screen-xl mx-auto">
        <Carousel
            type={CAROUSEL_STYLE_1} className='w-full h-64 '
        >
            <div className="bg-black w-full h-full rounded-2xl"></div>
            <div className=" bg-white w-full h-full rounded-2xl"></div>
            <div className="  bg-red-600 w-full h-full rounded-2xl"></div>
        </Carousel>
        <Card>
            <ProductItem className="w-1/5 m-3" />
        </Card>
    </div>);
}

export default HomePage;