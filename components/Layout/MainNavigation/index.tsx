import Link from "next/link";
import classes from "./navigation.module.css";
import { Logo } from "../Logo";


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
						<Link href="/about">About</Link>
					</li>
					<li>
						<Link href="/blog">Blog</Link>
					</li>
					{/* <li>
						<Link href="/contact">Contact</Link>
					</li> */}
				</ul>
			</nav>
		</header>
	);
}



