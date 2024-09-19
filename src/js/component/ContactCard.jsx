import React from "react";
import profile from "../../img/profile.jpg";


const ContactCard = (props) => {
	return (
		<div className="container mb-4 card">
			<div className="row p-3">
				<div className="col-2">
					<img className="img-fluid rounded-circle" src={profile} alt="Profile Image"/>
				</div>
				<div className="col-8">
					<h1>{props.name}</h1>
					<p><i class="p-2 fas fa-map-marker-alt"></i>{props.address}</p>
					<p><i class="p-2 fas fa-phone"></i>{props.phone}</p>
					<p><i class="p-2 fas fa-envelope"></i>{props.email}</p>
				</div>
				<div className="col-2">
					<button class="pencil" onClick={props.edit} data-bs-toggle="modal" data-bs-target="#formModal"><i class="p-2 pencil fas fa-pencil-alt"></i></button>
					<button class="trashCan" onClick={props.delete} ><i class="p-2 fas fa-trash-alt"></i></button>
				</div>
			</div>
		</div>
	);
};

export default ContactCard;