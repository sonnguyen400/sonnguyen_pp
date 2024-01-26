import placehoder from 'image/placehoder.webp';
function UserComment({ content }) {

    return (<div className='mt-4'>
        <div className=' text-[14px]'>
            <div className='flex flex-row items-center'>
                <div className="w-8 h-8 rounded-lg overflow-hidden">
                    <img alt="test" className='w-full h-full object-cover' src={placehoder} />
                </div>
                <div className='pl-4'>fhgjhk</div>
            </div>
            <div className='mt-2'>
                <div >
                    <span className='max-w-72 line-clamp-2'>
                        We are taking about environment problems. Some people told that electric car doesn't reduce environment pollution than tradition car
                    </span>
                    <div className='flex items-center'>
                        <div className='w-fit inline-block '>
                            <i class="fi fi-rr-heart"></i>
                            <i class="fi fi-sr-heart"></i>
                        </div>
                        <button className='text-[12px] font-semibold w-fit inline-block mb-1 ml-5'>Reply</button>
                    </div>
                </div>
            </div>
        </div>

        <div className='pl-10 '>
            <div className=' text-[14px]'>
                <div className='flex flex-row items-center'>
                    <div className="w-8 h-8 rounded-lg overflow-hidden">
                        <img alt="test" className='w-full h-full object-cover' src={placehoder} />
                    </div>
                    <div className='pl-4 font-semibold'>fhgjhk</div>
                </div>
                <div className='mt-2'>
                    <div >
                        <span className='max-w-72 line-clamp-2'>
                            We are taking about environment problems. Some people told that electric car doesn't reduce environment pollution than tradition car
                        </span>
                        <div className='flex items-center'>
                            <div className='w-fit inline-block '>
                                <i class="fi fi-rr-heart"></i>
                                <i class="fi fi-sr-heart"></i>
                            </div>
                            <button className='text-[12px] font-semibold w-fit inline-block mb-1 ml-5'>Reply</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>);
}

export default UserComment;