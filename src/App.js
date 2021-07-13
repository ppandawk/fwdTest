import { useState } from 'react'
import ProductList from './components/ProductList';

function App() {
  const [productList, setProductList] = useState([])

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [gender, setGender] = useState('Male');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [dob, setDob] = useState('');
  const [planCode, setPlanCode] = useState('T11A20');
  const [premiumPerYear, setPremiumPerYear] = useState(Number);
  const [paymentFrequency, setPaymentFrequency] = useState('YEARLY');
  const [saPerYear, setSaPerYear] = useState(Number);

  const [validDob, setValidDob] = useState(false);
  const [validPlan, setValidPlan] = useState(false);
  const [validSa, setValidSa] = useState(false);

  // Fetch Product
  const searchProduct = async (val) => {
    const res = await fetch('https://api.fwd.co.th/dev-ecommerce/getProduct', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(val),
    })

    const data = await res.json()

    if(data.status === 500) return;

    setProductList(data.quotationProductList)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    
    if(!day && !month && !year) {
      setValidDob(true);
    }
    else{
      setValidDob(false);
    }

    if(!premiumPerYear){
      setValidPlan(true);
    }
    else{
      setValidPlan(false);
    }

    if(!saPerYear){
      setValidSa(true);
      return;
    }
    else{
      setValidSa(false);
    }

    searchProduct({gender,dob,planCode,premiumPerYear,paymentFrequency,saPerYear});
  }

  const setDobDate = (e) => {
    setDay(e)
    setDob(year + '-' + month + '-' + e);
  }
  const setDobMonth = (e) => {
    setMonth(e)
    setDob(year + '-' + e + '-' + day);
  }
  const setDobYear = (e) => {
    setYear(e)
    setDob(e + '-' + month + '-' + day);
  }

  return (
    <div className="container">
      <div className="box txt-center">
        <span className="header">
          <span className="txt-original">FWD</span> Insurance Test
        </span>
        <div className="subtitle">
          It is a long established fact that a reader will be distracted by <br/>
          the readable content of a page when looking at its layout.
        </div>
      </div>
      <div className="box box-left">
        <form className='add-form' onSubmit={onSubmit}>
          <div className='form-control' onChange={(e) => setGender(e.target.value)}>
            <div className="fc-title">Gender</div>
            <label className="ipt-radio">
              <input type="radio" value="MALE" name="gender" defaultChecked/>
              <span>Male</span> 
            </label>
            <label className="ipt-radio">
              <input type="radio" value="FEMALE" name="gender"/>
              <span>Female</span> 
            </label>
          </div>
          <div className="form-control">
            <div className="fc-title">Date of Birth</div>
            <select className="day dd-list" value={day} 
              onChange={(e) => setDobDate(e.target.value)}>
              <option value="">Date</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option>
            </select>

            <select className="month dd-list" value={month} 
              onChange={(e) => setDobMonth(e.target.value)}>
              <option value="">Month</option><option value="1">Jan</option><option value="2">Feb</option><option value="3">Mar</option><option value="4">Apr</option><option value="5">May</option><option value="6">Jun</option><option value="7">Jul</option><option value="8">Aug</option><option value="9">Sep</option><option value="10">Oct</option><option value="11">Nov</option><option value="12">Dec</option>
            </select>

            <select className="year dd-list" value={year} 
              onChange={(e) => setDobYear(e.target.value)}>
              <option value="">Year</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option><option value="1989">1989</option><option value="1988">1988</option><option value="1987">1987</option><option value="1986">1986</option><option value="1985">1985</option><option value="1984">1984</option><option value="1983">1983</option><option value="1982">1982</option><option value="1981">1981</option><option value="1980">1980</option><option value="1979">1979</option><option value="1978">1978</option><option value="1977">1977</option><option value="1976">1976</option><option value="1975">1975</option><option value="1974">1974</option><option value="1973">1973</option><option value="1972">1972</option><option value="1971">1971</option><option value="1970">1970</option>
            </select>
            {validDob && <div className="txt-err">Please select date of birth</div>}
          </div>
          <div className="form-control">
            <div className="fc-title">Package</div>
            <select className="dd-list w-226" value={planCode} 
                    onChange={(e) => setPlanCode(e.target.value)}>
              <option value="T11A20">Package 1 (benefit 200k)</option>
              <option value="T11A50">Package 2 (benefit 500k)</option>
              <option value="T11AM1">ackage 3 (benefit 1M)</option>
            </select>
          </div>
          <div className="form-control">
            <div className="fc-title">Premium</div>
            <input
              type='text'
              pattern="[0-9]*"
              value={premiumPerYear}
              className="ip-txt w-226 txt-right"
              placeholder='Add premiumPerYear'
              onChange={(e) => setPremiumPerYear(e.target.value)}
            />
            {validPlan && <div className="txt-err">Please type premium</div>}
          </div>
          <div className="form-control">
            <div className="fc-title">Installment</div>
            <select value={paymentFrequency}  className="dd-list w-226"
                    onChange={(e) => setPaymentFrequency(e.target.value)}>
              <option value="YEARLY">Yearly</option>
              <option value="HALFYEARLY">Half Yearly</option>
              <option value="QUARTERLY">Quarterly</option>
              <option value="MONTHLY">Monthly</option>
            </select>
          </div>
          <div className="form-control mb-32">
            <div className="fc-title">Insurance</div>
            <input
              type='text'
              pattern="[0-9]*"
              value={saPerYear}
              className="ip-txt w-226 txt-right"
              placeholder='Add premiumPerYear'
              onChange={(e) => setSaPerYear(e.target.value)}
            />
            {validSa && <div className="txt-err">Please type insurance</div>}
          </div>

          <input type='submit' value='Calculate' className='btn w-226' />
        </form>
      </div>
      <div className="box box-right">
        {productList.length > 0 ? (
          <ProductList productList={productList} />
        ) : (
          <div className="txt-in-box">
            Welcome to <span className="txt-original">FWD</span> <br/>
            Calculate Premium Insurance
          </div>
        )}
      </div>
      <div className="clearfix"></div>
    </div>
  );
}

export default App;
