import React, { useState, useEffect } from "react";


const ContactForm = (props) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [id, setId] = useState();
    const submit = (e) => { 
        e.preventDefault();

        const contact = {
            name: fullName,
            email: email,
            phone: phone,
            address: address,
            id: id,
        };

        
        if (id){
            props.update(contact);
        }else{
            props.add(contact);
        }


        setFullName("");
        setEmail("");
        setAddress("");
        setPhone("");
        setId(null);

    }
    
    useEffect(() => {
        console.log(props.contactToEdit)
        if (props.contactToEdit) {
            setFullName(props.contactToEdit.name);
            setEmail(props.contactToEdit.email);
            setAddress(props.contactToEdit.address);
            setPhone(props.contactToEdit.phone); 
            setId(props.contactToEdit.id); 
        }
    },[props.contactToEdit]);

	return (
		<div className="container">
            <div className="row">
			    <h1 className="text-center">Add a new contact</h1>
                <form className="col-8 offset-2" onSubmit={submit}>
                    <label className="mt-2" htmlFor="email">Full Name</label>
                    <input
                        value={fullName}
                        onChange={(event) => setFullName(event.target.value)}
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Full Name"
                    />
                    <label className="mt-2" htmlFor="email">Email</label>
                    <input
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter email"
                    />
                    <label className="mt-2" htmlFor="phone">Phone</label>
                    <input
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter phone"
                    />
                    <label className="mt-2" htmlFor="adress">Address</label>
                    <input
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter address"
                    />
                    <button className="mt-3 col-12 btn btn-primary" type="submit">Save</button>
                </form>
            </div>

		</div>
	);
};

export default ContactForm;