import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactDetails() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-purple-500 inline-block">
         Contact Information
        </h2>

        <div className="space-y-6 text-gray-700">
          {/* Address */}
          <div className="flex items-start space-x-4">
            <FaMapMarkerAlt className="text-purple-600 text-2xl mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Address</h3>
              <p>
                Institute Name, The Real Computer Education  
                <br /> Imarti Road, Beside Sundar Mundar School-Mirzapur-23001
              </p>
            </div>
          </div>

          {/* Phone Numbers */}
          <div className="flex items-start space-x-4">
            <FaPhoneAlt className="text-purple-600 text-2xl mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Mobile Number</h3>
              <p>+91 8303405046 (Director)</p>
              <p>+91 9670405046 (Admissions Department)</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-4">
            <FaEnvelope className="text-purple-600 text-2xl mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p>
                <a
                  href="therealmzp46@gmail.com"
                  className="text-purple-700 hover:underline"
                >
                  therealmzp46@gmail.com
                </a>{" "}
                (General Inquiries)
              </p>
              <p>
                <a
                  href="mailto:admissions@yourinstitute.com"
                  className="text-purple-700 hover:underline"
                >
                  admissions@realcomputer.com
                </a>{" "}
                (Admission Related)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
