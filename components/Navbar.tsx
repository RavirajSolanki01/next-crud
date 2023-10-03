import Link from "next/link"

const Navbar = () => {

  return (
    <nav className="bg-slate-400 mb-5 p-4 flex justify-between items-center">
      <Link href={"/"} className="bg-black p-2 rounded" >Title</Link>
      <Link href={"/addTopic"} className="bg-black p-2 rounded" >Add Topic</Link>
    </nav>
  )
}

export default Navbar