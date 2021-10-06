import React from 'react'
import '../styles/button.css'
import Logo from '../assets/images/Logo.png'
import {DocumentDuplicateIcon} from '@heroicons/react/outline'
type Props = {
	children: JSX.Element
}

export function Layout({children}: Props) {
	return (
		<>
			<div>
				<nav className='flex justify-between mx-20 items-center my-4'>
					<img className='h-12' src={Logo} alt='logo' />
					<div className='flex'>
						<div className='btn-room-box flex items-center mx-3'>
							<div className='btn-left-icon'>
								<div>
									<DocumentDuplicateIcon className='h-4 text-white' />
								</div>
							</div>
							<button className='btn-room-name font-sans font-medium'>
								Sala# 433004
							</button>
						</div>
						<div className='btn-room-box flex items-center mx-3 justify-center text-purple-600'>
							<button>End Room</button>
						</div>
					</div>
				</nav>
				<div className='relative'>
					<div
						className='absolute inset-0 flex items-center'
						aria-hidden='true'
					>
						<div className='w-full border-t border-gray-300' />
					</div>
					<div className='relative flex justify-center'></div>
				</div>

				{children}
			</div>
		</>
	)
}
