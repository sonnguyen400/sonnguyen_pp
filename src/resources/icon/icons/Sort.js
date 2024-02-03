function Sort({ width, height, ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={width || 20}
            height={height || 20}
            {...props}
        >
            <path d="M24,3c0,.55-.45,1-1,1H1c-.55,0-1-.45-1-1s.45-1,1-1H23c.55,0,1,.45,1,1ZM7,20H1c-.55,0-1,.45-1,1s.45,1,1,1H7c.55,0,1-.45,1-1s-.45-1-1-1ZM15,11H1c-.55,0-1,.45-1,1s.45,1,1,1H15c.55,0,1-.45,1-1s-.45-1-1-1Z" />
        </svg>
    );
}

export default Sort;
