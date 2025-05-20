
import React from 'react';
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

type SearchResultItem = {
  id: string;
  relevance: number;
  title: string;
};

const searchResults: SearchResultItem[] = [
  {
    id: "279",
    relevance: 95,
    title: "Decret privind promulgarea Legii pentru modificarea Codului familiei nr. 1316/2000 (nr. 194-X, 15 mai 2025)",
  },
  {
    id: "280",
    relevance: 92,
    title: "Lege pentru modificarea Codului familiei nr. 1316/2000 (nr. 89, 30 aprilie 2025)",
  },
  {
    id: "281",
    relevance: 88,
    title: "Decret privind promulgarea Legii pentru ratificarea Amendamentului nr. 1, încheiat prin schimb de scrisori, la Acordul de finanțare dintre Republica Moldova, Comisia Europeană și Ministerul Dezvoltării, Lucrărilor Publice și Administrației al României pentru Programul Interreg VI-A NEXT România – Republica Moldova 2021–2027 (nr. 195-X, 15 mai 2025)",
  },
  {
    id: "282",
    relevance: 84,
    title: "Lege pentru ratificarea Amendamentului nr. 1, încheiat prin schimb de scrisori, la Acordul de finanțare dintre Republica Moldova, Comisia Europeană și Ministerul Dezvoltării, Lucrărilor Publice și Administrației al României pentru Programul Interreg VI-A NEXT România – Republica Moldova 2021–2027 (nr. 92, 8 mai 2025)",
  },
  {
    id: "283",
    relevance: 81,
    title: "Decret privind promulgarea Legii pentru ratificarea Amendamentului nr. 1, încheiat prin schimb de scrisori, la Acordul de finanțare dintre Republica Moldova, Comisia Europeană și Ministerul Dezvoltării, Lucrărilor Publice și Administrației al României pentru Programul Interreg VI-B NEXT Bazinul Mării Negre 2021–2027 (nr. 196-X, 15 mai 2025)",
  },
  {
    id: "284",
    relevance: 79,
    title: "Lege pentru ratificarea Amendamentului nr. 1, încheiat prin schimb de scrisori, la Acordul de finanțare dintre Republica Moldova, Comisia Europeană și Ministerul Dezvoltării, Lucrărilor Publice și Administrației al României pentru Programul Interreg VI-B NEXT Bazinul Mării Negre 2021–2027 (nr. 93, 8 mai 2025)",
  },
  {
    id: "285",
    relevance: 76,
    title: "Decret cu privire la promulgarea Legii pentru ratificarea Acordului, încheiat prin schimb de scrisori, dintre Guvernul Republicii Moldova și Fondul Națiunilor Unite pentru Populație privind aplicarea mutatis mutandis a Acordului dintre Guvernul Republicii Moldova și Programul Națiunilor Unite pentru Dezvoltare (PNUD) în privința Fondului Organizației Națiunilor Unite pentru Populație (UNFPA) (nr. 197-X, 15 mai 2025)",
  },
  {
    id: "286",
    relevance: 73,
    title: "Lege pentru ratificarea Acordului, încheiat prin schimb de scrisori, dintre Guvernul Republicii Moldova și Fondul Națiunilor Unite pentru Populație privind aplicarea mutatis mutandis a Acordului dintre Guvernul Republicii Moldova și Programul Națiunilor Unite pentru Dezvoltare (PNUD) în privința Fondului Organizației Națiunilor Unite pentru Populație (UNFPA) (nr. 96, 8 mai 2025)",
  },
  {
    id: "287",
    relevance: 70,
    title: "Decret pentru promulgarea Legii privind acceptarea modificărilor la Acordul de constituire a Băncii Europene pentru Reconstrucție și Dezvoltare și participarea Republicii Moldova la majorarea de capital al Băncii Europene pentru Reconstrucție și Dezvoltare (nr. 198-X, 15 mai 2025",
  },
  {
    id: "288",
    relevance: 68,
    title: "Lege privind acceptarea modificărilor la Acordul de constituire a Băncii Europene pentru Reconstrucție și Dezvoltare și participarea Republicii Moldova la majorarea de capital al Băncii Europene pentru Reconstrucție și Dezvoltare (nr. 97, 8 mai 2025)",
  },
];

const SearchResults = () => {
  const handlePdfClick = () => {
    window.open('https://monitorul.gov.md/ro/monitorul/view/pdf/3084', '_blank');
  };

  return (
    <div className="w-full max-w-3xl mt-10 mb-10">
      <div className="border-b border-gray-200 pb-2 mb-4">
        <h2 className="text-lg font-medium">Rezultatele căutării:</h2>
      </div>
      
      <div className="space-y-6">
        {searchResults.map((result) => (
          <div 
            key={result.id}
            className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-150 relative flex items-center"
          >
            <div className="flex-shrink-0 mr-4">
              <div className="flex flex-col items-center">
                <span className="text-lg font-semibold text-blue-600">{result.relevance}%</span>
                <span className="text-xs text-gray-500">Relevanța</span>
              </div>
            </div>
            
            <div 
              className="flex-1 cursor-pointer"
              onClick={() => window.open('https://monitorul.gov.md/ro/monitorul/view/pdf/3084', '_blank')}
            >
              <p className="text-sm md:text-base text-gray-800 pr-16">
                {result.title}
              </p>
            </div>
            
            <Button
              onClick={handlePdfClick}
              className="absolute right-4 bg-red-600 hover:bg-red-700 text-white"
              size="sm"
            >
              <FileText className="h-4 w-4 mr-1" /> PDF
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
