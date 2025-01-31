import React, { useEffect, useState } from "react";

// Internal import
import { Header, Footer, Table } from "../components/index";
import { getAllHistory } from "../utils/context";

const tokens = () => {
  const [history, setHistory] = useState([]);

  const loadData = async () => {
    try {
      const data = await getAllHistory();

      // Ensure data is an array before calling reverse
      if (Array.isArray(data)) {
        setHistory(data.reverse());
      } else {
        console.error("Expected an array, but got:", data);
        setHistory([]); // Fallback to empty array if not an array
      }
    } catch (error) {
      console.error("Error fetching history:", error);
      setHistory([]); // Fallback to empty array on error
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  console.log(history);

  return (
    <div className="bg-[#1A1A1A]">
      <Header />
      <div className="p-[80px]">
        <Table history={history} />
      </div>
      <Footer />
    </div>
  );
};

export default tokens;
