import { useEffect, useState } from "react";

const validateMx = (email) => {
	const [isMxValid, setIsMxValid] = useState("No Data");
	useEffect(() => {
		if (email) {
			fetch(`http://localhost:4000/mx/${email}`, {})
				.then((res) => res.json())
				.then((data) => {
					console.log(data.isValid);
					setIsMxValid(data.isValid);
				});
		}
	}, [email]);
	return [isMxValid];
};

export default validateMx;
