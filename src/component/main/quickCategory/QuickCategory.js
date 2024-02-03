import clsx from "clsx";
import Button from "~/component/base/button/Button";
import style from './style.module.scss';
import ScrollList from "~/component/base/scrollList/ScrollList";
import Tippy from "@tippyjs/react/headless";
import Container from "~/component/base/container/Container";
import { AngleLeft, AngleRight, PhoneS, PhoneF, ComputerF, ComputerS, Recovery, AudioF, AudioS, DisplayF, DisplayS, Software, SoftwareF } from "~/resources/icon";

function QuickCategory({ className, ...props }) {
    return (
        <div className={clsx("w-full", className)} {...props}>
            <Container>
                <ScrollList
                    leftBtn={(<button className="right z-3 absolute top-1/2  h-full w-[60px] bg-white -translate-y-1/2 right-[60px] hover:bg-gray-300"><AngleLeft /></button>)}
                    rightBtn={(<button className="left z-3 absolute top-1/2 h-full w-[60px] bg-white -translate-y-1/2 right-0 hover:bg-gray-300"><AngleRight /></button>)}
                    className={(style.categoryBar)}
                >
                    <Tippy
                        content={
                            <h1>gvdgbh</h1>
                        }
                    >
                        <div className={clsx(style.menuItem)}>
                            <Button

                                className='mr-5 px-4 py-2 rounded-3xl hover:bg-slate-800/70 hover:text-slate-200'
                                icon={{
                                    "content": <ComputerS />,
                                    "react": <ComputerF />
                                }}>Personal Computer</Button>
                        </div>
                    </Tippy>
                    <Tippy
                    >
                        <div className={clsx(style.menuItem)}>
                            <Button
                                className='mr-5 px-4 py-2 rounded-3xl hover:bg-slate-800/70 hover:text-slate-200'
                                icon={{
                                    "content": <PhoneS />,
                                    "react": <PhoneF />
                                }}>Telephone</Button>
                        </div>
                    </Tippy>
                    <Tippy >
                        <div className={clsx(style.menuItem)}>
                            <Button
                                className='mr-5 px-4 py-2 rounded-3xl hover:bg-slate-800/70 hover:text-slate-200'
                                icon={{
                                    "content": <AudioS />,
                                    "react": <AudioF />
                                }}>
                                Speaker
                            </Button>
                        </div>
                    </Tippy>
                    <Tippy >
                        <div className={clsx(style.menuItem)}>
                            <Button
                                className='mr-5 px-4 py-2 rounded-3xl hover:bg-slate-800/70 hover:text-slate-200'
                                icon={{
                                    "content": <DisplayS />,
                                    "react": <DisplayF />
                                }}
                            >Display</Button>
                        </div>
                    </Tippy>
                    <Tippy >
                        <div className={clsx(style.menuItem)}>
                            <Button
                                className='mr-5 px-4 py-2 rounded-3xl hover:bg-slate-800/70 hover:text-slate-200'
                                icon={{
                                    "content": <Software />,
                                    "react": <SoftwareF />
                                }}
                            >Software</Button>
                        </div>
                    </Tippy>
                    <Tippy>
                        <div className={clsx(style.menuItem)}>
                            <Button
                                className='mr-5 px-4 py-2 rounded-3xl hover:bg-slate-800/70 hover:text-slate-200'
                                icon={{
                                    "content": <Recovery />
                                }}
                            >Repair</Button>
                        </div>
                    </Tippy>
                </ScrollList >
            </Container>
        </div>);
}
export default QuickCategory;