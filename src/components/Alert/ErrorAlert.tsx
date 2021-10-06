import {XCircleIcon} from '@heroicons/react/solid'

type IerrorProps = {
	title: String
	errorMsg: String
}

export default function ErrorAlert(props: IerrorProps) {
	return (
		<div className='rounded-md bg-red-50 p-4 mb-5'>
			<div className='flex'>
				<div className='flex-shrink-0'>
					<XCircleIcon
						className='h-5 w-5 text-red-400'
						aria-hidden='true'
					/>
				</div>
				<div className='ml-3'>
					<h3 className='text-sm font-medium text-red-800'>
						{props.title}
					</h3>
					<div className='mt-2 text-sm text-red-700'>
						<ul className='list-disc pl-5 space-y-1'>
							<li>{props.errorMsg}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
