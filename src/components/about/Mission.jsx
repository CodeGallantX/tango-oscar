const Mission = () => {
    return (
        <section className="bg-gray-100 flex flex-col-reverse gap-10 lg:flex-row items-center justify-between py-16 px-6 md:px-16 lg:px-24">
            <div className="w-full lg:w-1/2 flex flex-col items-start justify-start space-y-3">
                <h2 className="text-4xl text-bronze font-bold mb-2">Our Mission</h2>
                <p>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem </p>
                <p>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem  Lorem ipsumLorem ipsumLorem ipsumLorem ips umLorem ipsum</p>
            </div>
            <div>
                <div
                className=""
                    style={{
                        maxWidth: "450px",
                        maxHeight: "350px",
                        overflow: "hidden",
                        transform: "skewX(-8deg)",
                        borderRadius: "50px"
                    }}
                >
                    <img
                        src="/office-man.jpg"
                        alt="Mission - Tango Oscar"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "bottom",
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

export default Mission;