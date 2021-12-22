// import logo from "./logo.svg";
import "./styles/App.css";

// sections
import About from "./components/sections/about";
import Contact from "./components/sections/contact";
import Landing from "./components/sections/landing";
import Work from "./components/sections/work";

// parts
import Header from "./components/parts/header";

function App() {
	return (
		<div>
			<Header />
			<About />
			<Contact />
			<Landing />
			<Work />
		</div>
	);
}

export default App;
