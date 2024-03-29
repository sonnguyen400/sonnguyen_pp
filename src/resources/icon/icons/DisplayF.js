function DisplayS({ width, height, ...props }) {
    return (<svg
        xmlns="http://www.w3.org/2000/svg"
        width={width || 20}
        height={height || 20}
        {...props}
        viewBox="0 0 24 24"
    >
        <path d="m19,3H5C2.243,3,0,5.243,0,8v6c0,2.757,2.243,5,5,5h6v1h-3c-.552,0-1,.448-1,1s.448,1,1,1h8c.552,0,1-.448,1-1s-.448-1-1-1h-3v-1h6c2.757,0,5-2.243,5-5v-6c0-2.757-2.243-5-5-5Zm-4,9h-2v2c0,.552-.448,1-1,1s-1-.448-1-1v-2h-2c-.552,0-1-.448-1-1s.448-1,1-1h2v-2c0-.552.448-1,1-1s1,.448,1,1v2h2c.552,0,1,.448,1,1s-.448,1-1,1Z" />
    </svg>);
}

export default DisplayS;