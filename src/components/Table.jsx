import React from "react";

const Table = ({ emailData, handleCheckOut }) => {
	return (
		<>
			<div className="overflow-x-auto">
				<table className="table w-full">
					<thead>
						<tr>
							<th></th>
							<th>Address</th>
							<th>Valid Syntax</th>
							<th>MX records</th>
							<th>SMTP Existence</th>
							<th>Support ports 465 and 587</th>
							<th>Disposable mail</th>
							<th>Role-based mail</th>
						</tr>
					</thead>
					<tbody>
						{emailData.length > 0 ? (
							emailData.map((email) => (
								<tr key={email.id} className="hover">
									<th>{email.id}</th>
									<td>{email.email}</td>
									<td>{email.validSyntax}</td>
									<td>{email.mxRecords}</td>
									<td>{email.smtpExistence}</td>
									<td>{email.supportPorts}</td>
									<td>{email.disposableMail}</td>
									<td>{email.roleBasedMail}</td>
								</tr>
							))
						) : (
							<tr>
								<th>1</th>
								<td>No Data</td>
								<td>No Data</td>
								<td>No Data</td>
								<td>No Data</td>
								<td>No Data</td>
								<td>No Data</td>
								<td>No Data</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default Table;
