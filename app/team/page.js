"use client"


import "./team.css"
import React, { useState } from "react"
import image0 from "../assets/images/download 8.png"
//devteam
import image1 from "../assets/images/dev/Gaurav.jpeg"
import image2 from "../assets/images/dev/jishnu.jpg"
import image3 from "../assets/images/dev/charity.jpg"
// import image4 from "../assets/images/dev/Isaiah.jpeg";
// import image5 from "../assets/images/dev/Nishant.jpeg";
// import image6 from "../assets/images/dev/Marjiba.jpeg";
// import image8 from "../assets/images/dev/Gunnu Lavanya.jpg";
// import image7 from "../assets/images/dev/Gaurav Polai.jpg";
//sac committee

import image9 from "../assets/images/SAC Committee/Atanu.jpg"
import image10 from "../assets/images/SAC Committee/bunil.jpg"
import image11 from "../assets/images/SAC Committee/pardhu.png"
import image12 from "../assets/images/SAC Committee/swarop.jpg"
import image13 from "../assets/images/SAC Committee/rounak.jpg"

//CORE
import image14 from "../assets/images/Core/Prakhar Gupta.jpg"
import image15 from "../assets/images/Core/sameer.jpg"
import image16 from "../assets/images/Core/WanrapbokRKharshandi.jpg"
import image17 from "../assets/images/Core/supriya.jpg"
import image18 from "../assets/images/Core/OM PRAKASH YADAV.jpg"

//Design
import image20 from "../assets/images/design/paruvada Dhanunjay Naidu.png"
import image21 from "../assets/images/design/SUBHADEEP SINHA.jpg"
import image22 from "../assets/images/design/Botu Varun Kumar.jpg"
import image23 from "../assets/images/design/M Manikanta Reddy.jpg"
import image24 from "../assets/images/design/Karipireddy Surya Teja Gopal Reddy.jpg"
import image25 from "../assets/images/design/Pankaj Saraswat.jpg"
// import image26 from "../assets/images/design/Deinipaya Alvira Lynshing.png";
// import image27 from "../assets/images/design/Botu Varun Kumar.jpg";
//import image28 from "../assets/images/design/

//Marketing
// import image31 from "../assets/images/maketing/
// import image32 from "../assets/images/maketing/
// import image33 from "../assets/images/maketing/
import image34 from "../assets/images/marketing/Kumar Gaurav.jpeg"
// import image35 from "../assets/images/maketing/
// import image36 from "../assets/images/maketing/
// import image37 from "../assets/images/maketing/
import image38 from "../assets/images/marketing/Satyam Kumar Singh.png"
import image39 from "../assets/images/marketing/Achintya Chaudhary.jpg"
import image40 from "../assets/images/marketing/Kabesa S Marak.png"
import image41 from "../assets/images/marketing/Neelkantha Mandal.jpg"

//Management
import image51 from "../assets/images/management/Arilam Kyndiah.jpg"
import image52 from "../assets/images/management/hrangaolou.jpg"
import image53 from "../assets/images/management/Koninika Tarafdar.jpg"
import image54 from "../assets/images/management/meba.jpg"
import image55 from "../assets/images/management/PREM KUMAR GUPTA.jpg"
//import image56 from "../assets/images/management/
import image57 from "../assets/images/management/Kenneth Wellborn Basaiawmoit.jpeg"
import image58 from "../assets/images/management/Klusborning Nongbri.jpg"
//import image59 from "../assets/images/management/
//import image60 from "../assets/images/management/
import image61 from "../assets/images/management/B Palguna Rao.jpg"
import image62 from "../assets/images/management/S Charan Tejha Reddy.jpg"
//import image63 from "../assets/images/management/
//import image64 from "../assets/images/management/
import image65 from "../assets/images/management/Penugurthi.Dinesh.jpg"
import image66 from "../assets/images/management/Sonam Bharti.jpg"
import image67 from "../assets/images/management/T.Rakesh Srikar Reddy.jpg"
import image68 from "../assets/images/management/ajay.jpg"
//import image69 from "../assets/images/management/

