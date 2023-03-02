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
                    <li><Link legacyBehavior href="/"><a>Tools</a></Link>
                        <ul className="submenu">
                            <li><Link legacyBehavior href="/restore"><a>Artify Restore</a></Link></li>
                            <li><Link legacyBehavior href="/colorfy"><a>Colorfy</a></Link></li>
                            <li><Link legacyBehavior href="/background-remover"><a>Artify Bg Remover</a></Link> </li>
                            <li><Link legacyBehavior href="/prompter"><a>Prompter</a></Link></li>
                            <li><Link legacyBehavior href="/reroll"><a>Reroll</a></Link></li>
                        </ul>
                    </li>
                    <li><Link legacyBehavior href="/"><a>Links</a></Link>
                        <ul className="submenu">
                            <li><Link legacyBehavior href="https://t.me/artifylabs"><a>Telegram</a></Link></li>
                            <li><Link legacyBehavior href="https://twitter.com/artifyerc"><a>Twitter</a></Link></li>
                            <li><Link legacyBehavior href="https://medium.com/@artifylabs"><a>Medium</a></Link> </li>
                            <li><Link legacyBehavior href="https://artify.gitbook.io/artify-whitepaper/"><a>Whitepaper</a></Link> </li>
                            <li><Link legacyBehavior href="https://www.dextools.io/app/en/ether/pair-explorer/0xf43e889444e95a0429c32b0b601dc16edf90fdbf"><a>Dextools</a></Link> </li>
                            <li><Link legacyBehavior href="https://etherscan.io/address/0xa41161af8d4ee421ba5fed4328f2b12034796a21"><a>Contract</a></Link></li>
                            <li><Link legacyBehavior href="https://tiktok.com/@artify_labs"><a>Tiktok</a></Link></li>
                            <li><Link legacyBehavior href="https://instagram.com/artifyerc"><a>Instagram</a></Link></li>
                            <li><Link legacyBehavior href="https://facebook.com/artifylabs"><a>Facebook</a></Link> </li></ul>
                    </li>
                    <li><Link legacyBehavior href="mailto:support@artifylabs.io"><a>Support</a></Link></li>
                </ul>
            </nav>

        </>
    )
}
