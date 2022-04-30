import type { MetaFunction } from "@remix-run/cloudflare";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";

import { Global, css } from "@emotion/react"

export const meta: MetaFunction = () => ({
	charset: "utf-8",
	title: "Sean Velasco",
	viewport: "width=device-width,initial-scale=1",
});

export default function App() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
				
			</head>
			<Global styles={
				css`
				* {
  box-sizing: border-box;
}
					body {
						background: rgb(25, 25, 25) none repeat scroll 0% 0%;
						color: rgba(255, 255, 255, 0.81);
						font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
						width: 100vw;
						height: 100%;
						position: relative;
						display: flex;
						margin: 0;
						padding: 0;
					}
					h1, h2, h3 {
						margin: 0;
					}


				`
				}
			/>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
				
			</body>
		</html>
	);
}
