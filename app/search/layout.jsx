import Search from "./Search"

export const metadata = {
  title: 'SearcH',
}

export default function RootLayout({ children }) {
  return (
    
    <main>
      <Search />
      {children}
      </main>
  )
}
