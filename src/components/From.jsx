import axios from "axios";
import React, { useContext, useState } from "react";
import { DataStore } from "../context/DataProvider";

const From = () => {
	const { setEmailAddress } = useContext(DataStore);

	const handleEmailSubmission = (event) => {
		event.preventDefault();
		const form = event.target;
		const emailAddress = form.emailAddress.value;
		setEmailAddress(emailAddress);
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
