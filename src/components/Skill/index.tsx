import "tailwindcss/tailwind.css";

import {SkillItem as SkillItemType } from '../../constants/constant'

type SkillItemProps = {
    skillItem: SkillItemtype
}


export default function SkillItem({
    skillItem: { name, proficiency, iconUrl, id }
}: SkillItemProps){


    return (
        <div className="w-full sm:w-full flex  hover:shadow-lg  p-5   ">
        <div className="w-1/4 xl:w-1/4">
          <img
            src={iconUrl}
            alt={name}
            className="w-16 block sm:mx-auto"
          />
        </div>
        <div className="w-2/3 xl:w-3/4 px-5 ">
          <h3 className="tracking-wide  font-bold text-xl  mb-0">{name}</h3>
          <div className="font-light text-gray-500 text-lg">
            <p>{proficiency}</p>
          </div>
        </div>
      </div>

    );

}