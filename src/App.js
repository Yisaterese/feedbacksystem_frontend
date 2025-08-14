import React, { useState, useEffect } from 'react';
import { getFeedback, createFeedback } from './api';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';

function App() {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRating, setSelectedRating] = useState('');

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      setLoading(true);
      const data = await getFeedback();
      console.log('Fetched feedback:', data);
      setFeedback(data);
    } catch (error) {
      console.error('Error fetching feedback:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (formData) => {
    try {
      await createFeedback(formData);
      await fetchFeedback();
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Failed to submit feedback: ' + error.message);
    }
  };

  return (
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Feedback System</h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <FeedbackForm onSubmit={handleSubmit} />
            </div>
            <div className="lg:col-span-2">
              <FeedbackList
                  feedback={feedback}
                  loading={loading}
                  selectedRating={selectedRating}
                  onRatingChange={(value) => setSelectedRating(value)}
              />
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;