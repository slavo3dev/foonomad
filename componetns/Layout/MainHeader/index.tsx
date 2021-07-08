import { Menu } from "semantic-ui-react";
import Link from "next/link";

export const MainHeader = () =>
{

	return (
		<Menu>
			<Menu.Item header>
				<img src="/assets/images/logonrgnomad.png" alt="nrg nomad logo"/>
                NRG NOMAD
			</Menu.Item>
			<Menu.Item name="Menu">
				<Menu.Item>
					<Link href="/about">
						<a>Blog</a>
					</Link>
					<Link href="/blog">
						<a>Blog</a>
					</Link>
					<Link href="/blog">
						<a>Contact</a>
					</Link>
				</Menu.Item>
			</Menu.Item>
		</Menu>
	);
};

