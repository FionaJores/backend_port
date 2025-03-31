const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

// Your existing readData function
const readData = () => {
  const dataPath = path.join(__dirname, '../data/db.json');
  const rawData = fs.readFileSync(dataPath);
  return JSON.parse(rawData);
};


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'fionajores10@gmail.com', 
    pass: 'adbc mdtb rigi qbch'         
  }
});

// POST endpoint for sending feedback
router.post('/send-feedback', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: 'fionajores10@gmail.com',
    to: 'fionajores10@gmail.com', 
    subject: `New Feedback from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ success: false, error: 'Failed to send feedback' });
    }
    res.json({ success: true, message: 'Feedback sent successfully' });
  });
});

// Your existing GET routes (unchanged)
router.get('/profile', (req, res) => {
  const data = readData();
  res.json(data.profile);
});

router.get('/internships', (req, res) => {
  const data = readData();
  res.json(data.internships);
});

router.get('/education', (req, res) => {
  const data = readData(); 
  res.json(data.education);
});

router.get('/skills', (req, res) => {
  const data = readData();
  res.json(data.skills);
});

router.get('/achievements', (req, res) => {
  const data = readData();
  res.json(data.achievements);
});

router.get('/projects', (req, res) => {
  const data = readData();
  res.json(data.projects);
});

router.get('/certifications', (req, res) => {
  const data = readData();
  res.json(data.certifications);
});

router.get('/openSourceContributions', (req, res) => {
  const data = readData();
  res.json(data.openSourceContributions);
});

router.get('/teamwork', (req, res) => {
  const data = readData();
  res.json(data.teamwork);
});

module.exports = router;