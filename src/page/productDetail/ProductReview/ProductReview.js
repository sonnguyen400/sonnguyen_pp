import { useState } from 'react';
import style from './style.module.scss';
import clsx from 'clsx';
function ProductReview({ className, maxHeight, ...props }) {
    const [narrow, setNarrow] = useState(true);
    return (<div id="productReview" className={clsx(style.productReview, className)} {...props}>
        <div className={clsx("overflow-y-hidden ", style.productReviewContent, {
            'h-96': narrow,
            'h-fit pb-16': !narrow,
        })}>
            Đánh giá Samsung Galaxy S21 5G bản Mỹ Cũ Like New 99%: Cấu hình mạnh mẽ cùng chip Snapdragon 888, pin 4000mAh, sạc nhanh 25W!
            Samsung Galaxy S21 bản Mỹ like new 99% tại Viettablet hàng chính hãng chất lượng rất cao, cam kết máy nguyên bản, vỏ ngoài không trầy xước và bên trong chưa hề bị can thiệp, vẫn còn nguyên tem kiểm kịnh của hãng. Ngoài ra, Galaxy S21 5G bản Mỹ cũ tại Viettablet có giá bán cực tốt và các chế độ bảo hành - hậu mãi vô cùng hấp dẫn giúp khách hàng tiết kiệm tối đa chi phí.
            Đánh giá Samsung Galaxy S21 5G bản Mỹ Cũ Like New 99%: Cấu hình mạnh mẽ cùng chip Snapdragon 888, pin 4000mAh, sạc nhanh 25W!
            Samsung Galaxy S21 bản Mỹ like new 99% tại Viettablet hàng chính hãng chất lượng rất cao, cam kết máy nguyên bản, vỏ ngoài không trầy xước và bên trong chưa hề bị can thiệp, vẫn còn nguyên tem kiểm kịnh của hãng. Ngoài ra, Galaxy S21 5G bản Mỹ cũ tại Viettablet có giá bán cực tốt và các chế độ bảo hành - hậu mãi vô cùng hấp dẫn giúp khách hàng tiết kiệm tối đa chi phí.
            Đánh giá Samsung Galaxy S21 5G bản Mỹ Cũ Like New 99%: Cấu hình mạnh mẽ cùng chip Snapdragon 888, pin 4000mAh, sạc nhanh 25W!
            Samsung Galaxy S21 bản Mỹ like new 99% tại Viettablet hàng chính hãng chất lượng rất cao, cam kết máy nguyên bản, vỏ ngoài không trầy xước và bên trong chưa hề bị can thiệp, vẫn còn nguyên tem kiểm kịnh của hãng. Ngoài ra, Galaxy S21 5G bản Mỹ cũ tại Viettablet có giá bán cực tốt và các chế độ bảo hành - hậu mãi vô cùng hấp dẫn giúp khách hàng tiết kiệm tối đa chi phí.
            Đánh giá Samsung Galaxy S21 5G bản Mỹ Cũ Like New 99%: Cấu hình mạnh mẽ cùng chip Snapdragon 888, pin 4000mAh, sạc nhanh 25W!
            Samsung Galaxy S21 bản Mỹ like new 99% tại Viettablet hàng chính hãng chất lượng rất cao, cam kết máy nguyên bản, vỏ ngoài không trầy xước và bên trong chưa hề bị can thiệp, vẫn còn nguyên tem kiểm kịnh của hãng. Ngoài ra, Galaxy S21 5G bản Mỹ cũ tại Viettablet có giá bán cực tốt và các chế độ bảo hành - hậu mãi vô cùng hấp dẫn giúp khách hàng tiết kiệm tối đa chi phí.
        </div>
        <div className={clsx("h-16", style.productReviewButton, {
            " bg-gradient-to-t from-[#ffffff] from-70% via-70% to-transparent": narrow,
            "bg-white": !narrow
        })}>
            <div className='w-full h-full flex flex-col justify-end items-center cursor-pointer ' onClick={(e) => setNarrow(narrow => !narrow)}>
                <span className='h-fit'>{narrow ? "Read all" : "Reduce"}</span>
                {narrow ? <i class={"fi fi-rr-angle-small-down animate-bounce"}></i> : <i class={"fi fi-rr-angle-small-up animate-bounce"}></i>}
            </div>
        </div>
    </div>);
}

export default ProductReview;