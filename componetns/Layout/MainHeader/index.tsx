import { Menu } from "semantic-ui-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";



export const MainHeader = () =>
{
	const [ activeItem, setActiveItem ] = useState("");
	

	return (
		<Menu secondary stackable>
			<Menu.Item active={ activeItem === "home" } onClick={() => setActiveItem("home")}>
				<Link href="/">
					<a><Image width={ 150 } height={ 75 } src="/assets/images/15075nrgnomad.png" alt="nrg nomad logo" /></a>
				</Link>
			</Menu.Item>
			<Menu.Item position="right">
				<Menu.Item active={activeItem === "about"} onClick={() => setActiveItem("about")}>
					<Link href="/about">
						<a>About us</a>
					</Link>
				</Menu.Item>
				<Menu.Item  active={activeItem === "blog"} onClick={() => setActiveItem("blog")}>
					<Link href="/blog">
						<a>Blog</a>
					</Link>
				</Menu.Item>
				<Menu.Item  active={activeItem === "contact"} onClick={() => setActiveItem("contact")}> 
					<Link href="/contact">
						<a>Contact</a>
					</Link>
				</Menu.Item>
				<Menu.Item  active={activeItem === "login"} onClick={() => setActiveItem("login")}> 
					<Link href="/login">
						<a>Login</a>
					</Link>
				</Menu.Item>
			</Menu.Item>
		</Menu>
	);
};

