import { useNavigate } from "react-router-dom";

const serviceList = [
    {
        imgUrl: "/hero1.jpg",
        name: "Private Jet Charter",
        description: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
        link: "/booking"
    },
    {
        imgUrl: "/hero2.jpg",
        name: "Luxury Chaffeur",
        description: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
        link: "/booking"
    },
    {
        imgUrl: "/hero3.jpg",
        name: "VVIP Security",
        description: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
        link: "/booking"
    },
]

const Services = () => {
    const navigate = useNavigate();
    return (
        <section className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start justify-center gap-10 px-6 md:px-16 lg:px-24">
            {serviceList.map((service, index) => (
                <div key={index}>
                <div className="flex flex-col items-center justify-center space-y-6 w-full">
                        <div className="w-full h-64">
                            <img
                                src={service.imgUrl}
                                alt={`${service.name} - Tango Oscar`}
                                className="rounded object-cover h-full w-full"
                            />
                        </div>
                        <div className="flex flex-col items-start justify-center space-y-4">
                            <h2 className="font-bold text-2xl">{service.name}</h2>
                            <p>{service.description}</p>
                            <button onClick={() => { navigate(`${service.link}`) }} className="uppercase bg-bronze rounded px-5 py-3 w-full font-bold">
                                Click here to book now
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Services;