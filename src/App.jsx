import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
import './App.css';
import logoGif from './assets/wired-outline-744-pendrive-storage-hover-pinch (1).gif';
import uploadImage from './assets/upload.png';
import landingImage from './assets/landing.png';
import filesImage  from './assets/files.png';
import featuresImage from './assets/features.png';

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-950 text-white p-8 font-sans">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-16 h-screen center flex-col" data-aos="fade-up">
            <div>
              <img src={logoGif} alt='logo' className='h-24 w-24'/>
            </div>
            <h1 className="text-5xl font-bold text-blue-400 mb-6">DecentraDrive Docs</h1>
            <p className="text-2xl text-gray-300">Decentralized Storage for the Modern Web</p>
          </header>

          <main className="space-y-20">
            <section className='h-[50vh]' data-aos="fade-up">
              <h2 className="text-4xl font-semibold text-blue-300 mb-6">Project Importance</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                In an era where data breaches and privacy concerns are rampant, DecentraDrive 
                emerges as a crucial solution. By leveraging the power of decentralized 
                technology, we're redefining how personal and sensitive data is stored and 
                accessed in the digital age. Our mission is to provide individuals and businesses 
                with a secure, privacy-focused alternative to traditional cloud storage.
              </p>
            </section>

            <section className='h-[50vh] text-start' data-aos="fade-up">
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

            <section className='h-[50vh] text-start' data-aos="fade-up">
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

            <section data-aos="fade-up">
              <h2 className="text-4xl font-semibold text-blue-300 mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-gray-800 p-6 rounded-lg" data-aos="fade-right">
                  <h3 className="text-2xl font-semibold text-blue-200 mb-4">Secure File Upload</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">Easily upload your files with end-to-end encryption.</p>
                  <div className="mt-6 bg-gray-700 h-48 flex items-center justify-center rounded">
                    <img src={uploadImage} alt='upload image' />
                  </div>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg" data-aos="fade-left">
                  <h3 className="text-2xl font-semibold text-blue-200 mb-4">Decentralized Storage</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">Your files are stored across a network of nodes, ensuring high availability and reliability.</p>
                  <div className="mt-6 bg-gray-700 h-48 flex items-center justify-center rounded">
                    <img src={filesImage} alt='file image' />
                  </div>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg" data-aos="fade-right">
                  <h3 className="text-2xl font-semibold text-blue-200 mb-4">Easy File Management</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">Intuitive interface for managing your stored files, with options for organization and categorization.</p>
                  <div className="mt-6 bg-gray-700 h-48 flex items-center justify-center rounded">
                    <img src={featuresImage} alt='all features' />
                  </div>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg" data-aos="fade-left">
                  <h3 className="text-2xl font-semibold text-blue-200 mb-4">Secure Sharing</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">Share files securely with granular access controls, ensuring only authorized individuals have access.</p>
                  <div className="mt-6 bg-gray-700 h-48 flex items-center justify-center rounded">
                    <img src={landingImage} alt='test landing image' />
                  </div>
                </div>
              </div>
            </section>

            <section className='h-[50vh] center flex-col' data-aos="fade-up">
              <h2 className="text-4xl font-semibold text-blue-300 mb-6">Getting Started</h2>
              <ol className="list-decimal list-inside text-start text-lg text-gray-300 space-y-6">
                <li>
                  <strong>Create an Account:</strong> Sign up for DecentraDrive using your email or Web3 wallet.
                </li>
                <li>
                  <strong>Upload Your First File:</strong> Click the upload button and select a file from your device to store it securely.
                </li>
                <li>
                  <strong>Manage Your Files:</strong> Use the dashboard to view, organize, download, or share your uploaded files easily.
                </li>
                <li>
                  <strong>Explore Advanced Features:</strong> Dive into file versioning, automated backups, and more for comprehensive data management.
                </li>
              </ol>
            </section>
          </main>

          <footer className="mt-20 text-center text-gray-500" data-aos="fade-up">
            <p className="text-lg">&copy; 2024 DecentraDrive. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;