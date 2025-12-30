import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, TrendingUp, Home, Zap, Calculator, Plus, Trash2 } from "lucide-react";

interface RentalUnit {
  id: string;
  type: string; // e.g., "1 Bedroom", "2 Bedroom", "Garage Space"
  quantity: number;
  monthlyRentPerUnit: number;
}

interface OtherIncomeItem {
  id: string;
  name: string;
  amount: number;
}

interface ExpenseItem {
  id: string;
  name: string;
  amount: number;
}

interface CommercialProFormaInputs {
  propertyName: string;
  purchasePrice: number;
  downPaymentPercent: number;
  interestRate: number;
  loanTermYears: number;
  vacancyRate: number;
  rentalUnits: RentalUnit[];
  otherIncomeItems: OtherIncomeItem[];
  expenseItems: ExpenseItem[];
  annualAppreciation: number;
}

interface CommercialProFormaResults {
  rentalIncomeBeforeVacancy: number;
  totalOtherIncome: number;
  totalIncomeBeforeVacancy: number;
  vacancyLoss: number;
  totalMonthlyIncome: number;
  totalMonthlyExpenses: number;
  monthlyMortgage: number;
  monthlyNetOperatingIncome: number;
  annualGrossIncome: number;
  annualOperatingExpenses: number;
  annualNetOperatingIncome: number;
  capRate: number;
  cashOnCashReturn: number;
  roi: number;
  debtServiceCoverageRatio: number;
  loanAmount: number;
  downPaymentAmount: number;
  totalUnits: number;
}

function calculateCommercialProForma(inputs: CommercialProFormaInputs): CommercialProFormaResults {
  const { purchasePrice, downPaymentPercent, interestRate, loanTermYears, vacancyRate } = inputs;
  
  const downPaymentAmount = purchasePrice * (downPaymentPercent / 100);
  const loanAmount = purchasePrice - downPaymentAmount;
  
  // Calculate monthly mortgage
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;
  const monthlyMortgage = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1) || 0;
  
  // Calculate rental income
  const rentalIncomeBeforeVacancy = inputs.rentalUnits.reduce(
    (sum, unit) => sum + (unit.quantity * unit.monthlyRentPerUnit),
    0
  );
  
  // Calculate other income
  const totalOtherIncome = inputs.otherIncomeItems.reduce((sum, item) => sum + item.amount, 0);
  
  // Total income with vacancy
  const totalIncomeBeforeVacancy = rentalIncomeBeforeVacancy + totalOtherIncome;
  const vacancyLoss = rentalIncomeBeforeVacancy * (vacancyRate / 100);
  const totalMonthlyIncome = totalIncomeBeforeVacancy - vacancyLoss;
  
  // Calculate expenses
  const totalMonthlyExpenses = inputs.expenseItems.reduce((sum, item) => sum + item.amount, 0);
  
  // Calculate NOI
  const monthlyNetOperatingIncome = totalMonthlyIncome - totalMonthlyExpenses;
  
  // Annual figures
  const annualGrossIncome = totalMonthlyIncome * 12;
  const annualOperatingExpenses = totalMonthlyExpenses * 12;
  const annualNetOperatingIncome = monthlyNetOperatingIncome * 12;
  
  // Total units
  const totalUnits = inputs.rentalUnits.reduce((sum, unit) => sum + unit.quantity, 0);
  
  // Key metrics
  const capRate = (annualNetOperatingIncome / purchasePrice) * 100;
  const cashOnCashReturn = (annualNetOperatingIncome / downPaymentAmount) * 100;
  const roi = ((monthlyNetOperatingIncome * 360) / downPaymentAmount) * 100;
  const debtServiceCoverageRatio = annualGrossIncome / (monthlyMortgage * 12);
  
  return {
    rentalIncomeBeforeVacancy,
    totalOtherIncome,
    totalIncomeBeforeVacancy,
    vacancyLoss,
    totalMonthlyIncome,
    totalMonthlyExpenses,
    monthlyMortgage,
    monthlyNetOperatingIncome,
    annualGrossIncome,
    annualOperatingExpenses,
    annualNetOperatingIncome,
    capRate,
    cashOnCashReturn,
    roi,
    debtServiceCoverageRatio,
    loanAmount,
    downPaymentAmount,
    totalUnits,
  };
}

