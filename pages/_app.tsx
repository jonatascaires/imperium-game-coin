import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes";
import { ToastContainer } from 'react-toastify';
import 'animate.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <ToastContainer />
    </ThemeProvider>
  )
}

export default MyApp