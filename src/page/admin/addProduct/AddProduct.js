import { TEInput } from 'tw-elements-react';
import Breadcum from '~/component/base/breadcum';
import Form from '~/component/base/form/Form/Form';
import { InputNumber, InputText } from '~/component/base/input';
import Button from '~/component/base/button';

function AddProduct() {
    return (
        <>
            <Breadcum />
            <Form>
                <InputText placeHolder="Product name" />
                <InputNumber placeHolder="Product price" increateBtn decreateBtn min={0} />
                <Button className="px-4 py-2 border rounded-md">Add more variation</Button>
                <InputText placeHolder="Product Image" />
                <InputText type="file" />
            </Form>
        </>
    );
}

export default AddProduct;