const defaultRentalUnits: RentalUnit[] = [
  { id: "1", type: "1 Bedroom", quantity: 10, monthlyRentPerUnit: 2500 },
  { id: "2", type: "2 Bedroom", quantity: 10, monthlyRentPerUnit: 3500 },
];

const defaultOtherIncomeItems: OtherIncomeItem[] = [
  { id: "1", name: "Parking Fees", amount: 2000 },
];

const defaultExpenseItems: ExpenseItem[] = [
  { id: "1", name: "Property Management", amount: 5000 },
  { id: "2", name: "Property Tax", amount: 4000 },
  { id: "3", name: "Insurance", amount: 2000 },
  { id: "4", name: "Maintenance & Repairs", amount: 3000 },
  { id: "5", name: "Utilities", amount: 1500 },
  { id: "6", name: "HOA/Common Area", amount: 1000 },
  { id: "7", name: "Advertising & Leasing", amount: 500 },
];

const defaultInputs: CommercialProFormaInputs = {
  propertyName: "Commercial Property",
  purchasePrice: 5000000,
  downPaymentPercent: 25,
  interestRate: 7,
  loanTermYears: 30,
  vacancyRate: 5,
  rentalUnits: defaultRentalUnits,
  otherIncomeItems: defaultOtherIncomeItems,
  expenseItems: defaultExpenseItems,
  annualAppreciation: 3,
};

