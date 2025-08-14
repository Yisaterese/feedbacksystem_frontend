import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getFeedback = async () => {
  try {
    const response = await axios.get(`${API_URL}/feedback/entries`);
    const data = response.data;
    if (!data.success) {
      throw new Error(data.message || 'Failed to fetch feedback');
    }
    return data.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch feedback');
  }
};

export const createFeedback = async (feedbackData) => {
  try {
    const response = await axios.post(`${API_URL}/feedback/entry`, feedbackData);
    const data = response.data;
    if (!data.success) {
      throw new Error(data.message || 'Failed to create feedback');
    }
    return data.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create feedback');
  }
};

export const getAnalytics = async () => {
  try {
    const response = await axios.get(`${API_URL}/feedback/analytics`);
    const data = response.data;
    if (!data.success) {
      throw new Error(data.message || 'Failed to fetch analytics');
    }
    return data.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch analytics');
  }
};
