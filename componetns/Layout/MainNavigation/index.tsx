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
						<Link href="/posts">About</Link>
					</li>
					<li>
						<Link href="/events">Blog</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li>
					<li>
						<Link href="/contact">Login</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}



