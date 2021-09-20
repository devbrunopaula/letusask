import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/Logo.png'
import googleIconImg from '../assets/images/google-icon.svg'
function Home() {
	return (
		<div className=' flex min-h-screen'>
			<aside className='flex-1 bg-purple-500 flex justify-center items-center flex-col'>
				<img
					className=''
					src={illustrationImg}
					alt='Illustration questions and answers'
				/>
				<strong>Create live Q&amp;A chat rooms</strong>
				<p>Answer all your audience quenstions in real time.</p>
			</aside>
			<main className='test1 flex-1 flex justify-center items-center flex-col'>
				<div className='test1'>
					<img
						className='mb-3'
						src={logoImg}
						alt='letUsAsl company logo'
					/>
					<div>
						<img src={googleIconImg} alt='google icon' />
						<button>Create a room with Google</button>
					</div>
				</div>
			</main>
		</div>
	)
}

export default Home
