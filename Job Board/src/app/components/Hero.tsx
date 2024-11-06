export default function Hero(){
    return (
        <section className="container my-16">
            <h1 className="text-4xl font-bold text-center">
                Find yout next<br/>dream job
            </h1>
            {/* <p className="text-center text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aperiam quis pariatur, cumque debitis corporis sequi eius officiis explicabo, suscipit consectetur sapiente, enim modi blanditiis similique vel voluptate. Soluta, iusto!
            </p> */}
            <form className="flex gap-2 mt-4 max-w-md mx-auto">
                <input type="search"
                className="border border-gray-400 w-full py-2 px-3 rounded-md"
                placeholder="Search phrase...." />
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Search</button>
            </form>
        </section>
    );
}