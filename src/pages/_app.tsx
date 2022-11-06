import type { AppProps } from 'next/app'
import { ChallengeProvider } from '../contexts/ChallengesContext';
import "../styles/global.css";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChallengeProvider>
      <Component {...pageProps} />
    </ChallengeProvider>
  )
}
