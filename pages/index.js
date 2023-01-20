import Link from 'next/link'
export default function Home () {
  return (
    <ul>
      <li>
        <Link href='/prep'>prep</Link>
      </li>
      <li>
        <Link href='/hero'>hero</Link>
      </li>
      <li>
        <Link href='/pc'>pc</Link>
      </li>
      <li>
        <Link href='/paper'>paper</Link>
      </li>
      <li>
        <Link href='/pop'>pop</Link>
      </li>
    </ul>
  )
}
