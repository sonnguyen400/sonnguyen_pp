function HouseBuilding({ width, height, ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={width || 20}
            height={height || 20}
            {...props}
        >
            <path d="M18,13.5c0-.276,.224-.5,.5-.5h1c.276,0,.5,.224,.5,.5s-.224,.5-.5,.5h-1c-.276,0-.5-.224-.5-.5Zm.5,4.5h1c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5h-1c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5ZM14.5,6h1c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5h-1c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5Zm4,0h1c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5h-1c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5Zm0,4h1c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5h-1c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5Zm-3-1h-1c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h1c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5ZM19.5,0h-5c-2.481,0-4.5,2.019-4.5,4.5v3c0,.276,.224,.5,.5,.5s.5-.224,.5-.5v-3c0-1.93,1.57-3.5,3.5-3.5h5c1.93,0,3.5,1.57,3.5,3.5v15c0,1.93-1.57,3.5-3.5,3.5h-3c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h3c2.481,0,4.5-2.019,4.5-4.5V4.5c0-2.481-2.019-4.5-4.5-4.5Zm-4.5,15.848v4.152c0,2.206-1.794,4-4,4H4c-2.206,0-4-1.794-4-4v-4.152c0-1.393,.63-2.685,1.727-3.544l3-2.348c1.633-1.277,3.915-1.277,5.546,0l3.001,2.348c1.097,.859,1.727,2.151,1.727,3.544Zm-1,0c0-1.083-.489-2.088-1.344-2.757l-3-2.348c-.635-.496-1.396-.745-2.156-.745s-1.521,.249-2.157,.745l-2.999,2.348c-.854,.669-1.344,1.674-1.344,2.757v4.152c0,1.654,1.346,3,3,3h7c1.654,0,3-1.346,3-3v-4.152Zm-4,.652v2c0,.827-.673,1.5-1.5,1.5h-2c-.827,0-1.5-.673-1.5-1.5v-2c0-.827,.673-1.5,1.5-1.5h2c.827,0,1.5,.673,1.5,1.5Zm-1,0c0-.275-.225-.5-.5-.5h-2c-.275,0-.5,.225-.5,.5v2c0,.275,.225,.5,.5,.5h2c.275,0,.5-.225,.5-.5v-2Z" />
        </svg>
    );
}

export default HouseBuilding;
