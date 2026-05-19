import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-green-900 text-white p-4 flex gap-6">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}