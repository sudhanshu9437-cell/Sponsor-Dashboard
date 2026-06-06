import { useState } from 'react'
import StatCard from './components/StatCard';
import Search from './components/Search';
import SponsorCard from './components/SponsorCard';
import SponsorGrid from './components/SponsorGrid';
import sponsorData from "./data/sponsors.json";
import Footer from './components/Footer';

function App() {
  const [query, setQuery] = useState('')
  const [tier, setTier] = useState('All')

  const filteredSponsors = sponsorData.filter((sponsor) => {
    const matchesQuery =
     sponsor.name.toLowerCase().includes(query.toLowerCase());

    const matchesTier = tier === 'All' || sponsor.tier === tier;
    return matchesQuery && matchesTier;
  });

  console.log(tier);


  return (
    <>
      <StatCard tier={tier} setTier={setTier} sponsors={filteredSponsors} />
      <Search query={query} setQuery={setQuery} tier={tier} setTier={setTier} />
      <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4
       justify-items-center max-w-7xl mx-auto">
          <SponsorGrid  sponsors={filteredSponsors}/>
      </div>
      <Footer />


    </>
  )}

export default App