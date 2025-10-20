import AnimationPage from "@/app/Components/AnimationPage/AnimationPage";
import Bio from "@/app/Components/Bio/Bio";
import MainHeader from "@/app/Components/MainHeader/MainHeader";
import PIN from "@/app/Components/PIN/PIN";
import { ChevronRight, Delete } from "feather-icons-react";
import React from "react";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const page = () => {
    return (
        <>

         <AnimationPage delay={2000}>
            <div>
                <MainHeader
                    header='Login'
                    rightSide={<ChevronRight size={25} />}
                    backgroundrightSide='bg-gray-2'
                />
            </div>

            <div>
                <Bio
                    marginTop='mt-10'
                    widthProfile='w-22'
                    heightProfileTheName='h-22'
                    TheName='Qusai Mubarak'
                />
            </div>

            <div>
                <PIN/>
            </div>

         </AnimationPage>
            
          
        </>
    );
};

export default page;