export default function CommercialProFormaCalculator() {
  const [inputs, setInputs] = useState<CommercialProFormaInputs>(defaultInputs);
  const [unitIdCounter, setUnitIdCounter] = useState(3);
  const [incomeIdCounter, setIncomeIdCounter] = useState(2);
  const [expenseIdCounter, setExpenseIdCounter] = useState(8);
  
  const results = useMemo(() => calculateCommercialProForma(inputs), [inputs]);

  const handleBasicInputChange = (field: string, value: string | number) => {
    setInputs((prev) => ({
      ...prev,
      [field]: field === "downPaymentPercent" ? parseInt(value as string) : parseFloat(value as string) || 0,
    }));
  };

  const handleRentalUnitChange = (id: string, field: "type" | "quantity" | "monthlyRentPerUnit", value: string) => {
    setInputs((prev) => ({
      ...prev,
      rentalUnits: prev.rentalUnits.map((unit) =>
        unit.id === id 
          ? { ...unit, [field]: field === "type" ? value : parseInt(value) || 0 } 
          : unit
      ),
    }));
  };

  const handleOtherIncomeChange = (id: string, field: "name" | "amount", value: string) => {
    setInputs((prev) => ({
      ...prev,
      otherIncomeItems: prev.otherIncomeItems.map((item) =>
        item.id === id ? { ...item, [field]: field === "amount" ? parseFloat(value) || 0 : value } : item
      ),
    }));
  };

  const handleExpenseChange = (id: string, field: "name" | "amount", value: string) => {
    setInputs((prev) => ({
      ...prev,
      expenseItems: prev.expenseItems.map((item) =>
        item.id === id ? { ...item, [field]: field === "amount" ? parseFloat(value) || 0 : value } : item
      ),
    }));
  };

  const addRentalUnit = () => {
    const newId = unitIdCounter.toString();
    setInputs((prev) => ({
      ...prev,
      rentalUnits: [...prev.rentalUnits, { id: newId, type: "New Unit Type", quantity: 1, monthlyRentPerUnit: 0 }],
    }));
    setUnitIdCounter(unitIdCounter + 1);
  };

  const addOtherIncomeItem = () => {
    const newId = incomeIdCounter.toString();
    setInputs((prev) => ({
      ...prev,
      otherIncomeItems: [...prev.otherIncomeItems, { id: newId, name: "New Income", amount: 0 }],
    }));
    setIncomeIdCounter(incomeIdCounter + 1);
  };

  const addExpenseItem = () => {
    const newId = expenseIdCounter.toString();
    setInputs((prev) => ({
      ...prev,
      expenseItems: [...prev.expenseItems, { id: newId, name: "New Expense", amount: 0 }],
    }));
    setExpenseIdCounter(expenseIdCounter + 1);
  };

  const removeRentalUnit = (id: string) => {
    setInputs((prev) => ({
      ...prev,
      rentalUnits: prev.rentalUnits.filter((unit) => unit.id !== id),
    }));
  };

  const removeOtherIncomeItem = (id: string) => {
    setInputs((prev) => ({
      ...prev,
      otherIncomeItems: prev.otherIncomeItems.filter((item) => item.id !== id),
    }));
  };

  const removeExpenseItem = (id: string) => {
    setInputs((prev) => ({
      ...prev,
      expenseItems: prev.expenseItems.filter((item) => item.id !== id),
    }));
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatPercent = (value: number) => {
    return value.toFixed(2) + "%";
  };

  const formatRatio = (value: number) => {
    return value.toFixed(2);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Input Section */}
        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Property Details
              </CardTitle>
              <CardDescription>Enter your commercial property information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs defaultValue="basics" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="basics">Basics</TabsTrigger>
                  <TabsTrigger value="financing">Financing</TabsTrigger>
                </TabsList>

                <TabsContent value="basics" className="space-y-4 mt-4">
                  <div>
                    <Label htmlFor="propertyName" className="text-sm font-medium">Property Name</Label>
                    <Input
                      id="propertyName"
                      type="text"
                      value={inputs.propertyName}
                      onChange={(e) => handleBasicInputChange("propertyName", e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="purchasePrice" className="text-sm font-medium">Purchase Price</Label>
                    <Input
                      id="purchasePrice"
                      type="number"
                      value={inputs.purchasePrice}
                      onChange={(e) => handleBasicInputChange("purchasePrice", e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="vacancyRate" className="text-sm font-medium">Vacancy Rate %</Label>
                    <Input
                      id="vacancyRate"
                      type="number"
                      step="0.1"
                      value={inputs.vacancyRate}
                      onChange={(e) => handleBasicInputChange("vacancyRate", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="financing" className="space-y-4 mt-4">
                  <div>
                    <Label htmlFor="downPayment" className="text-sm font-medium">Down Payment %</Label>
                    <Input
                      id="downPayment"
                      type="number"
                      step="1"
                      value={inputs.downPaymentPercent}
                      onChange={(e) => handleBasicInputChange("downPaymentPercent", e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="interestRate" className="text-sm font-medium">Interest Rate %</Label>
                    <Input
                      id="interestRate"
                      type="number"
                      step="0.1"
                      value={inputs.interestRate}
                      onChange={(e) => handleBasicInputChange("interestRate", e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="loanTerm" className="text-sm font-medium">Loan Term (Years)</Label>
                    <Input
                      id="loanTerm"
                      type="number"
                      step="1"
                      value={inputs.loanTermYears}
                      onChange={(e) => handleBasicInputChange("loanTermYears", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Results Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-600 font-medium">Cap Rate</p>
                    <p className="text-3xl font-bold text-blue-900 mt-1">{formatPercent(results.capRate)}</p>
                  </div>
                  <TrendingUp className="w-10 h-10 text-blue-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-green-600 font-medium">Cash-on-Cash Return</p>
                    <p className="text-3xl font-bold text-green-900 mt-1">{formatPercent(results.cashOnCashReturn)}</p>
                  </div>
                  <DollarSign className="w-10 h-10 text-green-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-purple-600 font-medium">DSCR</p>
                    <p className="text-3xl font-bold text-purple-900 mt-1">{formatRatio(results.debtServiceCoverageRatio)}</p>
                  </div>
                  <Zap className="w-10 h-10 text-purple-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-amber-600 font-medium">30-Year ROI</p>
                    <p className="text-3xl font-bold text-amber-900 mt-1">{formatPercent(results.roi)}</p>
                  </div>
                  <Home className="w-10 h-10 text-amber-400" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Rental Units Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Rental Units</CardTitle>
                  <CardDescription>Configure your unit types and pricing</CardDescription>
                </div>
                <Button
                  size="sm"
                  onClick={addRentalUnit}
                  className="bg-blue-600 hover:bg-blue-700 gap-1"
                >
                  <Plus className="w-4 h-4" /> Add Unit Type
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {inputs.rentalUnits.map((unit) => (
                <div key={unit.id} className="grid grid-cols-3 gap-3 items-end p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div>
                    <Label className="text-xs text-gray-600 mb-1 block">Unit Type</Label>
                    <Input
                      type="text"
                      placeholder="e.g., 1 Bedroom"
                      value={unit.type}
                      onChange={(e) => handleRentalUnitChange(unit.id, "type", e.target.value)}
                      className="text-sm"
                    />
                  </div>
                  <div>
                    <Label className="text-xs text-gray-600 mb-1 block">Qty</Label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={unit.quantity}
                      onChange={(e) => handleRentalUnitChange(unit.id, "quantity", e.target.value)}
                      className="text-sm"
                    />
                  </div>
                  <div>
                    <Label className="text-xs text-gray-600 mb-1 block">Rent/Unit</Label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={unit.monthlyRentPerUnit}
                      onChange={(e) => handleRentalUnitChange(unit.id, "monthlyRentPerUnit", e.target.value)}
                      className="text-sm"
                    />
                  </div>
                  <div className="col-span-3 text-sm font-semibold text-slate-700">
                    {unit.type}: {unit.quantity} units × {formatCurrency(unit.monthlyRentPerUnit)} = {formatCurrency(unit.quantity * unit.monthlyRentPerUnit)}/month
                  </div>
                  {inputs.rentalUnits.length > 1 && (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeRentalUnit(unit.id)}
                      className="text-red-600 hover:bg-red-50 col-span-3"
                    >
                      <Trash2 className="w-4 h-4 mr-1" /> Remove Unit Type
                    </Button>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t">
                <div className="flex justify-between items-center font-semibold mb-2">
                  <span>Total Units</span>
                  <span className="text-lg text-blue-600">{results.totalUnits}</span>
                </div>
                <div className="flex justify-between items-center font-bold text-lg text-blue-900">
                  <span>Total Rental Income (Before Vacancy)</span>
                  <span>{formatCurrency(results.rentalIncomeBeforeVacancy)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Other Income Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Other Monthly Income</CardTitle>
                  <CardDescription>Additional income sources (not subject to vacancy loss)</CardDescription>
                </div>
                <Button
                  size="sm"
                  onClick={addOtherIncomeItem}
                  className="bg-blue-600 hover:bg-blue-700 gap-1"
                >
                  <Plus className="w-4 h-4" /> Add Income
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {inputs.otherIncomeItems.map((item) => (
                <div key={item.id} className="flex gap-3 items-end">
                  <div className="flex-1">
                    <Label className="text-xs text-gray-600 mb-1 block">Income Source</Label>
                    <Input
                      type="text"
                      placeholder="e.g., Parking Fees"
                      value={item.name}
                      onChange={(e) => handleOtherIncomeChange(item.id, "name", e.target.value)}
                      className="text-sm"
                    />
                  </div>
                  <div className="flex-1">
                    <Label className="text-xs text-gray-600 mb-1 block">Monthly Amount</Label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={item.amount}
                      onChange={(e) => handleOtherIncomeChange(item.id, "amount", e.target.value)}
                      className="text-sm"
                    />
                  </div>
                  {inputs.otherIncomeItems.length > 0 && (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeOtherIncomeItem(item.id)}
                      className="text-red-600 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
              {inputs.otherIncomeItems.length > 0 && (
                <div className="pt-3 border-t">
                  <div className="flex justify-between items-center font-bold text-lg text-green-600">
                    <span>Total Other Monthly Income</span>
                    <span>{formatCurrency(results.totalOtherIncome)}</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Expenses Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Monthly Operating Expenses</CardTitle>
                  <CardDescription>Customize your expense categories</CardDescription>
                </div>
                <Button
                  size="sm"
                  onClick={addExpenseItem}
                  className="bg-blue-600 hover:bg-blue-700 gap-1"
                >
                  <Plus className="w-4 h-4" /> Add Expense
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {inputs.expenseItems.map((item) => (
                <div key={item.id} className="flex gap-3 items-end">
                  <div className="flex-1">
                    <Label className="text-xs text-gray-600 mb-1 block">Expense Category</Label>
                    <Input
                      type="text"
                      placeholder="e.g., Property Tax"
                      value={item.name}
                      onChange={(e) => handleExpenseChange(item.id, "name", e.target.value)}
                      className="text-sm"
                    />
                  </div>
                  <div className="flex-1">
                    <Label className="text-xs text-gray-600 mb-1 block">Monthly Amount</Label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={item.amount}
                      onChange={(e) => handleExpenseChange(item.id, "amount", e.target.value)}
                      className="text-sm"
                    />
                  </div>
                  {inputs.expenseItems.length > 1 && (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeExpenseItem(item.id)}
                      className="text-red-600 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t">
                <div className="flex justify-between items-center font-bold text-lg text-red-600">
                  <span>Total Monthly Operating Expenses</span>
                  <span>{formatCurrency(results.totalMonthlyExpenses)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* NOI Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Net Operating Income (NOI)</CardTitle>
              <CardDescription>Monthly and annual NOI analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <p className="text-sm text-blue-600 font-medium">Monthly NOI</p>
                    <p className={`text-2xl font-bold mt-1 ${results.monthlyNetOperatingIncome >= 0 ? 'text-blue-900' : 'text-red-600'}`}>
                      {results.monthlyNetOperatingIncome >= 0 ? "+" : "-"}{formatCurrency(Math.abs(results.monthlyNetOperatingIncome))}
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                    <p className="text-sm text-green-600 font-medium">Annual NOI</p>
                    <p className={`text-2xl font-bold mt-1 ${results.annualNetOperatingIncome >= 0 ? 'text-green-900' : 'text-red-600'}`}>
                      {results.annualNetOperatingIncome >= 0 ? "+" : "-"}{formatCurrency(Math.abs(results.annualNetOperatingIncome))}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <p className="text-sm text-slate-600 font-medium">Monthly Mortgage Payment</p>
                    <p className="text-2xl font-bold mt-1 text-slate-900">
                      -{formatCurrency(results.monthlyMortgage)}
                    </p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <p className="text-sm text-slate-600 font-medium">Monthly Income (After Vacancy)</p>
                    <p className="text-2xl font-bold mt-1 text-slate-900">
                      {formatCurrency(results.totalMonthlyIncome)}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
                  <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                    <p className="text-sm text-indigo-600 font-medium">Annual Gross Income</p>
                    <p className="text-2xl font-bold mt-1 text-indigo-900">
                      {formatCurrency(results.annualGrossIncome)}
                    </p>
                  </div>
                  <div className="bg-rose-50 p-4 rounded-lg border border-rose-100">
                    <p className="text-sm text-rose-600 font-medium">Annual Operating Expenses</p>
                    <p className="text-2xl font-bold mt-1 text-rose-900">
                      {formatCurrency(results.annualOperatingExpenses)}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Income Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>Income Breakdown</CardTitle>
              <CardDescription>Detailed income and vacancy analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-sm text-gray-600">Rental Income (Before Vacancy)</span>
                  <span className="font-semibold">{formatCurrency(results.rentalIncomeBeforeVacancy)}</span>
                </div>
                {results.totalOtherIncome > 0 && (
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm text-gray-600">Other Income</span>
                    <span className="font-semibold">{formatCurrency(results.totalOtherIncome)}</span>
                  </div>
                )}
                <div className="flex justify-between items-center pb-2 border-b font-semibold">
                  <span className="text-sm">Total Income (Before Vacancy)</span>
                  <span>{formatCurrency(results.totalIncomeBeforeVacancy)}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b text-red-600">
                  <span className="text-sm">Vacancy Loss ({inputs.vacancyRate}%)</span>
                  <span>-{formatCurrency(results.vacancyLoss)}</span>
                </div>
                <div className="flex justify-between items-center font-bold text-lg text-green-600">
                  <span>Effective Gross Income</span>
                  <span>{formatCurrency(results.totalMonthlyIncome)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Investment Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Investment Summary</CardTitle>
              <CardDescription>Financial breakdown of your investment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm text-gray-600">Purchase Price</span>
                    <span className="font-semibold">{formatCurrency(inputs.purchasePrice)}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm text-gray-600">Down Payment</span>
                    <span className="font-semibold">{formatCurrency(results.downPaymentAmount)}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm text-gray-600">Loan Amount</span>
                    <span className="font-semibold">{formatCurrency(results.loanAmount)}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm text-gray-600">Price Per Unit</span>
                    <span className="font-semibold">{formatCurrency(inputs.purchasePrice / results.totalUnits)}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm text-gray-600">Annual NOI Per Unit</span>
                    <span className="font-semibold">{formatCurrency(results.annualNetOperatingIncome / results.totalUnits)}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm text-gray-600">Total Units</span>
                    <span className="font-semibold">{results.totalUnits}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
