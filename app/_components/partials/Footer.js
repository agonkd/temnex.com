import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa"; // Importing icons from React Icons

export default function Footer() {
  return (
    <footer className="bg-[#26004A] w-full rounded-tr-[50px] text-white p-10 px-24">
      <div className="flex justify-between items-center border-b border-gray-500 pb-4">
        <div className="space-x-8">
          <Link href="/terms-of-service" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/site-map" className="hover:underline">
            Site Map
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <span>Follow us</span>
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaFacebook size="16" />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaTwitter size="16" />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram size="16" />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <FaLinkedin size="16" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-8 mt-8">
        {/* About Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">About</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Press & News
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Partnerships
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Investor Relations
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Categories</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:underline">
                Graphics & Design
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Writing & Translation
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Video & Animation
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Music & Audio
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Programming & Tech
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Data
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Business
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Lifestyle
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:underline">
                Help & Support
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Trust & Safety
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Selling on Freelo
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Buying on Freelo
              </Link>
            </li>
          </ul>
        </div>

        {/* Subscribe & Apps Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
          <div className="flex mb-4">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded-l"
            />
            <button className="bg-blue-600 text-white p-2 rounded-r">
              Send
            </button>
          </div>

          <h4 className="text-lg font-semibold mb-4">Apps</h4>
          <div className="space-y-2">
            {" "}
            {/* Column layout with space between each app */}
            <Link
              href="#"
              className="flex items-center space-x-2 hover:underline"
            >
              <FaApple size={14} />
              <span>iOS App</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-2 hover:underline"
            >
              <FaGooglePlay size={14} />
              <span>Android App</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-500 pt-4 flex justify-between">
        <span>©Eris Agency All rights reserved.</span>
        <div className="flex space-x-4">
          <Link href="#" className="hover:underline">
            US$ USD
          </Link>
          <Link href="#" className="hover:underline">
            English
          </Link>
        </div>
      </div>
    </footer>
  );
}
