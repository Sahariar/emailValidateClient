import React, { createContext, useEffect, useState } from "react";

export const DataStore = createContext();

const DataProvider = ({ children }) => {
	const [countId, setCountId] = useState(1);
	const [emailAddress, setEmailAddress] = useState({});
	const [emailResult, setEmailResult] = useState([]);

	// validate Of Email Syntax
	const validEmailSyntax = (inputEmail) => {
		const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (inputEmail?.match(validRegex)) {
			return "Yes";
		} else {
			return "No";
		}
	};

	useEffect(
		(emailAddress) => {
			if (emailAddress) {
				const isValidEmail = validEmailSyntax(emailAddress);
				const resultEntry = {
					id: countId,
					email: emailAddress,
					validSyntax: isValidEmail,
					mxRecords: "",
					smtpExistence: "",
					supportPorts: "",
					disposableMail: "",
					roleBasedMail: "",
				};
				setEmailResult([...emailResult, resultEntry]);
				setCountId((countId) => countId + 1);
			}
		},
		[emailAddress]
	);

	const dataValues = {
		emailAddress,
		setEmailAddress,
		emailResult,
		setEmailResult,
	};

	return <DataStore.Provider value={dataValues}>{children}</DataStore.Provider>;
};

export default DataProvider;
