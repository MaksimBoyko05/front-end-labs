import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import Footer from "./components/Footer";

const fetchUserData = async () => {
	return {
		name: "Bob",
		age: 25,
		email: "example@example.com",
	};
};

export default function App() {
	const [showUserProfile, setShowUserProfile] = useState(false);

	const handleShowProfile = () => setShowUserProfile(true);

	return (
		<div className="app-container">
			<Header />
			<main>
				<h2>Головна сторінка</h2>
				<button onClick={handleShowProfile}>
					 Профіль користувача
				</button>
				{showUserProfile && (
					<UserProfile fetchUserData={fetchUserData} />
				)}
			</main>
			<Footer />
		</div>
	);
}