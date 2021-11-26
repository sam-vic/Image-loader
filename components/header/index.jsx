import Image from "next/image"

export default function Header({ className }) {
    return (
        <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={className}
        >
            Powered by{' '}
            <span>
                <Image src="/Images/SwiftSureTraining.png" alt="Vercel Logo" width={192} height={85} />
            </span>
        </a>
    )
}