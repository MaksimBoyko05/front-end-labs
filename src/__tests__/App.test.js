import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

jest.mock("../components/UserProfile", () => {
	return {
		__esModule: true,
		default: ({ fetchUserData }) => {
			const mockData = {
				name: "Bob",
				age: 25,
				email: "example@example.com",
			};
			return (
				<div>
					<h2>Профіль користувача</h2>
					<p>Ім'я: {mockData.name}</p>
					<p>Вік: {mockData.age}</p>
					<p>Email: {mockData.email}</p>
				</div>
			);
		},
		fetchUserData: jest.fn().mockResolvedValue({
			name: "Bob",
			age: 25,
			email: "example@example.com",
		}),
	};
});

test("Відображається компонент Header", () => {
	render(<App />);
	const headerElement = screen.getByText(/Заголовок додатку/i);
	expect(headerElement).toBeInTheDocument();
});

test("Відображається компонент UserProfile після натискання кнопки", async () => {
	render(<App />);

	const buttonElement = screen.getByText(/Показати профіль користувача/i);
	fireEvent.click(buttonElement);

	const nameElement = await screen.findByText(/Ім'я: Bob/i);
	const ageElement = await screen.findByText(/Вік: 25/i);
	const emailElement = await screen.findByText(/Email: example@example.com/i);

	expect(nameElement).toBeInTheDocument();
	expect(ageElement).toBeInTheDocument();
	expect(emailElement).toBeInTheDocument();
});