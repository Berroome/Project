// src/components/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import ApplicationDetailModal from './ApplicationDetailModal';
import { FiRefreshCw, FiLogOut,FiSearch, FiFilter, FiDownload } from 'react-icons/fi';
import { FaBusinessTime, FaUserTie, FaCalendarAlt } from 'react-icons/fa';
   import { useNavigate } from 'react-router-dom'; // <-- Make sure useNavigate is imported
import { Link,  } from 'react-router-dom';



  const isAdminLoggedIn = !!localStorage.getItem('adminSecret');


const AdminDashboard = () => {
    
const navigate = useNavigate(); // <-- CREATE navigate FUNCTION

  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedApp, setSelectedApp] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    approved: 0,
    rejected: 0
  });

  useEffect(() => {
    fetchApplications();
  }, []);

  useEffect(() => {
    filterApplications();
    calculateStats();
  }, [applications, searchTerm, statusFilter]);


 const handleLogout = () => {
    // 1. Remove the secret from local storage
    localStorage.removeItem('adminSecret');
    // 2. Redirect the user to the login page
    navigate('/');
  };
  

  const fetchApplications = async () => {
    // ---- FIXED: Added security check ----
    const savedSecret = localStorage.getItem('adminSecret');
    if (!savedSecret) {
        setError("Admin access required. Please log in.");
        setIsLoading(false);
        return;
    }
    // ---- End of fix ----

    try {
      setIsLoading(true);
      setIsRefreshing(true);
      // ---- FIXED: Added secret to the request header ----
      const response = await fetch('http://localhost:5001/api/applications', {
        headers: {
          'x-admin-secret': savedSecret
        }
      });
      if (response.status === 403) {
        throw new Error('Access Denied. Incorrect password.');
      }
      // ---- End of fix ----
      if (!response.ok) {
        throw new Error('Failed to fetch applications');
      }
      const data = await response.json();
      // Add a 'status' field if it doesn't exist, defaulting to 'pending'
      const applicationsWithStatus = data.map(app => ({...app, status: app.status || 'pending'}));
      setApplications(applicationsWithStatus);
      setFilteredApplications(applicationsWithStatus);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  const filterApplications = () => {
    let filtered = applications;
    
    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(app => 
        app.legalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        `${app.firstName} ${app.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.applicationId.toString().includes(searchTerm)
      );
    }
    
    // Apply status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(app => app.status === statusFilter);
    }
    
    setFilteredApplications(filtered);
  };

  const calculateStats = () => {
    const total = applications.length;
    const pending = applications.filter(app => app.status === 'pending').length;
    const approved = applications.filter(app => app.status === 'approved').length;
    const rejected = applications.filter(app => app.status === 'rejected').length;
    
    setStats({ total, pending, approved, rejected });
  };

  const handleStatusChange = async (applicationId, newStatus) => {
    // ---- FIXED: Added security check ----
    const savedSecret = localStorage.getItem('adminSecret');
    if (!savedSecret) {
        setError("Admin access required. Please log in to perform this action.");
        return;
    }
    // ---- End of fix ----
    
    try {
      // NOTE: This assumes you have a backend endpoint to handle status updates.
      // If not, this fetch call will fail.
      const response = await fetch(`http://localhost:5001/api/applications/${applicationId}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-secret': savedSecret // ---- FIXED: Added secret header
        },
        body: JSON.stringify({ status: newStatus }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update status');
      }
      
      setApplications(applications.map(app => 
        app.applicationId === applicationId ? { ...app, status: newStatus } : app
      ));
      
    } catch (err) {
      setError(err.message);
    }
  };

  const exportToCSV = () => {
    const headers = ['ID', 'Business Name', 'Owner', 'Email', 'Status', 'Submission Date'];
    const csvContent = [
      headers.join(','),
      ...filteredApplications.map(app => [
        app.applicationId,
        `"${app.legalName}"`,
        `"${app.firstName} ${app.lastName}"`,
        app.email,
        app.status,
        new Date(app.submissionDate).toISOString()
      ].join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `applications_${new Date().toISOString().slice(0,10)}.csv`);
    link.click();
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center p-10">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600 mb-4"></div>
          <p className="text-gray-600">Loading applications...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center p-10 text-red-500">
          <p className="text-xl mb-4">Error loading applications</p>
          <p className="mb-4">{error}</p>
          <button 
            onClick={fetchApplications}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // --- No changes to the JSX below this line ---
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Loan Applications Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage all submitted loan applications</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-2">
          <button
            onClick={fetchApplications}
            disabled={isRefreshing}
            className={`flex items-center px-4 py-2 rounded-md ${isRefreshing ? 'bg-gray-300' : 'bg-indigo-600 hover:bg-indigo-700'} text-white transition`}
          >
            <FiRefreshCw className={`mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
            {isRefreshing ? 'Refreshing...' : 'Refresh'}
          </button>
          <button
            onClick={exportToCSV}
            className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition"
          >
            <FiDownload className="mr-2" />
            Export CSV
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-500">
          <div className="flex items-center">
            <FaBusinessTime className="text-indigo-500 text-2xl mr-4" />
            <div>
              <p className="text-gray-500 text-sm">Total Applications</p>
              <p className="text-2xl font-bold">{stats.total}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
          <div className="flex items-center">
            <FaUserTie className="text-yellow-500 text-2xl mr-4" />
            <div>
              <p className="text-gray-500 text-sm">Pending Review</p>
              <p className="text-2xl font-bold">{stats.pending}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <div className="flex items-center">
            <FaUserTie className="text-green-500 text-2xl mr-4" />
            <div>
              <p className="text-gray-500 text-sm">Approved</p>
              <p className="text-2xl font-bold">{stats.approved}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
          <div className="flex items-center">
            <FaCalendarAlt className="text-red-500 text-2xl mr-4" />
            <div>
              <p className="text-gray-500 text-sm">Rejected</p>
              <p className="text-2xl font-bold">{stats.rejected}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by business name, owner or ID..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center">
            <FiFilter className="text-gray-400 mr-2" />
            <select
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>
      </div>

      {/* Applications Table */}
      {filteredApplications.length === 0 ? (
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <p className="text-gray-500 text-lg">No applications found matching your criteria</p>
          {searchTerm || statusFilter !== 'all' ? (
            <button 
              onClick={() => {
                setSearchTerm('');
                setStatusFilter('all');
              }}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              Clear filters
            </button>
          ) : (
            <p className="text-gray-400 mt-2">No applications have been submitted yet.</p>
          )}
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Application ID
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Business Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Owner Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Date Submitted
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredApplications.map(app => (
                  <tr key={app.applicationId} className="hover:bg-gray-50 transition">
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      #{app.applicationId}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm font-medium text-gray-900">
                      {app.legalName}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {`${app.firstName} ${app.lastName}`}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        app.status === 'approved' ? 'bg-green-100 text-green-800' :
                        app.status === 'rejected' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {new Date(app.submissionDate).toLocaleDateString()}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                      <div className="flex justify-end space-x-2">
                        <button 
                          onClick={() => setSelectedApp(app)}
                          className="px-3 py-1 bg-indigo-600 text-white text-xs rounded hover:bg-indigo-700 transition"
                        >
                          View
                        </button>
                        
                        {app.status === 'pending' && (
                          <>
                            <button 
                              onClick={() => handleStatusChange(app.applicationId, 'approved')}
                              className="px-3 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700 transition"
                            >
                              Approve
                            </button>
                            <button 
                              onClick={() => handleStatusChange(app.applicationId, 'rejected')}
                              className="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700 transition"
                            >
                              Reject
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-5 py-3 bg-gray-100 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing <span className="font-medium">{filteredApplications.length}</span> of <span className="font-medium">{applications.length}</span> applications
              </div>
              {/* Pagination could be added here */}
            </div>
          </div>
        </div>
      )}

      {selectedApp && (
        <ApplicationDetailModal 
          application={selectedApp} 
          onClose={() => setSelectedApp(null)}
          onStatusChange={handleStatusChange}
        />
      )}
         <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition"
          >
            <FiLogOut className="mr-2" />
            Logout
          </button>
    </div>
    
  );
};

export default AdminDashboard;