import React from 'react';
import { Info } from 'lucide-react';

export const VisaInfo = () => {
  return (
    <div className="mt-8 space-y-4">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Visa Types Explained</h3>
            <dl className="space-y-4">
              <div>
                <dt className="font-medium text-gray-700">Visa Free</dt>
                <dd className="text-gray-600 text-sm">
                  No visa is required for entry. You can enter the country with just your passport. 
                  Often includes a specific number of days you can stay (e.g., 90 days).
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gray-700">e-Visa Required</dt>
                <dd className="text-gray-600 text-sm">
                  You need to apply for a visa online before traveling. This process is typically faster 
                  than traditional visas and can often be completed within a few business days. You'll 
                  need to submit documents electronically and pay a fee.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gray-700">Visa on Arrival</dt>
                <dd className="text-gray-600 text-sm">
                  You can obtain a visa when you arrive at the destination country's port of entry. 
                  Usually requires payment of a fee and may need supporting documents like passport 
                  photos, return tickets, and proof of sufficient funds.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gray-700">Visa Required</dt>
                <dd className="text-gray-600 text-sm">
                  You must obtain a traditional visa from an embassy or consulate before traveling. 
                  This usually involves submitting physical documents, attending an interview, and 
                  longer processing times.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gray-700">No Admission</dt>
                <dd className="text-gray-600 text-sm">
                  Entry to the country is not permitted, regardless of visa status. This may be due 
                  to diplomatic restrictions or other political factors.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};