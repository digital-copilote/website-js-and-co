import urlBuilder from "hook/imageUrl";
import React, { useState } from "react";
import { members_member_members } from "__generated__/members";
import MemberModal from "./MemberModal";

function OneMembers({ item }: { item: members_member_members }): JSX.Element {
    const [isModal, setIsModal] = useState<boolean>(false);
    return (
        <div>
            {isModal && <MemberModal setIsModal={setIsModal} item={item} />}
            <button
                onClick={() => setIsModal(true)}
                className="flex lg:flex-col w-full lg:w-52 items-center text-left lg:text-center my-3 transition duration-500 transform hover:scale-110 border-b border-black lg:border-none pb-2 "
            >
                <div
                    className="h-16 w-16 lg:w-20 lg:h-20 rounded-full border shadow-buttonShadow border-black"
                    style={{
                        backgroundImage: `url(${urlBuilder(item.avatar.url)})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
                <div className="flex flex-col ml-4 lg:text-lg lg:mt-2 lg:items-center w-8/12 lg:w-full">
                    <div className="flex font-bold">
                        <p className="lg:mr-1">{item.firstName}</p>
                        <p>{item.lastName}</p>
                    </div>
                    <p className="text-sm lg:text-lg ">{item.function}</p>
                </div>
            </button>
        </div>
    );
}

export default OneMembers;
