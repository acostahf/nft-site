import Head from "next/head";
import Image from "next/image";
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Team from "../components/Team";
import reactPng from './assets/logo192.png'
export default function Home() {
	return (
		<div >
        	<Hero />
			<Team />
		</div>
	);
}
