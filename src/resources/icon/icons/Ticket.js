function Ticket({ width, height, ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || 20}
            height={height || 20}
            {...props}
            viewBox="0 0 24 24"
        >
            <g id="_01_align_center" data-name="01 align center">
                <path d="M18,0H14V1a2,2,0,0,1-4,0V0H6A3,3,0,0,0,3,3V24h7V23a2,2,0,0,1,4,0v1h7V3A3,3,0,0,0,18,0ZM15.874,22a4,4,0,0,0-7.748,0H5V17H8V15H5V3A1,1,0,0,1,6,2H8.126a4,4,0,0,0,7.748,0H18a1,1,0,0,1,1,1V15H16v2h3v5Z" />
                <rect x="10" y="15" width="4" height="2" />
            </g>
        </svg>
    );
}

export default Ticket;
