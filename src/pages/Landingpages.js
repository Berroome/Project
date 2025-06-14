import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Shield, Heart } from 'lucide-react';
import { ArrowRight, Award, Clock, Users } from 'lucide-react';
import { MapPin, Phone } from 'lucide-react';

const Landingpages = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
      {/* Header/Navigation */}
    

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-24">
          <div className="flex items-center justify-center mb-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-400/20 blur-xl rounded-full scale-150"></div>
              <div className="relative bg-gradient-to-br from-white via-blue-50 to-primary/10 p-8 rounded-3xl shadow-2xl border border-blue-100/50 backdrop-blur-sm">
                <div className="bg-gradient-to-br from-primary to-blue-600 p-4 rounded-2xl shadow-lg mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building2 h-16 w-16 text-white">
                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                    <path d="M10 6h4"></path>
                    <path d="M10 10h4"></path>
                    <path d="M10 14h4"></path>
                    <path d="M10 18h4"></path>
                  </svg>
                </div>
                <div className="text-center">
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-primary via-blue-600 to-blue-800 bg-clip-text text-transparent drop-shadow-sm">ZENON</span>
                  </h1>
                  <div className="h-1 w-16 bg-gradient-to-r from-primary to-blue-600 rounded-full mx-auto mb-2"></div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">FUNDING</h2>
                  <p className="text-sm text-muted-foreground mt-2 font-medium tracking-wider">EMPOWERING BUSINESS GROWTH</p>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-green-400 to-blue-500 rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 max-w-5xl mx-auto leading-tight">
            Fuel Your Business Dreams with<span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"> Smart Financing</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            From lines of credit to term loans, we provide flexible financing solutions that grow with your business. Join thousands of successful companies powered by Zenon Funding.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 text-xl px-16 py-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 bg-gradient-to-r from-primary to-blue-600">
              Get Funded Today
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 h-6 w-6">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">$2.5B+</div>
              <div className="text-muted-foreground text-lg">Funded to Date</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15K+</div>
              <div className="text-muted-foreground text-lg">Businesses Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground text-lg">Approval Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24 hrs</div>
              <div className="text-muted-foreground text-lg">Average Approval Time</div>
            </div>
          </div>
        </div>

        {/* Financial Solutions */}
        <div className="mb-24" id="financial-solutions">
          <h3 className="text-4xl font-bold text-center mb-4">Our Financial Solutions</h3>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Choose from our comprehensive range of financing options designed to meet your business needs at every stage of growth.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Line of Credit Card */}
            <div className="rounded-lg bg-card text-card-foreground text-center hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-slate-50/50 hover:transform hover:scale-105">
              <div className="flex flex-col space-y-1.5 p-6 pb-6">
                <div className="bg-gradient-to-r from-primary/10 to-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card h-10 w-10 text-primary">
                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                    <line x1="2" x2="22" y1="10" y2="10"></line>
                  </svg>
                </div>
                <h3 className="tracking-tight text-2xl font-bold">Lines of Credit</h3>
              </div>
              <div className="p-6 pt-0">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Flexible credit lines from $10K to $500K with competitive rates and instant access to funds.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center justify-center text-sm text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up h-4 w-4 text-green-500 mr-2">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                    Instant approval
                  </li>
                  <li className="flex items-center justify-center text-sm text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up h-4 w-4 text-green-500 mr-2">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                    Flexible repayment
                  </li>
                  <li className="flex items-center justify-center text-sm text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up h-4 w-4 text-green-500 mr-2">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                    Credit building
                  </li>
                </ul>
              </div>
            </div>

            {/* Term Loans Card */}
            <div className="rounded-lg bg-card text-card-foreground text-center hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-slate-50/50 hover:transform hover:scale-105">
              <div className="flex flex-col space-y-1.5 p-6 pb-6">
                <div className="bg-gradient-to-r from-primary/10 to-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-banknote h-10 w-10 text-primary">
                    <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                    <circle cx="12" cy="12" r="2"></circle>
                    <path d="M6 12h.01M18 12h.01"></path>
                  </svg>
                </div>
                <h3 className="tracking-tight text-2xl font-bold">Term Loans</h3>
              </div>
              <div className="p-6 pt-0">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Fixed-rate business loans with terms up to 5 years for expansion, equipment, or working capital.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center justify-center text-sm text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up h-4 w-4 text-green-500 mr-2">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                    Fixed rates
                  </li>
                  <li className="flex items-center justify-center text-sm text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up h-4 w-4 text-green-500 mr-2">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                    Up to 5 years
                  </li>
                  <li className="flex items-center justify-center text-sm text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up h-4 w-4 text-green-500 mr-2">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                    Quick funding
                  </li>
                </ul>
              </div>
            </div>

            {/* Invoice Factoring Card */}
            <div className="rounded-lg bg-card text-card-foreground text-center hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-slate-50/50 hover:transform hover:scale-105">
              <div className="flex flex-col space-y-1.5 p-6 pb-6">
                <div className="bg-gradient-to-r from-primary/10 to-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calculator h-10 w-10 text-primary">
                    <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                    <line x1="8" x2="16" y1="6" y2="6"></line>
                    <line x1="16" x2="16" y1="14" y2="18"></line>
                    <path d="M16 10h.01"></path>
                    <path d="M12 10h.01"></path>
                    <path d="M8 10h.01"></path>
                    <path d="M12 14h.01"></path>
                    <path d="M8 14h.01"></path>
                    <path d="M12 18h.01"></path>
                    <path d="M8 18h.01"></path>
                  </svg>
                </div>
                <h3 className="tracking-tight text-2xl font-bold">Invoice Factoring</h3>
              </div>
              <div className="p-6 pt-0">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Convert your invoices to immediate cash flow with our advanced factoring solutions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center justify-center text-sm text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up h-4 w-4 text-green-500 mr-2">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                    Same-day funding
                  </li>
                  <li className="flex items-center justify-center text-sm text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up h-4 w-4 text-green-500 mr-2">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                    No debt created
                  </li>
                  <li className="flex items-center justify-center text-sm text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up h-4 w-4 text-green-500 mr-2">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                    Flexible terms
                  </li>
                </ul>
              </div>
            </div>

            {/* Cash Advance Card */}
            <div className="rounded-lg bg-card text-card-foreground text-center hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-slate-50/50 hover:transform hover:scale-105">
              <div className="flex flex-col space-y-1.5 p-6 pb-6">
                <div className="bg-gradient-to-r from-primary/10 to-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap h-10 w-10 text-primary">
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                  </svg>
                </div>
                <h3 className="tracking-tight text-2xl font-bold">Cash Advance</h3>
              </div>
              <div className="p-6 pt-0">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Quick merchant cash advances based on your daily sales with flexible repayment options.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center justify-center text-sm text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up h-4 w-4 text-green-500 mr-2">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                    Fast approval
                  </li>
                  <li className="flex items-center justify-center text-sm text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up h-4 w-4 text-green-500 mr-2">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                    Sales-based repayment
                  </li>
                  <li className="flex items-center justify-center text-sm text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up h-4 w-4 text-green-500 mr-2">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                    No fixed payments
                  </li>
                </ul>
              </div>
            </div>

            {/* Equipment Financing Card */}
            <div className="rounded-lg bg-card text-card-foreground text-center hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-slate-50/50 hover:transform hover:scale-105">
              <div className="flex flex-col space-y-1.5 p-6 pb-6">
                <div className="bg-gradient-to-r from-primary/10 to-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wrench h-10 w-10 text-primary">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                  </svg>
                </div>
                <h3 className="tracking-tight text-2xl font-bold">Equipment Financing</h3>
              </div>
              <div className="p-6 pt-0">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Specialized financing for business equipment and machinery with competitive rates.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center justify-center text-sm text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up h-4 w-4 text-green-500 mr-2">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                    100% financing
                  </li>
                  <li className="flex items-center justify-center text-sm text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up h-4 w-4 text-green-500 mr-2">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                    Tax benefits
                  </li>
                  <li className="flex items-center justify-center text-sm text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up h-4 w-4 text-green-500 mr-2">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                    Equipment protection
                  </li>
                </ul>
              </div>
            </div>

            {/* Consolidation Card */}
            <div className="rounded-lg bg-card text-card-foreground text-center hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-slate-50/50 hover:transform hover:scale-105">
              <div className="flex flex-col space-y-1.5 p-6 pb-6">
                <div className="bg-gradient-to-r from-primary/10 to-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up h-10 w-10 text-primary">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
                </div>
                <h3 className="tracking-tight text-2xl font-bold">Consolidation</h3>
              </div>
              <div className="p-6 pt-0">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Streamline your business debts into one manageable payment with better terms.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center justify-center text-sm text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up h-4 w-4 text-green-500 mr-2">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                    Lower payments
                  </li>
                  <li className="flex items-center justify-center text-sm text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up h-4 w-4 text-green-500 mr-2">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                    Simplified management
                  </li>
                  <li className="flex items-center justify-center text-sm text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up h-4 w-4 text-green-500 mr-2">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                    Improved cash flow
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      
      </div>\
      <div className="mb-24" id="about-us">
      <h3 className="text-4xl font-bold text-center mb-4">About Zenon Funding</h3>
      <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
        Empowering businesses to reach their full potential through innovative financial solutions and personalized service.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Our Mission Card */}
        <div className="rounded-lg bg-card text-card-foreground shadow-sm text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-blue-50/30">
          <div className="p-8">
            <div className="bg-gradient-to-r from-blue-100 to-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-4">Our Mission</h4>
            <p className="text-muted-foreground leading-relaxed">
              To democratize access to capital for businesses of all sizes, providing fast, flexible, and transparent funding solutions that fuel growth and success.
            </p>
          </div>
        </div>

        {/* Our Values Card */}
        <div className="rounded-lg bg-card text-card-foreground shadow-sm text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-blue-50/30">
          <div className="p-8">
            <div className="bg-gradient-to-r from-green-100 to-green-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h4 className="text-xl font-bold mb-4">Our Values</h4>
            <p className="text-muted-foreground leading-relaxed">
              Trust, transparency, and customer-centricity guide everything we do. We believe in building lasting partnerships with our clients.
            </p>
          </div>
        </div>

        {/* Our Commitment Card */}
        <div className="rounded-lg bg-card text-card-foreground shadow-sm text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-blue-50/30">
          <div className="p-8">
            <div className="bg-gradient-to-r from-purple-100 to-purple-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-purple-600" />
            </div>
            <h4 className="text-xl font-bold mb-4">Our Commitment</h4>
            <p className="text-muted-foreground leading-relaxed">
              Dedicated to your success with 24/7 support, competitive rates, and funding solutions tailored to your unique business needs.
            </p>
          </div>
        </div>
      </div>
    </div>


    <div className="p-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent text-center">
        Ready to Accelerate Your Growth?
      </h2>
      <p className="text-muted-foreground mb-10 text-xl max-w-2xl mx-auto leading-relaxed">
        Join thousands of businesses that have unlocked their potential with Zenon Funding. Get pre-approved in minutes and access funding in as little as 24 hours.
      </p>
      <button
        className="inline-flex mx-auto items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 min-w-72 text-xl py-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 bg-gradient-to-r from-primary to-blue-600"
      >
        Start Your Application
        <ArrowRight className="ml-3 h-6 w-6" />
      </button>
      <div className="flex flex-wrap justify-center gap-8 text-base text-muted-foreground mt-8">
        <div className="flex items-center">
          <Award className="h-5 w-5 text-yellow-500 mr-2" />
          A+ BBB Rating
        </div>
        <div className="flex items-center">
          <Clock className="h-5 w-5 text-green-500 mr-2" />
          24-hour decisions
        </div>
        <div className="flex items-center">
          <Users className="h-5 w-5 text-blue-500 mr-2" />
          15,000+ satisfied clients
        </div>
      </div>
    </div>
     <section id="contact-us" className="mt-24 mb-16">
      <h3 className="text-4xl font-bold text-center mb-4">Contact Us</h3>
      <p className="text-xl text-muted-foreground text-center mb-16">
        Ready to get started? Get in touch with our funding experts today.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {/* Visit Us Card */}
        <div className="rounded-lg bg-gradient-to-br from-white to-slate-50 text-center hover:shadow-xl transition-all duration-300 border-0 shadow-sm">
          <div className="p-8">
            <div className="bg-gradient-to-r from-primary/20 to-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-4">Visit Us</h4>
            <p className="text-muted-foreground leading-relaxed">
              123 Financial District<br />
              Suite 4500<br />
              New York, NY 10005
            </p>
          </div>
        </div>

        {/* Call Us Card */}
        <div className="rounded-lg bg-gradient-to-br from-white to-slate-50 text-center hover:shadow-xl transition-all duration-300 border-0 shadow-sm">
          <div className="p-8">
            <div className="bg-gradient-to-r from-green-100 to-green-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Phone className="h-8 w-8 text-green-600" />
            </div>
            <h4 className="text-xl font-bold mb-4">Call Us</h4>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">(855) 936-6632</strong><br />
              Monday – Friday<br />
              8:00 AM – 8:00 PM EST
            </p>
          </div>
        </div>
         <div className="rounded-lg bg-gradient-to-br from-white to-slate-50 text-center hover:shadow-xl transition-all duration-300 border-0 shadow-sm">
          <div className="p-8">
            <div className="bg-gradient-to-r from-primary/20 to-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-4">Visit Us</h4>
            <p className="text-muted-foreground leading-relaxed">
              123 Financial District<br />
              Suite 4500<br />
              New York, NY 10005
            </p>
          </div>
        </div>

        {/* Add more cards as needed */}
      </div>
    </section>
        {/* Footer */}
        <footer className="bg-white/90 backdrop-blur-sm border-t border-gray-200 py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground">© 2023 Zenon Funding. All rights reserved.</p>
            <div className="mt-4">
              <a href="#" className="text-primary hover:underline">Privacy Policy</a> | 
              <a href="#" className="text-primary hover:underline"> Terms of Service</a>
            </div>
          </div>    
        </footer>
        </div>
    );
}
export default Landingpages;