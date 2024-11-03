import { Footer } from "flowbite-react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import logo from '../assets/EcoShop_logo.png'

export default function FooterComponent() {
  return (
    <Footer container>
      <div className="w-full inset-x-0 bottom-0 mt-8">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <img
              href="#"
              src={logo}
              alt=" Logo"
              className="w-48 h-auto"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="À Propos" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">EcoShop</Footer.Link>
                <Footer.Link href="#">Écologie</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Suivez nous" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Facebook</Footer.Link>
                <Footer.Link href="#">Instagram</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Légale" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Politique de confidentialité</Footer.Link>
                <Footer.Link href="#">Termes &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="EcoSHop Mbayang Gueye™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
          </div>
        </div>
      </div>
    </Footer>
  );
}