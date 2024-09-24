import { assets } from "../assets/frontend_assets/assets"


const Footer = () => {
  return (
    <div>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            <div>
                <img src={assets.logo} alt="" className="mb-5 w-32" />
                <p className="w-full md:w-2/3 text-gray-600">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, rem cupiditate inventore impedit ducimus sint? Hic repellendus sapiente qui blanditiis sunt doloribus, natus ab nulla dolore consequuntur, tempore vel numquam vitae. Amet voluptatum, expedita possimus aperiam corporis porro dolore mollitia!
                </p>
            </div>
            <div>
                <p className="text-xl font-medium mb-5">COMPANY</p>
                <ul className="flex flex-col gap-1 text-gray-700">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivey</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                <ul className="flex flex-col gap-1 text-gray-700">
                    <li>+91-65-7564-7892</li>
                    <li>contact@foreveryou.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className="py-5 text-sm text-center">Copyright 2024@forever.com - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer