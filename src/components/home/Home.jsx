
const Home = ()=> {

    return (
        <>
        <div className="container mx-auto">
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4">
                <div className="px-8 py-8 border-b md:none">
                    <h4 className="text-2xl font-medium pb-8">About me</h4>
                    <p className="text-gray-900 leading-6">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore quod veritatis nobis alias omnis, eum odit repellat dolorum nesciunt maiores voluptates a molestias quas mollitia aliquid est sequi? Eveniet, distinctio.
                    </p>
                    <button className="bg-[#7689de] text-white hover:bg-[#6b7dcb] font-bold py-2 px-4 border-b-4 border-[#7689de] hover:border-[#6b7dcb] rounded my-2">See my resume</button>
                </div>
                <div className="px-8 py-8">
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