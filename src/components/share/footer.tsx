import React from "react";

const Footer = () => {
	return (
		<footer id="footer" className="mt-[54px] bg-dark-aquaman w-full">
			<div className="px-4 py-6 w-full max-w-7xl mx-auto flex flex-col lg:flex-row space-y-4 justify-between items-center">
				<p className="text-vista-white">
					© 2023 Zamrood by PT Teknologi Pandu Wisata
				</p>
				<div className="w-fit inline-flex gap-6 items-center justify-center lg:justify-end">
					<a
						target="_blank"
						aria-label="facebook"
						href="https://web.facebook.com/profile.php?id=100094528566390">
						<svg
							width="24"
							height="25"
							viewBox="0 0 24 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M0.857422 21.608V2.75091C0.857422 2.29625 1.03803 1.86021 1.35952 1.53872C1.68102 1.21723 2.11705 1.03662 2.57171 1.03662H21.4289C21.8835 1.03662 22.3195 1.21723 22.641 1.53872C22.9625 1.86021 23.1431 2.29625 23.1431 2.75091V21.608C23.1431 22.0627 22.9625 22.4987 22.641 22.8202C22.3195 23.1417 21.8835 23.3223 21.4289 23.3223H16.286V15.1966H17.5031C17.7805 15.1966 18.0465 15.0864 18.2426 14.8903C18.4387 14.6942 18.5489 14.4282 18.5489 14.1509V12.8309C18.5489 12.5536 18.4387 12.2876 18.2426 12.0915C18.0465 11.8954 17.7805 11.7852 17.5031 11.7852H16.3546V10.1738C16.3546 8.73376 17.006 8.73376 17.6574 8.73376H18.4974C18.6354 8.73945 18.7729 8.71476 18.9003 8.66144C19.0277 8.60812 19.1418 8.52747 19.2346 8.42519C19.3342 8.33035 19.4131 8.21587 19.4662 8.08899C19.5193 7.9621 19.5455 7.82558 19.5431 7.68805V6.41948C19.5477 6.27988 19.5247 6.14076 19.4755 6.01005C19.4263 5.87934 19.3518 5.75962 19.2562 5.65773C19.1607 5.55583 19.046 5.47376 18.9188 5.41622C18.7915 5.35867 18.6542 5.32677 18.5146 5.32234H16.5431C15.9679 5.30071 15.3948 5.40421 14.8635 5.62569C14.3322 5.84717 13.8553 6.18135 13.4657 6.60514C13.0761 7.02893 12.7832 7.53224 12.6072 8.0803C12.4311 8.62835 12.3761 9.2081 12.446 9.77948V11.7852H11.3489C11.2101 11.7829 11.0723 11.8083 10.9434 11.8598C10.8145 11.9114 10.6972 11.988 10.5983 12.0853C10.4994 12.1827 10.4208 12.2987 10.3672 12.4267C10.3136 12.5547 10.286 12.6921 10.286 12.8309V14.1509C10.286 14.2897 10.3136 14.4271 10.3672 14.5551C10.4208 14.6831 10.4994 14.7991 10.5983 14.8965C10.6972 14.9938 10.8145 15.0705 10.9434 15.122C11.0723 15.1735 11.2101 15.1989 11.3489 15.1966H12.446V23.3223H2.57171C2.11705 23.3223 1.68102 23.1417 1.35952 22.8202C1.03803 22.4987 0.857422 22.0627 0.857422 21.608Z"
								stroke="white"
								stroke-linecap="round"
								stroke-linejoin="round"></path>
						</svg>
					</a>
					<a
						target="_blank"
						aria-label="instagram"
						href="https://www.instagram.com/zamrood.asia/">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M16 7C16 6.73478 16.1054 6.48043 16.2929 6.29289C16.4804 6.10536 16.7348 6 17 6C17.2652 6 17.5196 6.10536 17.7071 6.29289C17.8946 6.48043 18 6.73478 18 7C18 7.26522 17.8946 7.51957 17.7071 7.70711C17.5196 7.89464 17.2652 8 17 8C16.7348 8 16.4804 7.89464 16.2929 7.70711C16.1054 7.51957 16 7.26522 16 7Z"
								fill="white"></path>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M12 7.25C10.7402 7.25 9.53204 7.75045 8.64124 8.64124C7.75045 9.53204 7.25 10.7402 7.25 12C7.25 13.2598 7.75045 14.468 8.64124 15.3588C9.53204 16.2496 10.7402 16.75 12 16.75C13.2598 16.75 14.468 16.2496 15.3588 15.3588C16.2496 14.468 16.75 13.2598 16.75 12C16.75 10.7402 16.2496 9.53204 15.3588 8.64124C14.468 7.75045 13.2598 7.25 12 7.25ZM8.75 12C8.75 11.138 9.09241 10.3114 9.7019 9.7019C10.3114 9.09241 11.138 8.75 12 8.75C12.862 8.75 13.6886 9.09241 14.2981 9.7019C14.9076 10.3114 15.25 11.138 15.25 12C15.25 12.862 14.9076 13.6886 14.2981 14.2981C13.6886 14.9076 12.862 15.25 12 15.25C11.138 15.25 10.3114 14.9076 9.7019 14.2981C9.09241 13.6886 8.75 12.862 8.75 12Z"
								fill="white"></path>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M17.2581 2.83303C13.7634 2.44563 10.2367 2.44563 6.74206 2.83303C4.73006 3.05803 3.10506 4.64303 2.86906 6.66503C2.45446 10.2096 2.45446 13.7904 2.86906 17.335C3.10506 19.357 4.72906 20.942 6.74206 21.167C10.2367 21.554 13.7634 21.554 17.2581 21.167C19.2701 20.942 20.8951 19.357 21.1311 17.335C21.5457 13.7905 21.5457 10.2096 21.1311 6.66503C20.8951 4.64303 19.2711 3.05803 17.2581 2.83303ZM6.90806 4.32303C10.2924 3.94791 13.7078 3.94791 17.0921 4.32303C18.4221 4.47303 19.4871 5.52203 19.6421 6.84003C20.043 10.2684 20.043 13.7317 19.6421 17.16C19.5619 17.8051 19.2666 18.4043 18.8039 18.8608C18.3412 19.3173 17.7381 19.6045 17.0921 19.676C13.7078 20.0512 10.2924 20.0512 6.90806 19.676C6.262 19.6045 5.65891 19.3173 5.19621 18.8608C4.73351 18.4043 4.43823 17.8051 4.35806 17.16C3.9571 13.7317 3.9571 10.2684 4.35806 6.84003C4.43823 6.19499 4.73351 5.59581 5.19621 5.13929C5.65891 4.68276 6.262 4.39454 6.90806 4.32303Z"
								fill="white"></path>
						</svg>
					</a>
					<a
						target="_blank"
						aria-label="email"
						href="mailto:zamrood@pandooin.com">
						<svg
							width="24"
							height="25"
							viewBox="0 0 24 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M21 4.67969H3C2.60218 4.67969 2.22064 4.83772 1.93934 5.11903C1.65804 5.40033 1.5 5.78186 1.5 6.17969V18.1797C1.5 18.5775 1.65804 18.959 1.93934 19.2403C2.22064 19.5217 2.60218 19.6797 3 19.6797H21C21.3978 19.6797 21.7794 19.5217 22.0607 19.2403C22.342 18.959 22.5 18.5775 22.5 18.1797V6.17969C22.5 5.78186 22.342 5.40033 22.0607 5.11903C21.7794 4.83772 21.3978 4.67969 21 4.67969ZM19.35 6.17969L12 11.2647L4.65 6.17969H19.35ZM3 18.1797V6.86219L11.5725 12.7947C11.698 12.8818 11.8472 12.9285 12 12.9285C12.1528 12.9285 12.302 12.8818 12.4275 12.7947L21 6.86219V18.1797H3Z"
								fill="#FAF9F5"></path>
						</svg>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
