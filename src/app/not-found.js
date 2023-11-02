import Link from 'next/link';
import './globals.css';

export default function NotFound() {
  return (
    <div>
      <h2 className="notFoundTitle">Not Found</h2>
      <p className="notFoundDescription">Could not find requested resource</p>
      <Link href="/" className="notFoundlinkReturn">
        Return Home
      </Link>
    </div>
  );
}
