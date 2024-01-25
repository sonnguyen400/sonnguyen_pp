function ComputerF({ width, height, ...props }) {
    return (<svg
        xmlns="http://www.w3.org/2000/svg"
        width={width || 20}
        height={height || 20}
        {...props}
        viewBox="0 0 24 24"
    >
        <path d="M5,19h6v2H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2H13V19h6a5.009,5.009,0,0,0,4.9-4H.1A5.009,5.009,0,0,0,5,19Z" /><path d="M19,1H5A5.006,5.006,0,0,0,0,6v7H24V6A5.006,5.006,0,0,0,19,1Z" />
    </svg>);
}

export default ComputerF;