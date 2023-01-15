import { useState } from "react";
import From from "./components/From";
import Table from "./components/Table";

function App() {
	const [count, setCount] = useState(0);
	const [emailData, setEmailData] = useState([]);

	// button function for Checkout time.need to implement.
	const handleCheckOut = (id) => {
		const today = new Date();
		const time = today.toLocaleString("en-US", {
			hour: "numeric",
			minute: "numeric",
			hour12: true,
		});
		// setemailData()

		setEmailData((current) =>
			current.map((obj) => {
				if (obj.id === id) {
					return { ...obj, checkOutTime: time };
				}

				return obj;
			})
		);
	};
	return (
		<>
			<section className="validate-area">
				<div className="w-full py-10">
					<h2 className="text-5xl text-center">Email Validate Tools </h2>
				</div>
				<div className="flex ">
					<div className="w-3/12 bg-accent/5 py-10 ">
						<div className="w-full mx-auto">
							<From setEmailData={setEmailData} emailData={emailData}></From>
						</div>
					</div>
					<div className="w-9/12 p-5">
						<Table
							emailData={emailData}
							handleCheckOut={handleCheckOut}
						></Table>
					</div>
				</div>
			</section>
		</>
	);
}

export default App;
