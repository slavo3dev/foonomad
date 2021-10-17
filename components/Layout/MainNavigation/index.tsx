import Link from "next/link";
import classes from "./navigation.module.css";
import { Logo } from "../Logo";
import { Bag, Heart } from "../../Icons";
import { useUI } from "@components/Context";
import { Sidebar, CartSidebar } from "@components/Shop";
import { useCart } from "@common/cart/use-cart";

export function MainNavigation() {

	const { openSidebar, isSidebarOpen, closeSidebar } = useUI();
	// const { data } = useCart();

	// console.log("Data: ", data);

	return (
		<header className={ classes.header }>
			<Sidebar
				onClose={ closeSidebar }
				isOpen={isSidebarOpen}>
				<CartSidebar />
			</Sidebar>
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
					<li className={ classes.icon }>
						<Link href="#"><a><Bag style={ { color: "white" } } onClick={openSidebar} /></a></Link>
					</li>
					<li className={classes.icon}> 
						<Link href="#"><a><Heart style={{color: "white"}}/></a></Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}



