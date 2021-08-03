import { useForm } from 'react-hook-form';

const Contact = () => {

    const { register, handleSubmit, errors } = useForm();

    const Chinna = (data) => {

        fetch('http://localhost:3333/queries', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(() => {
            console.log('New Query added successfully !!');
        })
    }

    return ( 
        <div>
            <form onSubmit={ handleSubmit(Chinna) }>
                Email<input type="email" name="email" ref={ register({ required: "Email is must !" }) }/><br />
                { errors.email && <p>{ errors.email.message }</p> }
                Mobile <input type="text" name="mobile" ref={ register({ required: "Mobile No is must !", minLength: { value: 10, message: "Mobile No length shld be 10 !" }}) }/><br />
                { errors.mobile && <p>{ errors.mobile.message }</p> }
                Description <input type="text" name="description" ref={ register }/><br />
                <input type="submit" />
            </form>
        </div>
     );
}
 
export default Contact;