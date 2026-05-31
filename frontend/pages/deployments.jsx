import { withAuth } from '../utils/withAuth';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

function deployments() {
  return (
    <div>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-4xl font-bold gradient-text"></h1>
        <p className="text-gray-400 mt-2">Enterprise  dashboard</p>
      </motion.div>
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-12 border border-white/20 text-center">
        <div className="text-6xl mb-4">??</div>
        <h2 className="text-2xl font-semibold text-white mb-2">Coming Soon</h2>
        <p className="text-gray-400">Advanced analytics for  is being prepared</p>
      </div>
    </div>
  );
}

export default withAuth(deployments);
deployments.getLayout = (page) => <Layout>{page}</Layout>;
