import React from "react";

// FASTag Provider Component
function FastagProvider() {
  const providers = [
    {
      id: 1,
      name: "Indian Highways Management Company Limited",
      displayName: "Indian Highways...",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/ihmcl.svg",
      color: "bg-blue-50",
    },
    {
      id: 2,
      name: "IndusInd Bank",
      displayName: "IndusInd Bank",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/indusind.svg",
      color: "bg-red-50",
    },
    {
      id: 3,
      name: "Bank of Baroda",
      displayName: "Bank of Baroda",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/bob.svg",
      color: "bg-orange-50",
    },
    {
      id: 4,
      name: "Axis Bank",
      displayName: "Axis Bank",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/axis.svg",
      color: "bg-pink-50",
    },
    {
      id: 5,
      name: "IDFC FIRST Bank",
      displayName: "IDFC FIRST Bank",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/idfc.svg",
      color: "bg-red-50",
    },
    {
      id: 6,
      name: "HDFC Bank",
      displayName: "HDFC Bank",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/hdfc.svg",
      color: "bg-blue-50",
    },
    {
      id: 7,
      name: "Kotak Mahindra Bank",
      displayName: "Kotak Mahindra...",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/kotak.svg",
      color: "bg-red-50",
    },
    {
      id: 8,
      name: "Equitas Small Finance Bank",
      displayName: "Equitas",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/equitas.svg",
      color: "bg-blue-50",
    },
    {
      id: 9,
      name: "IDBI Bank",
      displayName: "IDBI Bank",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/idbi.svg",
      color: "bg-green-50",
    },
    {
      id: 10,
      name: "Indian Overseas Bank",
      displayName: "IOB",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/iob.svg",
      color: "bg-blue-50",
    },
    {
      id: 11,
      name: "Jammu and Kashmir Bank",
      displayName: "Jammu and Kashm...",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/jkb.svg",
      color: "bg-gray-50",
    },
    {
      id: 12,
      name: "Karnataka Bank",
      displayName: "Karnataka Bank",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/kbl.svg",
      color: "bg-purple-50",
    },
    {
      id: 13,
      name: "Paytm Payments Bank",
      displayName: "Paytm Payments...",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/paytm.svg",
      color: "bg-blue-50",
    },
    {
      id: 14,
      name: "State Bank of India",
      displayName: "State Bank of I...",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/sbi.svg",
      color: "bg-blue-50",
    },
    {
      id: 15,
      name: "Federal Bank",
      displayName: "Federal Bank",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/federal.svg",
      color: "bg-orange-50",
    },
    {
      id: 16,
      name: "ICICI Bank",
      displayName: "ICICI Bank",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/icici.svg",
      color: "bg-orange-50",
    },
    {
      id: 17,
      name: "UCO Bank",
      displayName: "UCO Bank",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/uco.svg",
      color: "bg-yellow-50",
    },
    {
      id: 18,
      name: "Airtel Payments Bank",
      displayName: "Airtel Payments...",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/airtel.svg",
      color: "bg-red-50",
    },
    {
      id: 19,
      name: "Axis Bank",
      displayName: "Axis Bank",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/axis.svg",
      color: "bg-pink-50",
    },
    {
      id: 20,
      name: "Bank of Maharashtra",
      displayName: "Bank of Maharas...",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/bom.svg",
      color: "bg-blue-50",
    },
    {
      id: 21,
      name: "Indian Bank",
      displayName: "Indian Bank",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/indian.svg",
      color: "bg-blue-50",
    },
    {
      id: 22,
      name: "LivQuik Technology",
      displayName: "LivQuik Technol...",
      logo: "https://via.placeholder.com/120x80/e5e7eb/6b7280?text=LivQuik",
      color: "bg-gray-50",
    },
    {
      id: 23,
      name: "South Indian Bank",
      displayName: "South Indian Ba...",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/sib.svg",
      color: "bg-red-50",
    },
    {
      id: 24,
      name: "Union Bank of India",
      displayName: "Union Bank of I...",
      logo: "https://cdn.razorpay.com/static/assets/logo/payment/unionbank.svg",
      color: "bg-red-50",
    },
  ];

  const handleProviderClick = (provider) => {
    alert(`Selected: ${provider.name}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            FASTag Provider
          </h1>
        </div>

        {/* Provider Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {providers.map((provider) => (
            <div
              key={provider.id}
              onClick={() => handleProviderClick(provider)}
              className="bg-white rounded-lg border-2 border-gray-200 hover:border-teal-500 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden group"
            >
              <div
                className={`${provider.color} p-4 flex items-center justify-center h-32 group-hover:scale-105 transition-transform duration-300`}
              >
                <img
                  src={provider.logo}
                  alt={provider.name}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/120x80/e5e7eb/6b7280?text=${encodeURIComponent(
                      provider.displayName
                    )}`;
                  }}
                />
              </div>
              <div className="p-3 bg-white border-t border-gray-200">
                <p className="text-sm text-gray-700 text-center font-medium truncate">
                  {provider.displayName}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FastagProvider;
