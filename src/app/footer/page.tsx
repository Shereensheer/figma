import React from 'react';

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap md:flex-nowrap">
        <div className="w-full md:w-1/4 flex-shrink-0 text-center md:text-left mb-10 md:mb-0">
          <a className="flex title-font font-medium items-center justify-center md:justify-start text-gray-900">
            <span className="ml-3 text-3xl font-bold">Shop.co</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">
            We have clothes that suit your style and which you’re proud to wear. From women to men.
          </p>
        </div>
        <div className="w-full md:w-3/4 flex flex-wrap">
          {[
            {
              title: 'Company',
              links: ['About', 'Features', 'Works', 'Career'],
            },
            {
              title: 'Help',
              links: ['Customer Support', 'Delivery Details', 'Terms & Condition', 'Privacy & Policy'],
            },
            {
              title: 'FAQ',
              links: ['Account', 'Manage Delivery', 'Orders', 'Payments'],
            },
            {
              title: 'Resources',
              links: ['Free Ebooks', 'Development Tutorial', 'How to Blog', 'YouTube Playlist'],
            },
          ].map((section, index) => (
            <div key={index} className="w-full md:w-1/4 px-4 mb-10">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
                {section.title}
              </h2>
              <nav className="list-none">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a className="text-gray-600 hover:text-gray-800">{link}</a>
                  </li>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row items-center">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            SHOP.CO 2000-2023 ALL Rights Reserved
          </p>
          <span className="inline-flex sm:ml-auto mt-2 sm:mt-0 justify-center sm:justify-start">
            {['facebook', 'twitter', 'instagram', 'linkedin'].map((icon, index) => (
              <a key={index} className="ml-3 text-gray-500" href={`#${icon}`}>
                <svg
                  fill="currentColor"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Add icons based on your needs */}
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </a>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
