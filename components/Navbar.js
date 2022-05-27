import React, { useState } from "react";
import Link from "next/link";

const navLinks = [
	{
		name: "Mint",
		url: "/mint",
	},
	{
		name: "Home",
		url: "/home",
	},
	{
		name: "Roadmap",
		url: "/home",
	},
	{
		name: "Team",
		url: "/home",
	},
];

const Navbar = ({ accounts, setAccounts }) => {
	const isConnected = Boolean(accounts[0]);
	const [hamburgerOpen, setHamburgerOpen] = useState(false);

	async function connectAccount() {
		if (window.ethereum) {
			const accounts = await window.ethereum.request({
				method: "eth_requestAccounts",
			});
			setAccounts(accounts);
		}
	}

	const handleClick = () => {
		setHamburgerOpen(!hamburgerOpen);
		console.log("Clicked");
	};
	return (
		<div className="relative container mx-auto p-6">
			{/* FLEX CONTAINER */}
			<div className="flex justify-between items-center">
				{/* LOGO */}
				<div className="pt-2">
					<h1 className="logo text-2xl font-bold text-indigo-500">NFT</h1>
				</div>
				{/* MENU */}
				<ul className="hidden md:flex space-x-6">
					{navLinks.map((nav, i) => (
						<li className="hover:text-slate-50 font-semibold cursor-pointer z-10" key={i}>
							<Link  href="/" passHref>
								<a className="hover:text-slate-400 font-semibold cursor-pointer z-10">{nav.name}</a>
							</Link>
						</li>
					))}
				</ul>
				{/*Connect Wallet BUTTON */}
				{isConnected ? (
					<p className="swipeBtn overflow-hidden hidden md:block p-3 px-6 pt-2 rounded-full border-2 border-black ">Connected</p>
				) : (
					<button onClick={connectAccount} className="simpleBtn z-10 overflow-hidden hidden md:block p-3 px-6 pt-2  rounded-xl   ">
						Connect Wallet
					</button>
				)}
				{/* HAMBURGER MENU ICON */}
				<button
					onClick={handleClick}
					className={!hamburgerOpen ? "block hamburger md:hidden focus:outline-none" : "block open hamburger md:hidden focus:outline-none"}
				>
					<span className="hamburger-top"></span>
					<span className="hamburger-middle"></span>
					<span className="hamburger-bottom"></span>
				</button>
			</div>
			{/* MOBILE MENU */}
			<div className="md:hidden">
				<div
					className={
						!hamburgerOpen
							? "hidden"
							: "flex-col absolute h-screen w-full items-center self-end flex py-8 mt-10 space-y-6 font-bold bg-white  text-black sm:w-auto sm:self-center left-6 right-6 z-[1000] drop-shadow-md"
					}
				>
					{navLinks.map((nav, i) => (
						<Link key={i} href={nav.url}>
							<a className="cursor-pointer z-10">{nav.name}</a>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
