function ComputerF({ width, height, ...props }) {
    return (<svg
        xmlns="http://www.w3.org/2000/svg"
        width={width || 20}
        height={height || 20}
        {...props}
        viewBox="0 0 24 24"
    >
        <path d="m21.5,6h-7c-1.379,0-2.5,1.122-2.5,2.5v15.5h12v-15.5c0-1.378-1.121-2.5-2.5-2.5Zm-3.5,3c.828,0,1.5.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5.672-1.5,1.5-1.5Zm0,13c-1.933,0-3.5-1.567-3.5-3.5s1.567-3.5,3.5-3.5,3.5,1.567,3.5,3.5-1.567,3.5-3.5,3.5Zm3-18h-7c-2.209,0-4,1.791-4,4v13h-5v-2h3v-2H0V3C0,1.343,1.343,0,3,0h15c1.657,0,3,1.343,3,3v1Zm-4.5,14.5c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Z" /></svg>
    );
}

export default ComputerF;