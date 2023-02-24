import React from 'react'
import Link from 'next/link'

export default function NavBar() {
    return (
        <>
            <nav id="mobile-menu">
                <ul>
                    <li><Link legacyBehavior href="/"><a>Home</a></Link>
                    </li>
                    <li><Link legacyBehavior href="/#features"><a>About us</a></Link></li>
                    <li><Link legacyBehavior href="/#roadmap"><a>Roadmap</a></Link></li>
                    <li><Link legacyBehavior href="/draw"><a>Draw</a></Link></li>
                    <li><Link legacyBehavior href="/"><a>Links</a></Link>
                        <ul className="submenu">
                            <li><Link legacyBehavior href="https://t.me/goArtify"><a>Telegram</a></Link></li>
                            <li><Link legacyBehavior href="https://twitter.com/artifyerc"><a>Twitter</a></Link></li>
                            <li><Link legacyBehavior href="https://medium.com/@artifylabs"><a>Medium</a></Link> </li>
                            <li><Link legacyBehavior href="https://artify.gitbook.io/artify-whitepaper/"><a>Whitepaper</a></Link> </li>
                            <li><Link legacyBehavior href="https://dextools.io/"><a>Dextools</a></Link> </li>
                            <li><Link legacyBehavior href="https://etherscan.io/"><a>Contract</a></Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>

        </>
    )
}
