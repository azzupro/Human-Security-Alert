const Router = require("express");
const router = Router();
const { sendemergencyCntrl,getAllEmergencies,getSinglEmergency,emergencyUpdate } = require("../controllers/emergencyCntrl");

router.route("/emergencyPressed").post(sendemergencyCntrl);
router.route('/').get(getAllEmergencies)
router.route('/:id').get(getSinglEmergency).patch(emergencyUpdate)
module.exports = router;
