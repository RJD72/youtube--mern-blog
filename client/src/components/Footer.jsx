import { Footer as FooterCom } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";

const Footer = () => {
  return (
    <FooterCom container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Rob&#39;s{" "}
              </span>{" "}
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterCom.Title title="About" />
              <FooterCom.LinkGroup col>
                <FooterCom.Link
                  href="https://www.100jsprojects.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  100 JS Projects
                </FooterCom.Link>
                <FooterCom.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rob&#39;s Blogs
                </FooterCom.Link>
              </FooterCom.LinkGroup>
            </div>
            <div>
              <FooterCom.Title title="Follow Us" />
              <FooterCom.LinkGroup col>
                <FooterCom.Link
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </FooterCom.Link>
                <FooterCom.Link
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </FooterCom.Link>
              </FooterCom.LinkGroup>
            </div>
            <div>
              <FooterCom.Title title="Legal" />
              <FooterCom.LinkGroup col>
                <FooterCom.Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy
                </FooterCom.Link>
                <FooterCom.Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms and Conditions
                </FooterCom.Link>
              </FooterCom.LinkGroup>
            </div>
          </div>
        </div>
        <FooterCom.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCom.Copyright
            href="#"
            by="Rob's Blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <FooterCom.Icon href="#" icon={BsFacebook} />
            <FooterCom.Icon href="#" icon={BsInstagram} />
            <FooterCom.Icon href="#" icon={BsTwitter} />
            <FooterCom.Icon href="#" icon={BsGithub} />
            <FooterCom.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </FooterCom>
  );
};
export default Footer;
