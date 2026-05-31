import { useState } from 'react';
import Layout from '../components/Layout';

export default function AIModels() {
  const models = [
    { id: 1, name: 'GPT-4 FinTech', type: 'LLM', accuracy: '94%', status: 'Deployed', version: '2.0', trained: '500GB', latency: '120ms' },
    { id: 2, name: 'Fraud Detection', type: 'Classification', accuracy: '98%', status: 'Training', version: '1.5', trained: '200GB', latency: '45ms' },
    { id: 3, name: 'Stock Predictor', type: 'Time Series', accuracy: '87%', status: 'Deployed', version: '3.1', trained: '1TB', latency: '250ms' },
    { id: 4, name: 'Chat Assistant', type: 'NLP', accuracy: '91%', status: 'Testing', version: '1.0', trained: '100GB', latency: '80ms' }
  ];

  return (
    <Layout>
      <div className='p-6'>
        <h1 className='text-3xl font-bold mb-6 dark:text-white'>AI Models</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {models.map(model => (
            <div key={model.id} className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6'>
              <h3 className='text-xl font-bold mb-2 dark:text-white'>{model.name}</h3>
              <p className='text-gray-600 dark:text-gray-400 mb-4'>Type: {model.type}</p>
              <div className='space-y-2'>
                <p><strong>Accuracy:</strong> {model.accuracy}</p>
                <p><strong>Status:</strong> <span className={model.status === 'Deployed' ? 'text-green-600' : model.status === 'Training' ? 'text-yellow-600' : 'text-blue-600'}>{model.status}</span></p>
                <p><strong>Version:</strong> {model.version}</p>
                <p><strong>Training Data:</strong> {model.trained}</p>
                <p><strong>Latency:</strong> {model.latency}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
