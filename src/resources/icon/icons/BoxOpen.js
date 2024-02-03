function BoxOpen({ width, height, ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || 20}
            height={height || 20}
            {...props}
            viewBox="0 0 24 24"
        >
            <path d="M12.016,5.731L3.025,2.724,10.427,.257c1.026-.342,2.136-.342,3.162,0l7.419,2.473-8.992,3.001Zm-3.182,5.623l2.175-3.624L3.063,5.081c-.617-.206-1.293,.045-1.628,.602L.308,7.563c-.667,1.112-.133,2.555,1.097,2.965l5.081,1.694c.889,.296,1.865-.065,2.347-.868ZM3.008,2.718v.011l.017-.006-.017-.006ZM11.008,23.905V11.617l-.46,.766c-.742,1.236-2.044,1.945-3.415,1.945-.425,0-.856-.067-1.28-.209l-3.845-1.281v4.558c0,2.152,1.377,4.063,3.419,4.743l4.435,1.478c.374,.121,.758,.22,1.146,.287ZM23.728,7.596l-1.148-1.913c-.334-.557-1.011-.808-1.628-.602l-7.945,2.648,2.175,3.624c.482,.804,1.458,1.165,2.347,.868l5.118-1.706c1.211-.404,1.737-1.825,1.08-2.92Zm-6.845,6.733c-1.371,0-2.673-.708-3.415-1.945l-.46-.766v12.282c.422-.074,.84-.182,1.236-.314h.01l4.335-1.446c2.042-.681,3.419-2.591,3.419-4.743v-4.559l-3.845,1.282c-.424,.142-.855,.209-1.28,.209Z" />
        </svg>
    );
}

export default BoxOpen;
