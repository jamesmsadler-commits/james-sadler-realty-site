import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, TrendingUp, Home, Zap, Calculator, Plus, Trash2 } from "lucide-react";

interface IncomeItem {
  id: string;
  name: string;
  amount: number;
}

interface ExpenseItem {
  id: string;
  name: string;
  amount: number;
}

interface ProFormaInputs {
  purchasePrice: number;
  downPaymentPercent: number;
  interestRate: number;
  loanTermYears: number;
  vacancyRate: number;
  incomeItems: IncomeItem[];
  expenseItems: ExpenseItem[];
  annualAppreciation: number;
}

interface ProFormaResults {
  monthlyMortgage: number;
  monthlyOperatingExpenses: number;
  monthlyGrossIncome: number;
  monthlyNetIncome: number;
  annualGrossIncome: number;
  annualOperatingExpenses: number;
  annualNetIncome: number;
  capRate: number;
  cashOnCashReturn: number;
  roi: number;
  debtServiceCoverageRatio: number;
  loanAmount: number;
  downPaymentAmount: number;
  principalBalance: number;
}

function calculateProForma(inputs: ProFormaInputs): ProFormaResults {
  const { purchasePrice, downPaymentPercent, interestRate, loanTermYears, vacancyRate } = inputs;
  
  const downPaymentAmount = purchasePrice * (downPaymentPercent / 100);
  const loanAmount = purchasePrice - downPaymentAmount;
  
  // Calculate monthly mortgage using amortization formula
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;
  const monthlyMortgage = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1) || 0;
  
  // Calculate income
  const totalIncomeBeforeVacancy = inputs.incomeItems.reduce((sum, item) => sum + item.amount, 0);
  const vacancyLoss = totalIncomeBeforeVacancy * (vacancyRate / 100);
  const monthlyGrossIncome = totalIncomeBeforeVacancy - vacancyLoss;
  
  // Calculate operating expenses
  const monthlyOperatingExpenses = inputs.expenseItems.reduce((sum, item) => sum + item.amount, 0);
  
  // Net income calculation
  const monthlyNetIncome = monthlyGrossIncome - monthlyOperatingExpenses - monthlyMortgage;
  
  // Annual figures
  const annualGrossIncome = monthlyGrossIncome * 12;
  const annualOperatingExpenses = monthlyOperatingExpenses * 12;
  const annualNetIncome = monthlyNetIncome * 12;
  
  // Key metrics
  const capRate = (annualNetIncome / purchasePrice) * 100;
  const cashOnCashReturn = (annualNetIncome / downPaymentAmount) * 100;
  const roi = ((monthlyNetIncome * 360) / downPaymentAmount) * 100; // 30-year ROI
  const debtServiceCoverageRatio = annualGrossIncome / (monthlyMortgage * 12);
  const principalBalance = loanAmount;
  
  return {
    monthlyMortgage,
    monthlyOperatingExpenses,
    monthlyGrossIncome,
    monthlyNetIncome,
    annualGrossIncome,
    annualOperatingExpenses,
    annualNetIncome,
    capRate,
    cashOnCashReturn,
    roi,
    debtServiceCoverageRatio,
    loanAmount,
    downPaymentAmount,
    principalBalance,
  };
}

const defaultIncomeItems: IncomeItem[] = [
  { id: "1", name: "Monthly Rent", amount: 3500 },
];

const defaultExpenseItems: ExpenseItem[] = [
  { id: "1", name: "Property Tax", amount: 400 },
  { id: "2", name: "Insurance", amount: 150 },
  { id: "3", name: "Maintenance", amount: 200 },
  { id: "4", name: "Utilities", amount: 0 },
  { id: "5", name: "HOA Fee", amount: 0 },
  { id: "6", name: "Other Expenses", amount: 100 },
];

const defaultInputs: ProFormaInputs = {
  purchasePrice: 500000,
  downPaymentPercent: 20,
  interestRate: 7,
  loanTermYears: 30,
  vacancyRate: 5,
  incomeItems: defaultIncomeItems,
  expenseItems: defaultExpenseItems,
  annualAppreciation: 3,
};

