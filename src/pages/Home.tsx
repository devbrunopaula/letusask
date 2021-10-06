import {FormEvent, useState} from 'react'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/Logo.png'
import googleIconImg from '../assets/images/google-icon.svg'
import {IoEnterOutline} from 'react-icons/io5'
import Button from '../components/Button'
import {useHistory} from 'react-router-dom'

import {useAuth} from '../hooks/useAuth'
import {database} from '../services/firebase'
import ErrorAlert from '../components/Alert/ErrorAlert'

const Home = () => {
	const history = useHistory()
	const {user, signInWithGoogle} = useAuth()
	const [joinCode, setJoinCode] = useState('')
	const [errorAlert, setErrorAlert] = useState(false)

	const handleCreateRoom = async () => {
		if (!user) {
			await signInWithGoogle()
		}
		history.push('/rooms/new')
	}

	const handleJoinRoom = async (event: FormEvent) => {
		event.preventDefault()

		if (joinCode.trim() === '') {
			return
		}

		const roomCodeRef = await database.ref(`rooms/${joinCode}`).get()

		if (!roomCodeRef.exists()) {
			console.log('error', errorAlert)
			setErrorAlert(true)
			window.setTimeout(() => {
				setErrorAlert(false)
				console.log('error', errorAlert)
			}, 5000)
			return
		}

		history.push(`/room/${joinCode}`)
	}
	return (
		<div className=' flex min-h-screen'>
			<aside className='hidden lg:flex-1 lg:bg-purple-500 lg:flex lg:justify-center lg:items-center lg:flex-col '>
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
				<div className='w-80'>
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

						<Button
							className='text-white font-bold'
							onClick={handleCreateRoom}
						>
							Create a room with Google
						</Button>
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
						{errorAlert ? (
							<ErrorAlert
								title='Room Does Not Exist.'
								errorMsg='Please re-enter the room number'
							/>
						) : (
							''
						)}
						<form onSubmit={handleJoinRoom}>
							<label htmlFor='code' className='sr-only'>
								Email
							</label>
							<input
								type='text'
								name='code'
								id='code'
								className='h-12 text-gray-600 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
								placeholder='Type your room code'
								onChange={event =>
									setJoinCode(event.target.value)
								}
								value={joinCode}
							/>
							{/* Enter a Room Button */}
							<div className='bg-purple-500 mt-10 flex justify-center px-9 py-5 rounded-xl'>
								<IoEnterOutline
									className='text-3xl mr-3 text-white'
									aria-hidden='true'
								/>
								<Button
									className='text-white font-bold'
									type='submit'
								>
									Enter a room
								</Button>
							</div>
						</form>
					</div>
				</div>
			</main>
		</div>
	)
}

export default Home
