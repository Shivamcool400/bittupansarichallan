import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import img from './logo.jpeg';

function PdfGenerator() {
  const [phone,setPhone] = useState('');
  const [party, setParty] = useState('');
  const [nags, setNags] = useState('');
  const [time, setTime] = useState('');
  const [desc, setDesc] = useState('');
  const [dispatcher, setDispatcher] = useState('');
  var today = new Date();
var month = today.getMonth() + 1;
var date = today.getDate();
var year = today.getFullYear();
var exact_date = `${date}:${month}:${year}`

  const generatePdf = () => {
    const doc = new jsPDF();
    doc.addImage(img,'jpeg',35,20,40,40)
    doc.setFontSize(35);
    doc.text("Bittu Pansari", 82, 35);
    doc.setFontSize(30);
    doc.text("Akhnoor", 90, 45);
    doc.setFontSize(10);
    doc.text('"Jai Baba Braham Dev"', 90, 50);
    doc.setFontSize(13);
    doc.text('"Phone: 9906170445"', 88, 55);
    doc.setFontSize(20);
    doc.text("Delivery Challan", 84, 65);
    doc.setFontSize(15);
    doc.text("Consigner(Details of Reciever):", 40, 80);
    doc.text(party, 115, 80);
    doc.text("Phone Number:", 40, 90);
    doc.text(phone, 115, 90);
    doc.text("Total number of Nags:", 40, 100);
    doc.text(nags, 115, 100);
    doc.text("Description of Goods:", 40, 110);
    doc.text(desc, 115, 110);
    doc.text("Time:", 40, 140);
    doc.text(time, 115, 140);
    doc.text("Dispatched By:", 40, 150);
    doc.text(dispatcher, 115, 150);
    doc.setFontSize(13);
    doc.text('Approved by Satyam Gupta', 105, 170);
    doc.setFontSize(13);
    doc.text('© Developed by DayaRam and Sons. Version 1.0 @2023', 45, 180);
    doc.save(`challan_${exact_date}_${party}.pdf`);


  };

  return (
    <div>

<h3 className='text-center'>
    <b>Bittu Pansari</b>
  
  <br/>
  <small class="text-muted">Akhnoor</small>
  <br/>
  <h3 class="text-muted">E-Challan Generator</h3>
  
</h3>

      <div class="container text-center">
  <div class="row">
    <div class="col-sm-12 col-md-4">
    <label htmlFor="id " className='mt-4'>Consigner(Details of Reciever):</label>
    <input type="text" id="id" className='mt-4 border-success' name="id" value={party} onChange={(event) => setParty(event.target.value)} />
    </div>
    <br/>
    <div class="col-sm-12 col-md-4">
      
    <label htmlFor="item" className='mt-4'>Phone Number:</label>
    <input type="text" id="item" className='mt-4 border-success' name="item" value={phone} onChange={(event) => setPhone(event.target.value)} />
    </div>
    <br/>
    <div class="col-sm-12 col-md-4">
      
    <label htmlFor="item" className='mt-4'>Total number of Nags:</label>
    <input type="text" id="item" className='mt-4 border-success' name="item" value={nags} onChange={(event) => setNags(event.target.value)} />
    </div>
    <br/>
    <div class="col-sm-12 col-md-4">
    <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Description of Goods:</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={desc} onChange={(event) => setDesc(event.target.value)}></textarea>
</div>
    </div>
    <br/>
    <div class="col-sm-12 col-md-4">
    <label htmlFor="quantity" className='mt-4'>Time:</label>
    <input type="text" id="quantity" name="quantity" className='mt-4 border-success' value={time} onChange={(event) => setTime(event.target.value)} />
    </div>
    <br/>
    <div class="col-sm-12 col-md-4">
    <label htmlFor="quantity" className='mt-4'>Dispatched by:</label>
    <input type="text" id="quantity" name="quantity" className='mt-4 border-success' value={dispatcher} onChange={(event) => setDispatcher(event.target.value)} />
    </div>
    <br/>
  </div>
  </div>
      <br/>
      <br/>
  <div class="container text-center">
  <div class="row">
    <div class="col">
    </div>
    <div class="col">
    <button class="btn btn-secondary btn-lg" onClick={generatePdf}> Generate e-challan</button>
    </div>
    <div class="col">
    </div>
  </div>
</div>
      
      <br/>
      <br/>
      <footer className='footer'>
    <div className="copyright text-center">&copy; Developed by DayaRam and Sons. Version 1.0 @2023</div>
      </footer> 
    </div>
  );
}

export default PdfGenerator;
