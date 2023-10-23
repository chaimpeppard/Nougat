import Input from './Input.js';
import './Form.css';



export default function Form() {
    return (
        <>
            <form>
                <Input label='Name'></Input>
                <Input label='Address'></Input>
                <Input label='Email'></Input>
                <Input label='Number of Children'></Input>
                <Input label='Hobbies'></Input>
                <Input label='Concerns'></Input>
                <Input label='Notes'></Input>
            </form>
        </>
    )
};