//others
import image71 from "../assets/images/others/Gannu Abhijith Sai.jpg"
// import image72 from "../assets/images/others/
// import image73 from "../assets/images/others/
// import image74 from "../assets/images/others/
// import image75 from "../assets/images/others/
// import image76 from "../assets/images/others/
import image77 from "../assets/images/others/Karimi Tarun Teja.jpeg"
import image78 from "../assets/images/others/L SRI KASYAP.jpg"
import image79 from "../assets/images/others/Simma kiran.jpg"
//import image80 from "../assets/images/others/


// robotics
import image81 from "../assets/images/download 8.png"
import image82 from "../assets/images/download 8.png"
import image83 from "../assets/images/download 8.png"
import image84 from "../assets/images/download 8.png"
import image85 from "../assets/images/robotics/ameya_patil.jpg"
import image86 from "../assets/images/robotics/nirupan_jagnekar.jpg"
import image87 from "../assets/images/download 8.png"
import image88 from "../assets/images/download 8.png"
import image89 from "../assets/images/download 8.png"
import image90 from "../assets/images/download 8.png"
import image91 from "../assets/images/robotics/badurgari_rasool.jpeg"
import image92 from "../assets/images/download 8.png"
import image93 from "../assets/images/robotics/chandrani_dalui.jpg"
import image94 from "../assets/images/robotics/ankit_raj.jpg"
import image95 from "../assets/images/download 8.png"
import image96 from "../assets/images/robotics/shivam_kumar_manglam.jpg"
import image97 from "../assets/images/robotics/himanshu_kumar_jha.jpg"
import image98 from "../assets/images/robotics/sumit_kumar.jpg"
import image99 from "../assets/images/robotics/angshuman_dey.jpg"
import image991 from "../assets/images/robotics/neelkantha_mandal.jpg"
import image992 from "../assets/images/download 8.png"
import image993 from "../assets/images/robotics/pranav_kumar_dubey.jpg"
import image994 from "../assets/images/robotics/pankaj_saraswat.jpg"
import image995 from "../assets/images/download 8.png"
import image996 from "../assets/images/robotics/debashish_nayak.jpeg"

// coding
import image100 from "../assets/images/download 8.png"
import image101 from "../assets/images/download 8.png"
import image102 from "../assets/images/download 8.png"
import image103 from "../assets/images/download 8.png"
import image104 from "../assets/images/download 8.png"
import image105 from "../assets/images/coding/Avinash Renukunta.jpeg"
import image106 from "../assets/images/coding/Samiksha Deb.jpg"
import image107 from "../assets/images/coding/Gunnu Lavanya.jpg"
import image108 from "../assets/images/download 8.png"
import image109 from "../assets/images/coding/Hriti Chakrabortty.jpg"
import image110 from "../assets/images/download 8.png"
import image111 from "../assets/images/coding/Siddhant Purkayastha.jpg"
import image112 from "../assets/images/download 8.png"
import image113 from "../assets/images/download 8.png"
import image114 from "../assets/images/dev/Gaurav.jpeg"
import image115 from "../assets/images/download 8.png"


// Departmental
import image130 from "../assets/images/departmental/Koruprolu Bhagya Raju.jpg"
import image131 from "../assets/images/download 8.png"
import image132 from "../assets/images/departmental/Ajay Goud E.jpg"
import image133 from "../assets/images/download 8.png"
import image134 from "../assets/images/download 8.png"
import image135 from "../assets/images/download 8.png"
import image136 from "../assets/images/download 8.png"
import image137 from "../assets/images/download 8.png"
import image138 from "../assets/images/download 8.png"
import image139 from "../assets/images/download 8.png"
import image140 from "../assets/images/download 8.png"
import image141 from "../assets/images/download 8.png"
import image142 from "../assets/images/download 8.png"
import image143 from "../assets/images/departmental/Gurijala Meghana.jpg"
import image144 from "../assets/images/design/M Manikanta Reddy.jpg"
import image145 from "../assets/images/departmental/Shubham Kumar.jpg"
import image146 from "../assets/images/download 8.png"
import image147 from "../assets/images/departmental/Ajmire Harshada Nitin.jpg"
import image148 from "../assets/images/departmental/Adarsh Kumar Shrivastav.jpg"	
import image149 from "../assets/images/download 8.png"



