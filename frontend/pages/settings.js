import Layout from '../components/Layout';

export default function Settings() {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-gray-400 mt-2">Content is being loaded...</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
            <p className="text-gray-400">Feature coming soon</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
