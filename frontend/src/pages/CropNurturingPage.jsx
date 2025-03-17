import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const CropNurturingPage = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-darkgreen mb-6">
            Crop Nurturing: Growing Healthy Paddy Fields
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Monitor growth and adjust care for optimal results, using both
            traditional and modern techniques.
          </p>
        </motion.div>

        {/* Image and Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl p-8 mb-16"
        >
          <img
            src="https://www.ips.lk/talkingeconomics/wp-content/uploads/2021/10/wilsan-u-BCATbA86WAw-unsplash-640x416.jpg"
            alt="Crop Nurturing"
            className="rounded-lg w-full mb-8 object-cover h-96"
          />
          <h2 className="text-3xl font-semibold text-darkgreen mb-6">
            Importance of Crop Nurturing
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Regularly monitoring crop growth and adjusting care based on weather
            and soil conditions is essential for a healthy harvest. Proper
            nurturing ensures higher yields, better quality crops, and resilience
            against pests and diseases.
          </p>
        </motion.div>

        {/* Techniques Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-lg p-8"
          >
            <h2 className="text-3xl font-semibold text-darkgreen mb-6">
              Techniques for Crop Nurturing
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Utilize methods like mulching, fertilizing, and proper irrigation
              to ensure optimal crop growth. Other techniques include:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Soil testing and nutrient management</li>
              <li>Integrated pest management (IPM)</li>
              <li>Use of organic fertilizers and compost</li>
              <li>Regular weeding and field maintenance</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full"
          >
            <img
              src="https://araliyarice.com/wp-content/uploads/2017/12/health-managment.jpg"
              alt="Crop Nurturing Techniques"
              className="rounded-lg w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Traditional + Modern Practices Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-darkgreen to-green-700 rounded-3xl shadow-xl p-8 mb-16 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6">
                Combining Traditional and Modern Practices
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Incorporate traditional wisdom with modern technology, such as
                using drones for monitoring and automated irrigation systems.
                This combination ensures sustainable and efficient farming
                practices.
              </p>
  
            </div>
            <img
              src="https://archives1.sundayobserver.lk/sites/default/files/styles/large/public/news/2019/08/23/z_JUN-p11-Paddy-cultivation.jpg?itok=EMMSrtSU"
              alt="Combining Practices"
              className="rounded-lg w-full h-96 object-cover"
            />
          </div>
        </motion.div>

        {/* Call-to-Action Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-lg p-8 text-center"
        >
          <h2 className="text-3xl font-semibold text-darkgreen mb-6">
            Ready to optimize your crop nurturing?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Use Rice Genie's AI-powered tools to get personalized crop nurturing
            recommendations and ensure a healthy and productive harvest.
          </p>
          <button
            className="bg-darkgreen hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full shadow-md transition-all duration-300 transform hover:scale-105"
            onClick={() => navigate("/input-form")} // Redirect to /crop-nurturing-analysis
          >
            Get Analysis
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CropNurturingPage;