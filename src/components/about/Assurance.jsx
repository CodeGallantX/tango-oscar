const blinds = [
    {
        imgUrl: "/hero3.jpg",
    },
    {
        imgUrl: "/hero1.jpg",
    },
    {
        imgUrl: "/hero2.jpg",
    },
]

const Assurance = () => {
    return (
        <section className="bg-gray-50 flex flex-col-reverse lg:flex-row-reverse items-center justify-between py-16 px-6 md:px-16 lg:px-24 gap-10">
            <div className="w-full lg:w-1/2 flex flex-col items-start justify-start space-y-3">
                <h2 className="text-4xl text-bronze font-bold mb-2">Our Elite Clientele Assurance</h2>
                <p>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem </p>
                <p>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem  Lorem ipsumLorem ipsumLorem ipsumLorem ips umLorem ipsum</p>
            </div>
                    <div className="flex flex-row items-center justify-start space-x-4">
                {blinds.map((blind, index) => (
                    <div key={index}>
                        <div
                            className="group"
                            style={{
                                // width: "600px",
                                // height: "500px",
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

export default Assurance