export default function ProFormaCalculator() {
  const [inputs, setInputs] = useState<ProFormaInputs>(defaultInputs);
  const [incomeIdCounter, setIncomeIdCounter] = useState(2);
  const [expenseIdCounter, setExpenseIdCounter] = useState(7);
  
  const results = useMemo(() => calculateProForma(inputs), [inputs]);

  const handleInputChange = (field: keyof Omit<ProFormaInputs, 'incomeItems' | 'expenseItems'>, value: string) => {
    setInputs((prev) => ({
      ...prev,
      [field]: parseFloat(value) || 0,
    }));
  };

  const handleIncomeChange = (id: string, field: "name" | "amount", value: string) => {
    setInputs((prev) => ({
      ...prev,
      incomeItems: prev.incomeItems.map((item) =>
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

  const addIncomeItem = () => {
    const newId = incomeIdCounter.toString();
    setInputs((prev) => ({
      ...prev,
      incomeItems: [...prev.incomeItems, { id: newId, name: "New Income", amount: 0 }],
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

  const removeIncomeItem = (id: string) => {
    setInputs((prev) => ({
      ...prev,
      incomeItems: prev.incomeItems.filter((item) => item.id !== id),
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
              <CardDescription>Enter your property information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs defaultValue="purchase" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="purchase">Purchase</TabsTrigger>
                  <TabsTrigger value="financing">Financing</TabsTrigger>
                </TabsList>
                
                <TabsContent value="purchase" className="space-y-4 mt-4">
                  <div>
                    <Label htmlFor="purchasePrice" className="text-sm font-medium">Purchase Price</Label>
                    <Input
                      id="purchasePrice"
                      type="number"
                      value={inputs.purchasePrice}
                      onChange={(e) => handleInputChange("purchasePrice", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="downPayment" className="text-sm font-medium">Down Payment %</Label>
                    <Input
                      id="downPayment"
                      type="number"
                      step="1"
                      value={inputs.downPaymentPercent}
                      onChange={(e) => handleInputChange("downPaymentPercent", e.target.value)}
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
                      onChange={(e) => handleInputChange("vacancyRate", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </TabsContent>
                
                <TabsContent value="financing" className="space-y-4 mt-4">
                  <div>
                    <Label htmlFor="interestRate" className="text-sm font-medium">Interest Rate %</Label>
                    <Input
                      id="interestRate"
                      type="number"
                      step="0.1"
                      value={inputs.interestRate}
                      onChange={(e) => handleInputChange("interestRate", e.target.value)}
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
                      onChange={(e) => handleInputChange("loanTermYears", e.target.value)}
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

          {/* Income Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Monthly Income</CardTitle>
                  <CardDescription>Customize your income sources</CardDescription>
                </div>
                <Button
                  size="sm"
                  onClick={addIncomeItem}
                  className="bg-blue-600 hover:bg-blue-700 gap-1"
                >
                  <Plus className="w-4 h-4" /> Add Income
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {inputs.incomeItems.map((item) => (
                <div key={item.id} className="flex gap-3 items-end">
                  <div className="flex-1">
                    <Label className="text-xs text-gray-600 mb-1 block">Income Source</Label>
                    <Input
                      type="text"
                      placeholder="e.g., Monthly Rent"
                      value={item.name}
                      onChange={(e) => handleIncomeChange(item.id, "name", e.target.value)}
                      className="text-sm"
                    />
                  </div>
                  <div className="flex-1">
                    <Label className="text-xs text-gray-600 mb-1 block">Monthly Amount</Label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={item.amount}
                      onChange={(e) => handleIncomeChange(item.id, "amount", e.target.value)}
                      className="text-sm"
                    />
                  </div>
                  {inputs.incomeItems.length > 1 && (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeIncomeItem(item.id)}
                      className="text-red-600 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t">
                <div className="flex justify-between items-center font-semibold">
                  <span>Total Monthly Income (Before Vacancy)</span>
                  <span className="text-lg text-blue-600">
                    {formatCurrency(inputs.incomeItems.reduce((sum, item) => sum + item.amount, 0))}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm text-red-600 mt-2">
                  <span>Vacancy Loss ({inputs.vacancyRate}%)</span>
                  <span>
                    -{formatCurrency(
                      inputs.incomeItems.reduce((sum, item) => sum + item.amount, 0) * (inputs.vacancyRate / 100)
                    )}
                  </span>
                </div>
                <div className="flex justify-between items-center font-bold text-lg mt-2 text-green-600">
                  <span>Effective Gross Income</span>
                  <span>{formatCurrency(results.monthlyGrossIncome)}</span>
                </div>
              </div>
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
                  <span>{formatCurrency(results.monthlyOperatingExpenses)}</span>
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
                    <span className="text-sm text-gray-600">Monthly Mortgage</span>
                    <span className="font-semibold text-red-600">-{formatCurrency(results.monthlyMortgage)}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm text-gray-600">Monthly Op. Expenses</span>
                    <span className="font-semibold text-red-600">-{formatCurrency(results.monthlyOperatingExpenses)}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b font-bold">
                    <span className="text-sm">Total Monthly Costs</span>
                    <span className="text-red-600">-{formatCurrency(results.monthlyMortgage + results.monthlyOperatingExpenses)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cash Flow Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>Cash Flow Analysis</CardTitle>
              <CardDescription>Monthly and annual income projections</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <p className="text-sm text-blue-600 font-medium">Monthly Gross Income</p>
                    <p className="text-2xl font-bold text-blue-900 mt-1">{formatCurrency(results.monthlyGrossIncome)}</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                    <p className="text-sm text-red-600 font-medium">Monthly Net Income</p>
                    <p className={`text-2xl font-bold mt-1 ${results.monthlyNetIncome >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {results.monthlyNetIncome >= 0 ? "+" : "-"}{formatCurrency(Math.abs(results.monthlyNetIncome))}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                    <p className="text-sm text-green-600 font-medium">Annual Gross Income</p>
                    <p className="text-2xl font-bold text-green-900 mt-1">{formatCurrency(results.annualGrossIncome)}</p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                    <p className="text-sm text-emerald-600 font-medium">Annual Net Income</p>
                    <p className={`text-2xl font-bold mt-1 ${results.annualNetIncome >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                      {results.annualNetIncome >= 0 ? "+" : "-"}{formatCurrency(Math.abs(results.annualNetIncome))}
                    </p>
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
