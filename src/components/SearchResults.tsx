import React from 'react';
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

type SearchResultItem = {
  title: string;
  date: string;
  url: string;
  excerpt: string;
};

type SearchResultsProps = {
  results: SearchResultItem[];
};

const SearchResults = ({ results }: SearchResultsProps) => {
  const handlePdfClick = (url: string) => {
    window.open(url, '_blank');
  };

  if (!results || results.length === 0) {
    return (
      <div className="w-full max-w-3xl mt-10 mb-10">
        <div className="border-b border-gray-200 pb-2 mb-4">
          <h2 className="text-lg font-medium">Rezultatele căutării:</h2>
        </div>
        <p className="text-gray-500 text-center py-8">Nu au fost găsite rezultate pentru căutarea dumneavoastră.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mt-10 mb-10">
      <div className="border-b border-gray-200 pb-2 mb-4">
        <h2 className="text-lg font-medium">Rezultatele căutării: ({results.length} rezultate)</h2>
      </div>
      
      <div className="space-y-6">
        {results.map((result, index) => (
          <div 
            key={index}
            className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-150 relative"
          >
             <div className="flex-shrink-0 mr-4">
              <div className="flex flex-col items-center">
                <span className="text-lg font-semibold text-blue-600">{result.relevance}</span>
                <span className="text-xs text-gray-500">Relevanța</span>
              </div>
            </div>
            
            <div className={`${result.url ? 'pr-20' : ''}`}>
              <h5 className="text-lg font-semibold text-gray-900 mb-1">
                {result.title}
              </h5>
              
              <h6 className="text-sm font-medium text-blue-600 mb-3">
                {result.date}
              </h6>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                {result.excerpt}
              </p>
            </div>
            
            {result.url && (
              <Button
                onClick={() => handlePdfClick(result.url)}
                className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white"
                size="sm"
              >
                <FileText className="h-4 w-4 mr-1" /> PDF
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
