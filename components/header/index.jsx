import Image from "next/image"
import clsx from "clsx"
import Link from 'next/link'

export default function Header({ className }) {
    return (
        <Link
            href="/"
            className={clsx(className,'flex items-center mt-2')}
        >
            Powered by{' '}
            <span className='mx-2'>
                <Image src="/Images/icons/boating.png" alt="Vercel Logo" width={40} height={40} />
            </span>
        </Link>
    )
}