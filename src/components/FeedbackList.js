import React from 'react';
import FilteredFeedback from './FilteredFeedback';

const FeedbackList = ({ feedback, loading, selectedRating, onRatingChange }) => {
    if (loading) {
        return (
            <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto"></div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-md">
            <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-medium text-gray-900">Feedback List</h2>
                    <select
                        className="mt-1 block w-auto rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        value={selectedRating}
                        onChange={(e) => onRatingChange(e.target.value ? parseInt(e.target.value, 10) : '')}
                    >
                        <option value="">All Ratings</option>
                        {[1, 2, 3, 4, 5].map(rating => (
                            <option key={rating} value={rating}>
                                {rating} stars
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <FilteredFeedback feedback={feedback} selectedRating={selectedRating} />
        </div>
    );
};

export default FeedbackList;