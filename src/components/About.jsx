function About(){
    return(
        <div>
            <h1>This is About Page</h1>
            {/* test tailwind is running */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <div className="mt-1">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 sm:text-sm border-gray-300 rounded-md"
                        placeholder="you@example.com"
                    />
                </div>
            </div>
        </div>
    )
}

export default About