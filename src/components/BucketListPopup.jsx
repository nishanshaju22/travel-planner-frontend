'use client';
import { useEffect, useState } from 'react';
import { Trash2 } from 'lucide-react';

export default function BucketListPopup({
  isOpen,
  userId,
  bucketItem,
  setBucketItem,
  bucketItems,
  setBucketItems,
  userApi,
}) {
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isOpen || !userId) return;

    const fetchBucketList = async () => {
      try {
        const data = await userApi.showBucketList(userId);
        setBucketItems(data);
      } catch (err) {
        console.error('Failed to load bucket list', err);
      }
    };

    fetchBucketList();
  }, [isOpen, userId, setBucketItems, userApi]);

  if (!isOpen) return null;

  const handleAddItem = async () => {
    const newItem = bucketItem.trim();
    if (!newItem) return;

    if (bucketItems.includes(newItem)) {
      setError('This item is already in your bucket list!');
      return;
    }

    try {
      setBucketItems((prev) => [...prev, newItem]);
      setBucketItem('');
      setError('');
      await userApi.addToBucketList(userId, newItem);
    } catch (err) {
      console.error('Failed to add bucket item', err);
      setError('Failed to add item. Please try again.');
    }
  };

  const handleDeleteItem = async (item) => {
    try {
      setBucketItems((prev) => prev.filter((i) => i !== item));
      await userApi.deleteFromBucketList(userId, item);
    } catch (err) {
      console.error('Failed to delete bucket item', err);
      setError('Failed to delete item. Please try again.');
    }
  };

  return (
    <div className="absolute top-20 right-40 w-[500px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6 z-50 flex flex-col">
      <h4 className="font-bold text-white text-lg mb-4">
        Bucket List Items
      </h4>

      {/* Scrollable list */}
      <ul className="max-h-40 overflow-y-auto mb-4 flex-shrink-0">
        {bucketItems.map((item, idx) => (
          <li
            key={idx}
            className="group flex items-center justify-between text-white mb-2 pb-2 border-b border-white/20 last:border-0 hover:bg-white/10 px-2 py-1 rounded-lg transition-colors"
          >
            <span className="inline-flex items-center gap-2 flex-1">
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-white text-xs font-semibold">
                {idx + 1}
              </span>
              <span className="flex-1">{item}</span>
            </span>

            {/* Trash button */}
            <button
              onClick={() => handleDeleteItem(item)}
              className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Trash2
                size={18}
                className="
                  text-white/70
                  transition-transform duration-200
                  group-hover:rotate-12
                  group-hover:scale-110
                  group-hover:text-red-400
                "
              />
            </button>
          </li>
        ))}
      </ul>

      {/* Input at bottom */}
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <input
            type="text"
            value={bucketItem}
            onChange={(e) => {
              setBucketItem(e.target.value);
              if (error) setError('');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && bucketItem.trim()) {
                e.preventDefault();
                handleAddItem();
              }
            }}
            placeholder="Add an item..."
            className="flex-1 px-4 py-3 border border-white/30 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all text-white placeholder:text-white/60 bg-white/10"
          />
        </div>

        {error && (
          <span className="text-white text-sm font-medium bg-red-500/80 px-3 py-1 rounded-full">
            {error}
          </span>
        )}
      </div>
    </div>
  );
}
