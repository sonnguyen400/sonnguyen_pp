import { memo } from 'react';
import Button from '~/component/base/button';
import Container from '~/component/base/container/Container';
function Footer() {
    return (
        <div className='w-full bg-[var(--subject-color)] mt-10'>
            <Container>
                <div className="ssm:px-2">
                    <div>
                        <h1 className="text-blue-950 bg-">Logo</h1>
                    </div>
                    <div>
                        <h4 className="font-semibold mt-5">Branch System</h4>
                        <div className="mt-4 overflow-x-scroll whitespace-nowrap">
                            <div className="inline-block lg:w-1/4 lg:p-4 ssm:w-1/2 ssm:p-2">
                                <div className="rounded-lg bg-white p-3 text-sm">
                                    <h6 className="font-semibold whitespace-break-spaces">
                                        Thành phố Hà Nội, Việt Nam
                                    </h6>
                                    <p className="text-sm pt-2 whitespace-break-spaces">
                                        1/18 ngõ 133 Đường Xuân Thủy - Phường Dịch Vọng Hậu - Quận Cầu Giấy - Hà Nội
                                    </p>
                                    <p className="text-cyan-500 mt-2">Mở cửa</p>
                                    <div className="flex flex-row justify-between font-semibold flex-wrap items-start justify-start">
                                        <div>
                                            <span className="text-cyan-700 ">9h - 12h</span> &{' '}
                                            <span className="text-cyan-700 ">13h - 20h</span>
                                        </div>
                                        <span>
                                            <Button
                                                className="flex-row-reverse -ml-2"
                                                icon={{
                                                    content: <i className="fi fi-br-arrow-up-right text-cyan-700 "></i>,
                                                    direction: 'right',
                                                }}
                                            >
                                                Chỉ đường
                                            </Button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="inline-block lg:w-1/4 lg:p-4 ssm:w-1/2 ssm:p-2">
                                <div className="rounded-lg bg-white p-3 text-sm">
                                    <h6 className="font-semibold whitespace-break-spaces">
                                        Thành phố Hà Nội, Việt Nam
                                    </h6>
                                    <p className="text-sm pt-2 whitespace-break-spaces">
                                        1/18 ngõ 133 Đường Xuân Thủy - Phường Dịch Vọng Hậu - Quận Cầu Giấy - Hà Nội
                                    </p>
                                    <p className="text-cyan-500 mt-2">Mở cửa</p>
                                    <div className="flex flex-row justify-between font-semibold flex-wrap items-start justify-start">
                                        <div>
                                            <span className="text-cyan-700 ">9h - 12h</span> &{' '}
                                            <span className="text-cyan-700 ">13h - 20h</span>
                                        </div>
                                        <span>
                                            <Button
                                                className="flex-row-reverse -ml-2"
                                                icon={{
                                                    content: <i className="fi fi-br-arrow-up-right text-cyan-700 "></i>,
                                                    direction: 'right',
                                                }}
                                            >
                                                Chỉ đường
                                            </Button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="inline-block lg:w-1/4 lg:p-4 ssm:w-1/2 ssm:p-2">
                                <div className="rounded-lg bg-white p-3 text-sm">
                                    <h6 className="font-semibold whitespace-break-spaces">
                                        Thành phố Hà Nội, Việt Nam
                                    </h6>
                                    <p className="text-sm pt-2 whitespace-break-spaces">
                                        1/18 ngõ 133 Đường Xuân Thủy - Phường Dịch Vọng Hậu - Quận Cầu Giấy - Hà Nội
                                    </p>
                                    <p className="text-cyan-500 mt-2">Mở cửa</p>
                                    <div className="flex flex-row justify-between font-semibold flex-wrap items-start justify-start">
                                        <div>
                                            <span className="text-cyan-700 ">9h - 12h</span> &{' '}
                                            <span className="text-cyan-700 ">13h - 20h</span>
                                        </div>
                                        <span>
                                            <Button
                                                className="flex-row-reverse -ml-2"
                                                icon={{
                                                    content: <i className="fi fi-br-arrow-up-right text-cyan-700 "></i>,
                                                    direction: 'right',
                                                }}
                                            >
                                                Chỉ đường
                                            </Button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="inline-block lg:w-1/4 lg:p-4 ssm:w-1/2 ssm:p-2">
                                <div className="rounded-lg bg-white p-3 text-sm">
                                    <h6 className="font-semibold whitespace-break-spaces">
                                        Thành phố Hà Nội, Việt Nam
                                    </h6>
                                    <p className="text-sm pt-2 whitespace-break-spaces">
                                        1/18 ngõ 133 Đường Xuân Thủy - Phường Dịch Vọng Hậu - Quận Cầu Giấy - Hà Nội
                                    </p>
                                    <p className="text-cyan-500 mt-2">Mở cửa</p>
                                    <div className="flex flex-row justify-between font-semibold flex-wrap items-start justify-start">
                                        <div>
                                            <span className="text-cyan-700 ">9h - 12h</span> &{' '}
                                            <span className="text-cyan-700 ">13h - 20h</span>
                                        </div>
                                        <span>
                                            <Button
                                                className="flex-row-reverse -ml-2"
                                                icon={{
                                                    content: <i className="fi fi-br-arrow-up-right text-cyan-700 "></i>,
                                                    direction: 'right',
                                                }}
                                            >
                                                Chỉ đường
                                            </Button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="inline-block lg:w-1/4 lg:p-4 ssm:w-1/2 ssm:p-2">
                                <div className="rounded-lg bg-white p-3 text-sm">
                                    <h6 className="font-semibold whitespace-break-spaces">
                                        Thành phố Hà Nội, Việt Nam
                                    </h6>
                                    <p className="text-sm pt-2 whitespace-break-spaces">
                                        1/18 ngõ 133 Đường Xuân Thủy - Phường Dịch Vọng Hậu - Quận Cầu Giấy - Hà Nội
                                    </p>
                                    <p className="text-cyan-500 mt-2">Mở cửa</p>
                                    <div className="flex flex-row justify-between font-semibold flex-wrap items-start justify-start">
                                        <div>
                                            <span className="text-cyan-700 ">9h - 12h</span> &{' '}
                                            <span className="text-cyan-700 ">13h - 20h</span>
                                        </div>
                                        <span>
                                            <Button
                                                className="flex-row-reverse -ml-2"
                                                icon={{
                                                    content: <i className="fi fi-br-arrow-up-right text-cyan-700 "></i>,
                                                    direction: 'right',
                                                }}
                                            >
                                                Chỉ đường
                                            </Button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pb-4">
                        <h4 className="font-semibold mt-5">My Logo</h4>
                        <div className="mt-4 flex items-start">
                            <div className="inline-block w-1/3 p-4">
                                <div className="rounded-lg bg-white p-3 text-sm">
                                    <h6 className="font-semibold whitespace-break-spaces">Payment Method</h6>
                                    <div></div>
                                </div>
                            </div>
                            <div className="inline-block w-1/3 p-4">
                                <div className="rounded-lg bg-white p-3 text-sm">
                                    <h6 className="font-semibold whitespace-break-spaces">Policies</h6>
                                </div>
                            </div>
                            <div className="inline-block w-1/3 p-4">
                                <div className="rounded-lg bg-white p-3 text-sm">
                                    <h6 className="font-semibold whitespace-break-spaces">Contact</h6>
                                    <p className="text-sm pt-2 whitespace-break-spaces">
                                        1/18 ngõ 133 Đường Xuân Thủy - Phường Dịch Vọng Hậu - Quận Cầu Giấy - Hà Nội
                                    </p>
                                    <p className="text-cyan-500 mt-2">Mở cửa</p>
                                    <div className="flex flex-row justify-between font-semibold">
                                        <div>
                                            <span className="text-cyan-700 ">9h - 12h</span> &{' '}
                                            <span className="text-cyan-700 ">13h - 20h</span>
                                        </div>
                                        <span>
                                            <Button
                                                className="flex-row-reverse"
                                                icon={{
                                                    content: <i className="fi fi-br-arrow-up-right text-cyan-700 "></i>,
                                                    direction: 'right',
                                                }}
                                            >
                                                Chỉ đường
                                            </Button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-blue-900 text-sm">
                        <p>@Nguyen Hoang Son Personal Project</p>
                        <p>
                            {' '}
                            Powered by React <i className="fi fi-rr-react"></i>
                        </p>
                        <p>Support Tools: Tippy, Flat icon .v..v</p>
                        <p>About Back-end</p>
                        <p>Spring boot Rest Api</p>
                    </div>
                    <div className="flex justify-end">
                        <a href="https://github.com/sonnguyen400" className="text-2xl font-bold">
                            <i className="fi fi-brands-github "></i>My Github
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default memo(Footer);
