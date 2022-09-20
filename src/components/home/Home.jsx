
const Home = ()=> {

    return (
        <>
        <div className="container mx-auto">
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4">
                <div className="px-8 py-8 border-b">
                    <h4 className="text-2xl font-medium pb-8">About me</h4>
                    <p className="text-gray-900 leading-6">
                        I'm a web developer who likes to create open-source projects. I like music, anime and design patterns. I am currently working as a PHP backend developer in Vriman infotech. For more information related to technical skills and experience, please see my resume.
                    </p>
                    <button className="bg-[#7689de] text-white hover:bg-[#6b7dcb] font-bold py-2 px-4 border-b-4 border-[#7689de] hover:border-[#6b7dcb] rounded my-2">See my resume</button>
                </div>
                <div className="px-8 py-8 border-b ">
                    <h4 className="text-2xl font-medium pb-8">Skills</h4>
                    <ol className="ml-2 font-medium leading-7 list-decimal">
                        <li>Humility</li>
                        <li>Teamwork/Collaboration</li>
                        <li>Designing</li>
                        <li>Work Independently</li>
                    </ol>
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;