import Image from "next/image"
import NavBar from "../components/nav-bar"
import { algreya, poppins } from "../utils/fonts"
import Footer from "../components/footer"

const TeamSection = ({ images, names, roles }) => {
	return (
		<div className="w-full grid grid-cols-2 sm:grid-cols-4 mobile:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-4 justify-between  bg-[#101010] mx-5 my-10 lg:my-20 lg:mx-10 font-poppins">
			{images.map((image, index) => (
				<div
					key={index}
					className="border-solid text-center bg-[#1C1C1C] w-75% sm:w-100% md:w-100% mb-5 mx-2 lg:mb-10  rounded-lg"
				>
					<Image
						width={1000}
						height={1000}
						src={image}
						alt={`Image ${index + 1}`}
						className="object-cover max-w-full rounded-t-lg aspect-[3/4]"
						placeholder="blur"
					/>
					<div
						className={`text-white mt font-poppins font-bold text-xl flex flex-col ${
							image === image10 ? "text-[19px]" : ""
						}`}
					>
						<strong className={poppins.className}>{names[index]}</strong>

						<span className={algreya.className}>
							{" "}
							<span className="text-sm text-[#BEBEBE]">{roles[index]}</span>
						</span>
					</div>
				</div>
			))}
		</div>
	)
}

function Devteam() {
	const images = [
		image1,
		image2,
		image3,
		// image4,
		// image5,
		// image6,
		// image7,
		// image8,
	]
	const names = [
		"Gaurav",
		"Jishnu",
		"Charity",
		// "Amal",
		// "Isaiah",
		// "Nishant",
		// "Marjiba",
		// "Gaurav",
		// "Lavanya",
	]
	const roles = [
		"Lead developer",
		"Lead developer",
		"Lead developer",
		// "Lead developer",
		// "Lead developer",
		// "Lead designer",
		// "Apprentice",
		// "Apprentice",
	]
	return <TeamSection images={images} names={names} roles={roles} />
}

