import React from 'react';

export function CardExperience ({ experience, children })  {
  const {
    companyLogo,
    companyName,
    technologies = [], // Handle empty technologies array
    jobTitle,
    Date,
  } = experience;

  return (
    <div className="inline-flex gap-5 border-2 border-stone-700 rounded-lg p-2">
      <img
        src={companyLogo}
        alt={companyName}
        className="w-10 h-10 lg:w-20 lg:h-20 rounded-lg border-2 border-stone-800 shadow-lg"
      />
      <div className="flex-grow">
        <div className="inline-flex gap-5">
          <h4 className="font-bold text-lg">{companyName}</h4>
          <div className="lg:inline-flex justify-center gap-5 pl-2">
            {technologies.map((tech) => (
              <img
                key={tech.name || tech} // Use tech.name if available, otherwise use tech itself as a key
                src={tech.icon} // Assuming tech objects have an "icon" property
                alt={tech.name || tech} // Use tech.name if available, otherwise use tech itself as alt text
                className="rounded-lg"
              />
            ))}
          </div>
        </div>
        <p className="text-gray-400 text-sm">{jobTitle}</p>
        <p className="text-gray-400 text-sm">
          {Date} 
        </p>
        {children && <div className="mt-4">{children}</div>} {/* Handle nested experiences */}
      </div>
    </div>
  );
};


