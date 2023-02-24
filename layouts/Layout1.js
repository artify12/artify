import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout1({ children, className }) {
    return (
        <>
            <Header style1/>
            <main>
                {children}
                <Footer className={className} />
            </main>
        </>
    )
}
