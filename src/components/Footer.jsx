import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#fff8f4] py-16 text-gray-700 min-mt-1"> {/* Light orange background */}
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          {/* About Section */}
          <div className="mx-auto max-w-xs">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">CoolBreeze AC Services</h2>
            <p className="text-gray-600 mb-4">
              Licensed HVAC specialists serving your area since 2010. We provide premium installation, repair, and maintenance services.
            </p>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} All rights reserved
            </div>
          </div>

          {/* Quick Contact */}
          <div className="mx-auto max-w-xs">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">24/7 Emergency Service</h2>
            <div className="space-y-2">
              <p className="flex items-center justify-center">
                <i className="fa fa-phone mr-2 text-[#f8821e]"></i>
                <a href="tel:+1234567890" className="hover:text-[#f8821e] transition-colors">
                  (123) 456-7890
                </a>
              </p>
              <p className="flex items-center justify-center">
                <i className="fa fa-envelope mr-2 text-[#f8821e]"></i>
                <a href="mailto:service@coolbreeze.com" className="hover:text-[#f8821e] transition-colors">
                  service@coolbreeze.com
                </a>
              </p>
            </div>
          </div>

          {/* Service Areas */}
          <div className="mx-auto max-w-xs">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Service Areas</h2>
            <ul className="space-y-1 text-gray-600">
              <li>• Residential AC Repair</li>
              <li>• Commercial Installation</li>
              <li>• Maintenance Plans</li>
              <li>• Emergency Services</li>
            </ul>
            <div className="flex justify-center space-x-4 mt-4 text-[#f8821e]">
              <a href="#" className="hover:text-orange-700 transition-colors" aria-label="Facebook">
                <i className="fa fa-facebook text-xl"></i>
              </a>
              <a href="#" className="hover:text-orange-700 transition-colors" aria-label="Instagram">
                <i className="fa fa-instagram text-xl"></i>
              </a>
              <a href="#" className="hover:text-orange-700 transition-colors" aria-label="Google Reviews">
                <i className="fa fa-google text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Accreditation */}
        <div className="mt-12 pt-6 border-t border-orange-200 text-center text-sm text-gray-500">
          <p>Licensed • Insured • EPA Certified</p>
          <p className="mt-2">Serving the Greater Metro Area Since 2010</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
