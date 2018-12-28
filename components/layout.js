import Head from 'next/head'

import './layout.scss'
import '../static/nprogress.scss' // Import SCSS for nprogress

const Layout = ({ children, title = 'Home Page' }) => (
	<React.Fragment>
		<Head>
			<title>{title}</title>
			<meta charSet='utf-8' />
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			<meta
				name='description'
				content='The React Framework for Static Websites, Web Apps, etc...'
			/>
		</Head>
		{children}
	</React.Fragment>
)

export default Layout
