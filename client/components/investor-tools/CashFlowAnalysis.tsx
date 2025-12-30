import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function CashFlowAnalysis() {
  const [formData, setFormData] = useState({
    // Income
    monthlyRent: 4000,
    otherIncome: 0,
    vacancyRate: 5,
    // Expenses
    propertyTax: 200,
    insurance: 100,
    maintenance: 300,
    utilities: 50,
    propertyManagement: 400,
    hoa: 0,
    other: 100,
    // Debt
    mortgagePayment: 2000,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }));
  };

  // Calculations
  const grossMonthlyIncome = formData.monthlyRent + formData.otherIncome;
  const vacancyLoss = (grossMonthlyIncome * formData.vacancyRate) / 100;
  const effectiveMonthlyIncome = grossMonthlyIncome - vacancyLoss;
  
  const totalMonthlyExpenses =
    formData.propertyTax +
    formData.insurance +
    formData.maintenance +
    formData.utilities +
    formData.propertyManagement +
    formData.hoa +
    formData.other;

  const noi = effectiveMonthlyIncome - totalMonthlyExpenses;
  const cashFlow = noi - formData.mortgagePayment;
  const annualCashFlow = cashFlow * 12;
  const expenseRatio = ((totalMonthlyExpenses / effectiveMonthlyIncome) * 100).toFixed(1);
  const dscr = (noi / formData.mortgagePayment).toFixed(2);

  const isPositiveCashFlow = cashFlow > 0;

  return (
    <div className="space-y-8">
      <Card className="p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Monthly Cash Flow Analysis</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <Label className="text-slate-900 font-semibold text-sm block mb-3">Income</Label>
            <div className="space-y-4">
              <div>
                <Label htmlFor="monthlyRent" className="text-slate-700 text-sm mb-1 block">
                  Monthly Rent
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-600">$</span>
                  <Input
                    id="monthlyRent"
                    name="monthlyRent"
                    type="number"
                    value={formData.monthlyRent}
                    onChange={handleChange}
                    className="pl-7"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="otherIncome" className="text-slate-700 text-sm mb-1 block">
                  Other Monthly Income
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-600">$</span>
                  <Input
                    id="otherIncome"
                    name="otherIncome"
                    type="number"
                    value={formData.otherIncome}
                    onChange={handleChange}
                    className="pl-7"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="vacancyRate" className="text-slate-700 text-sm mb-1 block">
                  Vacancy Rate (%)
                </Label>
                <div className="relative">
                  <Input
                    id="vacancyRate"
                    name="vacancyRate"
                    type="number"
                    value={formData.vacancyRate}
                    onChange={handleChange}
                    step="0.1"
                  />
                  <span className="absolute right-3 top-2.5 text-slate-600">%</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Label className="text-slate-900 font-semibold text-sm block mb-3">Operating Expenses</Label>
            <div className="space-y-4">
              <div>
                <Label htmlFor="propertyTax" className="text-slate-700 text-sm mb-1 block">
                  Property Tax
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-600">$</span>
                  <Input
                    id="propertyTax"
                    name="propertyTax"
                    type="number"
                    value={formData.propertyTax}
                    onChange={handleChange}
                    className="pl-7"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="insurance" className="text-slate-700 text-sm mb-1 block">
                  Insurance
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-600">$</span>
                  <Input
                    id="insurance"
                    name="insurance"
                    type="number"
                    value={formData.insurance}
                    onChange={handleChange}
                    className="pl-7"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="maintenance" className="text-slate-700 text-sm mb-1 block">
                  Maintenance & Repairs
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-600">$</span>
                  <Input
                    id="maintenance"
                    name="maintenance"
                    type="number"
                    value={formData.maintenance}
                    onChange={handleChange}
                    className="pl-7"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="utilities" className="text-slate-700 text-sm mb-1 block">
                  Utilities
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-600">$</span>
                  <Input
                    id="utilities"
                    name="utilities"
                    type="number"
                    value={formData.utilities}
                    onChange={handleChange}
                    className="pl-7"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="propertyManagement" className="text-slate-700 text-sm mb-1 block">
                  Property Management
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-600">$</span>
                  <Input
                    id="propertyManagement"
                    name="propertyManagement"
                    type="number"
                    value={formData.propertyManagement}
                    onChange={handleChange}
                    className="pl-7"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="hoa" className="text-slate-700 text-sm mb-1 block">
                  HOA / Condo Fees
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-600">$</span>
                  <Input
                    id="hoa"
                    name="hoa"
                    type="number"
                    value={formData.hoa}
                    onChange={handleChange}
                    className="pl-7"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="other" className="text-slate-700 text-sm mb-1 block">
                  Other Expenses
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-600">$</span>
                  <Input
                    id="other"
                    name="other"
                    type="number"
                    value={formData.other}
                    onChange={handleChange}
                    className="pl-7"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <Label className="text-slate-900 font-semibold text-sm block mb-3">Debt Service</Label>
            <div className="space-y-4">
              <div>
                <Label htmlFor="mortgagePayment" className="text-slate-700 text-sm mb-1 block">
                  Monthly Mortgage Payment
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-600">$</span>
                  <Input
                    id="mortgagePayment"
                    name="mortgagePayment"
                    type="number"
                    value={formData.mortgagePayment}
                    onChange={handleChange}
                    className="pl-7"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-8 bg-gradient-to-r from-blue-50 to-slate-50">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Cash Flow Results</h2>

        {isPositiveCashFlow ? (
          <Alert className="mb-6 border-green-300 bg-green-50">
            <AlertDescription className="text-green-800">
              <strong>Positive Cash Flow!</strong> This property generates positive monthly cash flow of ${cashFlow.toFixed(2)}.
            </AlertDescription>
          </Alert>
        ) : (
          <Alert className="mb-6 border-red-300 bg-red-50">
            <AlertDescription className="text-red-800">
              <strong>Negative Cash Flow:</strong> This property has a negative monthly cash flow of ${Math.abs(cashFlow).toFixed(2)}. You'll need to cover this shortfall.
            </AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 border-2 border-blue-300">
            <p className="text-sm text-slate-600 mb-2">Gross Monthly Income</p>
            <p className="text-3xl font-bold text-blue-600">
              ${grossMonthlyIncome.toLocaleString("en-US", { maximumFractionDigits: 0 })}
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 border-2 border-orange-300">
            <p className="text-sm text-slate-600 mb-2">Vacancy Loss</p>
            <p className="text-3xl font-bold text-orange-600">
              -${vacancyLoss.toLocaleString("en-US", { maximumFractionDigits: 0 })}
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 border-2 border-green-300">
            <p className="text-sm text-slate-600 mb-2">Effective Monthly Income</p>
            <p className="text-3xl font-bold text-green-600">
              ${effectiveMonthlyIncome.toLocaleString("en-US", { maximumFractionDigits: 0 })}
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 border-2 border-slate-300">
            <p className="text-sm text-slate-600 mb-2">Total Operating Expenses</p>
            <p className="text-3xl font-bold text-slate-600">
              -${totalMonthlyExpenses.toLocaleString("en-US", { maximumFractionDigits: 0 })}
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 border-2 border-purple-300">
            <p className="text-sm text-slate-600 mb-2">Net Operating Income (NOI)</p>
            <p className="text-3xl font-bold text-purple-600">
              ${noi.toLocaleString("en-US", { maximumFractionDigits: 0 })}
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 border-2 border-red-300">
            <p className="text-sm text-slate-600 mb-2">Monthly Mortgage Payment</p>
            <p className="text-3xl font-bold text-red-600">
              -${formData.mortgagePayment.toLocaleString("en-US", { maximumFractionDigits: 0 })}
            </p>
          </div>

          <div className={`bg-white rounded-lg p-6 border-2 ${isPositiveCashFlow ? "border-green-500" : "border-red-500"}`}>
            <p className="text-sm text-slate-600 mb-2">Monthly Cash Flow</p>
            <p className={`text-4xl font-bold ${isPositiveCashFlow ? "text-green-600" : "text-red-600"}`}>
              ${cashFlow.toLocaleString("en-US", { maximumFractionDigits: 2 })}
            </p>
          </div>

          <div className={`bg-white rounded-lg p-6 border-2 ${isPositiveCashFlow ? "border-green-500" : "border-red-500"}`}>
            <p className="text-sm text-slate-600 mb-2">Annual Cash Flow</p>
            <p className={`text-4xl font-bold ${isPositiveCashFlow ? "text-green-600" : "text-red-600"}`}>
              ${annualCashFlow.toLocaleString("en-US", { maximumFractionDigits: 0 })}
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 border-2 border-cyan-300">
            <p className="text-sm text-slate-600 mb-2">Expense Ratio</p>
            <p className="text-3xl font-bold text-cyan-600">{expenseRatio}%</p>
            <p className="text-xs text-slate-500 mt-2">Operating expenses as % of income</p>
          </div>

          <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
            <p className="text-sm text-slate-600 mb-2">Debt Service Coverage Ratio (DSCR)</p>
            <p className="text-3xl font-bold text-indigo-600">{dscr}</p>
            <p className="text-xs text-slate-500 mt-2">Lenders typically require DSCR &gt; 1.25</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
