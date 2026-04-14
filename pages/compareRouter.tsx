import { useState } from "react";

export default function CompareRouter() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="bg-[#FFF] py-16 px-6 md:px-24">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-[#003366]">
          Compare router models
        </h2>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <input type="checkbox" />
          <span>Show differences</span>
        </div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
          <img src="/router-1.png" className="w-20 h-16 object-contain" />
          <div>
            <p className="text-blue-600 font-semibold text-sm">
              Telkom smart router
            </p>
            <p className="text-xs text-gray-500">Cyclone CY4-6S</p>
            <p className="text-lg font-bold text-[#003366]">From R388</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
          <img src="/router-2.png" className="w-20 h-16 object-contain" />
          <div>
            <p className="text-blue-600 font-semibold text-sm">Huawei</p>
            <p className="text-xs text-gray-500">Huawei B535</p>
            <p className="text-lg font-bold text-[#003366]">From R379</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
          <img src="/router-3.png" className="w-20 h-16 object-contain" />
          <div>
            <p className="text-blue-600 font-semibold text-sm">D-link</p>
            <p className="text-xs text-gray-500">D-link DWR-957X</p>
            <p className="text-lg font-bold text-[#003366]">From R389</p>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm text-left">
          
          <thead className="bg-gray-100 text-[#003366] font-semibold">
            <tr>
              <th className="p-4">Device</th>
              <th>Telkom Smart Router</th>
              <th>Huawei B535</th>
              <th>D-link DWR-957X</th>
            </tr>
          </thead>

          <tbody className="text-gray-600">

            <tr className="border-t">
              <td className="p-4 font-medium">Wi-Fi</td>
              <td>Dual Band Wi-Fi 6 / MIMO 2*2</td>
              <td>Dual Band Wi-Fi 5 / AC1200 / MIMO 2*2</td>
              <td>Dual Band Wi-Fi 6 / MIMO 2*2</td>
            </tr>

            <tr className="border-t">
              <td className="p-4 font-medium">LTE</td>
              <td>MIMO 4*4</td>
              <td>MIMO 2*2</td>
              <td>MIMO 2*2</td>
            </tr>

            <tr className="border-t">
              <td className="p-4 font-medium">Battery</td>
              <td>4400mAh (4hrs)</td>
              <td>No</td>
              <td>No</td>
            </tr>

            <tr className="border-t">
              <td className="p-4 font-medium">Screen</td>
              <td>2.4" LCD display touch screen</td>
              <td>No</td>
              <td>No</td>
            </tr>

            <tr className="border-t">
              <td className="p-4 font-medium">SIM</td>
              <td>Nano-SIM</td>
              <td>Micro-SIM</td>
              <td>Mini-SIM</td>
            </tr>

            {showAll && (
              <>
                <tr className="border-t">
                  <td className="p-4 font-medium">Chipset</td>
                  <td>Qualcomm SDX12</td>
                  <td>Balong 750</td>
                  <td>Qualcomm</td>
                </tr>

                <tr className="border-t">
                  <td className="p-4 font-medium">3GPP Release</td>
                  <td>3GPP R12</td>
                  <td>3GPP R11</td>
                  <td>3GPP R10</td>
                </tr>

                <tr className="border-t">
                  <td className="p-4 font-medium">MESH/WPS</td>
                  <td>MESH, WPS</td>
                  <td>WPS</td>
                  <td>WPS</td>
                </tr>

                <tr className="border-t">
                  <td className="p-4 font-medium">Antenna</td>
                  <td>Internal Antenna, 3-5dBi, 4 Internal WiFi antenna</td>
                  <td>Internal Antenna, &lt;3dBi, 2 external LTE antenna</td>
                  <td>External antenna, 3-5dBi</td>
                </tr>

                <tr className="border-t">
                  <td className="p-4 font-medium">TR069</td>
                  <td>Yes</td>
                  <td>No</td>
                  <td>Yes</td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>

      {/* Button */}
      <div className="mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-[#0099FF] text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-600 transition"
        >
          {showAll ? "View less specs ↑" : "View all specs ↓"}
        </button>
      </div>
    </section>
  );
}