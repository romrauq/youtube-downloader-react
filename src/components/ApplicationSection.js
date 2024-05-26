import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const MainContainer = styled.div`
	color: white;
	height: 100vh;
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: center;
	background-color: skyblue;

	@media screen and (max-width: 960px) {
	}
`;

const HeroHeading = styled.h1`
	font-size: 56px;
	padding: 0;
	margin: 0 4% 10px;
	@media screen and (max-width: 960px) {
		font-size: 32px;
	}
`;

const Paragraph = styled.p`
	font-size: 16px;
	margin: 0 4% 10px;
	@media screen and (max-width: 960px) {
		font-size: 18px;
	}
`;

const FormContainer = styled.div`
	display: flex;
	/* margin: 20px 4% 0; */
	justify-content: center;
	align-items: center;
	@media screen and (max-width: 960px) {
		flex-direction: column;
	}
`;

const InputField = styled.input`
	width: 35%;
	padding: 10px 10px;
	border: solid 2px #fdd803;
	border-radius: 5px;
	&:focus {
		outline: none;
	}
	@media screen and (max-width: 960px) {
		width: 80vw;
		padding: 8px 10px;
	}
`;

const DownloadButton = styled.input`
	width: fit-content;
	font-weight: 500;
	padding: 12px 15px;
	margin: 0 0 0 5px;
	background-color: #fdd803;
	border: none;
	border-radius: 5px;
	box-shadow: 0 2px 5px #18181b;
	cursor: pointer;
	transition: 0.9s;
	&:hover {
		color: white;
		background-color: lightgreen;
		box-shadow: 0 2px 5px green;
	}
	@media screen and (max-width: 960px) {
		width: 85vw;
		margin: 5px 0 0 0px;
		padding: 10px 15px;
	}
`;

const HeroSection = () => {
	// Form state:
	const [inputValue, setInputValue] = useState("");

	const handleChange = (e) => {
		const value = e.target.value;
		setInputValue(value);
		// console.log(inputValue); // Test log.
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(inputValue); // Test log.

		// Set data to user input (video URL)
		const data = {
			Email: inputValue,
		};

		// Make request to API that would initiate the download of video using URL:
		axios.get("", data).then((response) => console.log(response));

		// Clear form after button click:
		setInputValue("");
	};

	return (
		<MainContainer>
			<HeroHeading>YouTube Video Downloader</HeroHeading>
			<Paragraph>
				To download a video, simply paste a video link address and click "download".
			</Paragraph>
			<FormContainer>
				<InputField
					type="email"
					name="email"
					placeholder="Paste video link here"
					onChange={handleChange}
					required
				/>
				<DownloadButton type="submit" value="Download" onClick={handleSubmit} />
			</FormContainer>
		</MainContainer>
	);
};

export default HeroSection;
