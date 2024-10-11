import 'aos/dist/aos.css'
import { useEffect } from 'react'
import AOS from 'aos'
import './App.css'
import logoGif from './assets/wired-outline-744-pendrive-storage-hover-pinch (1).gif'
import KeyFeaturesSection from './KeyFeaturesSection'
import videoRecord from './assets/recording.mov'

function App() {
	useEffect(() => {
		AOS.init({ duration: 1000, easing: 'ease-in-out', once: true })
	}, [])

	return (
		<>
			<div className="min-h-screen bg-gray-950 text-white p-8 font-sans">
				<div className="max-w-6xl mx-auto">
					<header className="text-center mb-16 h-screen center flex-col" data-aos="fade-up">
						<div>
							<img src={logoGif} alt="logo" className="h-24 w-24" />
						</div>
						<h1 className="text-5xl font-bold text-blue-400 mb-6">DecentraDrive Docs</h1>
						<p className="text-2xl text-gray-300">Decentralized Storage for the Modern Web</p>
					</header>

					<main className="space-y-20">
						<section className="h-[50vh]" data-aos="fade-up">
							<h2 className="text-4xl font-semibold text-blue-300 mb-6">Project Importance</h2>
							<p className="text-lg text-gray-300 leading-relaxed">
								In an era where data breaches and privacy concerns are rampant, DecentraDrive
								emerges as a crucial solution. By leveraging the power of decentralized technology,
								we're redefining how personal and sensitive data is stored and accessed in the
								digital age. Our mission is to provide individuals and businesses with a secure,
								privacy-focused alternative to traditional cloud storage.
							</p>
						</section>

						<section className="h-[50vh] text-start" data-aos="fade-up">
							<h2 className="text-4xl font-semibold text-blue-300 mb-6">The Problem</h2>
							<p className="text-lg text-gray-300 mb-4 leading-relaxed">
								Traditional centralized storage solutions pose significant risks:
							</p>
							<ul className="list-disc text-start text-lg text-gray-300 space-y-4 mt-6">
								<li>Vulnerability to data breaches and hacks</li>
								<li>Single points of failure leading to service disruptions</li>
								<li>Lack of true data ownership and privacy</li>
								<li>Susceptibility to censorship and data manipulation</li>
							</ul>
						</section>

						<section className="h-[50vh] text-start" data-aos="fade-up">
							<h2 className="text-4xl font-semibold text-blue-300 mb-6">Our Solution</h2>
							<p className="text-lg text-gray-300 mb-4 leading-relaxed">
								DecentraDrive addresses these challenges by providing:
							</p>
							<ul className="list-disc list-inside text-start text-lg text-gray-300 space-y-4 mt-6">
								<li>Decentralized storage powered by the Internet Computer</li>
								<li>Enhanced security through distributed data storage</li>
								<li>True data ownership with user-controlled access</li>
								<li>Resistance to censorship and unauthorized data alterations</li>
								<li>Redundancy to ensure availability even in case of node failures</li>
							</ul>
						</section>

						<KeyFeaturesSection />

						<section className="min-h-[50vh] text-start mt-10" data-aos="fade-up">
							<video controls>
								<source src={videoRecord} type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						</section>

						<div className="my-8 center">
							<a href='https://github.com/Raccoon254/DecentraDrive.git' className="bg-blue-700 hover:bg-blue-700 rounded-full pl-2 ring-2 ring-offset-2 center gap-2 px-2 py-2 text-white">
								<img className='w-8 h-8' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
								View in github
							</a>
						</div>

						<section className="h-[50vh] text-start mt-10" data-aos="fade-up">
							<h2 className="text-4xl font-semibold text-blue-300 mb-6">Decentra Future</h2>
							<p className="text-lg text-gray-300 mb-4 leading-relaxed">
								We are planning to add the following functionalities
							</p>
							<ul className="list-disc list-inside text-start text-lg text-gray-300 space-y-4 mt-6">
								<li>Integration with popular Web3 wallets for seamless authentication</li>
								<li>Automated data backup and version control</li>
								<li>Support for smart contract-based file sharing</li>
								<li>End-to-end encrypted messaging for secure communication</li>
								<li>Advanced analytics for tracking file usage and access</li>
								<li>Expanded support for multimedia files including video streaming</li>
							</ul>
						</section>
					</main>

					<footer className="mt-20 text-center text-gray-500" data-aos="fade-up">
						<p className="text-lg">&copy; 2024 DecentraDrive. All rights reserved.</p>
					</footer>
				</div>
			</div>
		</>
	)
}

export default App
