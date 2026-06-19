import { useState } from 'react';
import Layout from '../components/Layout';
import { FileText, Download, User, Mail, Calendar, DollarSign, Briefcase, MapPin, Phone, Award, CheckCircle } from 'lucide-react';

export default function OfferLetter() {
  const [formData, setFormData] = useState({
    candidateName: '',
    email: '',
    phone: '',
    position: 'HR Manager',
    department: 'Human Resources',
    joiningDate: new Date().toISOString().split('T')[0],
    salary: '150000',
    currency: '₹',
    address: 'Mumbai, India',
    reportingManager: 'Sumit Kumar (CEO)',
    probationPeriod: '6 months',
    benefits: ['Health Insurance', 'Provident Fund', 'Annual Bonus', 'Paid Time Off', 'Remote Work Allowance']
  });

  const [offerLetter, setOfferLetter] = useState('');
  const [generated, setGenerated] = useState(false);

  const generateOfferLetter = () => {
    const letter = `
╔═══════════════════════════════════════════════════════╗
║           FINTECH IT SOLUTIONS                        ║
║           Enterprise Portal                           ║
║           www.fintechitsolutions.com                  ║
╚═══════════════════════════════════════════════════════╝

Date: ${new Date().toLocaleDateString()}

Subject: Offer Letter for the position of ${formData.position}

Dear ${formData.candidateName},

We are pleased to offer you the position of ${formData.position} at Fintech IT Solutions. We were impressed with your skills and experience, and we believe you will be a valuable addition to our team.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EMPLOYMENT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Position: ${formData.position}
Department: ${formData.department}
Reporting To: ${formData.reportingManager}
Location: ${formData.address}
Joining Date: ${formData.joiningDate}
Probation Period: ${formData.probationPeriod}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPENSATION PACKAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Annual CTC: ${formData.currency} ${(parseInt(formData.salary) * 12).toLocaleString()}
Monthly Salary: ${formData.currency} ${parseInt(formData.salary).toLocaleString()}

Breakup:
• Basic Salary: ${formData.currency} ${(parseInt(formData.salary) * 0.5).toLocaleString()}
• HRA: ${formData.currency} ${(parseInt(formData.salary) * 0.4).toLocaleString()}
• Special Allowance: ${formData.currency} ${(parseInt(formData.salary) * 0.1).toLocaleString()}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BENEFITS & PERKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${formData.benefits.map(b => `✓ ${b}`).join('\n')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TERMS & CONDITIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. This offer is valid for 7 days from the date of this letter.
2. Your employment will be subject to a satisfactory background check.
3. You will be required to sign a confidentiality agreement.
4. The company reserves the right to amend policies and benefits.

We look forward to welcoming you to the Fintech IT Solutions family!

Sincerely,

Sumit Kumar
CEO & Founder
Fintech IT Solutions
Email: sumit@fintechitsolutions.com
Phone: +91 98765 43210

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACCEPTANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I accept the offer and agree to the terms and conditions.

Signature: ___________________
Date: ___________________
    `;
    setOfferLetter(letter);
    setGenerated(true);
  };

  const downloadOfferLetter = () => {
    const blob = new Blob([offerLetter], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Offer_Letter_${formData.candidateName}_${formData.position}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBenefitToggle = (benefit) => {
    setFormData(prev => ({
      ...prev,
      benefits: prev.benefits.includes(benefit)
        ? prev.benefits.filter(b => b !== benefit)
        : [...prev.benefits, benefit]
    }));
  };

  const benefitOptions = [
    'Health Insurance',
    'Provident Fund',
    'Annual Bonus',
    'Paid Time Off',
    'Remote Work Allowance',
    'Stock Options',
    'Education Reimbursement',
    'Gym Membership',
    'Meal Allowance'
  ];

  return (
    <Layout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <FileText className="w-8 h-8 text-blue-400" />
          <h1 className="text-2xl font-bold text-white">Offer Letter Generator</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Form */}
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <h2 className="text-white font-semibold mb-4">Employee Details</h2>
            <div className="space-y-4">
              <div>
                <label className="text-gray-400 text-sm block mb-1">Full Name *</label>
                <input
                  type="text"
                  name="candidateName"
                  value={formData.candidateName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-700 rounded-lg text-white"
                  placeholder="Enter candidate name"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm block mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-700 rounded-lg text-white"
                  placeholder="Enter email"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm block mb-1">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-700 rounded-lg text-white"
                  placeholder="Enter phone number"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm block mb-1">Position</label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-700 rounded-lg text-white"
                  placeholder="Enter position"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm block mb-1">Monthly Salary (₹)</label>
                <input
                  type="number"
                  name="salary"
                  value={formData.salary}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-700 rounded-lg text-white"
                  placeholder="Enter salary"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm block mb-1">Joining Date</label>
                <input
                  type="date"
                  name="joiningDate"
                  value={formData.joiningDate}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-700 rounded-lg text-white"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm block mb-1">Reporting Manager</label>
                <input
                  type="text"
                  name="reportingManager"
                  value={formData.reportingManager}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-700 rounded-lg text-white"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm block mb-1">Location</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-700 rounded-lg text-white"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="text-gray-400 text-sm block mb-2">Benefits</label>
              <div className="grid grid-cols-2 gap-2">
                {benefitOptions.map(benefit => (
                  <label key={benefit} className="flex items-center gap-2 text-gray-300 text-sm">
                    <input
                      type="checkbox"
                      checked={formData.benefits.includes(benefit)}
                      onChange={() => handleBenefitToggle(benefit)}
                      className="w-4 h-4 accent-blue-600"
                    />
                    {benefit}
                  </label>
                ))}
              </div>
            </div>

            <button
              onClick={generateOfferLetter}
              className="w-full mt-6 py-2.5 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 transition"
            >
              Generate Offer Letter
            </button>
          </div>

          {/* Preview */}
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-400" />
              Preview
            </h2>
            {generated ? (
              <div>
                <pre className="bg-black/50 rounded-lg p-4 text-green-400 text-sm font-mono whitespace-pre-wrap h-[600px] overflow-y-auto">
                  {offerLetter}
                </pre>
                <button
                  onClick={downloadOfferLetter}
                  className="w-full mt-4 py-2.5 bg-green-600 rounded-lg text-white font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2"
                >
                  <Download size={18} /> Download Offer Letter
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-center h-[600px] text-gray-500 flex-col gap-4">
                <FileText className="w-16 h-16 opacity-20" />
                <p>Fill in the employee details and click</p>
                <p className="text-blue-400">"Generate Offer Letter"</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
