import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
//@ts-ignore
import { MortyStackProvider, usePay, PayButton } from 'mortystack'


export default function App({ Component, pageProps }: AppProps) {

  const { initAssets, ASSET_IDS, } = usePay()


  const selectedAssets = initAssets([
    ASSET_IDS.WETH,
    { id: 10458941, symbol: "USDC" }, //custom asset
    ASSET_IDS.ALGOS,
    ASSET_IDS.WMATIC,
  ]);


  const config = {
    id: "HIG-1699996617305-FY1K59", //Morty Organization ID from Dashboard
    assets: selectedAssets,
    signer: {
      addr: undefined, //address that created the record,
      secret: process.env.Secret // dispenser hash secret. Currently disabled
    }
  }


  return (
    <MortyStackProvider config={config}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </MortyStackProvider>
  )

}
