import { InputText } from '../input';
import Form from '../form/Form/Form';
import InputField from '../form/InputField/InputField';
import { ClipboardUser, Lock, Earth } from 'icon';
import { TESelect } from 'tw-elements-react';
const data = [
    { text: 'VietNam', value: 'VietNam' },
    { text: 'United State', value: 'United State' },
    { text: 'United Kingdom', value: 'United Kingdom' },
    { text: 'Laos', value: 'Laos' },
    { text: 'China', value: 'China' },
    { text: 'Cuba', value: 'Cuba' },
];
function RegisterForm({ onLogin }) {
    return (
        <Form>
            <div className="flex flex-row my-4">
                <InputField data-rule="required" className="w-1/2 ">
                    <InputText className="w-full" placeholder="First name" />
                </InputField>
                <div className="w-5"></div>
                <InputField data-rule="required" className="w-1/2 ">
                    <InputText className="w-full" placeholder="Last name" />
                </InputField>
            </div>
            <InputField data-rule="required" className="my-4">
                <InputText className="w-full" placeholder="Account name" icon={<ClipboardUser />} />
            </InputField>
            <InputField data-rule="required" className="my-4">
                <InputText type="mail" className="w-full" placeholder="Email" icon={<ClipboardUser />} />
            </InputField>
            <InputField data-rule="required" className="my-4">
                <InputText type="date" className="w-full" placeholder="Date of Birth" icon={<ClipboardUser />} />
            </InputField>
            <InputField data-rule="required" className="my-4">
                <InputText className="w-full" spellCheck={false} placeholder="Password" icon={<Lock />} />
            </InputField>

            <InputField className={'flex flex-row items-center px-2'}>
                <Earth />
                <div className="mr-4"></div>
                <TESelect data={data} />
            </InputField>
            <div className="text-[12px] my-5 ml-3">
                You already have an account.
                <button onClick={onLogin} className="text-blue-500" href="#">
                    Login now
                </button>
            </div>

            <button type="submit" className="rounded-3xl px-4 py-2 bg-blue-500 text-white w-full text-center mt-5">
                Register
            </button>
        </Form>
    );
}

export default RegisterForm;
