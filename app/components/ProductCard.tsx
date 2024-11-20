import Image from "next/image";

export default function ProductCard() {
    return (
        <div className="flex flex-wrap justify-center gap-10 p-5">
            {/* Product Card 1 */}
            <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105">
                <div className="flex justify-center bg-gray-100">
                    <Image
                        src="/product1.jpg"
                        alt="Product One"
                        width={300}
                        height={300}
                        className="object-contain"
                    />
                </div>
                <div className="p-5">
                    <p className="text-center text-lg font-semibold text-gray-800">
                        PKR 5,000
                    </p>
                    <div className="flex justify-center mt-4">
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Product Card 2 */}
            <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105">
                <div className="flex justify-center bg-gray-100">
                    <Image
                        src="/product2.png"
                        alt="Product Two"
                        width={500}
                        height={500}
                        className="object-contain"
                    />
                </div>
                <div className="p-5">
                    <p className="text-center text-lg font-semibold text-gray-800">
                        PKR 5,000
                    </p>
                    <div className="flex justify-center mt-4">
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Product Card 3 */}
            <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105">
                <div className="flex justify-center bg-gray-100">
                    <Image
                        src="/product3.jpg"
                        alt="Product Three"
                        width={400}
                        height={200}
                        className="object-contain"
                    />
                </div>
                <div className="p-5">
                    <p className="text-center text-lg font-semibold text-gray-800">
                        PKR 5,000
                    </p>
                    <div className="flex justify-center mt-4">
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
