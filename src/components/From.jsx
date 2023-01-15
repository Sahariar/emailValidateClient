import axios from "axios";
import React, { useState } from "react";

const From = ({ setEmailData, emailData }) => {
	const [countId, setCountId] = useState(1);
	const validEmailSyntax = (inputEmail) => {
		const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

		if (inputEmail?.match(validRegex)) {
			return "Yes";
		} else {
			return "No";
		}
	};

	const validateMxRecord = (inputEmail) => {
		let result = "valid";
		axios
			.get(`http://localhost:4000/mx/${inputEmail}`, {
				responseType: "json",
			})
			.then(function (response) {
				// handle success
				console.log(response.data.isValid);

				if (response.data.isValid === "valid") {
					return (result = response.data.isValid);
				} else {
					return (result = response.data.isValid);
				}
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
	};

	const handleEmailSubmission = (event) => {
		event.preventDefault();
		const form = event.target;
		const emailAddress = form.emailAddress.value;
		const isValidEmail = validEmailSyntax(emailAddress);
		const emailMxRecords = validateMxRecord(emailAddress);
		console.log(
			emailAddress,
			"isValidate",
			isValidEmail,
			"mxRecords",
			emailMxRecords
		);

		const resultEntry = {
			id: countId,
			email: emailAddress,
			validSyntax: isValidEmail,
			mxRecords: emailMxRecords,
			smtpExistence: "",
			supportPorts: "",
			disposableMail: "",
			roleBasedMail: "",
		};
		setEmailData([...emailData, resultEntry]);
		setCountId((countId) => countId + 1);
	};

	return (
		<>
			<section className="p-6 mx-auto w-10/12">
				<form
					className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
					onSubmit={handleEmailSubmission}
				>
					<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-xl shadow-xl">
						<div className="space-y-2 col-span-full">
							<p className="font-medium">
								Input Email to Check it's validation
							</p>
						</div>
						<div className="grid grid-cols-2 gap-4 col-span-full">
							<div className="col-span-full">
								<label htmlFor="emailAddress" className="text-sm"></label>
								<input
									name="emailAddress"
									type="email"
									placeholder="Email Address"
									className="input max-w-xs w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
									required
								/>
							</div>
							<div className="col-span-full">
								<button className="btn btn-primary w-full max-w-xs">
									Submit
								</button>
							</div>
						</div>
					</fieldset>
				</form>
			</section>
		</>
	);
};

export default From;
