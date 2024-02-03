import { User } from 'icon';
import Button from '../button';
import React, { useState } from 'react';
import { TERipple, TEModal, TEModalDialog, TEModalContent, TEModalBody } from 'tw-elements-react';

import LoginForm from '../loginForm/LoginForm';
import { Cross } from '~/resources/icon';
import RegisterForm from '../registerForm/RegisterForm';
function LoginButton() {
    const [showModal, setShowModal] = useState(false);
    const [loginState, setLogin] = useState(true);
    return (
        <>
            <div>
                <TERipple rippleColor="white">
                    <Button
                        icon={{
                            content: <User />,
                        }}
                        className="p-1 flex flex-row"
                        onClick={() => setShowModal(true)}
                    >
                        <span className="max-lg:hidden xl:max-2xl:inline-block">Personal</span>
                    </Button>
                </TERipple>

                {/* <!-- Modal --> */}
                <TEModal show={showModal} setShow={setShowModal} className="">
                    <TEModalDialog>
                        <TEModalContent>
                            <TEModalBody className="bg-white rounded-lg p-4 flex flex-col items-center shadow-xl z-50">
                                <div className="flex justify-end w-full">
                                    <TERipple>
                                        <button
                                            className="p-5 rounded-full hover:bg-gray-300"
                                            onClick={(e) => {
                                                setShowModal(false);
                                            }}
                                        >
                                            <Cross />
                                        </button>
                                    </TERipple>
                                </div>
                                <h3>Your Logo</h3>
                                <span className="text-gray-300">vdg</span>
                                {loginState ? (
                                    <LoginForm
                                        onRegister={() => {
                                            setLogin(false);
                                        }}
                                    />
                                ) : (
                                    <RegisterForm
                                        onLogin={() => {
                                            setLogin(true);
                                        }}
                                    />
                                )}
                            </TEModalBody>
                        </TEModalContent>
                    </TEModalDialog>
                </TEModal>
            </div>
        </>
    );
}

export default LoginButton;
