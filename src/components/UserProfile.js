import { useEffect, useState } from "react";

const UserProfile = ({ fetchUserData }) => {
	const [userData, setUserData] = useState(null);

	useEffect(() => {
		const getUserData = async () => {
			const data = await fetchUserData();
			setUserData(data);
		};
		getUserData();
	}, [fetchUserData]);

	if (!userData) {
		return <div>Завантаження...</div>;
	}

	return (
		<div>
			<h2>Профіль користувача</h2>
			<p>Ім'я: {userData.name}</p>
			<p>Вік: {userData.age}</p>
			<p>Email: {userData.email}</p>
		</div>
	);
};

export default UserProfile;