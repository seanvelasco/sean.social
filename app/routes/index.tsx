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
	h1 {
		margin: 0;
		padding: 0;
	}
`
const Image = styled.div`
	img {
		width: 150px;
		height: 150px;
		// border-radius: 50%;
		// box-shadow: 0 1px 2px hsla(0,0%,0%,0.1), 0 1px 4px hsla(0, 0%, 0%, 0.1), 0 2px 8px hsla(0, 0%, 0%, 0.1);
	}
`

const SocialWrapper = styled.a`
	display: flex;
	justify-content: space-between;
	align-items: center;
	// gap: 2em;
	padding: 0 1em;
	background-color: #2d2d2d;
	border-radius: 1em;
	color: rgb(149, 156, 163);
	width: 100%;
	text-decoration: none;
	box-shadow: 0 1px 2px hsla(0,0%,0%,0.1), 0 1px 4px hsla(0, 0%, 0%, 0.1), 0 2px 8px hsla(0, 0%, 0%, 0.1);
	div {
		min-width: 2em;
	}
	svg {
        color: hsl(210,7%,61%);
        fill: hsl(210,7%,61%);
    }
	:hover {
		color: rgba(255, 255, 255, 0.81);
		svg {
			fill: rgba(255, 255, 255, 0.81);
		}
	}
	
