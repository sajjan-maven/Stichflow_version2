import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export default function Custom404() {
    return (
        <div className="not-found-container">
            <div className="not-found-left">
                <Image src="/images/Logomark R.svg" alt="Left Logo" width={720} height={400} />
            </div>
            <div className="not-found-right">
                <Image src="/images/Logomark L.svg" alt="Right Logo" width={500} height={450} />
            </div>
            <div className="not-found-content">
                <h1 className="not-found-emoji">¯\_(ツ)_/¯</h1>
                <h1 className="not-found-title">404</h1>
                <p className="not-found-message">
                    The link you clicked may be broken or the page may have been removed
                </p>
                <Link href="/" className="not-found-button">
                    Back to homepage
                </Link>
            </div>
        </div>
    );
}
