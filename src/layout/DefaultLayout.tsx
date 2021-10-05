import React from 'react'
import {Route} from 'react-router-dom'
import {Layout} from './layout'

interface IDefaultProps {
	component: any
	path?: string
	exact?: boolean
}

const Default: React.SFC<IDefaultProps> = props => {
	const {component: Component, ...rest} = props
	return (
		<Route
			{...rest}
			render={matchProps => (
				<Layout>
					<Component {...matchProps} />
				</Layout>
			)}
		/>
	)
}

export default Default
