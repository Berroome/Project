// src/components/ApplicationDetailModal.js

import React from 'react';

const DetailItem = ({ label, value }) => (
  <div className="mb-2">
    <p className="text-xs font-semibold text-gray-500">{label}</p>
    <p className="text-sm text-gray-800">{value || 'N/A'}</p>
  </div>
);

const ApplicationDetailModal = ({ application, onClose }) => {
  if (!application) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold">Application Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl">×</button>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          
          {/* Business Information */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-2 border-b pb-1">Business Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <DetailItem label="Legal Name" value={application.legalName} />
              <DetailItem label="DBA" value={application.dba} />
              <DetailItem label="Address" value={`${application.address}, ${application.city}, ${application.state} ${application.zip}`} />
              <DetailItem label="Phone" value={application.phone} />
              <DetailItem label="Email" value={application.email} />
              <DetailItem label="EIN" value={application.ein} />
            </div>
          </div>

          {/* Owner Information */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-2 border-b pb-1">Owner's Information</h3>
            <div className="grid grid-cols-2 gap-4">
                <DetailItem label="Name" value={`${application.firstName} ${application.lastName}`} />
                <DetailItem label="Owner Phone" value={application.ownerPhone} />
                <DetailItem label="Owner Email" value={application.ownerEmail} />
                <DetailItem label="Date of Birth" value={application.dob} />
            </div>
          </div>
          
          {/* Signature */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-2 border-b pb-1">Digital Signature</h3>
            {application.signatureDataUrl ? (
              <div className="bg-gray-100 border rounded p-2 inline-block">
                <img src={application.signatureDataUrl} alt="User Signature" className="h-24" />
              </div>
            ) : (
              <p>No signature provided.</p>
            )}
            <p className="text-sm text-gray-600 mt-2">Terms Agreed: {application.agreeTerms ? 'Yes' : 'No'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetailModal;