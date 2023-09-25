import React, { useEffect } from "react"
import { BsGithub,BsLinkedin, BsInstagram } from "react-icons/bs";


export default function Header(){
    
    return <div className="container mx-auto max-w-[1200px] px-3 relative lg:absolute left-0 right-0">
        <div className="flex justify-between py-5 items-center">
            <div className="text-gradient font-secondary" 
            data-aos="fade-right" 
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
            data-aos-delay="0">
                <a>
                    <h1 className="text-[30px] leading-none font-bold">
                        ANGGA
                        </h1>
                    <h4 className="font-normal leading-none">DWI KURNIAWAN
                    {/* <img src="images/deka.png" width={48} height={48} alt="" /> */}
                    </h4>
                </a>
            </div>


            <div className="flex items-center space-x-3"
                data-aos="fade-left" 
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
                data-aos-delay="0">
            
                <a href="https://github.com/anggadk01">
                    <BsGithub />
                </a>
                <a href="https://www.linkedin.com/in/anggadwikurniawan01/">
                    <BsLinkedin />
                </a>
                <a href="https://www.instagram.com/anggadk01/">
                    <BsInstagram />
                </a>

            </div>
        </div>
    </div>
}
