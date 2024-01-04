import Carousel, { CAROUSEL_STYLE_1 } from "~/components/base/Carousel";
import Card from "~/components/base/Card";
import ProductItem from "~/components/base/ProductItem";
import ScrollList from "src/components/base/container/ScrollList/ScrollList";
function HomePage({ children }) {
    return (<div className="w-full max-w-screen-xl mx-auto">
        <Carousel
            type={CAROUSEL_STYLE_1} className='w-full h-64 '
        >
            <div className="bg-black w-full h-full rounded-2xl"></div>
            <div className=" bg-white w-full h-full rounded-2xl"></div>
            <div className="  bg-red-600 w-full h-full rounded-2xl"></div>
        </Carousel>
        <ScrollList className='relative w-full px-14'>
            <ProductItem className="mx-6 w-50" />
            <ProductItem className="mx-6 w-50" />
            <ProductItem className="mx-6 w-50" />
            <ProductItem className="mx-6 w-50" />
            <ProductItem className="mx-6 w-50" />
            <ProductItem className="mx-6 w-50" />
            <ProductItem className="mx-6 w-50" />
            <ProductItem className="mx-6 w-50" />
            {/* <DynamicList className='h-full ' layout="row">
                <div className="ml-2 w-4 h-4 rounded inline-block bg-red-500"></div>
                <div className="ml-2 w-4 h-4 rounded inline-block bg-red-500"></div>
                <div className="ml-2 w-4 h-4 rounded inline-block bg-red-500"></div>
                <div className="ml-2 w-4 h-4 rounded inline-block bg-red-500"></div>
                <div className="ml-2 w-4 h-4 rounded inline-block bg-red-500"></div>
                <div className="ml-2 w-4 h-4 rounded inline-block bg-red-500"></div>
                <div className="ml-2 w-4 h-4 rounded inline-block bg-red-500"></div>
            </DynamicList> */}
        </ScrollList>

    </div>);
}

export default HomePage;