function SAC() {
	const images = [image9, image10, image11, image12, image13]
	const names = [
		"Dr. Atanu Singha Roy",
		"Dr. Bunil Kr. Balabantaray",
		"Pardhu Mattupalli",
		"T. Swaroop Kumar",
		"Rounak Saha",
	]
	const roles = [
		"SAC President",
		"Vice-President, Technical",
		"General Secretary 1,Science & Technology",
		"General Secretary 2,Science & Technology",
		"Member 1,Science & Technology",
	]

	return <TeamSection images={images} names={names} roles={roles} />
}
function Core() {
	const images = [image14, image15, image16, image17, image18]
	const names = [
		"Prakhar Gupta",
		"Shaik Lai Sameer",
		"Wanrapbok R",
		"Supriya Neogi",
		"Om Prakash Yadav",
	]
	const roles = [
		"Coordinator",
		"Coordinator",
		"Co-coordinator",
		"Co-coordinator",
		"Co-coordinator",
	]

	return <TeamSection images={images} names={names} roles={roles} />
}
function Design() {
	const images = [image20, image21, image22, image23, image24, image25]
	const names = [
		"P Dhanunjay",
		"Shubhadeep Sinha",
		"Botu Varun",
		"M.Manikanta Reddy",
		"K. Surya Teja Gopal Reddy ",
		"Pankaj Tripati",
	]
	const roles = [
		"Convener",
		"Convener",
		"Coordinator",
		"Coordinator",
		"Coordinator",
		"Coordinator",
		"Coordinator",
		"Coordinator",
		"Coordinator",
		"Coordinator",
	]

	return <TeamSection images={images} names={names} roles={roles} />
}
function Marketing() {
	const images = [
		image0,
		image0,
		image0,
		image34,
		image0,
		image0,
		image0,
		image38,
		image39,
		image40,
		image41,
	]
	const names = [
		"Rathod Vikram",
		"Banteilang",
		"Jaswanth Kumar",
		"Kumar Gaurav",
		"Harsh Thakur",
		"Sourabh Paul",
		"Jenny Fersha",
		"Satyam Kumar ",
		"Achintya",
		"Kabesa S",
		"Neelkahntha",
	]
	const roles = [
		"Coordinator (Sponsor & Marketing)",
		"Coordinator (Sponsor & Marketing)",
		"Coordinator (Publicity & Social Media)",
		"Coordinator (Publicity & Social Media)",
		"Coordinator (Sponsor & Marketing)",
		"Co-coordinator (Sponsor & Marketing)",
		"Co-coordinator (Sponsor & Marketing)",
		"Co-coordinator (Sponsor & Marketing)",
		"Co-coordinator (Publicity & Social Media)",
		"Co-coordinator (Publicity & Social Media)",
		"Co-coordinator (Publicity & Social Media)",
	]

	return <TeamSection images={images} names={names} roles={roles} />
}
function Management() {
	const images = [
		image52,
		image51,
		image53,
		image0,
		image55,
		image68,
		image0,
		image54,
		image57,
		image58,
		image0,
		image0,
		image61,
		image62,
		image0,
		image0,
		image65,
		image66,
		image67,
	]
	const names = [
		"D S Hrangaolou",
		"Arilam",
		"Koninika Tarafdar",
		"Bahunshisha Snaitang",
		"Prem",
		"Ajay Reddy",
		"Dappalapoodi Bhuvanesh",
		"Mebadeipor",
		"Kenneth Wellborn ",
		"Klusborning Nongbri",
		"Sojib Datta",
		"Richmondwell L Kalwing",
		"B Palguna Rao",
		"S Charan Tejha",
		"B Sai Upender",
		"Olivia El Reka",
		"Penugurthi Dinesh",
		"Sonam Bharti",
		"Rakesh Srikar Reddy",
	]
	const roles = [
		"Coordinator (Hospitality)",
		"Coordinator (Hospitality)",
		"Co-coordinator (Hospitality)",
		"Co-coordinator (Hospitality)",
		"Co-coordinator (Hospitality)",
		"Coordinator (Food Committee)",
		"Co-coordinator (Food Committee)",
		"Coordinator (Stage Management)",
		"Coordinator (Stage Management)",
		"Coordinator (Stage Management)",
		"Co-coordinator (Stage Management)",
		"Co-coordinator (Stage Management)",
		"Co-coordinator (Stage Management)",
		"Coordinator (Event Management)",
		"Coordinator (Event Management)",
		"Coordinator (Event Management)",
		"Co-coordinator (Event Management)",
		"Co-coordinator (Event Management)",
		"Co-coordinator (Event Management)",
	]

	return <TeamSection images={images} names={names} roles={roles} />
}

