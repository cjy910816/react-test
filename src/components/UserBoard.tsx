import * as React from "react";

interface State {
	users: any[];
}
export class UserBoard extends React.Component<{}, State> {

	constructor(props: any){
		super(props);
		this.state = {users: []};
	}

	componentDidMount() {
		fetch('/api/users')
			.then(res => res.json())
			.then(users => this.setState({users}));
	}

	render() {
		return (
			<table>
				<thead>
					<th>#</th>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Email</th>
					<th>Gender</th>
					<th>IpAddress</th>
				</thead>
				{this.state.users.map(user =>
					<tr key={user.id}>
						<td>{user.id}</td>
						<td>{user.first_name}</td>
						<td>{user.last_name}</td>
						<td>{user.email}</td>
						<td>{user.gender}</td>
						<td>{user.ip_address}</td>
						</tr>
				)}
			</table>
		);
	}
}