import Link from 'next/link'

export default function TsAndCs() {

  return (
    <>
      <h1>Terms and Conditions Home</h1>
      <ul>
        <li><Link href="/ts-and-cs/apac">Asia Pacific</Link></li>
        <li><Link href="/ts-and-cs/emea">Europe, Middle East, Africa</Link></li>
        <li><Link href="/ts-and-cs/latam">Latin America</Link></li>
        <li><Link href="/ts-and-cs/na">North America</Link></li>
      </ul>
    </>
  );
}