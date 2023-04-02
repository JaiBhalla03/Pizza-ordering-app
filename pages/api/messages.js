import dbConnect from '../../util/mongo';
import Message from '../../models/Message';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            await dbConnect();
            const { name, email, message } = req.body;
            const newMessage = new Message({ name, email, message });
            const savedMessage = await newMessage.save();
            res.status(201).json(savedMessage);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
