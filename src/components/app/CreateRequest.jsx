import IconBar from "./IconBar";
import { states as NGStates } from "../../utils/ngStates";
import { getCountry } from "../../utils/apiCountries";
import { useEffect, useState } from "react";

const initialState = {
  name: "",
  phoneNumber: "",
  repairType: "AC Repair",
  repairDate: "",
  states: "Lagos",
  country: "Nigeria",
  address: "",
  numberOfAC: 1,
  comment: "",
};

function CreateRequest() {
  const [countries, setCountries] = useState([]);
  const [formData, setFormData] = useState(initialState);

  function handleFormDataUpdate(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  useEffect(() => {
    async function fetchCountries() {
      const countriesData = await getCountry();
      const countryNames = countriesData.map((country) => country.name.common);
      setCountries(countryNames);
    }
    fetchCountries();
  }, []);

  const numberOFAC = Array.from({ length: 15 }, (_, i) => i + 1);

  const handleRequest = (e) => {
    e.preventDefault();
    setFormData(initialState);
  };

  return (
    <div>
      <main className="bg-white mt-4 px-6 py-2 shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-[#393943] ">
          Request Form
        </h2>
        <form
          className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4 request-form max-w-5xl mx-auto"
          onSubmit={handleRequest}
        >
          <div>
            <label htmlFor="name">Names:</label>
            <input
              name="name"
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={handleFormDataUpdate}
            />
          </div>

          <div>
            <label htmlFor="phone-number">Phone Number</label>
            <input
              name="phoneNumber"
              type="tel"
              id="phone-number"
              placeholder="E.g +2348010028000"
              required
              value={formData.phoneNumber}
              onChange={handleFormDataUpdate}
            />
          </div>
          <div>
            <label htmlFor="repair-type">Repair Type</label>
            <select
              name="repairType"
              id="repair-type"
              required
              value={formData.repairType}
              onChange={handleFormDataUpdate}
            >
              <option value="AC Repair">AC Repair</option>
              <option value="AC Maintenance">AC Maintenance</option>
              <option value="AC Replacement">AC Replacement</option>
            </select>
          </div>
          <div>
            <label htmlFor="repair-date">Repair Date:</label>
            <input
              name="repairDate"
              type="date"
              id="repair-date"
              className="uppercase"
              required
              value={formData.repairDate}
              onChange={handleFormDataUpdate}
            />
          </div>
          <div>
            <label htmlFor="states">State/Region</label>
            <select
              name="states"
              id="states"
              required
              value={formData.states}
              onChange={handleFormDataUpdate}
            >
              {NGStates.map((state) => (
                <option key={state}>{state}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="country">Country:</label>
            <select
              name="country"
              id="country"
              required
              value={formData.country}
              onChange={handleFormDataUpdate}
            >
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="address">Address:</label>
            <input
              name="address"
              type="text"
              id="address"
              required
              value={formData.address}
              onChange={handleFormDataUpdate}
            />
          </div>

          <div>
            <label htmlFor="number-of-ac">Number of AC:</label>
            <select
              name="numberOfAC"
              id="number-of-ac"
              required
              value={formData.numberOfAC}
              onChange={handleFormDataUpdate}
            >
              {numberOFAC.map((qty) => (
                <option key={qty} value={qty}>
                  {qty}
                </option>
              ))}
            </select>
          </div>

          <div className="lg:col-span-2">
            <label htmlFor="notes">Notes/Comment</label>
            <textarea
              name="comment"
              id="notes"
              placeholder="Type your notes or comment her..."
              className="text-xs
               font-light placeholder:text-xs placeholder:text-[#393943] text-[#393943] border border-[#393943] rounded-md bg-[#FAFAFA] h-24 p-2 outline-black/35 resize-none"
              value={formData.comment}
              onChange={handleFormDataUpdate}
            ></textarea>
            <p className="ml-auto text-[#393943] font-light">
              Not more than 150 words
            </p>
          </div>

          <button className="bg-blue-700 text-white rounded-md py-1 w-full lg:col-span-2 text-2xl font-light ">
            Submit Request
          </button>
        </form>
      </main>
    </div>
  );
}
export default CreateRequest;
