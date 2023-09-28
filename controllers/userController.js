

import axios from "axios";
import nodemailer from "nodemailer";


import { Vonage } from "@vonage/server-sdk";

// setup vonage api  
const vonage = new Vonage({
  apiKey: "385e8f56",
  apiSecret: "88dMOfkpQn8erMgX"
});


async function sendSMS(to, from, text) {
    await vonage.sms.send({to, from, text})
        .then(resp => { console.log('Message sent successfully'); console.log(resp); })
        .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
}



/***
 * 
 * get all user 
 */
export const getAllUser = (req , res )=> {
  res.send("hello js");
}

export const createUser = (req , res )=> {
  res.status(200).json(req.body);
}

export const registeruser = async (req , res )=> {


 // create transport 
 const transport = nodemailer.createTransport({

  // CREATE mail transport

   host : "smtp.gmail.com",
   port :587,
   auth : {
    user: process.env.MAIL_ADDRESS,
    pass: process.env.MAIL_PASS,
   },
});


await transport.sendMail({

  from : `WebGenius Bd <${process.env.MAIL_ADDRESS}>`,
  subject : "Webgeniusbd Online Center",
  to : req.body.email,
  text : `Hello, ${req.body.name} , You are ${req.body.age} years old & you are ${req.body.skill} developer.`,
 });

await sendSMS("Vonage APIs", "8801755302053", `hello, ${req.body.name}`);

//  await axios.get(`http://bulksmsbd.net/api/smsapi?api_key=DbjOeIXJzCF2f8FYPIzw&type=text&number=${req.body.cell}&senderid=8809617612989&message= Hello,${req.body.name}, you are ${req.body.age} years old & you are ${req.body.skill} developer`); 
 
  res.status(200).json(req.body);
};










