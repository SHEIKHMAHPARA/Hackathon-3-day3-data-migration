import Link from "next/link";

const Breadcrumb = () => {
  return (
    <nav className="flex items-center space-x-2 text-sm">
      <Link href="/" className="font-bold text-gray-900">
        Home
      </Link>
      <span className="text-gray-400">{">"}</span>
      <span className="text-gray-500">Shop</span>
    </nav>
  );
};

export default Breadcrumb;
