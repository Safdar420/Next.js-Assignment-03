import React from 'react'
import Link from 'next/link'
export default function Header() {
  return (
    <div>
      <ul className="inline-block">
      <li> <Link href={'/'}>Home</Link></li>
      <li><Link href={'/about'}>About</Link></li>
      <li><Link href={'/contact-us'}>Contact Us</Link></li>
    </ul>
    </div>
  )
}
