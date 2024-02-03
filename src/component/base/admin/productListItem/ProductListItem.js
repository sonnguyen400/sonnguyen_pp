import demo from 'image/iphone-13-pink-650x650-1.png';
function ProductListItem() {
    return (
        <div className="flex flex-row">
            <div>
                <img src={demo} alt="iphone 13" />
            </div>
            <div>
                <h1>Iphone 13 mini</h1>
                <div>
                    Add time : <span>12:12:59 16/02/2003</span>
                </div>
                <div>
                    Add by : <span>Account</span>
                    Last Modified: <span>Account</span>
                </div>
                <div>
                    Qualification: <span>15</span>
                </div>
            </div>
        </div>
    );
}

export default ProductListItem;
