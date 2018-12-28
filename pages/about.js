import Layout from '../components/layout'
import 'isomorphic-fetch'
import es6Promise from 'es6-promise'

es6Promise.polyfill()

class About extends React.Component {
	static async getInitialProps() {
		const res = await fetch('https://api.github.com/repos/zeit/next.js')
		const data = await res.json()

		return { stars: data.stargazers_count }
	}
	render({ stars } = this.props) {
		return (
			<Layout title='About'>
				<h1>About!!</h1>
				<img src='/static/logo.svg' alt='Logo' />
				<p>Lorem Ipsum is simply dummy text of the printing. Stars: {stars}</p>
			</Layout>
		)
	}
}

export default About
