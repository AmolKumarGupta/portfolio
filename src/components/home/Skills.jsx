import { useMemo, useState } from "react";
import FlipElement from "../../layouts/FlipElement";

const Skill = ()=>{
    // alse apply color on flipElement 
    const [data] = useState([
        {
            title: "PHP",
            color: "[#2980b9]",
            description: "PHP was my first language. and I am currently learning Wordpress plugin",
            images: {
                laravel: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg",
                codeigniter: "https://raw.githubusercontent.com/devicons/devicon/master/icons/codeigniter/codeigniter-plain.svg",
                wordpress: "https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain.svg"
            }
        },
        {
            title: "Javascript",
            color: "yellow-500",
            description: "Js is Awesome. ",
            images: {
                react: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
                jquery: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original-wordmark.svg",
                npm: "https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg"
            }
        },
        {
            title: "CSS",
            color: "violet-600",
            description: "CSS is one of my interesting subject. I loves Tailwind css.",
            images: {
                bootstrap: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg",
                tailwindcss: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg",
            }
        },
        {
            title: "Tools",
            color: "green-500",
            description: "It makes your coding experience better.",
            images: {
                git: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-plain.svg",
                vscode: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
                linux: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ubuntu/ubuntu-plain.svg",
                postman: "https://raw.githubusercontent.com/flathub/com.getpostman.Postman/master/logo-mark.svg",
                filezilla: "https://raw.githubusercontent.com/devicons/devicon/master/icons/filezilla/filezilla-plain.svg",
                adminer: "https://www.adminer.org/favicon.ico",
            }
        }
    ]);

    const dataElement = useMemo(()=>{
        return data.map(function(ele){
            return <FlipElement key={ele.title} title={ele.title} color={ele.color} description={ele.description} images={ele.images} />
        })
    },[data]);


    return (
        <>
        <h3 className="p-8 pb-0 text-2xl font-medium">My Programming Knowledge</h3>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:gap-8 mx-auto md:mx-12 my-8 lg:mx-16">
            {dataElement}
        </div>
        </>
    );
}

export default Skill;