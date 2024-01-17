//used for the not found pages.
import Link from "next/link";
const notFound = () => {
return (
    <div>
        <h2>Not found</h2>
        <p>Sorry, the page does not exist!</p>
        <Link href="/">Return Home</Link>

    </div>
)
}
export default notFound;