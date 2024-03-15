//for product route

import Link from "next/link";

export default function ProductLayout({ children }) {
    return (
        <div>

            <h1 style={{ fontWeight: "bolder", fontSize: "30px", margin: "2%" }}>Products</h1>
            <Link href="/product" className="inline-blog text-blue-950 p-4 font-bold hover:underline">All Products</Link>
{/* if we are on the pro1 page after clicking the link "All Product" we will go back to "/product" page*/}

            {children}

        </div>
    )
}