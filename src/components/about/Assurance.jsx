const blinds = [
    {
        imgUrl: "/blind1.jpg",
    },
    {
        imgUrl: "/blind2.jpg",
    },
    {
        imgUrl: "/blind3.jpg",
    },
]

const Assurance = () => {
    return (
        <section className="bg-gray-50 flex flex-col-reverse lg:flex-row-reverse items-center justify-between py-16 px-6 md:px-16 lg:px-24 gap-10">
            <div className="w-full lg:w-1/2 flex flex-col items-start justify-start space-y-3">
                <h2 className="text-4xl text-bronze font-bold mb-2">Our Elite Clientele Assurance</h2>
                <p>At Tango Oscar, we go far beyond the ordinary to protect and serve our most distinguished clients. Our assurance is built on discretion, precision, and a deeply personalized approach to private aviation and VVIP services. From seamless onboarding to secure boarding, we prioritize your comfort, privacy, and peace of mind.</p>
                <p>With a global reach spanning over 5,000 airports and a fleet of the world’s finest aircraft, we ensure every journey is meticulously tailored to your standards. Whether you're a high-profile executive, royal dignitary, or global celebrity, Tango Oscar delivers a travel experience that is simply unmatched.</p>
            </div>
            <div className="flex flex-row items-center justify-start space-x-4">
                {blinds.map((blind, index) => (
                    <div key={index}>
                        <div
                            className="group"
                            style={{
                                overflow: "hidden",
                                transform: "skewX(-10deg)",
                            }}
                        >
                            <img
                                src={blind.imgUrl}
                                alt="Elite Clientele Assurance - Tango Oscar"
                                className="group-hover:w-[300px] transition-all duration-300 ease-in-out"
                                style={{
                                    width: "150px",
                                    height: "350px",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div> 
        </section>
    )
}

export default Assurance;