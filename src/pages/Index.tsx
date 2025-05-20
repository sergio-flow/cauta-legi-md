
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader } from "lucide-react";
import SearchResults from '@/components/SearchResults';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setLoading(false);
      setShowResults(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full p-4 flex justify-between items-start">
        <div className="flex flex-col items-center">
          <img 
            src="https://www.legis.md/assets/img/logo-stema3.png" 
            alt="Stema Republicii Moldova" 
            className="h-16 w-auto"
          />
          <span className="mt-2 text-sm font-medium">Ministerul Justiţiei</span>
        </div>
        
        <div className="flex flex-col items-center">
          <img 
            src="https://www.legis.md/assets/img/logo-stema.png" 
            alt="Stema Republicii Moldova" 
            className="h-16 w-auto"
          />
          <span className="mt-2 text-sm font-medium">Republica Moldova</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 -mt-16">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Caută legi din Monitorul Oficial al Republicii Moldova
        </h1>
        
        <div className="w-full max-w-2xl">
          <form onSubmit={handleSearch} className="flex flex-col space-y-4">
            <div className="flex shadow-md rounded-full overflow-hidden border border-gray-300 hover:shadow-lg focus-within:shadow-lg">
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder='Cuvinte cheie, ex: "Legea nr. 123/2023", "chirie", "impozit" etc.'
                className="flex-1 rounded-l-full rounded-r-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 py-6 px-5"
              />
              <Button 
                type="submit"
                className="rounded-l-none rounded-r-full px-6 bg-blue-500 hover:bg-blue-600 text-white font-medium"
                disabled={loading}
              >
                {loading ? (
                  <Loader className="h-5 w-5 animate-spin" />
                ) : (
                  "Caută"
                )}
              </Button>
            </div>
          </form>
        </div>

        {/* Search Results */}
        {showResults && <SearchResults />}
      </main>
    </div>
  );
};

export default Index;
