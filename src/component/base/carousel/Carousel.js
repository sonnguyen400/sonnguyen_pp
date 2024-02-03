import { TECarousel, TECarouselItem } from 'tw-elements-react';
function Carousel({ children, ...props }) {
    return (
        <div className="relative ">
            <TECarousel showControls showIndicators className="z-[1]" ride="carousel">
                <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                    {children.map((item, index) => (
                        <TECarouselItem
                            itemID={index + 1}
                            key={index}
                            className="relative float-left -mr-[100%] hidden w-full h-96 transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        >
                            {item}
                        </TECarouselItem>
                    ))}
                </div>
            </TECarousel>
        </div>
    );
}

export default Carousel;
