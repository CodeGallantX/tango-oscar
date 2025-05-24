import { useNavigate } from "react-router-dom";

const serviceList = [
    {
        imgUrl: "/hero3.jpg",
        name: "Private Jet Charter",
        description: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
        link: "/booking"
    },
    {
        imgUrl: "/hero3.jpg",
        name: "Private Jet Charter",
        description: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
        link: "/booking"
    },
]

const Services = () => {
    const navigate = useNavigate();
    return (
        <section className="py-14 flex flex-col items-start justify-center space-y-6">
            {serviceList.map((service, index) => {
                <div key={index}>
                    <div className="flex flex-row items-center justify-between w-full">
                        <div className="w-52">
                            <img
                                src={service.imgUrl}
                                alt={`${service.name} - Tango Oscar`}
                                className="rounded object-cover h-full w-full"
                            />
                        </div>
                        <div className="flex flex-col items-start justify-center space-y-4">
                            <h2 className="font-bold text-xl">{service.name}</h2>
                            <p>{service.description}</p>
                            <button onClick={() => { navigate(`${service.link}`) }} className="uppercase bg-bronze rounded px-5 py-3 w-full">
                                Click here to book now
                            </button>
                        </div>
                    </div>
                </div>
            })}
        </section>
    )
}

export default Services;