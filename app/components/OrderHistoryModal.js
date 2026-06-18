"use client";
import { useState, useEffect } from 'react';
import { supabase } from '@/app/lib/supabase';

export default function OrderHistoryModal() {
  const [groupedOrders, setGroupedOrders] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    fetchHistory();
  }, []);

  async function fetchHistory(start, end) {
    setLoading(true);
    
    let query = supabase
      .from('meal_orders')
      .select('*')
      .order('created_at', { ascending: false });

    if (start) query = query.gte('created_at', new Date(start).toISOString());
    if (end) {
      const endOfDay = new Date(end);
      endOfDay.setHours(23, 59, 59, 999);
      query = query.lte('created_at', endOfDay.toISOString());
    }

    const { data } = await query;

    if (data) {
      const grouped = data.reduce((acc, order) => {
        const date = new Date(order.created_at).toLocaleDateString('en-US', { 
          year: 'numeric', month: 'long', day: 'numeric' 
        });
        if (!acc[date]) acc[date] = [];
        acc[date].push(order);
        return acc;
      }, {});
      setGroupedOrders(grouped);
    }
    setLoading(false);
  }

  return (
    <div className="p-8 max-w-5xl mx-auto min-h-screen bg-stone-50 text-gray-900">
      <h1 className="text-4xl font-black text-[#1a2e1a] mb-8">Order History Log</h1>
      
      {/* Search and Date Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
        <input 
          type="text"
          placeholder="Search by order # or item summary..."
          className="flex-1 bg-stone-100 p-3 rounded-xl border border-stone-200 outline-none focus:ring-2 focus:ring-[#1a2e1a]/20"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="flex gap-2">
          <input type="date" className="p-3 rounded-xl border border-stone-200 text-sm" onChange={(e) => setStartDate(e.target.value)} />
          <input type="date" className="p-3 rounded-xl border border-stone-200 text-sm" onChange={(e) => setEndDate(e.target.value)} />
          <button 
            onClick={() => fetchHistory(startDate, endDate)}
            className="bg-[#1a2e1a] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-orange-600 transition-colors"
          >
            Apply Filters
          </button>
        </div>
      </div>

      {loading ? (
        <p className="text-center py-20 font-bold text-stone-400">Loading orders...</p>
      ) : (
        Object.entries(groupedOrders).map(([date, orders]) => {
          const filtered = orders.filter(o => 
            String(o.order_number).includes(searchQuery) || 
            (o.items_summary || '').toLowerCase().includes(searchQuery.toLowerCase())
          );

          if (filtered.length === 0) return null;

          return (
            <div key={date} className="mb-10">
              <h2 className="text-lg font-black text-stone-500 uppercase tracking-widest mb-4 border-l-4 border-[#1a2e1a] pl-3">
                {date}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filtered.map(order => (
                  <div key={order.id} className="bg-white p-5 border border-stone-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-black uppercase text-orange-600">Order #{order.order_number}</span>
                      <span className="text-xs font-mono text-stone-400">{new Date(order.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                    <p className="text-sm text-stone-700 font-medium leading-relaxed">{order.items_summary}</p>
                    <p className="text-lg font-black text-[#1a2e1a] mt-3 pt-3 border-t border-stone-50">
                      ₱{parseFloat(order.total).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}