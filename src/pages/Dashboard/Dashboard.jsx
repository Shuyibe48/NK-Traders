import {
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  AreaChart,
  Area,
} from "recharts";
import { format, parseISO } from "date-fns";
import Container from "../../components/dashboard/shared/Container";
import { useEffect, useState } from "react";
import baseUrl from "../../api/baseUrl";
import { Car, Users, ShoppingCart, Eye, MousePointerClick } from "lucide-react";

const Dashboard = () => {
  // Demo data for users, listings, and revenue
  const [users, setUsers] = useState({
    owners: 34,
    agents: 57,
    buyers: 39,
  });
  const [listings, setListings] = useState([]);
  const [revenueData, setRevenueData] = useState([]);

  // Helper function to format dates and group by month-year
  const getMonthlyData = (data, key) => {
    const result = {};
    data.forEach((item) => {
      const date = parseISO(item[key]);
      const monthYear = format(date, "MMM-yyyy");

      if (!result[monthYear]) {
        result[monthYear] = { totalAmount: 0, count: 0 };
      }

      result[monthYear].totalAmount += Number(item?.plan?.price) || 0;
      result[monthYear].count += 1;
    });

    // Convert result into an array sorted by month-year
    return Object.entries(result)?.map(([key, value]) => ({
      month: key,
      ...value,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const agents = await baseUrl.get("/agents/get-agents");
      const buyers = await baseUrl.get("/buyers/get-buyers");
      const properties = await baseUrl.get("/properties/get-properties");
      const payments = await baseUrl.get("/payments/get-payments");
      const totalCompletePayments = payments?.data?.data?.filter(
        (payment) =>
          payment?.paymentStatus === "completed" ||
          payment?.paymentStatus === "pending"
      );
      setListings(properties?.data?.data);
      setRevenueData(totalCompletePayments);
      setUsers({
        owners: buyers?.data?.data?.length,
        agents: agents?.data?.data?.length,
        buyers: buyers?.data?.data?.total,
      });
      setLoading(false);
    };

    fetchData();
  }, []);

  const viewData = [
    {
      date: "2024-10-01",
      dailyViews: 200,
      weeklyViews: 1400,
      monthlyViews: 6000,
    },
    {
      date: "2024-11-01",
      dailyViews: 250,
      weeklyViews: 1750,
      monthlyViews: 7500,
    },
    {
      date: "2024-12-01",
      dailyViews: 220,
      weeklyViews: 1540,
      monthlyViews: 6800,
    },
  ];

  const totalActiveListings = Array.isArray(listings)
    ? listings.filter(
        (listing) => listing?.approved === true && listing?.blocked === false
      ).length
    : 0;

  const totalInactiveListings = Array.isArray(listings)
    ? listings.filter(
        (listing) =>
          listing?.approved === false ||
          listing?.blocked === true ||
          listing?.reject === true
      ).length
    : 0;

  const revenueByMonth = getMonthlyData(revenueData, "createdAt");

  return (
    <div className="mt-6">
      <Container>
        <div className="bg-white p-6">
          <div className="mb-4">
            <h5 className="font-bold text-xl">Dashboard Overview</h5>
            <p className="text-[#9bbcd1] text-xs">
              Welcome to the NK-Traders Admin Dashboard!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Total Users */}
            <div className="bg-[#F0F3F8] p-4 flex items-center gap-3">
              <Users className="bg-[#264AA1] p-2 rounded-full text-white w-8 h-8" />
              <div>
                <p className="font-medium">Total Users</p>
                <h3 className="text-xl font-semibold">
                  {users.owners + users.agents + users.buyers}
                </h3>
              </div>
            </div>

            {/* Total Cars */}
            <div className="bg-[#F0F3F8] p-4 flex items-center gap-3">
              <Car className="bg-[#264AA1] p-2 rounded-full text-white w-8 h-8" />
              <div>
                <p className="font-medium">Total Cars</p>
                <h3 className="text-xl font-semibold">{users.buyers}</h3>
              </div>
            </div>

            {/* Sold Cars */}
            <div className="bg-[#F0F3F8] p-4 flex items-center gap-3">
              <ShoppingCart className="bg-[#264AA1] p-2 rounded-full text-white w-8 h-8" />
              <div>
                <p className="font-medium">Sold Cars</p>
                <h3 className="text-xl font-semibold">{totalActiveListings}</h3>
              </div>
            </div>

            {/* Views */}
            <div className="bg-[#F0F3F8] p-4 flex items-center gap-3">
              <Eye className="bg-[#264AA1] p-2 rounded-full text-white w-8 h-8" />
              <div>
                <p className="font-medium">Total Views</p>
                <h3 className="text-xl font-semibold">
                  {totalInactiveListings}
                </h3>
              </div>
            </div>

            {/* Clicks */}
            <div className="bg-[#F0F3F8] p-4 flex items-center gap-3">
              <MousePointerClick className="bg-[#264AA1] p-2 rounded-full text-white w-8 h-8" />
              <div>
                <p className="font-medium">Total Clicks</p>
                <h3 className="text-xl font-semibold">
                  {totalInactiveListings}
                </h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Revenue Card */}
            <div className="bg-[#F0F3F8] p-6">
              <h3 className="text-xl font-semibold mb-4">Monthly Revenue</h3>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={revenueByMonth}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="totalAmount"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
