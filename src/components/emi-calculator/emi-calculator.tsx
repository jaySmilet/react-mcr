import React from "react";

const EmiCalculator = () => {
  const [inputData, setInputData] = React.useState({
    principal: "",
    rate: "",
    year: "",
  });
  const [emi, setEmi] = React.useState(0);

  React.useEffect(() => {
    calculateEMI();
  }, [inputData.principal, inputData.rate, inputData.year]);

  // P(r(1+r)^n/((1+r)^n)-1)
  const calculateEMI = () => {
    let p = Number(inputData.principal);
    let r = Number(inputData.rate);
    let y = Number(inputData.year);
    if (p && r && y) {
      r = r / 12 / 100;
      const calPow = Math.pow(1 + r, y * 12);
      const amount = p * ((r * calPow) / (calPow - 1));
      setEmi(Math.round(amount));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key =
      (e.target as HTMLInputElement).name || (e.target as HTMLInputElement).id;
    const value = Number(e.target.value);
    console.log(key, value);
    setInputData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  return (
    <div className="w-[400px] flex flex-col justify-center items-center gap-8 my-7 border-1 py-6 mx-auto rounded">
      <h3 className="text-lg font-semibold">EMI Calcultor</h3>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="principal">Principal Amount</label>
          <input
            type="text"
            className="w-[200px] border-1 rounded"
            id="principal"
            name="principal"
            onChange={handleChange}
            value={inputData.principal}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="rate">Rate of Interest</label>
          <input
            type="text"
            className="w-[200px] border-1 rounded"
            id="rate"
            onChange={(e) => handleChange(e)}
            value={inputData.rate}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="year">Year</label>
          <input
            type="text"
            className="w-[200px] border-1 rounded"
            id="year"
            onChange={(e) => handleChange(e)}
            value={inputData.year}
          />
        </div>
        <div className="flex gap-2">
          The estimated EMI is<b>₹ {emi}</b>
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator;
