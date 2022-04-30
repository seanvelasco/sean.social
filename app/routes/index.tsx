import styled from "@emotion/styled"

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	gap: 2em 0;
	max-width: 600px;
	margin: 0 auto;
	padding: 2em;
`
const Image = styled.div`
	img {
		width: 150px;
		height: 150px;
		border-radius: 50%;
	}
`

const SocialWrapper = styled.a`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 2em;
	background-color: #2d2d2d;
	border-radius: 1em;
	color: rgb(149, 156, 163);
	width: 100%;
	text-decoration: none;
	div {
		min-width: 2em;
	}
	:hover {
		color: inherit;
	}

`

const Social = ({ name, href, social }: any) => {
	return (
		<SocialWrapper href={href} target="_blank"  >
			<div></div>
			<p>{name}</p>
			<div></div>
		</SocialWrapper>
	)
}

const links = [
	{
		name: "Personal Website",
		href: "https://seanvelasco.com"
	},
	{
		name: "GitHub",
		href: "https://github.com/seanvelasco"
	}

]

const Socials = ({ name, href, social }: any) => {
	return (
		<>
		{
			links.map((link: any) => {
				return (
					<Social key={link.name} name={link.name} href={link.href} />
				)
			})
		}
		</>
	)
}

const Bio = styled.h1`
	font-size: 2em;
	font-weight: 400;
`

export default function Index() {
	return (
		<Wrapper>
			<Image>
				<img src="sean.jpg" alt="Sean Velasco" />
			</Image>
			<Bio>Sean Velasco</Bio>
			<Socials />

		</Wrapper>
	);
}
