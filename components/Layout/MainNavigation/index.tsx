import Link from "next/link";
import classes from "./navigation.module.css";
import { Logo } from "../Logo";
import { Bag, Heart } from "../../Icons";

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
					<li>
						<Link href="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
			<nav>
				<ul>
					<li className={classes.icon}>
						<Link href="/"><Bag style={{color: "white"}} /></Link>
					</li>
					<li className={classes.icon}> 
						<Link href="/"><Heart style={{color: "white"}}/></Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}



