import Head from "next/head"
import { FC, ReactNode } from "react"
import { Navbar } from '../ui/Navbar';

interface Props {
  children: ReactNode;
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name="author" content="Fernando Herrera" />
            <meta name="description" content="Información sobre el pokémon XXXXX" />
            <meta name="keywords" content="XXXX, pokemon, pokedex" />
        </Head>

        <Navbar></Navbar>
        
        <main style={{
          padding: '0px 20px'
        }}>
            {children}
        </main>
    </>
  )
}
