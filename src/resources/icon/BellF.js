function BellF({ width, height, ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={width || 20}
            height={height || 20}
            {...props}
        >
            <path d="M7.424,21a4.99,4.99,0,0,0,9.152,0Z" />
            <path d="M22.392,12.549,20.656,6.826A9.321,9.321,0,0,0,2.58,7.28L1.232,12.817A5,5,0,0,0,6.09,19H17.607a5,5,0,0,0,4.785-6.451Z" />
        </svg>
    );
}

export default BellF;
