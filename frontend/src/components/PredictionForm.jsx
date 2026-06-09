import { useState } from "react";
import { predictPrice } from "../services/predictionApi";

function PredictionForm() {
  const [formData, setFormData] = useState({
    Year: "",
    Present_Price: "",
    Kms_Driven: "",
    Fuel_Type: 0,
    Seller_Type: 0,
    Transmission: 0,
    Owner: 0,
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const result = await predictPrice(formData);

      setPrediction(result.predicted_price);
    } catch (err) {
      console.error(err);
      alert("Prediction Failed");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-[#1c2030] border border-[#2a2f45] rounded-xl px-4 py-4 text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition";

  return (
    <div className="max-w-6xl mx-auto px-8 py-16">

      <h1 className="text-6xl font-bold text-center text-white mb-14">
        Car Price Prediction
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-8"
      >
        {/* Present Price */}
        <div>
          <label className="block mb-3 text-gray-300 font-medium">
            Present Price
          </label>

          <input
            type="number"
            step="0.01"
            name="Present_Price"
            placeholder="Enter Present Price"
            onChange={handleChange}
            className={inputClass}
            required
          />
        </div>

        {/* Kilometers Driven */}
        <div>
          <label className="block mb-3 text-gray-300 font-medium">
            Kilometers Driven
          </label>

          <input
            type="number"
            name="Kms_Driven"
            placeholder="Enter KMs Driven"
            onChange={handleChange}
            className={inputClass}
            required
          />
        </div>

        {/* Manufacturing Year */}
        <div>
          <label className="block mb-3 text-gray-300 font-medium">
            Manufacturing Year
          </label>

          <input
            type="number"
            name="Year"
            placeholder="Enter Manufacturing Year"
            onChange={handleChange}
            className={inputClass}
            min="1990"
            max="2025"
            required
          />
        </div>

        {/* Fuel Type */}
        <div>
          <label className="block mb-3 text-gray-300 font-medium">
            Fuel Type
          </label>

          <select
            name="Fuel_Type"
            onChange={handleChange}
            className={inputClass}
          >
            <option value="0">Petrol</option>
            <option value="1">Diesel</option>
            <option value="2">CNG</option>
          </select>
        </div>

        {/* Seller Type */}
        <div>
          <label className="block mb-3 text-gray-300 font-medium">
            Seller Type
          </label>

          <select
            name="Seller_Type"
            onChange={handleChange}
            className={inputClass}
          >
            <option value="0">Dealer</option>
            <option value="1">Individual</option>
          </select>
        </div>

        {/* Transmission */}
        <div>
          <label className="block mb-3 text-gray-300 font-medium">
            Transmission
          </label>

          <select
            name="Transmission"
            onChange={handleChange}
            className={inputClass}
          >
            <option value="0">Manual</option>
            <option value="1">Automatic</option>
          </select>
        </div>

        {/* Owners */}
        <div>
          <label className="block mb-3 text-gray-300 font-medium">
            Number of Owners
          </label>

          <select
            name="Owner"
            onChange={handleChange}
            className={inputClass}
          >
            <option value="0">0 Owners</option>
            <option value="1">1 Owner</option>
            <option value="2">2 Owners</option>
            <option value="3">3 Owners</option>
          </select>
        </div>

        {/* Button */}
        <div className="md:col-span-2 flex justify-center mt-4">
          <button
            type="submit"
            disabled={loading}
            className="
              bg-blue-600
              hover:bg-blue-700
              px-10
              py-4
              rounded-xl
              text-white
              font-semibold
              text-lg
              transition-all
              duration-300
              shadow-lg
              disabled:opacity-60
            "
          >
            {loading ? "Predicting..." : "Predict Price"}
          </button>
        </div>
      </form>

      {prediction && (
        <div
          className="
            mt-12
            max-w-md
            mx-auto
            bg-[#111827]
            border
            border-green-500
            rounded-2xl
            p-8
            text-center
            shadow-lg
          "
        >
          <p className="text-green-400 uppercase tracking-wider text-sm">
            Estimated Market Value
          </p>

          <h2 className="text-5xl font-bold text-green-400 mt-4">
            ₹ {prediction.toFixed(2)}
          </h2>

          <p className="mt-3 text-gray-400">
            Lakhs
          </p>
        </div>
      )}
    </div>
  );
}

export default PredictionForm;