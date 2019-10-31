import User from '../models/User';
import Notification from '../schemas/Notification';

class NotificationController {
    async update(req, res) {
        const notification = await Notification.findByIdAndUpdate(
            req.params.id,
            { read: true },
            { new: true }
        );

        return res.status(200).json(notification);
    }

    async index(req, res) {
        const checkIsProvider = await User.findOne({
            where: { id: req.userId, provider: true },
        });

        if (!checkIsProvider) {
            return res.status(400).json({
                error: 'Only  can load notifications',
            });
        }

        const notifications = await Notification.find({
            user: req.userId,
        })
            .sort({ createdAt: 'desc' })
            .limit(20);

        return res.json(notifications);
    }
}

export default new NotificationController();
