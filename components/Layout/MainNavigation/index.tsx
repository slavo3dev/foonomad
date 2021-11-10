import Link from "next/link";
import classes from "./navigation.module.css";
import { Logo } from "../Logo";
import { Plus } from "@components/Icons";


export function MainNavigation() {
	return (
		<header className={classes.header}>
			<Link href="/">
				<a>
					<Logo />
				</a>
			</Link>
			<nav>
				<ul>
					<li>
						<Link href="/about">Company</Link>
					</li>
					<li>
						<Link href="/blog">Blog</Link>
					</li>
					<li>
						<Link href="/ethshop">Marketplace</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li>
					<li>
						<Link href="/#">Log In</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}



