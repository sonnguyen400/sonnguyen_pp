import { InputText } from '../input';
import google from 'image/google.png';
import facebook from 'image/facebook.png';
import github from 'image/github.png';
import twitter from 'image/twitter.png';
import Form from '../form/Form/Form';
import InputField from '../form/InputField/InputField';
import { ClipboardUser, Lock } from '~/resources/icon';
function LoginForm({ onRegister }) {
    return (
        <Form>
            <InputField data-rule="required|email">
                <InputText className="w-96" placeholder="Account name" icon={<ClipboardUser />} />
            </InputField>
            <InputField data-rule="required">
                <InputText className="w-96" spellCheck={false} placeholder="Password" icon={<Lock />} />
            </InputField>
            <div className="text-[12px] my-5 ml-3">
                You don't have an account.
                <button className="text-blue-500" href="#" onClick={onRegister}>
                    Register now
                </button>
            </div>
            <fieldset className="border-t border-gray-200 mt-5">
                <legend className="text-sm font-semibold text-gray-500 text-center px-3">Or login with</legend>
                <div className="flex items-center w-full justify-center mt-4">
                    <button className="w-8 aspect-square mr-3">
                        <img slt="login with google" src={google} />
                    </button>
                    <button className="w-8 aspect-square mx-3">
                        <img slt="login with face" src={facebook} />
                    </button>
                    <button className="w-8 aspect-square mx-3">
                        <img slt="login with google" src={twitter} />
                    </button>
                    <button className="w-8 aspect-square ml-3">
                        <img slt="login with google" src={github} />
                    </button>
                </div>
            </fieldset>
            <button type="submit" className="rounded-3xl px-4 py-2 bg-blue-500 text-white w-full text-center mt-5">
                Login
            </button>
        </Form>
    );
}

export default LoginForm;
