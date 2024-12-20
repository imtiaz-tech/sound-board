"use client";
import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import PageHeader1 from "../../components/common/PageHeader1";
import { useDispatch, useSelector } from "react-redux";
// import { getCustomers, deleteSingleCustomer } from "../../redux/slices/orders";
// import moment from "moment";
// import ConfirmationModal from "../../components/Modals/ConfirmationModal";
// import OverlaySpinner from "../../components/Uicomponent/OverlaySpinner";
// import Pagination from "../../components/Customer&Workers/Pagination";

function DashboardAbout() {
  const dispatch = useDispatch();
  const { customers, customersCount, isLoading } = useSelector(
    (state) => state.products || {},
  );
  const [isModal, setIsModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const [searchCustomer, setSearchCustomer] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const searchResults = searchCustomer?.data || [];

  const nPages = Math.ceil(customersCount / recordsPerPage);
  //   const getCustomersByPage = (pageNumber) => {
  //     const data = {
  //       currentPage: pageNumber,
  //       recordsPerPage,
  //     };
  //     dispatch(getCustomers(data));
  //   };
  //   useEffect(() => {
  //     getCustomersByPage(currentPage);
  //   }, []);
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    getCustomersByPage(pageNumber);
  };
  const deleteCustomer = () => {
    dispatch(deleteSingleCustomer(deleteId)).then(() => {
      getCustomersByPage(currentPage);
    });
    setIsModal(false);
  };
  const onDeleteClick = (customerId) => {
    setIsModal(true);
    setDeleteId(customerId);
  };
  const onSearchClick = () => {
    const data = { searchCustomer };
    dispatch(getCustomers(data)).then((response) => {
      setSearchResult(response.payload);
    });
  };

  return (
    <>
      {isLoading && <OverlaySpinner message={"Loading..."} />}
      <div className="flex flex-col py-3">
        <div className="container mx-auto">
          {/* Page Header */}
          {/* <PageHeader1
            pagetitle="Customer List"
            righttitle="Add Customer"
            link="/Customer-add"
            routebutton={true}
          /> */}
          {/* Search Section */}
          {/* <div className="flex flex-wrap gap-4 mt-10 mb-10">
            <div className="w-full sm:w-1/3">
              <input
                type="text"
                placeholder="Search customer here..."
                className="form-input border-gray-300 w-full p-2 rounded-md"
                value={searchCustomer}
                onChange={(e) => setSearchCustomer(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    onSearchClick();
                  }
                }}
              />
            </div>
            <div className="w-full sm:w-auto">
              <button
                onClick={onSearchClick}
                className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600"
              >
                Search
              </button>
            </div>
          </div> */}

          {/* Table Section */}
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead className="bg-gray-200 text-gray-700">
                  <tr>
                    <th className="px-4 py-2 text-left">Id</th>
                    <th className="px-4 py-2 text-left">user Name</th>
                    <th className="px-4 py-2 text-left">sound Name</th>
                    <th className="px-4 py-2 text-left">Sound</th>
                    <th className="px-4 py-2 text-left">Phone No</th>
                    <th className="px-4 py-2 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {(searchResults.length > 0 ? searchResults : customers).map(
                    (customer, index) => (
                      <tr key={index} className="border-t hover:bg-gray-100">
                        <td className="px-4 py-2">
                          {customer._id.slice(0, 6)}
                        </td>
                        <td className="px-4 py-2">{customer.name}</td>
                        <td className="px-4 py-2">
                          {moment(customer.createdAt).format("DD-MM-YYYY")}
                        </td>
                        <td className="px-4 py-2">{customer.address}</td>
                        <td className="px-4 py-2">{customer.phoneNo}</td>
                        <td className="px-4 py-2">
                          <div className="flex gap-2">
                            <Link
                              to={`/customer-edit/${customer._id}`}
                              className="text-green-500 hover:text-green-600"
                            >
                              <i className="icofont-edit"></i>
                            </Link>
                            <button
                              onClick={() => onDeleteClick(customer._id)}
                              className="text-red-500 hover:text-red-600"
                            >
                              <i className="icofont-ui-delete"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ),
                  )} */}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          {/* {!searchResult && (
            <Pagination
              nPages={nPages}
              currentPage={currentPage}
              goToPage={goToPage}
            />
          )} */}
        </div>
      </div>

      {/* Confirmation Modal */}
      {/* <ConfirmationModal
        setIsModal={setIsModal}
        isModal={isModal}
        onConfirm={deleteCustomer}
      /> */}
    </>
  );
}

export default DashboardAbout;
