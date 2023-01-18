import { useState } from "react";
import From from "./components/From";
import Table from "./components/Table";

function App() {
	return (
		<>
			<section className="validate-area">
				<div className="w-full py-10">
					<h2 className="text-5xl text-center">Email Validate Tools </h2>
				</div>
				<div className="flex ">
					<div className="w-3/12 bg-accent/5 py-10 ">
						<div className="w-full mx-auto">
							<From></From>
						</div>
					</div>
					<div className="w-9/12 p-5">
						<Table></Table>
					</div>
				</div>
			</section>
		</>
	);
}

export default App;
