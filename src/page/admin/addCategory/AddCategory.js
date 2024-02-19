import Form from '~/component/base/form/Form/Form';
import { InputField, InputError } from '~/component/base/form/InputField';
import Button from '~/component/base/button/Button';
import style from './style.module.scss';
import clsx from 'clsx';
import { useMemo, useRef, useState } from 'react';
function AddCategory() {
    const variation = useRef();
    const [property, setProperties] = useState([
        <InputField className={clsx(style.inputField, 'flex flex-col')}>
            <p className={clsx(style.inputLabel)}>Category's property</p>
            <input name="name" className={clsx(style.input)}></input>
            <InputError className={clsx(style.error)}></InputError>
        </InputField>,
    ]);
    function addProperty() {
        setProperties((property) => [...property, property.at(-1)]);
    }
    return (
        <div>
            <Form onSubmit={console.log}>
                <div className="flex flex-row p-2">
                    <InputField data-rule="none" className={clsx(style.inputField, style.categoryImageUploadButton)}>
                        <input type="file" name="image"></input>
                        <p className={clsx(style.inputLabel, 'w-full text-center pt-2')}>Upload category's image</p>
                    </InputField>
                    <div className="flex flex-col flex-1 p-2">
                        <InputField className={clsx(style.inputField, 'flex flex-col')} data-rule="required">
                            <p className={clsx(style.inputLabel)}>Category's name</p>
                            <input name="name" className={clsx(style.input)}></input>
                            <InputError className={clsx(style.error)}></InputError>
                        </InputField>
                        <InputField>
                            <select name="parentCategory">
                                <option value={1}>Category 1</option>
                            </select>
                        </InputField>
                    </div>
                </div>
                <div className="p-2 sm:w-1/2">
                    <h4>Variation</h4>
                    <div ref={variation}>{property}</div>
                    <button
                        onClick={addProperty}
                        type="button"
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-lg"
                    >
                        Add more property
                    </button>
                </div>
                <div className="w-full flex justify-end">
                    <div className="p-2">
                        <Button
                            type="button"
                            className="px-4 py-2  box-border hover:bg-red-600 hover:text-white hover:border-red-600 border-red-500 border-2 text-red-500 rounded-md"
                        >
                            Cancel
                        </Button>
                    </div>
                    <div className="p-2">
                        <Button
                            type="submit"
                            onClick={() => {
                                console.log(2);
                            }}
                            className="px-6  py-2  border-2 border-green-500 hover:bg-green-600 hover:border-green-600  bg-green-500 text-white rounded-md"
                        >
                            Save
                        </Button>
                    </div>
                </div>
            </Form>
        </div>
    );
}

export default AddCategory;
