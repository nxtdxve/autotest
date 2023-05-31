import Link from "next/link";

const Reviews = ({ }) => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">What Our Customers Say About Us</h1>
                <div className="flex flex-wrap -m-4 px-20">
                    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div className="h-full text-center">
                            <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://nationaltoday.com/wp-content/uploads/2021/04/Every-Kid-Healthy.jpg" />
                            <p className="leading-relaxed">Diese Plattform hat das Potenzial, die Zukunft meines Kindes maßgeblich zu beeinflussen. Dank AutoTest schreibt mein Kind jetzt regelmäßig Bestnoten in der Schule, und das Beste daran ist, dass es AutoTest nur zweimal in der Woche nutzen muss!</p>
                            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                            <p className="text-gray-500">Senior Product Designer</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div className="h-full text-center">
                            <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://brocku.ca/brock-news/wp-content/uploads/2023/02/Prof-Photo_Della-Porta-Sandra-1600x1925.jpg?x70330" />
                            <p className="leading-relaxed">Ich verdanke diese Plattform die Zukunft meines Kindes, da es meinem Kind geholfen hat, nur 6er in der Schule zu schreiben. Und das Beste ist - Sie verwendet AutoTest nur 2 mal in der Woche!</p>
                            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
                            <p className="text-gray-500">UI Develeoper</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 lg:mb-0 p-4">
                        <div className="h-full text-center">
                            <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/305x305" />
                            <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
                            <p className="text-gray-500">CTO</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews;
