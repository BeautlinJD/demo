import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useState, React } from "react";
import { Mycontext } from "./Mycontext";
import './App.css';
function Menu2(){
    const x1=[{
        "ProductImage":"https://rukminim2.flixcart.com/image/416/416/xif0q/wardrobe-closet/o/h/t/-original-imagqdf7zukk3khk.jpeg?q=70",
        "Name":"Wardrobe",
        "Description":"Nilkamal WILLY Engineered Wood 3 Door Wardrobe  (Finish Color - Wenge, Mirror Included, Knock Down)",
        "Rating":3.9,
        "Rate":"13,259",
        "Discount":"50% off"
        },{
          "ProductImage":"https://rukminim2.flixcart.com/image/416/416/xif0q/office-study-table/t/u/z/60-particle-board-engineered-wood-pi-ct-ph-ost-wb-11-flipkart-original-imagrt66kwadxyk5.jpeg?q=70",
          "Name":"Office Study table",
          "Description":"Flipkart Perfect Homes Studio Augustine Dual Tone Engineered Wood Study Table  (Free Standing, Finish Color - American Walnut and Black, Knock Down)",
          "Rating":4.5,
          "Rate":"3,699",
          "Discount":"58% off"
        },{
          "ProductImage":"https://rukminim2.flixcart.com/image/612/612/kwgpz0w0/side-table/4/t/w/35-40-mango-wood-12-kl-1790-bedside-table-the-attic-60-natural-original-imag94ptpq9bgwvw.jpeg?q=70",
          "Name":"Bedside Table",
          "Description":"THE ATTIC Solid Wood Bedside Table  (Finish Color - Natural + White, Pre-assembled)",
          "Rating":4.0,
          "Rate":"5,699",
          "Discount":"71% off"
          
        },{
          "ProductImage":"https://rukminim2.flixcart.com/image/416/416/kq8dua80/home-temple/v/o/y/beautiful-wooden-plywood-mandir-for-pooja-home-decoration-wall-original-imag4atnh2h2hr3r.jpeg?q=70",
          "Name":"Home Temple",
          "Description":"OneTech Engineered Wood Home Temple  (Height: 45, Pre-assembled)",
          "Rating":3.8,
          "Rate":"499",
          "Discount":"77% off"
          
        }]
    const x2=[{
          "ProductImage":"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/x/s/b/-original-imagtwb7gghtjkqw.jpeg?q=70",
          "Name":"Headphone",
          "Description":"Boult Audio ProBass EQCharge with ZEN Mode ENC, 32hrs Playtime, Ultra-Fast Charging Bluetooth Headset  (Red, In the Ear)",
          "Rating":4,
          "Rate":"799",
          "Discount":"82% off"
        },{
          "ProductImage":"https://rukminim2.flixcart.com/image/416/416/jfsknm80/smart-assistant/y/v/e/home-mini-ghmini-charcoal-google-original-imaf46ejynztyzrk.jpeg?q=70",
          "Name":"Smart Speaker",
          "Description":"Google Home Mini with Google Assistant Smart Speaker  (Charcoal)",
          "Rating":4.4,
          "Rate":"3,395",
          "Discount":"32% off"
        },{
          "ProductImage":"https://rukminim2.flixcart.com/image/416/416/k6fd47k0pkrrdj/printer/r/g/r/canon-pixma-mg3070s-original-imafbu3ypdzxq3wb.jpeg?q=70",
          "Name":"Printer",
          "Description":"Canon MG2570S Multi-function Color Inkjet Printer  (Black, Ink Cartridge)",
          "Rating":3.6,
          "Rate":"3,299",
          "Discount":"9% off"
        },{
          "ProductImage":"https://rukminim2.flixcart.com/image/416/416/l1b1oy80/monitor/u/c/y/ls27bm501ewxxl-full-hd-27-ls27bm501ewxxl-samsung-original-imagcwkrj7vsgzqz.jpeg?q=70",
          "Name":"Smart Monitor",
          "Description":"SAMSUNG M5 27 inch Full HD VA Panel with embedded TV Apps, PC-less productivity with Samsung DeX, Office 365, Google Duo app, and IoT Hub, Built-in Speakers, Ultrawide Game View Smart Monitor (LS27CM501EWXXL)  (Response Time: 4 ms, 60 Hz Refresh Rate)",
          "Rating":4.3,
          "Rate":"17,499",
          "Discount":"47% off"
        },{
          "ProductImage":"https://rukminim2.flixcart.com/image/416/416/xif0q/power-bank/n/s/m/-original-imagupdbcvr5yk2r.jpeg?q=70",
          "Name":"Power Bank",
          "Description":"Intex 10000 mAh Power Bank (22 W, Fast Charging)  (Coal Black, Lithium Polymer)",
          "Rating":3.8,
          "Rate":"749",
          "Discount":"76% off"
        }]
    return(
        <div>
            <ul className='session2'>
                <li className='ssn'>
                    <img src="https://rukminim1.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100" width='70' height='70' className='logo'></img><br/>
                    <Link  to="/Sub1" className='linktext' state={{from1:x1}}><b className='logofont'>Furniture</b></Link>
                </li>
                <li className='ssn'>
                    <img src="https://rukminim1.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" width='70' height='70' className='logo'></img><br/>
                    <Link  to="/Sub2" className='linktext' state={{from2:x2}}><b className='logofont'>Electronics</b></Link>
                </li>
            </ul>
        </div>
    );
}
export default Menu2;