function Robotics() {
	const images = [
		image81,
		image82,
		image83, 
		image84,
		image85,
		image86,
		image87,
		image88,
		image89,
		image90,
		image91,
		image92,
		image93,
		image94,
		image95,
		image96,
		image97,
		image98,
		image99,
		image991,
		image992,
		image993,
		image994,
		image995,
		image996,
	]
	const names = [
		"Sourabh Paul",
		"Sachin Raj",
		"Parthiv Das",
		"Narendra Kumar",
		"Ameya Patil",
		"Nirupan Jagnekar",
		"Ankit Singh",
		"Avinash Kumar Singh",
		"Ashvil Nagar",
		"Rahul Kumar",
		"Badurgari Rasool",
		"Aditya Kumar Pandey",
		"Chandrani Dalui",
		"Ankit Raj",
		"Rohit Aryan",
		"Shivam Kumar",
		"Himanshu Kumar Jha",
		"Sumit Kumar",
		"Angshuman Dey",
		"Neelkantha Mandal",
		"Sanapala Rahul",
		"Pranav Kumar Dubey",
		"Pankaj Saraswat",
		"Ashirbad Raj Arya",
		"Debashish Nayak"
	]
	const roles = [
		// "Convener",
		// "Convener",
		"Coordinator",
		"Coordinator",
		"Coordinator",
		"Coordinator",
		"Coordinator",
		"Coordinator",
		"Coordinator",
		"Coordinator",
		"Co-coordinator",
		"Co-coordinator",
		"Co-coordinator",
		"Co-coordinator",
		"Co-coordinator",
		"Co-coordinator",
		"Co-coordinator",
		"Co-coordinator",
		"Co-coordinator",
		"Co-coordinator",
		"Co-coordinator",
		"Co-coordinator",
		"Co-coordinator",
		"Co-coordinator",
		"Co-coordinator",
		"Co-coordinator",
		"Co-coordinator",
	]


	return <TeamSection images={images} names={names} roles={roles} />
}

function Coding() {
	const images = [
		image100,
		image101,
		image102,
		image103,
		image104,
		image105,
		image106,
		image107,
		image108,
		image109,
		image110,
		image111,
		image112,
		image113,
		image114,
		image115,
	]
	const names = [
		"Raj Kedia",
		"Anshu Das",
		"Shubhavi Kukreja",
		"Vasundhara Singh",
		"Roshan Kumar Sah",
		"Avinash Renukunta",
		"Samiksha Deb",
		"Gunnu Lavanya",
		"Manish Prasad Gupta",
		"Hriti Chakrabortty",
		"Satyajeet Rai",
		"Siddhant Purkayastha",
		"Karipireddy Surya Teja",
		"Ritabrata Pal",
		"Gaurav Joshi",
		"Rounak Saha"
	  ];
	  
	const roles = [
		"Convener",
		"Coordinator",
		"Coordinator",
		"Coordinator",
		"Coordinator",
		"Coordinator",
		"Co-Coordinator",
		"Co-Coordinator",
		"Co-Coordinator",
		"Co-Coordinator",
		"Co-Coordinator",
		"Co-Coordinator",
		"Co-Coordinator",
		"Co-Coordinator",
		"Co-Coordinator",
		"Co-Coordinator",
		
	]

	return <TeamSection images={images} names={names} roles={roles} />
}

function Gaming() {
	const images = [
		// image0,
	]
	const names = [
		// "Name",
	]
	const roles = [
		
	]

	return <TeamSection images={images} names={names} roles={roles} />
}

function Departmental() {
	const images = [
		image130,
		image131,
		image132,
		image133,
		image134,
		image135,
		image136,
		image137,
		image138,
		image139,
		image140,
		image141,
		image142,
		image143,
		image144,
		image145,
		image146,
		image147,
		image148,
		image149,
	]
	const names = [
		"Bhagya Raju",
		"Chebolu Sai Teja",
		"Ajay",
		"Somya Sonakshi",
		"Manisha",
		"Gunjan",
		"Diyasha Mahanta",
		"Sourab Paul",
		"Kundan Kumar",
		"Sweetha Singh",
		"Debadeep Chakraborty",
		"Aibanribiang Lyngkhoi",
		"Sayan Debanth",
		"Gurijala Meghana",
		"M. Manikanta Reddy",
		"Shubham Kumar",
		"Manisha Kumari",
		"Harshada",
		"Adarsh Kumar Shrivastav",
		"Preetikana Das"
	  ];
	  
	  const roles = [
		"Coordinator (CSE)",
		"Coordinator (CSE)",
		"Coordinator (ECE)",
		"Coordinator (ECE)",
		"Coordinator (EEE)",
		"Coordinator (EEE)",
		"Coordinator (ME)",
		"Coordinator (ME)",
		"Coordinator (CE)",
		"Coordinator (CE)",
		"Coordinator (Physics)",
		"Coordinator (Physics)",
		"Coordinator (Chemistry)",
		"Co-Coordinator (CSE)",
		"Co-Coordinator (ECE)",
		"Co-Coordinator (EEE)",
		"Co-Coordinator (ME)",
		"Co-Coordinator (CE)",
		"Co-Coordinator (Physics)",
		"Co-Coordinator (Chemistry)",
	  ];
	  

	return <TeamSection images={images} names={names} roles={roles} />
}

