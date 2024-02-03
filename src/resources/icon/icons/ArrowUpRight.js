function ArrowUpRight({ width, height, ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={width || 20}
            height={height || 20}
            {...props}
        >
            <path d="M24,2V14h-2V3.414L1.457,23.957,.043,22.543,20.586,2H10V0h12c1.103,0,2,.897,2,2Z" />
        </svg>
    );
}

export default ArrowUpRight;
