const PreOrder = require('../models/PreOrder');

// exports.createPreOrder = async (req, res) => {
//   try {
//     const { name, email, phone, color } = req.body;
//     if (!name || !email) return res.status(400).json({ message: 'Name and email required' });

//     const newOrder = new PreOrder({ name, email, phone, color });
//     const saved = await newOrder.save();

//     // TODO: send confirmation email here (optional)
//     res.status(201).json({ success: true, data: saved });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

exports.createPreOrder = async (req, res) => {
  try {
    const { name, email, phone, color } = req.body;
    
    if (!name || !email) 
      return res.status(400).json({ message: 'Name and email required' });
    
    // Check if email or phone already exists
    const existingOrder = await PreOrder.findOne({
      $or: [{ email }, { phone }]
    });
    
    if (existingOrder) {
      return res.status(409).json({ 
        message: 'A pre-order with this email or phone number already exists.' 
      });
    }

    const newOrder = new PreOrder({ name, email, phone, color });
    const saved = await newOrder.save();

    // TODO: send confirmation email here (optional)
    res.status(201).json({ success: true, data: saved });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getPreOrders = async (req, res) => {
  try {
    const orders = await PreOrder.find().sort({ createdAt: -1 });
    res.json({ success: true, data: orders });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
