// src/components/BusinessApplicationForm.js

import React, { useState, useEffect, useRef } from "react";
import SignatureCanvas from 'react-signature-canvas';

const BusinessApplicationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Business Information
    legalName: "", dba: "", address: "", city: "", state: "", zip: "", phone: "", email: "", startDate: "", ein: "", entityType: "",
    // Owner's Information
    firstName: "", lastName: "", ownerEmail: "", ownerPhone: "", ssn: "", ownershipPercentage: "", dob: "",
    // Digital Signature
    signatureDataUrl: "", // This will store the signature image data
    agreeTerms: false,
    // Bank Verification
    bankName: "", accountNumber: "", routingNumber: "", accountType: ""
  });
  const [errors, setErrors] = useState({});
  const [applicationId, setApplicationId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  // Create a ref for the signature pad component
  const sigPadRef = useRef(null);

  // Generate a unique application ID when the component mounts
  useEffect(() => {
    const uniqueId = `APP-${Date.now()}-${Math.random().toString(36).substr(2, 5).toUpperCase()}`;
    setApplicationId(uniqueId);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error for the field being edited
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  // Function to clear the signature pad
  const clearSignature = () => {
    sigPadRef.current.clear();
    setFormData(prev => ({ ...prev, signatureDataUrl: "" }));
    setErrors(prev => ({ ...prev, signatureDataUrl: null }));
  };
  
  // Function to save signature data when user stops drawing
  const handleSignatureEnd = () => {
const dataUrl = sigPadRef.current.toDataURL('image/png');
    setFormData(prev => ({ ...prev, signatureDataUrl: dataUrl }));
    setErrors(prev => ({ ...prev, signatureDataUrl: null }));
  };

  const validateStep = () => {
    const newErrors = {};
    const requiredFieldsByStep = {
      1: ['legalName', 'address', 'city', 'state', 'zip', 'phone', 'email', 'startDate', 'ein', 'entityType'],
      2: ['firstName', 'lastName', 'ownerEmail', 'ownerPhone', 'ssn', 'ownershipPercentage', 'dob'],
      3: ['signatureDataUrl', 'agreeTerms'], // Validate the signature pad data
      4: ['bankName', 'accountNumber', 'routingNumber', 'accountType'],
    };

    const fieldsToValidate = requiredFieldsByStep[currentStep];
    if (fieldsToValidate) {
      fieldsToValidate.forEach(field => {
        if (!formData[field]) {
          newErrors[field] = 'This field is required.';
          if (field === 'signatureDataUrl') newErrors[field] = 'A signature is required.';
        } else if (field === 'agreeTerms' && !formData.agreeTerms) {
            newErrors[field] = 'You must agree to the terms.';
        }
      });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep()) {
        alert("Please correct the errors before submitting.");
        return;
    }

    setIsSubmitting(true);
    setSubmissionStatus(null);
    console.log("Submitting form data:", { ...formData, applicationId });

    try {
        const response = await fetch('http://localhost:5001/api/submit-application', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...formData, applicationId }),
        });
        const result = await response.json();
        if (!response.ok) {
            throw new Error(result.message || 'Something went wrong');
        }
        setSubmissionStatus('success');
    } catch (error) {
        setSubmissionStatus('error');
        setErrors({ submit: error.message });
    } finally {
        setIsSubmitting(false);
    }
  };
  
  // Data for select dropdowns
  const states = [ "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming" ];
  const entityTypes = [ "Sole Proprietorship", "Partnership", "Limited Liability Company (LLC)", "Corporation (C-Corp)", "S-Corporation (S-Corp)", "Nonprofit Organization", "Other" ];
  const accountTypes = [ "Checking", "Savings" ];

  // Helper functions to render inputs and selects
  const renderInput = (name, label, type = "text", required = false, options = {}) => (
    <div className={options.className || "md:col-span-1"}>
      <label htmlFor={name} className="block text-sm font-medium mb-1">{label} {required && <span className="text-red-500">*</span>}</label>
      <input id={name} name={name} type={type} required={required} value={formData[name]} onChange={handleChange} placeholder={options.placeholder} className={`w-full border ${errors[name] ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent`}/>
      {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]}</p>}
    </div>
  );
  const renderSelect = (name, label, values, required = false, options = {}) => (
    <div className={options.className || "md:col-span-1"}>
        <label htmlFor={name} className="block text-sm font-medium mb-1">{label} {required && <span className="text-red-500">*</span>}</label>
        <select id={name} name={name} required={required} value={formData[name]} onChange={handleChange} className={`w-full border ${errors[name] ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent`}>
          <option value="">Select {label.toLowerCase()}</option>
          {values.map(v => <option key={v} value={v}>{v}</option>)}
        </select>
        {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]}</p>}
    </div>
  );

  // Steps configuration with ALL step components fully implemented
  const steps = [
    { number: 1, label: "Business Information", component: (
        <>
          <h2 className="text-lg font-semibold mb-6">Business Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {renderInput('legalName', 'Business Legal Name', 'text', true)}
            {renderInput('dba', 'DBA (Doing Business As)', 'text', false, { placeholder: "Optional" })}
            {renderInput('address', 'Business Address', 'text', true, { className: 'md:col-span-2' })}
            {renderInput('city', 'City', 'text', true)}
            {renderSelect('state', 'State', states, true)}
            {renderInput('zip', 'ZIP Code', 'text', true, { placeholder: "12345" })}
            {renderInput('phone', 'Business Phone', 'tel', true, { placeholder: "(555) 123-4567" })}
            {renderInput('email', 'Business Email', 'email', true)}
            {renderInput('startDate', 'Business Start Date', 'date', true)}
            {renderInput('ein', 'Federal Tax ID (EIN)', 'text', true, { placeholder: "12-3456789" })}
            {renderSelect('entityType', 'Type of Entity', entityTypes, true)}
          </div>
        </>
    )},
    { number: 2, label: "Owner's Information", component: (
        <>
          <h2 className="text-lg font-semibold mb-6">Owner's Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {renderInput('firstName', 'First Name', 'text', true)}
            {renderInput('lastName', 'Last Name', 'text', true)}
            {renderInput('ownerEmail', 'Email', 'email', true)}
            {renderInput('ownerPhone', 'Phone Number', 'tel', true, { placeholder: "(555) 123-4567" })}
            {renderInput('ssn', 'SSN (Last 4 digits)', 'text', true, { placeholder: "XXXX" })}
            {renderInput('ownershipPercentage', 'Ownership Percentage', 'number', true, { placeholder: "50" })}
            {renderInput('dob', 'Date of Birth', 'date', true)}
          </div>
        </>
    )},
    { number: 3, label: "Digital Signature", component: (
        <>
          <h2 className="text-lg font-semibold mb-6">Digital Signature</h2>
          <div className="grid grid-cols-1 gap-4 md:gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Please sign in the box below <span className="text-red-500">*</span>
              </label>
              <div className={`w-full h-48 bg-white rounded-md border-2 ${errors.signatureDataUrl ? 'border-red-500' : 'border-gray-300'}`}>
                <SignatureCanvas
                  ref={sigPadRef}
                  penColor='black'
                  canvasProps={{ className: 'w-full h-full rounded-md' }}
                  onEnd={handleSignatureEnd}
                />
              </div>
              <div className="flex justify-end mt-2">
                <button type="button" onClick={clearSignature} className="text-sm text-gray-600 hover:text-black focus:outline-none">
                  Clear Signature
                </button>
              </div>
              {errors.signatureDataUrl && <p className="text-red-500 text-xs mt-1">{errors.signatureDataUrl}</p>}
            </div>

            <div className="flex items-start mt-4">
              <div className="flex items-center h-5">
                <input id="agreeTerms" name="agreeTerms" type="checkbox" required checked={formData.agreeTerms} onChange={handleChange} className="focus:ring-black h-4 w-4 text-black border-gray-300 rounded"/>
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="agreeTerms" className="font-medium text-gray-700">I certify that all information provided is accurate and complete.</label>
                <p className="text-gray-500">By checking this box, you agree to our Terms of Service.</p>
                {errors.agreeTerms && <p className="text-red-500 text-xs mt-1">{errors.agreeTerms}</p>}
              </div>
            </div>
          </div>
        </>
    )},
    { number: 4, label: "Bank Verification", component: (
        <>
          <h2 className="text-lg font-semibold mb-6">Bank Verification</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {renderInput('bankName', 'Bank Name', 'text', true, {className: 'md:col-span-2'})}
            {renderInput('accountNumber', 'Account Number', 'text', true)}
            {renderInput('routingNumber', 'Routing Number', 'text', true)}
            {renderSelect('accountType', 'Account Type', accountTypes, true)}
          </div>
        </>
    )},
  ];

  // If submission is successful, show a confirmation message
  if (submissionStatus === 'success') {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-sm p-8 text-center">
                <h1 className="text-2xl font-semibold text-green-600 mb-4">Application Submitted!</h1>
                <p className="text-gray-700">Thank you for submitting your application. We have received your information and will be in touch shortly.</p>
                <p className="text-sm text-gray-500 mt-4">Your Application ID is: <span className="font-bold text-black">{applicationId}</span></p>
            </div>
        </div>
      );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
        <header className="text-center mb-8">
          <h1 className="text-2xl font-semibold mb-2 flex justify-center items-center gap-2">
            <span aria-hidden="true">📄</span> Business Application
          </h1>
          <p className="text-sm text-gray-600">Complete your business verification in {steps.length} simple steps</p>
          {applicationId && <p className="text-xs text-gray-500 mt-2">Application ID: <span className="font-medium">{applicationId}</span></p>}
        </header>

        {/* Progress Steps */}
        <nav aria-label="Progress steps">
          <div className="flex flex-wrap items-center justify-between mb-10 gap-4 space-y-6 border border-gray-200 box-border p-6 bg-gray-50 rounded-lg shadow-sm">
            <div className="flex flex-wrap gap-4">
              {steps.map((step) => (
                <div key={step.number} className="flex items-center gap-2">
                  <div className={`w-8 h-8 flex items-center justify-center rounded-full ${ currentStep === step.number ? "bg-black text-white" : currentStep > step.number ? "bg-gray-200 text-gray-700" : "border border-gray-300"} font-medium`}>
                    {step.number}
                  </div>
                  <span className={`text-sm ${ currentStep === step.number ? "font-medium" : "text-gray-500"}`}>
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </nav>

        <form onSubmit={handleSubmit} className="space-y-6 border border-gray-200 box-border p-6 bg-gray-50 rounded-lg shadow-sm">
          {steps.find(step => step.number === currentStep)?.component}
          
          {submissionStatus === 'error' && errors.submit && (
              <div className="p-4 mt-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
                  <span className="font-medium">Submission Failed:</span> {errors.submit}
              </div>
          )}
          
          <div className="mt-8 flex justify-between items-center">
            {currentStep > 1 ? (
              <button type="button" onClick={prevStep} className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300">
                Previous
              </button>
            ) : <div /> /* Empty div to maintain space */}
            
            {currentStep < steps.length ? (
              <button type="button" onClick={nextStep} className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
                Next Step
              </button>
            ) : (
              <button type="submit" disabled={isSubmitting} className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 disabled:bg-green-300 disabled:cursor-not-allowed">
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default BusinessApplicationForm;