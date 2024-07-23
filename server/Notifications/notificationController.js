const Notification = require('./notificationSchema'); 
const addNotification = (req, res) => {
  const notification = new Notification({
    target: req.body.target,
    psId: req.body.psId,
    date: new Date(),
    caseType: req.body.caseType,
    district: req.body.district
  });

  notification.save()
    .then(data => {
      res.json({
        status: 200,
        message: "Notification added successfully",
        data: data,
      });
    })
    .catch(err => {
      console.error(err);
      res.json({
        status: 500,
        err: err,
      });
    });
};

const viewAllNotifications = (req, res) => {
  Notification.find()
    .populate('psId')
    .exec()
    .then(notifications => {
      res.status(200).json({
        status: 200,
        message: "Notifications retrieved successfully",
        data: notifications,
      });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        status: 500,
        message: "Error retrieving notifications",
        error: err,
      });
    });
};

const deleteNotificationById = (req, res) => {
  Notification.findByIdAndDelete({ _id: req.params.id })
    .exec()
    .then(notification => {
      res.json({
        status: 200,
        message: "Notification deleted successfully",
        data: notification,
      });
    })
    .catch(err => {
      console.error(err);
      res.json({
        status: 500,
        message: "Error deleting notification",
        error: err,
      });
    });
};

const viewNotificationById = (req, res) => {
  Notification.findById({ _id: req.params.id })
    .exec()
    .then(notification => {
      res.json({
        status: 200,
        message: "Notification retrieved successfully",
        data: notification,
      });
    })
    .catch(err => {
      console.error(err);
      res.json({
        status: 500,
        message: "Error retrieving notification",
        error: err,
      });
    });
};

const viewNotificationByCitizenId = (req, res) => {
  Notification.find({ citizenId: req.params.id })
    .exec()
    .then(notifications => {
      res.json({
        status: 200,
        message: "Notifications obtained successfully",
        data: notifications,
      });
    })
    .catch(err => {
      console.error(err);
      res.json({
        status: 500,
        message: "Error retrieving notifications",
        error: err,
      });
    });
};

const viewNotificationByPliceId = (req, res) => {
    Notification.find({ psId: req.params.id })
      .exec()
      .then(notifications => {
        res.json({
          status: 200,
          message: "Notifications obtained successfully",
          data: notifications,
        });
      })
      .catch(err => {
        console.error(err);
        res.json({
          status: 500,
          message: "Error retrieving notifications",
          error: err,
        });
      });
  };
const viewNotificationsByFilter = (req, res) => {
  const { caseType, district, psId } = req.query;

  let filter = {};
  if (caseType) filter.caseType = caseType;
  if (district) filter.district = district;
  if (psId) filter.psId = psId;

  Notification.find(filter)
    .populate('citizenId psId')
    .exec()
    .then(notifications => {
      res.json({
        status: 200,
        message: "Notifications retrieved successfully",
        data: notifications,
      });
    })
    .catch(err => {
      console.error(err);
      res.json({
        status: 500,
        message: "Error retrieving notifications",
        error: err,
      });
    });
};

module.exports = {
  addNotification,
  viewAllNotifications,
  viewNotificationById,
  deleteNotificationById,
  viewNotificationByCitizenId,
  viewNotificationsByFilter,
  viewNotificationByPliceId
};
