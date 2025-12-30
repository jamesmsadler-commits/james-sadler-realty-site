import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ROICalculator() {
  const [formData, setFormData] = useState({
    propertyPrice: 500000,
    downPayment: 100000,
    closingCosts: 15000,
    renovations: 25000,
    annualRentalIncome: 48000,
    annualExpenses: 12000,
    annualAppreciation: 3,
    yearsHeld: 5,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }));
  };

  // Calculations
  const totalInvestment = formData.downPayment + formData.closingCosts + formData.renovations;
  const loanAmount = formData.propertyPrice - formData.downPayment;
  const annualNetIncome = formData.annualRentalIncome - formData.annualExpenses;
  const totalNetIncome = annualNetIncome * formData.yearsHeld;
  const propertyValueAtExit = formData.propertyPrice * Math.pow(1 + formData.annualAppreciation / 100, formData.yearsHeld);
  const equityGain = propertyValueAtExit - formData.propertyPrice;
  const totalProfit = totalNetIncome + equityGain;
  const roiPercent = (totalProfit / totalInvestment) * 100;
  const roi = roiPercent.toFixed(2);
  const annualROI = (roiPercent / formData.yearsHeld).toFixed(2);
  const cashOnCashReturn = ((annualNetIncome / totalInvestment) * 100).toFixed(2);

  return (
    <div className="space-y-8">
      <Card className="p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Investment Inputs</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="propertyPrice" className="text-slate-700 font-semibold mb-2 block">
              Property Price
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-slate-600">$</span>
              <Input
                id="propertyPrice"
                name="propertyPrice"
                type="number"
                value={formData.propertyPrice}
                onChange={handleChange}
                className="pl-7"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="downPayment" className="text-slate-700 font-semibold mb-2 block">
              Down Payment
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-slate-600">$</span>
              <Input
                id="downPayment"
                name="downPayment"
                type="number"
                value={formData.downPayment}
                onChange={handleChange}
                className="pl-7"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="closingCosts" className="text-slate-700 font-semibold mb-2 block">
              Closing Costs
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-slate-600">$</span>
              <Input
                id="closingCosts"
                name="closingCosts"
                type="number"
                value={formData.closingCosts}
                onChange={handleChange}
                className="pl-7"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="renovations" className="text-slate-700 font-semibold mb-2 block">
              Renovation Costs
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-slate-600">$</span>
              <Input
                id="renovations"
                name="renovations"
                type="number"
                value={formData.renovations}
                onChange={handleChange}
                className="pl-7"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="annualRentalIncome" className="text-slate-700 font-semibold mb-2 block">
              Annual Rental Income
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-slate-600">$</span>
              <Input
                id="annualRentalIncome"
                name="annualRentalIncome"
                type="number"
                value={formData.annualRentalIncome}
                onChange={handleChange}
                className="pl-7"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="annualExpenses" className="text-slate-700 font-semibold mb-2 block">
              Annual Expenses
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-slate-600">$</span>
              <Input
                id="annualExpenses"
                name="annualExpenses"
                type="number"
                value={formData.annualExpenses}
                onChange={handleChange}
                className="pl-7"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="annualAppreciation" className="text-slate-700 font-semibold mb-2 block">
              Annual Appreciation (%)
            </Label>
            <div className="relative">
              <Input
                id="annualAppreciation"
                name="annualAppreciation"
                type="number"
                value={formData.annualAppreciation}
                onChange={handleChange}
                step="0.1"
              />
              <span className="absolute right-3 top-2.5 text-slate-600">%</span>
            </div>
          </div>

          <div>
            <Label htmlFor="yearsHeld" className="text-slate-700 font-semibold mb-2 block">
              Years Held
            </Label>
            <Input
              id="yearsHeld"
              name="yearsHeld"
              type="number"
              value={formData.yearsHeld}
              onChange={handleChange}
              step="1"
            />
          </div>
        </div>
      </Card>

      <Card className="p-8 bg-gradient-to-r from-blue-50 to-slate-50">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">ROI Analysis Results</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 border-2 border-blue-300">
            <p className="text-sm text-slate-600 mb-2">Total Investment Required</p>
            <p className="text-3xl font-bold text-blue-600">
              ${totalInvestment.toLocaleString("en-US", { maximumFractionDigits: 0 })}
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 border-2 border-green-300">
            <p className="text-sm text-slate-600 mb-2">Total Profit</p>
            <p className="text-3xl font-bold text-green-600">
              ${totalProfit.toLocaleString("en-US", { maximumFractionDigits: 0 })}
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 border-2 border-purple-300">
            <p className="text-sm text-slate-600 mb-2">Total ROI</p>
            <p className="text-3xl font-bold text-purple-600">{roi}%</p>
          </div>

          <div className="bg-white rounded-lg p-6 border-2 border-orange-300">
            <p className="text-sm text-slate-600 mb-2">Annual ROI</p>
            <p className="text-3xl font-bold text-orange-600">{annualROI}%</p>
          </div>

          <div className="bg-white rounded-lg p-6 border-2 border-cyan-300">
            <p className="text-sm text-slate-600 mb-2">Cash-on-Cash Return</p>
            <p className="text-3xl font-bold text-cyan-600">{cashOnCashReturn}%</p>
          </div>

          <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
            <p className="text-sm text-slate-600 mb-2">Property Value at Exit</p>
            <p className="text-3xl font-bold text-indigo-600">
              ${propertyValueAtExit.toLocaleString("en-US", { maximumFractionDigits: 0 })}
            </p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-white rounded-lg border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-slate-600">Loan Amount</p>
              <p className="font-semibold text-slate-900">
                ${loanAmount.toLocaleString("en-US", { maximumFractionDigits: 0 })}
              </p>
            </div>
            <div>
              <p className="text-slate-600">Annual Net Income</p>
              <p className="font-semibold text-slate-900">
                ${annualNetIncome.toLocaleString("en-US", { maximumFractionDigits: 0 })}
              </p>
            </div>
            <div>
              <p className="text-slate-600">Total Net Income ({formData.yearsHeld} years)</p>
              <p className="font-semibold text-slate-900">
                ${totalNetIncome.toLocaleString("en-US", { maximumFractionDigits: 0 })}
              </p>
            </div>
            <div>
              <p className="text-slate-600">Equity Gain</p>
              <p className="font-semibold text-slate-900">
                ${equityGain.toLocaleString("en-US", { maximumFractionDigits: 0 })}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
