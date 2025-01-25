import React from "react";
import {ABOUT_TEXT} from "../constants"
const Bio = ()=>{
    return (
        <>
        <section className="flex max-w-4xl flex-col gap-12 pt-20" id="bio">
            <h2 className="text-center text-3xl lg:text-4xl">Bio</h2>
            <div>
                <p className="mb-4 text-lg lg:text-xl">{ABOUT_TEXT}</p>
            </div>
        </section>
        </>
    )
}

export default Bio;