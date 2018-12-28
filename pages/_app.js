import React from 'react'
import App, { Container } from 'next/app'
import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'

// Router Events
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

class NextApp extends App {
	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {}

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}

		return { pageProps }
	}

	render({ Component, pageProps } = this.props) {
		return (
			<Container>
				<header>
					<nav>
						<Link href='/'>
							<a>Home</a>
						</Link>
						|
						<Link href='/about'>
							<a>About</a>
						</Link>
					</nav>
				</header>

				<Component {...pageProps} />
			</Container>
		)
	}
}

export default NextApp