function Others() {
	const images = [
		image71,
		image0,
		image0,
		image0,
		image0,
		image0,
		image77,
		image78,
		image79,
		image0,
	]
	const names = [
		"Gannu Abhijith Sai",
		"Arkibud B. Ryntathiang",
		"Taruna",
		"Bingi Rakesh",
		"Diyasha Mahanta",
		"Rai Kachak Tripura",
		"Karimi Tarun Teja",
		"L Sri Kasyap",
		"Simma Kiran",
		"Nimmakuri Varun Teja",
	]
	const roles = [
		"Coordinator (Task Force Club)",
		"Coordinator (Task Force Club)",
		"Co-coordinator (Task Force Club)",
		"Coordinator (Traditional Dance)",
		"Coordinator (Traditional Dance)",
		"Coordinator (Photography and fine arts)",
		"Head (Volunteer)",
		"Head (Volunteer)",
		"Coordinator (Volunteer)",
		"Coordinator (Volunteer)",
	]

	return <TeamSection images={images} names={names} roles={roles} />
}


const componentsMap = {
	Dev: Devteam,
	SAC,
	Core,
	Design,
	Marketing,
	Management,
	Robotics,
	Coding,
	Departmental,
	Gaming,
	Others,
}

const Navbar1 = ({ items, onSelect, activeItem }) => {
	return (
		<div className="w-full pb-0 text-center grid grid-cols-4 items-center  overflow-x-hidden  border-b border-grey   mb-0 box-border transition-transform duration-300 ease-in">
			{items.map((item, index) => (
				<div
					key={index}
					onClick={() => onSelect(item)}
					style={{ textAlign: "centre" }}
					className={`cursor-pointer ${
						activeItem === item ? "border-b-2 border-white-500" : ""
					}`}
				>
					<p
						className={`pb-3 text-xs ${
							activeItem === item
								? "text-[#EBEBEB]"
								: "text-[#EBEBEB] opacity-40"
						} font-plus-jakarta-sans text-sm md:text-lg`}
					>
						{" "}
						{item}
					</p>
				</div>
			))}
		</div>
	)
}

const ContainerX = ({ content }) => {
	return (
		<div className="flex justify-center items-center h-200 text-white bg-[#101010]">
			{content}
		</div>
	)
}

