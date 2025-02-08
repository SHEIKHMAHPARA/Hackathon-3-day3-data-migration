import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="">
        <div className="bg-[#FAFAFA]">
          <div className="max-w-[1050px] mx-auto flex justify-between h-[140px] items-center">
            <div>
              <h2 className="font-bold text-[24px]">Bandage</h2>
            </div>
            <div className="flex gap-[20px] text-[#23A6F0]">
              <a href="/">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="/">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="/">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="py-10">
          <div className="max-w-[1050px] mx-auto h-[270px] flex items-center">
            <div className="grid grid-cols-6 gap-6">
              {/* Column 1 */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Company Info</h3>
                <ul className="space-y-2 text-[#737373] font-bold text-[14px]">
                  <li>
                    <a href="/" className="hover:underline">
                    About Us
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline">
                    Carrier
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline">
                    We are hiring
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline">
                    Blog
                    </a>
                  </li>
                </ul>
              </div>

                {/* Column 2 */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2 text-[#737373] font-bold text-[14px]">
                  <li>
                    <a href="/" className="hover:underline">
                    About Us
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline">
                    Carrier
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline">
                    We are hiring
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline">
                    Blog
                    </a>
                  </li>
                </ul>
              </div>


              {/* Column 3 */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Features</h3>
                <ul className="space-y-2 text-[#737373] font-bold text-[14px]">
                  <li>
                    <a href="/" className="hover:underline">
                    About Us
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline">
                    Carrier
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline">
                    We are hiring
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline">
                    Blog
                    </a>
                  </li>
                </ul>
              </div>


              {/* Column 4 */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2 text-[#737373] font-bold text-[14px]">
                  <li>
                    <a href="/" className="hover:underline">
                    About Us
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline">
                    Carrier
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline">
                    We are hiring
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline">
                    Blog
                    </a>
                  </li>
                </ul>
              </div>
              

              {/* Column 5, 6 span for 2 col */}
              <div className="col-span-2">
                <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
                <div>
                    <form className="flex">
                        <input className="bg-[#F9F9F9] py-4 px-2 rounded-[5px] border border-[#E6E6E6]" placeholder="Your Email" type="text" />
                        <button className="bg-[#23A6F0] p-4 text-white  rounded-[5px]" type="submit">Subscribe</button>
                    </form>
                    <div>
                        Lore imp sum dolor Amit
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#FAFAFA]">
          <div className="max-w-[1050px] mx-auto h-[75px] flex items-center">
            <p className="m-0 p-0">
              Made With Love By Mahpara Ashraf All Right Reserved{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}