`



const links = [
	{
		name: "seanvelasco.com",
		href: "https://seanvelasco.com",
		logo: <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18"><path d="M7.22 11.83a6 6 0 0 0 1.62.85l.61-1.8a4.1 4.1 0 1 1 4.04-.8l1.26 1.42a6 6 0 1 0-7.53.33Zm3.43-5.6a6 6 0 0 0-1.6-.87L8.4 7.15a4.1 4.1 0 1 1-4.05.73L3.12 6.43a6 6 0 1 0 7.53-.2Z"></path></svg>
	},
	{
		name: "Notion",
		href: "https://seanvelasco.notion.site",
		logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"width="18" height="18"viewBox="0 0 24 24"><path d="M 15.46875 1.5 L 2.9804688 2 A 0.50038132 0.50038132 0 0 0 2.9511719 2.0019531 A 1.0001 1.0001 0 0 0 2.9296875 2.0039062 A 1.0001 1.0001 0 0 0 2 3 L 2 16.894531 C 2 17.487 2.1760213 18.066018 2.5039062 18.558594 L 5.1679688 22.554688 A 1.0001 1.0001 0 0 0 6.0625 22.998047 L 22.0625 21.998047 A 1.0001 1.0001 0 0 0 23 21 L 23 5.5 A 1.0001 1.0001 0 0 0 22.736328 4.8242188 A 0.50037856 0.50037856 0 0 0 22.587891 4.6933594 A 0.50037856 0.50037856 0 0 0 22.585938 4.6914062 A 1.0001 1.0001 0 0 0 22.398438 4.5839844 L 18.296875 2.2441406 L 18.330078 2.265625 C 17.492273 1.6962298 16.485312 1.4260957 15.474609 1.5 L 15.46875 1.5 z M 15.525391 2.4980469 A 0.50005 0.50005 0 0 0 15.542969 2.4980469 C 16.330286 2.4394359 17.115017 2.6483002 17.767578 3.0917969 A 0.50005 0.50005 0 0 0 17.800781 3.1132812 L 20.324219 4.5527344 L 6.8554688 4.9882812 L 4.46875 2.9414062 L 15.525391 2.4980469 z M 21 6.5332031 L 21 20.060547 L 7 20.935547 L 7 6.984375 L 21 6.5332031 z M 19.441406 8.5019531 C 18.427406 8.5619531 17.407625 8.6115 16.390625 8.6875 C 16.056625 8.7125 15.808578 9.0013594 15.767578 9.3183594 C 15.748578 9.4663594 15.789031 9.5426875 15.957031 9.5546875 C 16.265031 9.5776875 16.570625 9.6212031 16.890625 9.6582031 L 16.890625 15.527344 C 16.796625 15.392344 16.745266 15.321047 16.697266 15.248047 C 15.387266 13.269047 14.071438 11.293641 12.773438 9.3066406 C 12.577437 9.0066406 12.393953 8.86225 12.001953 8.90625 C 11.084953 9.00725 10.160234 9.0373281 9.2402344 9.1113281 C 8.7302344 9.1523281 8.4274531 9.5989844 8.5644531 10.083984 C 8.9094531 10.113984 9.2572813 10.144781 9.6132812 10.175781 L 9.6132812 18.607422 C 9.3792813 18.673422 9.1461563 18.747688 8.9101562 18.804688 C 8.6701563 18.862688 8.5577187 19.024094 8.5117188 19.246094 C 8.4747187 19.424094 8.5183281 19.514047 8.7363281 19.498047 C 9.4853281 19.445047 10.238281 19.412188 10.988281 19.367188 C 11.298281 19.349188 11.609063 19.342969 11.914062 19.292969 C 12.330062 19.223969 12.556563 18.970453 12.601562 18.564453 C 12.231563 18.482453 11.859375 18.392312 11.484375 18.320312 C 11.317375 18.288312 11.260719 18.219875 11.261719 18.046875 C 11.267719 16.090875 11.266578 14.133734 11.267578 12.177734 C 11.267578 12.113734 11.280969 12.048406 11.292969 11.941406 C 11.350969 12.018406 11.374484 12.049984 11.396484 12.083984 C 12.408484 13.654984 13.417547 15.229875 14.435547 16.796875 C 14.873547 17.470875 15.322203 18.137875 15.783203 18.796875 C 16.117203 19.274875 16.607063 19.426547 17.164062 19.310547 C 17.512062 19.237547 17.8465 19.098234 18.1875 18.990234 C 18.3775 18.930234 18.432641 18.807422 18.431641 18.607422 C 18.424641 15.733422 18.427734 12.860328 18.427734 9.9863281 C 18.427734 9.4513281 18.426031 9.4517969 18.957031 9.3417969 C 19.445031 9.2407969 19.588406 9.0019531 19.441406 8.5019531 z"></path></svg>
	},
	{
		name: "Telegram",
		href: "https://telegram.me/seanvelasco",
		logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 24 24"><path d="M 20.572266 3.0117188 C 20.239891 2.9764687 19.878625 3.028375 19.515625 3.171875 C 19.065625 3.348875 12.014406 6.3150313 5.4414062 9.0820312 L 3.2695312 9.9960938 C 2.4285313 10.337094 2.0039062 10.891672 2.0039062 11.638672 C 2.0039062 12.161672 2.22525 12.871063 3.28125 13.289062 L 6.9472656 14.757812 C 7.2642656 15.708813 8.0005469 17.916906 8.1855469 18.503906 C 8.2955469 18.851906 8.5733906 19.728594 9.2753906 19.933594 C 9.4193906 19.982594 9.5696563 20.007813 9.7226562 20.007812 C 10.165656 20.007812 10.484625 19.801641 10.640625 19.681641 L 12.970703 17.710938 L 15.800781 20.328125 C 15.909781 20.439125 16.486719 21 17.261719 21 C 18.228719 21 18.962234 20.195016 19.115234 19.416016 C 19.198234 18.989016 21.927734 5.2870625 21.927734 5.2890625 C 22.172734 4.1900625 21.732219 3.6199531 21.449219 3.3769531 C 21.206719 3.1694531 20.904641 3.0469688 20.572266 3.0117188 z M 19.910156 5.171875 C 19.533156 7.061875 17.478016 17.378234 17.166016 18.865234 L 13.029297 15.039062 L 10.222656 17.416016 L 11 14.375 C 11 14.375 16.362547 8.9468594 16.685547 8.6308594 C 16.945547 8.3778594 17 8.2891719 17 8.2011719 C 17 8.0841719 16.939781 8 16.800781 8 C 16.675781 8 16.506016 8.1197812 16.416016 8.1757812 C 15.272669 8.8885973 10.404094 11.662239 8.0078125 13.025391 L 4.53125 11.636719 L 6.21875 10.927734 C 10.51775 9.1177344 18.174156 5.893875 19.910156 5.171875 z"></path></svg>
	},
	{
		name: "GitHub",
		href: "https://github.com/seanvelasco",
		logo: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
	},
	{
		name: "StackBlitz",
		href: "https://stackblitz.com/@seanvelasco",
		logo: <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 1360.000000 1360.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,1360.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M5976 9507 l-3639 -3822 1918 -3 c1527 -2 1916 -5 1912 -15 -9 -23-2168 -5261 -2198 -5332 l-29 -69 26 26 c15 14 1663 1746 3663 3849 l36373824 -1927 5 -1926 5 1103 2674 c607 1471 1102 2676 1101 2677 -1 1 -1639-1718 -3641 -3819z"/></g></svg>,
		hidden: true
	},
	{
		name: "TikTok",
		href: "https://tiktok.com/@seanvelasco",
		logo: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/></svg>,
		hidden: true
	},
	{
		name: "Ko-fi",
		href: "https://sean.coffee",
		logo: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path d="M23.881,9.005C23.108,4.998,19.022,4.5,19.022,4.5H0.723c-0.604,0-0.679,0.783-0.679,0.783s-0.082,7.184-0.022,11.596C0.186,19.257,2.608,19.5,2.608,19.5s8.267-0.022,11.966-0.048c2.438-0.418,2.683-2.517,2.658-3.663C21.584,16.025,24.654,13.012,23.881,9.005z M12.819,12.449c-1.246,1.425-4.011,3.9-4.011,3.9s-0.121,0.117-0.31,0.022c-0.076-0.056-0.108-0.088-0.108-0.088c-0.443-0.432-3.368-2.991-4.034-3.879c-0.709-0.947-1.041-2.648-0.091-3.639C5.216,7.775,7.27,7.701,8.628,9.165c0,0,1.565-1.748,3.468-0.945C14,9.025,13.928,11.174,12.819,12.449z M18.992,12.918c-0.928,0.114-1.682,0.027-1.682,0.027V7.373h1.77c0,0,1.971,0.541,1.971,2.588C21.051,11.837,20.066,12.577,18.992,12.918z"/></svg>,
		hidden: false

	}
]

const Social = ({ name, href, logo }: any) => {
	return (
		<SocialWrapper href={href} target="_blank"  >
			<div>{logo}</div>
			<p>{name}</p>
			<div></div>
		</SocialWrapper>
	)
}

const SocialGroupWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	gap: 2em 0;
`

const Socials = ({ name, href, social }: any) => {
	return (
		<SocialGroupWrapper>
		{
			links.map((link: any) => {
				return (
					!(link.hidden) &&
					<Social key={link.name} name={link.name} href={link.href} logo={link.logo} />
				)
			})
		}
		</SocialGroupWrapper>
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
				<img src="hello.gif" alt="Sean Velasco" />
			</Image>
			<Bio>Sean Velasco</Bio>
			<Socials />

		</Wrapper>
	);
}
