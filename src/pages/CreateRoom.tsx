import {FormEvent, useState} from 'react'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/Logo.png'
import {database} from '../services/firebase'

import {IoEnterOutline} from 'react-icons/io5'
import Button from '../components/Button'
import {Link, useHistory} from 'react-router-dom'
import {useAuth} from '../hooks/useAuth'

const CreateRoom = () => {
	const {user} = useAuth()
	const [newRoom, setNewRoom] = useState('')

	const history = useHistory()

	const handleCreateRoom = async (e: FormEvent) => {
		e.preventDefault()
		console.log(newRoom)

		if (newRoom.trim() === '') {
			return
		}
		const roomRef = database.ref('rooms')

		const firebaseRoom = await roomRef.push({
			title: newRoom,
			authorId: user?.id,
		})

		history.push(`/room/${firebaseRoom.key}`)
	}
	return (
		<div className='flex min-h-screen'>
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
			{/* Right Side */}
			<main className='flex-1 flex justify-center items-center flex-col'>
				<div className='w-80'>
					<div className='flex justify-center items-center'>
						<img
							className='mb-14 '
							src={logoImg}
							alt='letUsAsl company logo'
						/>
					</div>
					<h3>{user?.name}</h3>
					<div className='flex justify-center items-center mb-5 text-gray-800 text-2xl font-bold'>
						<h1>Create a room</h1>
					</div>

					{/* enter code */}
					<div>
						<form onSubmit={handleCreateRoom}>
							<label htmlFor='create' className='sr-only'>
								Room's Name
							</label>
							<input
								type='text'
								name='create'
								id='create'
								className='h-12 text-gray-600 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
								placeholder='Room name'
								onChange={e => setNewRoom(e.target.value)}
								value={newRoom}
							/>

							{/* Enter a Room Button */}
							<div className='bg-purple-500 mt-8 flex justify-center px-9 py-5 rounded-xl'>
								<IoEnterOutline
									className='text-3xl mr-3 text-white'
									aria-hidden='true'
								/>
								<Button
									className='text-white font-bold'
									type='submit'
								>
									Create Room
								</Button>
							</div>
						</form>
					</div>
					<div className='flex justify-center pt-3'>
						<p className='text-lg mr-3 text-gray-800'>
							Join a room
							<span className='ml-1 text-pink-500 underline'>
								<Link to='/'>Click Here</Link>
							</span>
						</p>
					</div>
				</div>
			</main>
		</div>
	)
}

export default CreateRoom
