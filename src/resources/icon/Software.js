function Software({ width, height, ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 47.5 47.5" width={width || 20}
            height={height || 20}
            {...props} viewBox="0 0 47.5 47.5" ><defs><clipPath id="a"><path d="M0 38h38V0H0v38Z"></path></clipPath><clipPath id="b"><path d="M3 19c0-8.836 7.164-16 16-16s16 7.164 16 16-7.164 16-16 16S3 27.836 3 19m11.235 0A4.764 4.764 0 0 0 19 23.764 4.764 4.764 0 0 0 23.765 19a4.766 4.766 0 0 0-9.53 0"></path></clipPath></defs><g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)"><path fill="#8899a6" d="M0 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6m18-3c0-9.941-8.059-18-18-18s-18 8.059-18 18 8.059 18 18 18S18 6.941 18-3" transform="translate(19 22)"></path></g><g clip-path="url(#b)" transform="matrix(1.25 0 0 -1.25 0 47.5)"><path fill="#ccd6dd" d="m0 0-18 2v16h16L0 0zM0 0l18-2v-16H2L0 0Z" transform="translate(19 19)"></path><path fill="#f5f8fa" d="m0 0 2.125-19L18-18 0 0ZM0 0l-18 18 16 1L0 0Z" transform="translate(19 19)"></path></g></svg>
    );
}

export default Software;