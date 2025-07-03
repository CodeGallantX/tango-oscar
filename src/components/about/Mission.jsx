const Mission = () => {
    return (
        <section className="bg-gray-100 flex flex-col-reverse gap-10 lg:flex-row items-center justify-between py-16 px-6 md:px-16 lg:px-24">
            <div className="w-full lg:w-1/2 flex flex-col items-start justify-start space-y-3">
                <h2 className="text-4xl text-bronze font-bold mb-2">Our Mission</h2>
                <p>Our mission at Tango Oscar is to redefine elite travel by offering seamless, secure, and luxurious air charter services tailored to each client’s needs. We believe that true luxury lies in freedom—freedom from delays, limitations, and compromise.</p>
                <p>We are committed to delivering a bespoke aviation experience that combines cutting-edge security, global access, and unmatched comfort. Every decision we make is anchored in ensuring that our VVIP clientele experience travel as it should be: exclusive, effortless, and exceptional.</p>
            </div>
            <div>
                <div
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
