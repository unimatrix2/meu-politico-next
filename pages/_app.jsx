import '../styles/globals.css';
import { Provider } from '../context/Context';

function MyApp({ Component, pageProps }) {
	return (
		<Provider>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
