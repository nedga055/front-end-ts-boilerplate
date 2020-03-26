import React from "react";

type Props = {
	name: string;
};

const UserPage = ({ name }: Props) => {
	return <h1>User: {name}</h1>;
};

UserPage.getInitialProps = function (context) {
	return {
		name: context.query.id,
	};
};

export default UserPage;