const Team = () => {
	const [currentView, setCurrentView] = useState("Dev")
	const [slideIndex, setSlideIndex] = useState(0)

	const navbarItems = [
		"Dev",
		"SAC",
		"Core",
		"Design",
		"Marketing",
		"Management",
		"Robotics",
		"Coding",
		"Departmental",
		"Gaming",
		"Others",
	]

	const handleNavbarClick = (item) => {
		setCurrentView(item)
	}

	const handleSlideLeft = () => {
		setSlideIndex((prevIndex) => Math.max(prevIndex - 1, 0))
	}

	const handleSlideRight = () => {
		setSlideIndex((prevIndex) =>
			Math.min(prevIndex + 1, navbarItems.length - 4)
		)
	}
	const CurrentComponent = componentsMap[currentView]
	return (
		<div className="text-white z-10 relative">
			<div className="flex justify-center items-center">
				<div>
					{slideIndex !== 0 && (
						<button className="ml-3 pb-2 text-white" onClick={handleSlideLeft}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="22"
								height="22"
								viewBox="0 0 52 52"
								fill="none"
							>
								<circle
									cx="26"
									cy="26"
									r="25.5"
									transform="rotate(-180 26 26)"
									fill="#131313"
									stroke="#B8B8B8"
								/>
								<path
									d="M16.5858 24.5858C15.8047 25.3668 15.8047 26.6332 16.5858 27.4142L29.3137 40.1421C30.0948 40.9232 31.3611 40.9232 32.1421 40.1421C32.9232 39.3611 32.9232 38.0948 32.1421 37.3137L20.8284 26L32.1421 14.6863C32.9232 13.9052 32.9232 12.6389 32.1421 11.8579C31.3611 11.0768 30.0948 11.0768 29.3137 11.8579L16.5858 24.5858ZM21 24L18 24L18 28L21 28L21 24Z"
									fill="#B8B8B8"
								/>
							</svg>
						</button>
					)}
					{slideIndex === 0 && <div className="mr-8"></div>}
				</div>

				<Navbar1
					items={navbarItems.slice(slideIndex, slideIndex + 4)}
					onSelect={handleNavbarClick}
					activeItem={currentView}
				/>
				<div>
					{slideIndex !== navbarItems.length - 4 && (
						<button className="mr-3 pb-2 text-white" onClick={handleSlideRight}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="22"
								height="22"
								viewBox="0 0 52 52"
								fill="none"
							>
								<circle
									cx="26"
									cy="26"
									r="25.5"
									fill="#131313"
									stroke="#B8B8B8"
								/>
								<path
									d="M35.4142 27.4142C36.1953 26.6332 36.1953 25.3668 35.4142 24.5858L22.6863 11.8579C21.9052 11.0768 20.6389 11.0768 19.8579 11.8579C19.0768 12.6389 19.0768 13.9052 19.8579 14.6863L31.1716 26L19.8579 37.3137C19.0768 38.0948 19.0768 39.3611 19.8579 40.1421C20.6389 40.9232 21.9052 40.9232 22.6863 40.1421L35.4142 27.4142ZM31 28H34V24H31V28Z"
									fill="#B8B8B8"
								/>
							</svg>
						</button>
					)}
					{slideIndex === 3 && <div className="ml-8"></div>}
				</div>
			</div>
			<ContainerX content={<CurrentComponent />} />
		</div>
	)
}

function App() {
	return (
		<div className="overflow-clip">
			<div className="h-full w-full bg-[#101010]">
				<NavBar />
				<div className="relative w-full">
					<div className="absolute w-48 md:w-80 md:h-80 h-60 bg-purple-600 z-10 top-0 -left-10 rounded-full opacity-30 filter blur-xl animate-blob"></div>
					<div className="absolute  w-48 md:w-80 md:h-80 h-48 delay-1000 bg-indigo-600 z-10 -top-20 -right-28 rounded-full opacity-30 filter blur-xl animate-blob"></div>
					<div className="relative z-10">
						<div className="text-center mx-auto z-50 w-full text-white pb-8">
							{" "}
							<div
								style={{ letterSpacing: "-1px" }}
								className="pt-10 mt-10 z-50 sm:pt-10 md:pt-10 text-4xl lg:text-4xl xl:text-5xl font-bold text-[#E8E8E8] text-center font-poppins tracking-wide leading-tight"
							>
								Meet the <span className="text-[#61E2F4]">team</span>
							</div>
							<div className="flex mb-10  flex-col justify-center flex-shrink-0 text-[#EBEBEB] opacity-75 font-plus-jakarta-sans text-sm md:text-lg md:mb-4 mt-2 px-12">
								A special thanks to all the wonderful people who contributed to
								the event! Words can&apos;t express our appreciation for you!
							</div>
						</div>
					</div>
				</div>

				<div>
					<Team />
				</div>
				<Footer />
			</div>
		</div>
	)
}
export default App
