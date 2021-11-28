import Image from "next/image"
import clsx from "clsx"

export default function Header({ className }) {
    return (
        <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(className,'flex items-center mt-2')}
        >
            Powered by{' '}
            <span className='mx-2'>
                <Image src="/Images/icons/boating.png" alt="Vercel Logo" width={40} height={40} />
            </span>
        </a>
    )
}