import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Newsletter */}
        <div className="text-center mb-10">
          <h2 className="text-lg font-semibold mb-2">Subscribe to our newsletter</h2>
          <div className="flex justify-center flex-wrap gap-2 mt-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded bg-zinc-800 text-white border border-zinc-700 focus:outline-none"
            />
            <button className="px-4 py-2 rounded bg-white text-zinc-900 font-semibold hover:bg-gray-200">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-gray-300 mb-10 text-center sm:text-left">
          <div>
            <h3 className="text-white font-semibold mb-2">Company</h3>
            <ul>
              <li><a href="#" className="hover:underline  hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:underline  hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:underline  hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Support</h3>
            <ul>
              <li><a href="#" className="hover:underline hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:underline  hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:underline  hover:text-white">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Legal</h3>
            <ul>
              <li><a href="#" className="hover:underline hover:text-white">Terms of Use</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline  hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Resources</h3>
            <ul>
              <li><a href="#" className="hover:underline hover:text-white">Docs</a></li>
              <li><a href="#" className="hover:underline  hover:text-white">API</a></li>
              <li><a href="#" className="hover:underline  hover:text-white" >Community</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center text-sm text-gray-500 border-t border-zinc-700 pt-4">
          © {new Date().getFullYear()} YourCompany. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
