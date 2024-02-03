function Menu({ width, height, ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || 20}
            height={height || 20}
            {...props}
            viewBox="0 0 24 24"
        >
            <rect y="11" width="24" height="2" rx="1" />
            <rect y="4" width="24" height="2" rx="1" />
            <rect y="18" width="24" height="2" rx="1" />
        </svg>
    );
}

export default Menu;