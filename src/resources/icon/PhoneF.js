function PhoneS({ width, height, ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            width={width || 20}
            height={height || 20}
            {...props} >
            <path d="M15,0h-6c-2.757,0-5,2.243-5,5v14c0,2.757,2.243,5,5,5h6c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-2,21h-2c-.552,0-1-.448-1-1s.448-1,1-1h2c.552,0,1,.448,1,1s-.448,1-1,1Z" />
        </svg>
    );
}

export default PhoneS;