import React, {useState} from "react";
import sponsorData from "../data/sponsors.json";
import SponsorCard from "./SponsorCard";
import Search from "./Search";

const SponsorGrid = ({ sponsors }) => {
    if (sponsors.length === 0) {
        return <p className="text-gray-400 text-center col-span-full">No sponsors found.</p>;
    }
    return (
        <>
         {sponsors.map((sponsor) => (
            <SponsorCard 
                key={sponsor.id}
                name={sponsor.name}
                branch={sponsor.branch}
                contribution={sponsor.contribution}
                tier={sponsor.tier}
                />
            ))}
            
        </>

)
}
export default SponsorGrid;

