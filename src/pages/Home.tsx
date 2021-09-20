import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/Logo.png'
import googleIconImg from '../assets/images/google-icon.svg'
import {IoEnterOutline} from 'react-icons/io5'
function Home() {
	return (
		<div className=' flex min-h-screen'>
			<aside className='hidden  lg:flex-1 lg:bg-purple-500 lg:flex lg:justify-center lg:items-center lg:flex-col '>
				<div>
					<img
						className=''
						src={illustrationImg}
						alt='Illustration questions and answers'
					/>
					<p className='text-white text-5xl mb-5 font-bold'>
						Every question has <br /> an answer
					</p>

					<p className='text-gray-200 text-xl'>
						Learn and share knowledge <br /> with other people.
					</p>
				</div>
			</aside>
			<main className='flex-1 flex justify-center items-center flex-col'>
				<div className=''>
					<div className='flex justify-center items-center'>
						<img
							className='mb-14 '
							src={logoImg}
							alt='letUsAsl company logo'
						/>
					</div>
					<div className='bg-red-500 flex px-9 py-5 rounded-xl'>
						<img
							className='pr-5'
							src={googleIconImg}
							alt='google icon'
						/>
						<button className='text-white font-bold'>
							Create a room with Google
						</button>
					</div>
					{/* Enter to a room divider */}
					<div className='relative my-10'>
						<div
							className='absolute inset-0 flex items-center'
							aria-hidden='true'
						>
							<div className='w-full border-t border-gray-300' />
						</div>
						<div className='relative flex justify-center'>
							<span className='px-3 text-gray-400 bg-white text-lg font-medium '>
								or enter to a room
							</span>
						</div>
					</div>

					{/* enter code */}
					<div>
						<form>
							<label htmlFor='code' className='sr-only'>
								Email
							</label>
							<input
								type='text'
								name='code'
								id='code'
								className='h-12 text-gray-600 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
								placeholder='Type your room code'
							/>
						</form>
					</div>
					{/* Enter a Room Button */}
					<div className='bg-purple-500 mt-10 flex justify-center px-9 py-5 rounded-xl'>
						<IoEnterOutline
							className='text-3xl mr-3 text-white'
							aria-hidden='true'
						/>
						<button className='text-white font-bold'>
							Enter a room
						</button>
					</div>
				</div>
			</main>
		</div>
	)
}

export default Home
