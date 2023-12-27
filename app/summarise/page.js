
// Filename: src/pages/app.js 
  
// To inform next js, this is a client component 
"use client"; 

import Chart from 'react-google-charts';
import React, { useState } from 'react';
import axios from 'axios';



const Autophish = () => {
    const [file, setFile] = useState(null);
    const [similarityResults, setSimilarityResults] = useState([]);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const findSimilarDomains = async () => {
        const formData = new FormData();
        formData.append('file', file);
        const startTime = performance.now();
        try {
            const response = await axios.post('http://127.0.0.1:5000/autophish2', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const endTime = performance.now(); // End timing
            const duration = endTime - startTime; // Calculate duration
            alert(`Time taken: ${duration} milliseconds`); // Log duration

            setSimilarityResults(Object.entries(response.data));
          } catch (error) {
              console.error('Error finding similar domains:', error);
              setSimilarityResults([]);
          }
      };
  
      const getPieChartData = () => {
          const domainCounts = similarityResults.map(([parentDomain, children]) => {
              return [parentDomain, children.length];
          });
  
          // Sorting and selecting the top 10 domains
          domainCounts.sort((a, b) => b[1] - a[1]);
          const top10Domains = domainCounts.slice(0, 10);
  
          return [["Parent Domain", "Number of Children"], ...top10Domains];
      };
  

  return (
    <>
  <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
  <div className="container">
    <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4">
        <div className="mx-auto max-w-[500px] rounded-md bg-primary bg-opacity-5 py-10 px-6 dark:bg-dark sm:p-[60px]">
          <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
            Resume Summary
          </h3>
          <p className="mb-11 text-center text-base font-medium text-body-color">
            Summarize your resume to the domains you fit in.
          </p>
          
          <div className="mb-8 flex items-center justify-center">
            <span className="hidden h-[1px] w-full max-w-[70px] bg-body-color sm:block"></span>
            <p className="w-full px-5 text-center text-base font-medium text-body-color">
             
            </p>
            <span className="hidden h-[1px] w-full max-w-[70px] bg-body-color sm:block"></span>
          </div>
          <form>
                    <div className="mb-8">
                        <label htmlFor="file" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                            Upload Resume
                        </label>
                        <input
                            type="file"
                            name="file"
                            onChange={handleFileChange}
                            className="w-full rounded-md border py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                    </div>
                    <div className="mb-8">
                        <button
                            type="button"
                            onClick={findSimilarDomains}
                            className="flex w-full items-center justify-center rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                        >
                            Find Phish Domains
                        </button>
                    </div>
                </form>
                {similarityResults.map(([parentDomain, children], index) => (
                                <li key={index} className="mb-2">
                                    <strong>Parent Domain:</strong> {parentDomain}
                                    <ul>
                                        {children.map((child, childIndex) => (
                                            <li key={childIndex}> {child}</li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                {similarityResults.length > 0 && (
                        <div className="mt-8">
                            <h4 className="mb-4 text-lg font-bold">Similar Domains:</h4>
                            {/* List of domains */}
                            <Chart
                                width={'400px'}
                                height={'300px'}
                                chartType="PieChart"
                                loader={<div>Loading Chart</div>}
                                data={getPieChartData()}
                                options={{
                                    title: "Top 10 Parent Domains by Number of Children"
                                }}
                            />
                        </div>
                    )}

         </div>
      </div>
    </div>
  </div>
  <div className="absolute top-0 left-0 z-[-1]">
    <svg
      width="1440"
      height="969"
      viewBox="0 0 1440 969"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_95:1005"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="1440"
        height="969"
      >
        <rect width="1440" height="969" fill="#090E34" />
      </mask>
      <g mask="url(#mask0_95:1005)">
        <path
          opacity="0.1"
          d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
          fill="url(#paint0_linear_95:1005)"
        />
        <path
          opacity="0.1"
          d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
          fill="url(#paint1_linear_95:1005)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_95:1005"
          x1="1178.4"
          y1="151.853"
          x2="780.959"
          y2="453.581"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A6CF7" />
          <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_95:1005"
          x1="160.5"
          y1="220"
          x2="1099.45"
          y2="1192.04"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A6CF7" />
          <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</section>

</>
);
};

export default Autophish;
