import React from 'react'

import Layout from '../components/layout'
import './styles.scss'

const Home = () => {
	return (
		<Layout>
			<h1>Welcome to next.js!</h1>
			<img src='/static/logo.svg' alt='Logo' />
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry.
			</p>
		</Layout>
	)
}

export default Home
