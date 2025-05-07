const Contact=require('../models/message');
exports.postmessage = async (req, res, next) => {
    try {
      const { name, email, subject, message } = req.body;
      console.log("Received:", req.body);

      // Basic validation
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: "All fields are required" });
      }
  
      const messagex = new Contact({ name, email, subject, message });
      await messagex.save();
      
      res.status(201).json({ 
        success: true,
        message: "Message Sent Successfully",
        data: messagex 
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ 
        error: "Server Error",
        details: err.message 
      });
    }
  };