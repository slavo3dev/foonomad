import { Menu } from "semantic-ui-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";



export const MainHeader = () =>
{
	const [ activeItem, setActiveItem ] = useState("");
	

	return (
		<Menu secondary stackable>
			<Link href="/">
				<Menu.Item active={ activeItem === "home" } onClick={() => setActiveItem("home")}>
					<Image width={ 150 } height={ 75 } src="/assets/images/15075nrgnomad.png" alt="nrg nomad logo" />
				</Menu.Item>
			</Link>
			<Menu.Item position="right">
				<Link href="/about">
					<Menu.Item  active={activeItem === "about"} onClick={() => setActiveItem("about")}>
						About us
					</Menu.Item>
				</Link>
				<Link href="/blog">
					<Menu.Item  active={activeItem === "blog"} onClick={() => setActiveItem("blog")}>
						Blog
					</Menu.Item>
				</Link>
				<Link href="/contact">
					<Menu.Item  active={activeItem === "contact"} onClick={() => setActiveItem("contact")}> 
						Contact
					</Menu.Item>
				</Link>
				<Link href="/login">
					<Menu.Item  active={activeItem === "login"} onClick={() => setActiveItem("login")}> 
						Login
					</Menu.Item>
				</Link>
			</Menu.Item>
		</Menu>
	);
};

