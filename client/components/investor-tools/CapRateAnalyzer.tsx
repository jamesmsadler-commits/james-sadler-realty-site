import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function CapRateAnalyzer() {
  const [formData, setFormData] = useState({
    propertyPrice: 500000,
    annualRentalIncome: 48000,
    annualOperatingExpenses: 12000,
    purchasingCosts: 15000,
    renovationCosts: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }));
  };

  // Calculations
  const netOperatingIncome = formData.annualRentalIncome - formData.annualOperatingExpenses;
  const capRate = ((netOperatingIncome / formData.propertyPrice) * 100).toFixed(2);
  const totalCashInvested = formData.propertyPrice + formData.purchasingCosts + formData.renovationCosts;
  const effectiveCapRate = ((netOperatingIncome / totalCashInvested) * 100).toFixed(2);
  const monthlyNetIncome = netOperatingIncome / 12;
  const expenseRatio = ((formData.annualOperatingExpenses / formData.annualRentalIncome) * 100).toFixed(1);

  // Market benchmarks for Calgary
  const calgaryBenchmark = 4.5; // Average cap rate in Calgary
  const isAboveBenchmark = parseFloat(capRate) > calgaryBenchmark;

  return (
    <div className="space-y-8">
      <Card className="p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Cap Rate Analyzer</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="propertyPrice" className="text-slate-700 font-semibold mb-2 block">
              Property Price / Market Value
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
            <Label htmlFor="annualRentalIncome" className="text-slate-700 font-semibold mb-2 block">
              Gross Annual Rental Income
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
            <Label htmlFor="annualOperatingExpenses" className="text-slate-700 font-semibold mb-2 block">
              Annual Operating Expenses
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-slate-600">$</span>
              <Input
                id="annualOperatingExpenses"
                name="annualOperatingExpenses"
                type="number"
                value={formData.annualOperatingExpenses}
                onChange={handleChange}
                className="pl-7"
              />
            </div>
            <p className="text-xs text-slate-500 mt-1">Includes property tax, insurance, maintenance, utilities, property management, vacancy loss, etc.</p>
          </div>

          <div>
            <Label htmlFor="purchasingCosts" className="text-slate-700 font-semibold mb-2 block">
              Purchasing Costs (Optional)
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-slate-600">$</span>
              <Input
                id="purchasingCosts"
                name="purchasingCosts"
                type="number"
                value={formData.purchasingCosts}
                onChange={handleChange}
                className="pl-7"
              />
            </div>
            <p className="text-xs text-slate-500 mt-1">Closing costs, legal fees, inspection</p>
          </div>

          <div>
            <Label htmlFor="renovationCosts" className="text-slate-700 font-semibold mb-2 block">
              Renovation Costs (Optional)
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-slate-600">$</span>
              <Input
                id="renovationCosts"
                name="renovationCosts"
                type="number"
                value={formData.renovationCosts}
                onChange={handleChange}
                className="pl-7"
              />
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-8 bg-gradient-to-r from-blue-50 to-slate-50">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Cap Rate Results</h2>

        {/* Market Benchmark Alert */}
        {isAboveBenchmark ? (
          <Alert className="mb-6 border-green-300 bg-green-50">
            <AlertDescription className="text-green-800">
              <strong>Great!</strong> This property's cap rate ({capRate}%) exceeds the Calgary market average ({calgaryBenchmark}%). This could be a good investment opportunity.
            </AlertDescription>
          </Alert>
        ) : (
          <Alert className="mb-6 border-orange-300 bg-orange-50">
            <AlertDescription className="text-orange-800">
              <strong>Note:</strong> This property's cap rate ({capRate}%) is below the Calgary market average ({calgaryBenchmark}%). Consider if location or appreciation potential justify the lower current yield.
            </AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 border-2 border-blue-300">
            <p className="text-sm text-slate-600 mb-2">Cap Rate</p>
            <p className="text-4xl font-bold text-blue-600">{capRate}%</p>
            <p className="text-xs text-slate-500 mt-2">Based on purchase price only</p>
          </div>

          <div className="bg-white rounded-lg p-6 border-2 border-purple-300">
            <p className="text-sm text-slate-600 mb-2">Effective Cap Rate</p>
            <p className="text-4xl font-bold text-purple-600">{effectiveCapRate}%</p>
            <p className="text-xs text-slate-500 mt-2">Includes all cash invested</p>
          </div>

          <div className="bg-white rounded-lg p-6 border-2 border-green-300">
            <p className="text-sm text-slate-600 mb-2">Net Operating Income</p>
            <p className="text-3xl font-bold text-green-600">
              ${netOperatingIncome.toLocaleString("en-US", { maximumFractionDigits: 0 })}
            </p>
            <p className="text-xs text-slate-500 mt-2">Annual rental income minus operating expenses</p>
          </div>

          <div className="bg-white rounded-lg p-6 border-2 border-cyan-300">
            <p className="text-sm text-slate-600 mb-2">Monthly Net Income</p>
            <p className="text-3xl font-bold text-cyan-600">
              ${monthlyNetIncome.toLocaleString("en-US", { maximumFractionDigits: 0 })}
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
            <p className="text-sm text-slate-600 mb-2">Operating Expense Ratio</p>
            <p className="text-3xl font-bold text-indigo-600">{expenseRatio}%</p>
            <p className="text-xs text-slate-500 mt-2">Operating expenses as % of rental income</p>
          </div>

          <div className="bg-white rounded-lg p-6 border-2 border-orange-300">
            <p className="text-sm text-slate-600 mb-2">Total Cash Invested</p>
            <p className="text-2xl font-bold text-orange-600">
              ${totalCashInvested.toLocaleString("en-US", { maximumFractionDigits: 0 })}
            </p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-white rounded-lg border border-slate-200">
          <h3 className="font-semibold text-slate-900 mb-4">Cap Rate Interpretation</h3>
          <div className="space-y-3 text-sm text-slate-600">
            <p>
              <strong>Cap Rate (Capitalization Rate):</strong> Shows the annual return on your investment before financing. Higher cap rates generally indicate higher returns but may also suggest higher risk or less desirable locations.
            </p>
            <p>
              <strong>Calgary Market Average:</strong> The typical cap rate for similar properties in Calgary is around {calgaryBenchmark}%. Use this as a benchmark for comparison.
            </p>
            <p>
              <strong>Effective Cap Rate:</strong> Accounts for all your cash invested (including closing and renovation costs), giving you a more accurate picture of your true return on investment.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
