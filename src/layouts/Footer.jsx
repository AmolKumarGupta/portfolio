import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <>
        <div className="bg-zinc-700 text-blue-50">
            <div className="container mx-auto py-8 px-4 ">
                <div className="flex justify-center gap-4">
                    <a href="https://github.com/AmolKumarGupta" className="cursor-pointer" title="social-link-github"><FontAwesomeIcon icon={faGithub} size="2xl" /></a>
                    <a href="https://www.instagram.com/invites/contact/?i=1qp00q752qc7s&utm_content=5g7v6fa" className="cursor-pointer" title="social-link-insta"><FontAwesomeIcon icon={faInstagram} size="2xl" /></a>
                </div>
                <p className="text-center mt-8">&copy; 2022, Amol kumar gupta</p>
            </div>
        </div>
        </>
    );
}

export default Footer;