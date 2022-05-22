import React from "react";
import Navbar from "./Navbar";

import { useState } from "react";

function Layout({ children }) {
	const [accounts, setAccounts] = useState([]);
	return (
		<div className="content">
			<Navbar accounts={accounts} setAccounts={setAccounts} />
			{children}
		</div>
	);
}

export default Layout;
