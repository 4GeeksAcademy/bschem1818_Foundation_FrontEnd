import React, { useEffect, useState } from 'react';

//include images into your bundle
import ContactCard from "./ContactCard";
import ContactForm from './ContactForm';

//create your first component
const Home = () => {
	const [contactList, setContactList] = useState([]);
	const [contactToEdit, setContactToEdit] = useState();

 	function getAllContacts(){
		console.log('getCharacters')
		fetch('https://playground.4geeks.com/contact/agendas/Barbara/contacts')
			.then((response) => {
				return response.json()
			})
			.then((data)=> {
				console.log(data.contacts);
				setContactList(data.contacts)
			})
		console.log ('se cargo dato')
	}

	const addContact = (contact) => { 
        fetch('https://playground.4geeks.com/contact/agendas/Barbara/contacts',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contact)
        })
        .then((response) => {
            getAllContacts()
        })
    }

	const deleteContact= (index) => {
        fetch('https://playground.4geeks.com/contact/agendas/Barbara/contacts/'+ index,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then((response) => {
            getAllContacts()
        })
	}

	const updateContact= (contact) => {
        fetch('https://playground.4geeks.com/contact/agendas/Barbara/contacts/'+ contact.id,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
			body: JSON.stringify(contact)
        })
        .then((response) => {
            getAllContacts()
        })
	}
	useEffect(()=> {
		getAllContacts()
	},[]) 

	return (
		<div>
			<div className="row col-12 mb-2 mt-2">
				<button type="button" className="offset-11 col-1 btn btn-success" data-bs-toggle="modal" data-bs-target="#formModal">
					Add New Contact
				</button>
			</div>
			{contactList.map((contact) => 
				<ContactCard 
					name={contact.name}
					email={contact.email}
					phone={contact.phone}
					address={contact.address}
					delete={() => deleteContact(contact.id)}
					edit={() => setContactToEdit(contact)}
				/>

			)}
		
			<div className="modal fade" id="formModal" tabIndex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-fullscreen">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<ContactForm
								add={addContact}
								contactToEdit={contactToEdit}
								update={updateContact}
							/>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
};

export default Home;
